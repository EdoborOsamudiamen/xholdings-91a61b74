import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BXrfXN_b.mjs";
import { l as logo } from "./logo-qUqMBaFB.mjs";
import { S as ShieldCheck, e as ChevronDown, T as TrendingUp, f as ChartPie, W as Wallet, a0 as Layers, B as Building2, F as FileText, g as BookOpen, h as Shield, L as Lock, i as ArrowRight, X, M as Menu, j as ChevronRight, a1 as ChartColumn, y as SlidersVertical, a2 as Info, C as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const LOGIN = "/login";
const REGISTER = "/register";
const OPPORTUNITIES = [{
  id: "spacex",
  title: "SpaceX Pre-IPO Series N",
  category: "Pre-IPO Growth",
  assetClass: "Aerospace & Defense",
  targetReturn: "28.5% IRR",
  minAllocation: "$25,000",
  term: "2–4 Yrs to Liquidity",
  status: "84% Allocated",
  progress: 84,
  risk: "Moderate-High",
  description: "Direct equity allocation in the world's leading commercial launch provider and satellite constellation. Structured in a bankruptcy-remote Delaware SPV with clean title ownership.",
  badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30"
}, {
  id: "anthropic",
  title: "Anthropic AI Series D Secondary",
  category: "Pre-IPO Growth",
  assetClass: "Frontier AI Infrastructure",
  targetReturn: "34.0% IRR",
  minAllocation: "$10,000",
  term: "1–3 Yrs to Liquidity",
  status: "92% Allocated",
  progress: 92,
  risk: "Moderate-High",
  description: "Secured secondary shares in the premier frontier AI research organization developing Claude. Strategic entry pricing prior to anticipated institutional tender offer.",
  badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15"
}, {
  id: "credit-iv",
  title: "Senior Secured Real Estate Debt Fund IV",
  category: "Private Credit",
  assetClass: "1st Lien Commercial Debt",
  targetReturn: "12.4% APY",
  minAllocation: "$5,000",
  term: "12–36 Months",
  status: "Open for Subscription",
  progress: 45,
  risk: "Low-Moderate",
  description: "Income-focused yield allocation backed by first-priority mortgages on Class-A multi-family real estate. Monthly cash distributions with inflation-indexed interest rate floors.",
  badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30"
}, {
  id: "stripe",
  title: "Stripe Late-Stage Secondary Equity",
  category: "Secondary Equity",
  assetClass: "Fintech Infrastructure",
  targetReturn: "22.0% IRR",
  minAllocation: "$15,000",
  term: "1–2 Yrs to Liquidity",
  status: "76% Allocated",
  progress: 76,
  risk: "Moderate",
  description: "Acquisition of private common shares at an attractive discount to peak valuation. Capitalizing on global enterprise payment dominance and high recurring revenue.",
  badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15"
}, {
  id: "crypto-arb",
  title: "Market-Neutral Digital Asset Arbitrage",
  category: "Quantitative Yield",
  assetClass: "Delta-Neutral Arbitrage",
  targetReturn: "16.8% APY",
  minAllocation: "$10,000",
  term: "Quarterly Liquidity",
  status: "Open for Subscription",
  progress: 60,
  risk: "Moderate",
  description: "Algorithmic basis trading and institutional staking strategies across regulated exchanges. Insured custody via Fireblocks with zero directional spot market exposure.",
  badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30"
}, {
  id: "infra",
  title: "Global Clean Energy Infrastructure",
  category: "Private Credit",
  assetClass: "Real Assets & Grid Debt",
  targetReturn: "14.5% IRR",
  minAllocation: "$20,000",
  term: "5–7 Yrs",
  status: "65% Allocated",
  progress: 65,
  risk: "Low",
  description: "Senior debt financing for government-subsidized renewable power grids, LNG infrastructure, and data center cooling facilities across North America and Western Europe.",
  badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15"
}];
function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [initialCapital, setInitialCapital] = reactExports.useState(5e4);
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState(1e3);
  const [timeHorizon, setTimeHorizon] = reactExports.useState(5);
  const [selectedStrategy, setSelectedStrategy] = reactExports.useState("balanced");
  const strategyRates = {
    credit: {
      name: "Senior Secured Private Credit",
      rate: 0.124,
      label: "12.4% Fixed APY",
      desc: "First-lien real estate & corporate debt with monthly cash yield."
    },
    balanced: {
      name: "Institutional Multi-Strategy Basket",
      rate: 0.162,
      label: "16.2% Target IRR",
      desc: "Diversified allocation across private credit, secondary equity, and real assets."
    },
    venture: {
      name: "Pre-IPO Growth Equity Strategy",
      rate: 0.245,
      label: "24.5% Target IRR",
      desc: "Direct secondary block equity in tier-1 private technology leaders."
    }
  };
  const simulationResults = reactExports.useMemo(() => {
    const rate = strategyRates[selectedStrategy].rate;
    const spRate = 0.095;
    const months = timeHorizon * 12;
    const monthlyRate = rate / 12;
    const spMonthlyRate = spRate / 12;
    let strategyBalance = initialCapital;
    let spBalance = initialCapital;
    let totalInvested = initialCapital;
    for (let i = 0; i < months; i++) {
      strategyBalance = strategyBalance * (1 + monthlyRate) + monthlyContribution;
      spBalance = spBalance * (1 + spMonthlyRate) + monthlyContribution;
      totalInvested += monthlyContribution;
    }
    const netProfit = strategyBalance - totalInvested;
    const alphaOverSp = strategyBalance - spBalance;
    return {
      totalInvested: Math.round(totalInvested),
      strategyBalance: Math.round(strategyBalance),
      spBalance: Math.round(spBalance),
      netProfit: Math.round(netProfit),
      alphaOverSp: Math.round(alphaOverSp),
      multiplier: (strategyBalance / totalInvested).toFixed(2)
    };
  }, [initialCapital, monthlyContribution, timeHorizon, selectedStrategy]);
  const filteredOpportunities = selectedCategory === "All" ? OPPORTUNITIES : OPPORTUNITIES.filter((op) => op.category === selectedCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#050811] text-[#f1f5f9] font-['Inter'] selection:bg-[#c9a84c]/30 overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#080d1a] border-b border-white/10 text-[11px] font-mono tracking-wider py-2.5 overflow-hidden text-slate-400 relative z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-ticker flex items-center gap-10 whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "TSH PRIVATE CREDIT FUND IV: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "12.4% APR" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+0.15%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "PRE-IPO GROWTH INDEX: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "$148.20 NAV" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+4.82% YTD" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "GLOBAL INFRASTRUCTURE DEBT: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "14.5% TARGET IRR" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+1.12%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "QUANTITATIVE YIELD STRATEGY: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "16.8% APY" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+6.45%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-white", children: [
        "TOTAL AUM TRANSACTED: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#c9a84c] font-semibold", children: "$1.42 BILLION+" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-[#c9a84c]" }),
        " SEGREGATED INSTITUTIONAL SPV CUSTODY"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "TSH PRIVATE CREDIT FUND IV: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "12.4% APR" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+0.15%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        "PRE-IPO GROWTH INDEX: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "$148.20 NAV" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "+4.82% YTD" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 w-full z-40 border-b border-white/[0.08] bg-[#050811]/85 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between gap-3 lg:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3.5 cursor-pointer group shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded bg-gradient-to-br from-[#c9a84c]/20 via-[#c9a84c]/5 to-transparent border border-[#c9a84c]/40 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.25)] transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TheSpaceHoldings", className: "w-5 h-5 object-contain group-hover:scale-105 transition-transform duration-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base md:text-lg tracking-[0.16em] text-white font-['Cinzel'] uppercase group-hover:text-[#f0eedd] transition-colors", children: "TheSpaceHoldings" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 tracking-[0.2em] uppercase font-mono group-hover:text-slate-300 transition-colors", children: "Private Markets & Yield" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3 xl:gap-6 text-[12px] xl:text-[13px] font-medium text-slate-300 tracking-[0.08em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/dropdown py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 hover:text-white transition-all whitespace-nowrap py-1.5 px-3 rounded-md hover:bg-white/[0.04] group-hover/dropdown:text-[#c9a84c] group-hover/dropdown:bg-white/[0.04]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Offerings & Yield" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 w-[340px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Allocations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pre-IPO Deal Deck" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono", children: "LIVE" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Direct equity allocation in tier-1 private leaders." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#simulator", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Yield Calculator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Interactive wealth projections & APY compounding." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Private Credit Fund IV" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-[#c9a84c]/20 text-[#c9a84c] font-mono", children: "12.4% APY" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Senior secured corporate debt & asset-backed yields." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Secondary Block Equity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Discounted acquisitions in late-stage tech liquidity." })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/dropdown py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 hover:text-white transition-all whitespace-nowrap py-1.5 px-3 rounded-md hover:bg-white/[0.04] group-hover/dropdown:text-[#c9a84c] group-hover/dropdown:bg-white/[0.04]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Platform & Resources" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 w-[360px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20 max-h-[75vh] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Governance & Custody" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#governance", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Custody & Governance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Bankruptcy-remote SPVs & clean legal title." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#governance", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Delaware SPV Structure" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Direct ownership mechanics & segregated entities." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Research & Intelligence" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/publications", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Market Publications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Macroeconomic reports & IPO watchlists." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/pre-ipo-advantage", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "The Pre-IPO Advantage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Why institutional allocators enter prior to public listing." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Firm Information" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#about", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Firm Overview & Leadership" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Institutional asset management & executive team." })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3 xl:gap-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: LOGIN, className: "text-[11px] xl:text-[12px] font-semibold text-slate-300 hover:text-[#c9a84c] transition-all uppercase tracking-[0.12em] px-3.5 py-2.5 rounded-md border border-transparent hover:border-white/10 hover:bg-white/[0.03] flex items-center gap-1.5 whitespace-nowrap shrink-0 group/login", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-[#c9a84c] group-hover/login:scale-110 transition-transform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Client Sign In" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "relative group/btn overflow-hidden rounded-md bg-gradient-to-r from-[#c9a84c] via-[#d4b459] to-[#e8c96a] hover:from-[#d4b459] hover:to-[#f0d680] text-[#050811] px-5 xl:px-6 h-10 text-[11px] xl:text-[12px] font-bold transition-all duration-300 tracking-[0.14em] uppercase shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 font-bold", children: "Request Allocation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5 focus:outline-none transition-colors border border-white/10", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), "aria-label": "Toggle Navigation", children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-[#c9a84c]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) })
      ] }),
      isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-[#080d1a]/98 backdrop-blur-2xl border-b border-white/10 p-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 duration-300 max-h-[85vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
            " Investments & Yield"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pre-IPO Deal Deck" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono", children: "LIVE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#simulator", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Yield Calculator" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Private Credit Fund IV" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-[#c9a84c] font-mono", children: "12.4% APY" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
            " Platform & Custody"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#governance", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Custody & Governance" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#governance", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delaware SPV Structure" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
            " Research & Insights"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/publications", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Market Publications" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/pre-ipo-advantage", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Pre-IPO Advantage" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#about", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Firm Overview" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: LOGIN, onClick: () => setIsMobileMenuOpen(false), className: "w-full text-center text-xs font-semibold text-white bg-white/5 border border-white/10 py-3.5 uppercase tracking-widest rounded flex justify-center items-center gap-2 hover:bg-white/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-[#c9a84c]" }),
            " Client Portal Login"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, onClick: () => setIsMobileMenuOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#050811] py-4 text-xs font-bold tracking-widest uppercase rounded shadow-lg", children: "Request Institutional Access" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden border-b border-white/10 bg-grid-pattern", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1] font-['Cinzel'] text-white", children: [
        "Architecting Private ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: "Market & Yield" }),
        " Allocation."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-normal max-w-3xl", children: "We provide family offices, accredited allocators, and sovereign institutions with direct execution into Pre-IPO growth equity and senior secured private credit under Delaware LLC SPV frameworks." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full sm:w-auto bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] rounded-sm px-8 py-6 h-auto text-[13px] font-bold transition-all tracking-[0.15em] uppercase shadow-lg flex items-center justify-center gap-3", children: [
          "Request Offering Deck ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", className: "w-full sm:w-auto text-center sm:text-left bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/15 rounded-sm px-8 py-5 text-[13px] font-semibold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3", children: [
          "View Deal Deck ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-[#c9a84c]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1", children: "Custody Partner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-[#c9a84c]" }),
            " BNY Mellon / Fireblocks"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1", children: "Total Transacted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-[#c9a84c]" }),
            " $1.42B+ Volume"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1", children: "Structure Protection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-[#c9a84c]" }),
            " Segregated SPVs"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1", children: "Historical Net IRR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-[#c9a84c]" }),
            " 18.4% Realized"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "simulator", className: "py-24 lg:py-32 bg-[#080d1a] border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersVertical, { className: "w-4 h-4" }),
          " Capital Modeling"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight mb-4", children: "Compound Yield Simulator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-base font-normal leading-relaxed", children: "Model projected capital appreciation across our private market strategies compared to standard retail public index benchmarks (S&P 500 historical average of 9.5%)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold block mb-3", children: "1. Select Institutional Strategy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: ["credit", "balanced", "venture"].map((key) => {
                const strat = strategyRates[key];
                const isSelected = selectedStrategy === key;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSelectedStrategy(key), className: `p-4 rounded-md border text-left transition-all ${isSelected ? "bg-[#c9a84c]/10 border-[#c9a84c] shadow-md" : "bg-black/40 border-white/10 hover:border-white/20"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold font-mono text-[#c9a84c] mb-1", children: strat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-white mb-1", children: strat.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-tight", children: strat.desc })
                ] }, key);
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold", children: "2. Initial Capital Commitment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-mono font-bold text-white", children: [
                  "$",
                  initialCapital.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "10000", max: "500000", step: "5000", value: initialCapital, onChange: (e) => setInitialCapital(Number(e.target.value)), className: "w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-mono text-slate-500 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$10,000 (Min)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$250,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$500,000+" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold", children: "3. Monthly Recurring Allocation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-mono font-bold text-white", children: [
                  "$",
                  monthlyContribution.toLocaleString(),
                  " / mo"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "10000", step: "250", value: monthlyContribution, onChange: (e) => setMonthlyContribution(Number(e.target.value)), className: "w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-mono text-slate-500 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$5,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$10,000" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold", children: "4. Investment Time Horizon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-mono font-bold text-white", children: [
                  timeHorizon,
                  " ",
                  timeHorizon === 1 ? "Year" : "Years"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "1", max: "10", step: "1", value: timeHorizon, onChange: (e) => setTimeHorizon(Number(e.target.value)), className: "w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-mono text-slate-500 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1 Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5 Years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Years" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 font-normal flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-[#c9a84c] shrink-0" }),
            " Note: Models reflect monthly compounding of target IRR data. Past performance does not guarantee future results."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-[#0b101d] border border-white/15 p-8 sm:p-10 rounded-lg flex flex-col justify-between shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono uppercase tracking-[0.18em] text-[#c9a84c] mb-2 flex items-center gap-2 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "w-4 h-4" }),
              " Projected Portfolio Value"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl sm:text-5xl font-bold font-mono text-white mb-2 tracking-tight", children: [
              "$",
              simulationResults.strategyBalance.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-300 font-mono font-medium mb-8", children: [
              simulationResults.multiplier,
              "x Multiple on Invested Capital ($",
              simulationResults.totalInvested.toLocaleString(),
              " Invested)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 bg-black/40 border border-white/10 p-6 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-mono", children: "Total Capital Committed:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-white font-semibold", children: [
                  "$",
                  simulationResults.totalInvested.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-mono", children: "Net Investment Gain:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-[#c9a84c] font-bold", children: [
                  "+$",
                  simulationResults.netProfit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-mono", children: "S&P 500 Benchmark (9.5%):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-slate-300", children: [
                  "$",
                  simulationResults.spBalance.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white uppercase font-mono", children: "TSH Excess Yield (Alpha):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-mono text-white font-bold", children: [
                  "+$",
                  simulationResults.alphaOverSp.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] py-6 rounded-sm text-xs font-bold tracking-[0.15em] uppercase shadow-md flex items-center justify-center gap-2", children: [
            "Allocate To This Strategy ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "offerings", className: "py-24 lg:py-32 bg-[#050811] border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
            " Active Institutional Opportunities"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight", children: "Curated Private Deal Deck" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-sm font-normal leading-relaxed max-w-md", children: "Every offering undergoes rigorous credit committee evaluation and independent legal audit. Structured in bankruptcy-remote SPVs with tier-1 institutional custody." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 pb-6 mb-12", children: ["All", "Pre-IPO Growth", "Private Credit", "Quantitative Yield", "Secondary Equity"].map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedCategory(category), className: `px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all font-mono ${selectedCategory === category ? "bg-[#c9a84c] text-[#050811] font-bold shadow-sm" : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"}`, children: category }, category)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredOpportunities.map((op) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-[#0b101d] border border-white/10 p-8 rounded-lg flex flex-col justify-between hover:border-white/25 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-sm border ${op.badgeStyle}`, children: op.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-sm border border-white/10", children: op.assetClass })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white font-['Cinzel'] mb-3 group-hover:text-[#c9a84c] transition-colors", children: op.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 leading-relaxed font-normal mb-8", children: op.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 py-4 border-y border-white/10 bg-black/40 px-4 rounded-md mb-6 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-slate-400 font-semibold", children: "Target Return" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-white", children: op.targetReturn })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-slate-400 font-semibold", children: "Min Ticket" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[#c9a84c]", children: op.minAllocation })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-slate-400 font-semibold", children: "Term / Horizon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-300", children: op.term })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-slate-400 font-semibold", children: "Risk Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-300", children: op.risk })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-mono text-slate-400 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Status: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: op.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                op.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[#c9a84c] transition-all duration-500", style: {
              width: `${op.progress}%`
            } }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-white/[0.05] hover:bg-[#c9a84c] text-white hover:text-[#050811] border border-white/15 hover:border-[#c9a84c] py-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2", children: [
            "Request Offering Memo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] }) })
        ] })
      ] }, op.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "governance", className: "py-24 lg:py-32 bg-[#080d1a] border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold", children: "Custody & Compliance Framework" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight mb-4", children: "Institutional Governance Mandate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-base font-normal leading-relaxed", children: "We bridge traditional tier-1 private equity execution with modern automated settlement. All allocator capital is protected under strict statutory trust frameworks and bankruptcy-remote asset isolation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-6 h-6 text-[#c9a84c]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3 font-['Cinzel']", children: "Delaware SPV Segregation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 leading-relaxed font-normal", children: "Every investment opportunity is structured inside an independent Special Purpose Vehicle (SPV) segregated from general operating accounts, guaranteeing total asset protection and clear title ownership under Delaware LLC law." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6 text-[#c9a84c]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3 font-['Cinzel']", children: "Tier-1 Custodial Settlement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 leading-relaxed font-normal", children: "All client funds are deposited and custodied directly through BNY Mellon and Fireblocks institutional accounts. Fund capital calls instantly via FEDWIRE, CHAPS, or digital settlement with zero conversion markup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-[#c9a84c]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-3 font-['Cinzel']", children: "Automated K-1 Tax Prep" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 leading-relaxed font-normal", children: "Eliminate administrative friction. Our proprietary accounting ledger calculates monthly yield distributions automatically and generates institutional Schedule K-1 tax filings for seamless delivery to your family office or CPA." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 bg-[#050811] border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono font-semibold", children: "Executive Mandate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight", children: "Built For Serious Allocators." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-normal leading-relaxed", children: "Traditional private wealth management relies on opaque fee schedules, cumbersome 30-day paper subscription workflows, and fragmented custody. We engineered TheSpaceHoldings to deliver institutional execution speed without compromises." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-slate-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-[#c9a84c] shrink-0" }),
            " Over $1.42B in transacted private equity & credit volume"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-slate-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-[#c9a84c] shrink-0" }),
            " Strict 1% deal acceptance rate by our credit committee"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-slate-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-[#c9a84c] shrink-0" }),
            " Real-time NAV reporting and secondary liquidity options"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] rounded-sm px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase shadow-md", children: "Schedule Allocation Call" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0b101d] border border-white/10 p-8 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-[#c9a84c] uppercase tracking-widest mb-4 font-semibold", children: "Managing Director Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic text-slate-200 font-serif-luxury mb-6 leading-relaxed", children: '"TheSpaceHoldings gives our multi-family office the exact same Pre-IPO pricing and private credit covenants we normally only receive at $25M+ institutional check sizes."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-white uppercase tracking-wider font-mono", children: "— Marcus Vance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-mono", children: "Chief Investment Officer, Vance Family Office" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0b101d] border border-white/10 p-8 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-[#c9a84c] uppercase tracking-widest mb-4 font-semibold", children: "Sovereign Allocator Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic text-slate-200 font-serif-luxury mb-6 leading-relaxed", children: '"The automated K-1 generation and real-time Fireblocks custody integration cut our quarterly reporting overhead by more than 70%. A masterclass in private market infrastructure."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-white uppercase tracking-wider font-mono", children: "— Dr. Aris Thorne" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-mono", children: "Managing Partner, Meridian Global Partners" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#04070d] text-slate-400 py-16 border-t border-white/10 font-['Inter']", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1440px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TSH", className: "w-5 h-5 object-contain" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg tracking-[0.18em] text-white font-['Cinzel'] uppercase", children: "TheSpaceHoldings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-normal leading-relaxed max-w-sm", children: "TheSpaceHoldings Inc. is a premier institutional private wealth management and digital allocation platform. All securities transactions are conducted through FINRA / SIPC registered broker-dealer affiliates." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500 font-mono", children: "Delaware Statutory SPV Custodial Platform." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4", children: "Strategies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-white transition-colors", children: "Pre-IPO Growth Equity" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-white transition-colors", children: "Senior Secured Credit" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-white transition-colors", children: "Digital Asset Arbitrage" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-white transition-colors", children: "Clean Energy Yield" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-white transition-colors", children: "Secondary Block Trades" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4", children: "Governance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#governance", className: "hover:text-white transition-colors", children: "Delaware SPV Framework" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#governance", className: "hover:text-white transition-colors", children: "BNY Mellon Custody" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#governance", className: "hover:text-white transition-colors", children: "Fireblocks Asset Insurance" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#governance", className: "hover:text-white transition-colors", children: "Automated K-1 Filings" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#governance", className: "hover:text-white transition-colors", children: "AML / KYC Compliance" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4", children: "Portal Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: LOGIN, className: "hover:text-white transition-colors", children: "Client Portal Login" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: REGISTER, className: "hover:text-white transition-colors", children: "Accredited Onboarding" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/publications", className: "hover:text-white transition-colors", children: "Research & Whitepapers" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-white transition-colors", children: "Institutional Contact" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " TheSpaceHoldings Inc. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-slate-400 cursor-pointer", children: "Privacy Notice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-slate-400 cursor-pointer", children: "Terms of Allocation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-slate-400 cursor-pointer", children: "FINRA BrokerCheck" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
