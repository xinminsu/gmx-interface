import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "components/Common/SEO";

import Footer from "components/Footer/Footer";
import { getPageTitle } from "lib/legacy";

import "./Ecosystem.css";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { ARBITRUM, AVALANCHE } from "config/chains";
import { t } from "@lingui/macro";
import { getIcon } from "config/icons";
import PageTitle from "components/PageTitle/PageTitle";

const NETWORK_ICONS = {
  [ARBITRUM]: getIcon(ARBITRUM, "network"),
  [AVALANCHE]: getIcon(AVALANCHE, "network"),
};

const NETWORK_ICON_ALTS = {
  [ARBITRUM]: "Arbitrum Icon",
  [AVALANCHE]: "Avalanche Icon",
};

export default function Ecosystem() {
  const nscPages = [
    {
      title: "NSC Governance",
      link: "https://gov.nashtrade.org/",
      linkLabel: "gov.nashtrade.org",
      about: t`NSC Governance Page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Stats",
      link: "https://stats.nashtrade.org/",
      linkLabel: "stats.nashtrade.org",
      about: t`NSC Stats Page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Proposals",
      link: "https://snapshot.org/#/nsc.eth",
      linkLabel: "snapshot.org",
      about: t`NSCX Proposals Voting page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Announcements",
      link: "https://t.me/NSC_Announcements",
      linkLabel: "t.me",
      about: t`NSC Announcements and Updates`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const communityProjects = [
    {
      title: "NSC Blueberry Club",
      link: "https://www.blueberry.club/",
      linkLabel: "blueberry.club",
      about: t`NSC Blueberry NFTs`,
      creatorLabel: "@xm_gbc",
      creatorLink: "https://t.me/xm_gbc",
      chainIds: [ARBITRUM],
    },
    {
      title: "NSC Leaderboard",
      link: "https://www.nsc.house/",
      linkLabel: "nsc.house",
      about: t`Leaderboard for NSC traders`,
      creatorLabel: "@Itburnz",
      creatorLink: "https://t.me/Itburnz",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Positions Bot",
      link: "https://t.me/NSCPositions",
      linkLabel: "t.me",
      about: t`Telegram bot for NSC position updates`,
      creatorLabel: "@zhongfu",
      creatorLink: "https://t.me/zhongfu",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Blueberry Pulse",
      link: "https://blueberrypulse.substack.com/",
      linkLabel: "substack.com",
      about: t`NSC Weekly Updates`,
      creatorLabel: "@puroscohiba",
      creatorLink: "https://t.me/puroscohiba",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Yield Simulator",
      link: "https://nsc.defisims.com/",
      linkLabel: "defisims.com",
      about: t`Yield simulator for NSC`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Returns Calculator",
      link: "https://docs.google.com/spreadsheets/u/4/d/1mQZlztz_NpTg5qQiYIzc_Ls1OTLfMOUtmEQN-WW8jj4/copy",
      linkLabel: "docs.google.com",
      about: t`Returns calculator for NSC and NLP`,
      creatorLabel: "@AStoicTrader1",
      creatorLink: "https://twitter.com/AStoicTrader1",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Trading Stats",
      link: "https://t.me/NSCTradingStats",
      linkLabel: "t.me",
      about: t`Telegram bot for Open Interest on NSC`,
      creatorLabel: "@SniperMonke01",
      creatorLink: "https://twitter.com/SniperMonke01",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Staking Bot",
      link: "https://t.me/NSC_Staking_bot",
      linkLabel: "t.me",
      about: t`NSC staking rewards updates and insights`,
      creatorLabel: "@NSC_Staking_bot",
      creatorLink: "https://twitter.com/NSC_Staking_bot",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Staking Calculator",
      link: "https://NSCstaking.com",
      linkLabel: "NSCstaking.com",
      about: t`NSC staking calculator`,
      creatorLabel: "@n1njawtf",
      creatorLink: "https://t.me/n1njawtf",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Hedging Simulator",
      link: "https://www.NSChedge.com/",
      linkLabel: "NSChedge.com",
      about: t`Simulate your hedge strategy`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM],
    },
    {
      title: "NSC Swaps",
      link: "https://t.me/NSCSwaps",
      linkLabel: "t.me",
      about: t`Telegram bot for NSC Swaps monitoring`,
      creatorLabel: "@snipermonke01",
      creatorLink: "https://twitter.com/snipermonke01",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Position Calculator",
      link: "https://docs.google.com/spreadsheets/d/1OKCeRGU7l-xGx33-siBw_l8x7vP97y4KKKjA2x5LqhQ/edit#gid=0",
      linkLabel: "docs.google.com",
      about: t`Spreadsheet for position calculations`,
      creatorLabel: "@barryfried1",
      creatorLink: "https://twitter.com/barryfried1",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "SNTL esNSC Market",
      link: "https://sntl.market/",
      linkLabel: "sntl.market",
      about: t`esNSC OTC Market`,
      creatorLabel: "@sntlai",
      creatorLink: "https://twitter.com/sntlai",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Copin",
      link: "https://app.copin.io",
      linkLabel: "copin.io",
      about: t`Explore, analyze, and copy on-chain traders`,
      creatorLabel: ["@0xanol", "@tungle_eth"],
      creatorLink: ["https://twitter.com/0xanol", "https://twitter.com/tungle_eth"],
      chainIds: [ARBITRUM],
    },
  ];

  const dashboardProjects = [
    {
      title: "NSC Referrals Dashboard",
      link: "https://www.NSCreferrals.com/",
      linkLabel: "NSCreferrals.com",
      about: t`Dashboard for NSC referral stats`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Terminal",
      link: "https://nscterminal.com",
      linkLabel: "nscterminal.com",
      about: t`NSC explorer for stats and traders`,
      creatorLabel: "@vipineth",
      creatorLink: "https://t.me/vipineth",
      chainIds: [ARBITRUM],
    },
    {
      title: "NSC Analytics",
      link: "https://nscstats.info/",
      linkLabel: "nscstats.info",
      about: t`Financial reports and protocol analytics`,
      creatorLabel: "@sliux",
      creatorLink: "https://twitter.com/sliux",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TokenTerminal",
      link: "https://tokenterminal.com/terminal/projects/nsc",
      linkLabel: "tokenterminal.com",
      about: t`NSC fundamentals`,
      creatorLabel: "@tokenterminal",
      creatorLink: "https://twitter.com/tokenterminal",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "CryptoFees",
      link: "https://cryptofees.info",
      linkLabel: "cryptofees.info",
      about: t`Fees generated by NSC`,
      creatorLabel: "@CryptoFeesInfo",
      creatorLink: "https://twitter.com/CryptoFeesInfo",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Shogun Dashboard (Dune Arbitrum)",
      link: "https://dune.com/shogun/nsc-analytics-arbitrum",
      linkLabel: "dune.com",
      about: t`Protocol analytics`,
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [ARBITRUM],
    },
    {
      title: "Shogun Dashboard (Dune Avalanche)",
      link: "https://dune.com/shogun/nsc-analytics-avalanche",
      linkLabel: "dune.com",
      about: t`Protocol analytics`,
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [AVALANCHE],
    },
    {
      title: "NSC Perpetuals Data",
      link: "https://app.laevitas.ch/altsderivs/NSC/perpetualswaps",
      linkLabel: "laevitas.ch",
      about: t`NSC Perpetuals Data`,
      creatorLabel: "@laevitas1",
      creatorLink: "https://twitter.com/laevitas1",
      chainIds: [ARBITRUM],
    },
    {
      title: "NSC Blueberry Leaderboard",
      link: "https://www.blueberryboard.com",
      linkLabel: "blueberryboard.com",
      about: t`GBC NFTs APR tracker and rewards`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM],
    },
    {
      title: "NSC Open Trades Ranking and Stats",
      link: "https://dune.com/HanSolar/nsc-open-trade-ranking-and-stats",
      linkLabel: "dune.com",
      about: t`Open trades ranking and stats`,
      creatorLabel: "@hansolar21",
      creatorLink: "https://twitter.com/hansolar21",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Everything Dashboard",
      link: "https://dune.com/NSCtrader/nsc-dashboard-insights",
      linkLabel: "dune.com",
      about: t`Overall protocol analytics`,
      creatorLabel: "@nsctrader",
      creatorLink: "https://twitter.com/nsctrader",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Staking Rewards Calculator",
      link: "https://www.stakingrewards.com/earn/nsc/",
      linkLabel: "stakingrewards.com",
      about: t`NSC staking calculator and guide`,
      creatorLabel: "@stakingrewards",
      creatorLink: "https://twitter.com/stakingrewards",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "NSC Risk Monitoring",
      link: "https://community.chaoslabs.xyz/nsc-arbitrum/ccar-perps/overview",
      linkLabel: "chaoslabs.xyz",
      about: t`Protocol risk explorer and stats`,
      creatorLabel: "@chaos_labs",
      creatorLink: "https://twitter.com/chaos_labs",
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const integrations = [
    {
      title: "DeBank",
      link: "debank.com",
      linkLabe: "debank.com",
      about: t`DeFi Portfolio Tracker`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Defi Llama",
      link: "https://defillama.com",
      linkLabel: "defillama.com",
      about: t`Decentralized Finance Dashboard`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Dopex",
      link: "https://dopex.io",
      linkLabel: "dopex.io",
      about: t`Decentralized Options Protocol`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Jones DAO",
      link: "https://jonesdao.io",
      linkLabel: "jonesdao.io",
      about: t`Decentralized Options Strategies`,

      chainIds: [ARBITRUM],
    },
    {
      title: "Yield Yak Optimizer",
      link: "https://yieldyak.com/",
      linkLabel: "yieldyak.com",
      about: t`Yield Optimizer on Avalanche`,

      chainIds: [AVALANCHE],
    },
    {
      title: "Vovo Finance",
      link: "https://vovo.finance/",
      linkLabel: "vovo.finance",
      about: t`Structured Products`,

      chainIds: [ARBITRUM],
    },
    {
      title: "Stabilize Protocol",
      link: "https://www.stabilize.finance/",
      linkLabel: "stabilize.finance",
      about: t`Yield Vaults`,

      chainIds: [ARBITRUM],
    },
    {
      title: "DODO",
      link: "https://dodoex.io/",
      linkLabel: "dodoex.io",
      about: t`Decentralized Trading Protocol`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Open Ocean",
      link: "https://openocean.finance/",
      linkLabel: "openocean.finance",
      about: t`DEX Aggregator`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Paraswap",
      link: "https://www.paraswap.io/",
      linkLabel: "paraswap.io",
      about: t`DEX Aggregator`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "1inch",
      link: "https://1inch.io/",
      linkLabel: "1inch.io",
      about: t`DEX Aggregator`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Firebird Finance",
      link: "https://app.firebird.finance/swap",
      linkLabel: "firebird.finance",
      about: t`DEX Aggregator`,

      chainIds: [AVALANCHE],
    },
    {
      title: "Yield Yak Swap",
      link: "https://yieldyak.com/swap",
      linkLabel: "yieldyak.com",
      about: t`DEX Aggregator`,

      chainIds: [AVALANCHE],
    },
    {
      title: "Plutus",
      link: "https://plutusdao.io/vaults",
      linkLabel: "plutusdao.io",
      about: t`NLP autocompounding vaults`,

      chainIds: [ARBITRUM],
    },
    {
      title: "Beefy",
      link: "https://app.beefy.com/",
      linkLabel: "beefy.com",
      about: t`NLP and NSC autocompounding vaults`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Pendle Finance",
      link: "https://app.pendle.finance/pro/markets",
      linkLabel: "pendle.finance",
      about: t`Yield Trading`,

      chainIds: [ARBITRUM],
    },
    {
      title: "ODOS",
      link: "https://app.odos.xyz/",
      linkLabel: "odos.xyz",
      about: t`DEX Aggregator`,

      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Dolomite",
      link: "https://app.dolomite.io/balances",
      linkLabel: "dolomite.io",
      about: t`Decentralized Money Market`,

      chainIds: [ARBITRUM],
    },
    {
      title: "UniDex Leverage",
      link: "https://leverage.unidex.exchange/",
      linkLabel: "unidex.exchange",
      about: t`Leverage Trading Terminal`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Symbiosis",
      link: "https://app.symbiosis.finance/",
      linkLabel: "symbiosis.finance",
      about: t`DEX Aggregator`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "0x",
      link: "https://explorer.0xprotocol.org/liquiditySources",
      linkLabel: "0xprotocol.org",
      about: t`DEX Aggregator`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const telegramGroups = [
    {
      title: "NSC",
      link: "https://t.me/+nBiLgG9RZQkwMzg1",
      linkLabel: "t.me",
      about: t`Telegram Group`,
    },
    {
      title: "NSC (Chinese)",
      link: "https://t.me/nscch",
      linkLabel: "t.me",
      about: t`Telegram Group (Chinese)`,
    },
    {
      title: "NSC (Portuguese)",
      link: "https://t.me/NSC_Portuguese",
      linkLabel: "t.me",
      about: t`Telegram Group (Portuguese)`,
    },
    {
      title: "NSC Trading Chat",
      link: "https://t.me/gambittradingchat",
      linkLabel: "t.me",
      about: t`NSC community discussion`,
    },
  ];

  return (
    <SEO title={getPageTitle(t`Ecosystem Projects`)}>
      <div className="default-container page-layout">
        <div>
          <PageTitle
            showNetworkIcon={false}
            isTop
            title={t`NSC Pages`}
            subtitle={t`NSC ecosystem pages.`}
            qa="ecosystem-page"
          />
          <div className="Ecosystem-projects">
            {nscPages.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <PageTitle
            showNetworkIcon={false}
            title={t`Community Projects`}
            subtitle={
              <Trans>
                Projects developed by the NSC community. <br />
                Please exercise caution when interacting with any app, apps are fully maintained by community
                developers.
              </Trans>
            }
          />
          <div className="Ecosystem-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider" />
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        {Array.isArray(item.creatorLabel) ? (
                          <div className="gap-right-xs">
                            {item.creatorLabel.map((label, index) => (
                              <ExternalLink key={label} href={item.creatorLink[index]}>
                                {label}
                              </ExternalLink>
                            ))}
                          </div>
                        ) : (
                          <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <PageTitle showNetworkIcon={false} title={t`Dashboards`} subtitle={t`NSC dashboards and analytics.`} />
          <div className="Ecosystem-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <PageTitle
            showNetworkIcon={false}
            title={t`Partnerships and Integrations`}
            subtitle={t`Projects integrated with NSC.`}
          />
          <div className="Ecosystem-projects">
            {integrations.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div key={item.title} className="App-card">
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-16">
            <Trans>
              NSC uses TradingView to provide real-time cryptocurrency charts, so you can easily follow{" "}
              <ExternalLink href="https://www.tradingview.com/symbols/BTCUSD/">BTCUSD</ExternalLink> price in real-time,
              along with other currency pair rates. The interactive charts offer advanced tools and a user-friendly
              interface for easier market analysis and decision-making.
            </Trans>
          </div>
          <PageTitle showNetworkIcon={false} title={t`Telegram Groups`} subtitle={t`Community-led Telegram groups.`} />
          <div className="Ecosystem-projects">
            {telegramGroups.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">{item.title}</div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
