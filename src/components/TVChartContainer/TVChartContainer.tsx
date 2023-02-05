import { useCallback, useEffect, useRef, useState } from "react";
import { TV_SAVE_LOAD_CHARTS_KEY } from "config/localStorage";
import { useLocalStorage, useMedia } from "react-use";
import { defaultChartProps, disabledFeaturesOnMobile } from "./constants";
import useTVDatafeed from "domain/tradingview/useTVDatafeed";
import { ChartData, IChartingLibraryWidget, IPositionLineAdapter } from "../../charting_library";
import { getPeriodFromResolutions, supportedResolutions } from "domain/tradingview/utils";
import { SaveLoadAdapter } from "./SaveLoadAdapter";

type ChartLine = {
  price: number;
  title: string;
};

type Props = {
  symbol: string;
  chainId: number;
  savedShouldShowPositionLines: boolean;
  chartLines: ChartLine[];
  onSelectToken: () => void;
  period: string;
  setPeriod: (period: string) => void;
};

export default function TVChartContainer({
  symbol,
  chainId,
  savedShouldShowPositionLines,
  chartLines,
  onSelectToken,
  period,
  setPeriod,
}: Props) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const tvWidgetRef = useRef<IChartingLibraryWidget | null>(null);
  const [chartReady, setChartReady] = useState(false);
  const [tvCharts, setTvCharts] = useLocalStorage<ChartData[] | undefined>(TV_SAVE_LOAD_CHARTS_KEY, []);
  const datafeed = useTVDatafeed();
  const isMobile = useMedia("(max-width: 550px)");

  const drawLineOnChart = useCallback(
    (title: string, price: number) => {
      if (chartReady && tvWidgetRef.current?.activeChart?.().dataReady()) {
        return tvWidgetRef.current
          .activeChart()
          .createPositionLine({ disableUndo: true })
          .setText(title)
          .setPrice(price)
          .setQuantity("")
          .setLineStyle(1)
          .setLineLength(1)
          .setBodyFont(`normal 12pt "Relative", sans-serif`)
          .setBodyTextColor("#fff")
          .setLineColor("#3a3e5e")
          .setBodyBackgroundColor("#3a3e5e")
          .setBodyBorderColor("#3a3e5e");
      }
    },
    [chartReady]
  );

  useEffect(
    function updateLines() {
      const lines: (IPositionLineAdapter | undefined)[] = [];
      if (savedShouldShowPositionLines) {
        chartLines.forEach((order) => {
          lines.push(drawLineOnChart(order.title, order.price));
        });
      }
      return () => {
        lines.forEach((line) => line?.remove());
      };
    },
    [chartLines, savedShouldShowPositionLines, drawLineOnChart]
  );

  useEffect(() => {
    if (chartReady && tvWidgetRef.current && symbol !== tvWidgetRef.current?.activeChart?.().symbol()) {
      tvWidgetRef.current.setSymbol(symbol, tvWidgetRef.current.activeChart().resolution(), () => {});
    }
  }, [symbol, chartReady, period]);

  useEffect(() => {
    if (!chartReady || !tvWidgetRef.current || !isMobile) return;

    if (tvWidgetRef.current.activeChart().getCheckableActionState("drawingToolbarAction")) {
      tvWidgetRef.current?.activeChart().executeActionById("drawingToolbarAction");
    }
  }, [isMobile, chartReady]);

  useEffect(() => {
    const widgetOptions = {
      debug: false,
      symbol: symbol,
      datafeed: datafeed,
      theme: defaultChartProps.theme,
      container: chartContainerRef.current,
      library_path: defaultChartProps.library_path,
      locale: defaultChartProps.locale,
      loading_screen: defaultChartProps.loading_screen,
      enabled_features: defaultChartProps.enabled_features,
      disabled_features: isMobile
        ? defaultChartProps.disabled_features.concat(disabledFeaturesOnMobile)
        : defaultChartProps.disabled_features,
      client_id: defaultChartProps.clientId,
      user_id: defaultChartProps.userId,
      fullscreen: defaultChartProps.fullscreen,
      autosize: defaultChartProps.autosize,
      custom_css_url: defaultChartProps.custom_css_url,
      overrides: defaultChartProps.overrides,
      interval: getPeriodFromResolutions(period),
      save_load_adapter: new SaveLoadAdapter(chainId, tvCharts, setTvCharts, onSelectToken),
    };
    tvWidgetRef.current = new window.TradingView.widget(widgetOptions);

    tvWidgetRef.current?.onChartReady(function () {
      setChartReady(true);
      tvWidgetRef.current?.applyOverrides({
        "paneProperties.background": "#16182e",
        "paneProperties.backgroundType": "solid",
      });
      tvWidgetRef.current
        ?.activeChart()
        .onIntervalChanged()
        .subscribe(null, (interval) => {
          if (supportedResolutions[interval]) {
            const period = supportedResolutions[interval];
            setPeriod(period);
          }
        });
    });

    return () => {
      if (tvWidgetRef.current) {
        tvWidgetRef.current.remove();
        tvWidgetRef.current = null;
        setChartReady(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={chartContainerRef} className="TVChartContainer ExchangeChart-bottom-content" />;
}
