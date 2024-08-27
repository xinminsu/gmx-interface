import groupBy from "lodash/groupBy";
import { useMemo } from "react";

import { EMPTY_ARRAY, getByKey } from "lib/objects";

import type { MarketInfo, AllMarketsInfoData } from "../markets";
import { isGlv } from "../markets/glv";
import { type TokenData, type TokensData, convertToUsd } from "../tokens";

const DEFAULT_VALUE = {
  markets: EMPTY_ARRAY,
  marketsInfo: EMPTY_ARRAY,
};

export function sortMarketsWithIndexToken(
  marketsInfoData: AllMarketsInfoData | undefined,
  marketTokensData: TokensData | undefined
) {
  if (!marketsInfoData || !marketTokensData) {
    return DEFAULT_VALUE;
  }
  // Group markets by index token address
  const groupedMarketList: { [marketAddress: string]: MarketInfo[] } = groupBy(
    Object.values(marketsInfoData),
    (market) => market[market.isSpotOnly ? "marketTokenAddress" : "indexTokenAddress"]
  );

  const allMarkets = Object.values(groupedMarketList)
    .map((markets) => {
      return markets
        .filter((market) => {
          const marketInfoData = getByKey(marketsInfoData, market.marketTokenAddress)!;
          return !marketInfoData.isDisabled;
        })
        .map((market) => ({
          isGlv: isGlv(market),
          token: getByKey(marketTokensData, market.marketTokenAddress)!,
        }));
    })
    .filter((markets) => markets.length > 0);

  const sortedGroups = allMarkets!.sort((a, b) => {
    if (a[0].isGlv && !b[0].isGlv) {
      return -1;
    }

    if (!a[0].isGlv && b[0].isGlv) {
      return 1;
    }

    const totalMarketSupplyA = a.reduce((acc, { token: market }) => {
      const totalSupplyUsd = convertToUsd(market?.totalSupply, market?.decimals, market?.prices.minPrice);
      acc = acc + (totalSupplyUsd ?? 0n);
      return acc;
    }, 0n);

    const totalMarketSupplyB = b.reduce((acc, { token: market }) => {
      const totalSupplyUsd = convertToUsd(market?.totalSupply, market?.decimals, market?.prices.minPrice);
      acc = acc + (totalSupplyUsd ?? 0n);
      return acc;
    }, 0n);

    return totalMarketSupplyA > totalMarketSupplyB ? -1 : 1;
  });

  // Sort markets within each group by total supply
  const sortedMarkets = sortedGroups.map((markets) => {
    return markets
      .sort(({ token: a }, { token: b }) => {
        const totalSupplyUsdA = convertToUsd(a.totalSupply, a.decimals, a.prices.minPrice)!;
        const totalSupplyUsdB = convertToUsd(b.totalSupply, b.decimals, b.prices.minPrice)!;

        return totalSupplyUsdA > totalSupplyUsdB ? -1 : 1;
      })
      .map((e) => e.token);
  });

  // Flatten the sorted markets array
  const flattenedMarkets = sortedMarkets.flat(Infinity).filter(Boolean) as TokenData[];
  return {
    markets: flattenedMarkets,
    marketsInfo: flattenedMarkets.map((market) => getByKey(marketsInfoData, market.address)!),
  };
}

function useSortedPoolsWithIndexToken(marketsInfoData?: AllMarketsInfoData, marketTokensData?: TokensData) {
  const sortedMarketsWithIndexToken = useMemo(
    () => sortMarketsWithIndexToken(marketsInfoData, marketTokensData),
    [marketsInfoData, marketTokensData]
  );

  return sortedMarketsWithIndexToken;
}

export default useSortedPoolsWithIndexToken;
