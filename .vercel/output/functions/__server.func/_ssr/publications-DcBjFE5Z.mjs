import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BXrfXN_b.mjs";
import { l as logo } from "./logo-qUqMBaFB.mjs";
import { e as ChevronDown, T as TrendingUp, f as ChartPie, W as Wallet, S as ShieldCheck, B as Building2, F as FileText, g as BookOpen, h as Shield, L as Lock, i as ArrowRight, X, M as Menu, j as ChevronRight, k as Search, l as Calendar, m as Clock } from "../_libs/lucide-react.mjs";
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
function Publications() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const articles = [{
    slug: "tech-ipos-2026",
    category: "IPO Watch",
    title: "Top 5 Technology IPOs to Watch This Year",
    excerpt: "From artificial intelligence startups to space exploration companies, these are the most highly anticipated public offerings coming to the market.",
    date: "October 12, 2026",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
  }, {
    slug: "interest-rates",
    category: "Economy",
    title: "Why Interest Rates Matter For Your Savings",
    excerpt: "A simple, easy-to-understand breakdown of how the Federal Reserve changes interest rates, and exactly what it means for your personal investments and wealth.",
    date: "October 08, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop"
  }, {
    slug: "future-of-ai",
    category: "Technology",
    title: "The Future of AI and Your Portfolio",
    excerpt: "Artificial Intelligence is changing the world at a rapid pace. Here is how we are safely investing in the companies building this future to grow your wealth.",
    date: "September 28, 2026",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
  }, {
    slug: "winning-companies",
    category: "Investing 101",
    title: "How We Pick Winning Private Companies",
    excerpt: "Take a look behind the scenes at exactly how our experts choose which private businesses to invest your money in, focusing on safety and steady growth.",
    date: "September 15, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2000&auto=format&fit=crop"
  }, {
    slug: "physical-assets",
    category: "Real Estate",
    title: "Investing in Physical Assets During Inflation",
    excerpt: "Why owning physical things like premium real estate and data centers is one of the best ways to protect your hard-earned money from losing its value.",
    date: "August 30, 2026",
    readTime: "7 Min Read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
  }, {
    slug: "private-credit",
    category: "Market Update",
    title: "Private Credit vs. Traditional Bonds",
    excerpt: "Understanding the difference between loaning money to private companies versus buying government bonds, and how it impacts your yearly returns.",
    date: "August 12, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#070b14] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pre-IPO Deal Deck" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono", children: "LIVE" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Direct equity allocation in tier-1 private leaders." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Yield Calculator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Interactive wealth projections & APY compounding." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Private Credit Fund IV" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-[#c9a84c]/20 text-[#c9a84c] font-mono", children: "12.4% APY" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Senior secured corporate debt & asset-backed yields." })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/dropdown py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 text-[#e8c96a] transition-all whitespace-nowrap py-1.5 px-3 rounded-md bg-white/[0.04]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Platform & Resources" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 w-[360px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20 max-h-[75vh] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Governance & Custody" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Custody & Governance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Bankruptcy-remote SPVs & clean legal title." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "Delaware SPV Structure" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Direct ownership mechanics & segregated entities." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Research & Intelligence" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/publications", className: "flex items-start gap-3 p-2 rounded-lg bg-white/[0.06] transition-all group/sub", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c] text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-[#c9a84c] tracking-wider uppercase", children: "Market Publications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-300 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Macroeconomic reports & IPO watchlists." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/$articleId", params: {
                articleId: "pre-ipo-advantage"
              }, className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors", children: "The Pre-IPO Advantage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal", children: "Why institutional allocators enter prior to public listing." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Firm Information" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pre-IPO Deal Deck" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono", children: "LIVE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Yield Calculator" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Custody & Governance" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/publications", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-[#c9a84c] bg-white/5 tracking-wider uppercase py-2 px-3 rounded flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Market Publications" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/$articleId", params: {
            articleId: "pre-ipo-advantage"
          }, onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Pre-IPO Advantage" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#c9a84c]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors border-b border-white/10 pb-3", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-16 border-b border-white/5 bg-[#0a0f1c]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-[64px] font-light tracking-tight mb-6 font-['Outfit'] text-white leading-tight", children: [
        "Market Insights & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]", children: "Publications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-gray-400 font-light leading-relaxed mb-10 max-w-2xl", children: "Read our latest research on upcoming IPOs, economic trends, and simple strategies for growing your wealth safely in private markets." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search articles, IPOs, or topics...", className: "w-full bg-[#070b14] border border-white/10 rounded-none py-4 pl-12 pr-4 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a84c] transition-colors" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#c9a84c] uppercase tracking-[0.2em] mb-8 font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
        " Featured Pre-IPO Guide"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[400px] lg:h-[500px] w-full overflow-hidden border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 to-transparent z-10 opacity-60 mix-blend-overlay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=3270&auto=format&fit=crop", alt: "Stock Market Display", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-[12px] text-gray-500 uppercase tracking-widest mb-6 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              " Oct 15, 2026"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              " 10 Min Read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-light text-white font-['Outfit'] leading-tight mb-6 hover:text-[#c9a84c] transition-colors cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$articleId", params: {
            articleId: "pre-ipo-advantage"
          }, children: "The Pre-IPO Advantage: How to Invest Before Companies Go Public" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-[15px] text-gray-400 font-light leading-relaxed mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For decades, the biggest investment gains were made exclusively by venture capitalists and Wall Street insiders long before a company ever hit the stock market. When a company finally has an IPO (Initial Public Offering), the average retail investor is often buying at the highest possible price." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At TheSpaceHoldings, we believe everyday investors deserve access to these same early-stage opportunities. In this guide, we break down exactly how Pre-IPO investing works, the risks involved, and how our platform secures shares in some of the world's fastest-growing private companies so you can benefit from their massive growth before they become household names." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/article/$articleId", params: {
            articleId: "pre-ipo-advantage"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-transparent hover:bg-white/5 text-white border border-[#c9a84c]/50 rounded-none px-8 py-6 text-[13px] font-bold tracking-widest uppercase transition-colors flex items-center gap-3", children: [
            "Read Full Guide ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[#070b14]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-light text-white font-['Outfit'] mb-12", children: "Recent Publications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16", children: articles.map((article, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/article/$articleId", params: {
        articleId: article.slug
      }, className: "group cursor-pointer flex flex-col h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-56 w-full border border-white/5 overflow-hidden relative mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-[#0a0f1c]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: article.image, alt: article.title, className: "absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#c9a84c] uppercase tracking-widest mb-3 font-bold", children: article.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-light text-white mb-4 group-hover:text-[#e8c96a] transition-colors leading-snug font-['Outfit']", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-gray-400 font-light leading-relaxed mb-6 flex-grow line-clamp-3", children: article.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4 mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.readTime })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-none px-10 py-6 text-[13px] font-bold tracking-widest uppercase transition-colors", children: "Load More Articles" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "pt-20 pb-10 bg-[#0a0f1c] border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border border-[#c9a84c]/50 flex items-center justify-center font-bold text-[#e8c96a] font-['Outfit'] text-sm", children: "X" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-xl tracking-[0.15em] text-white font-['Outfit'] uppercase", children: "TheSpaceHoldings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[13px] text-gray-500 font-light", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Global Headquarters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "One World Trade Center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "New York, NY 10007" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 pt-4 border-t border-white/5 inline-block", children: "support@thespaceholdings.io" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-6 text-[13px] uppercase tracking-widest", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-[14px] text-gray-500 font-light", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "About Us" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Our Team" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Help Center" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Careers" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-6 text-[13px] uppercase tracking-widest", children: "Investments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-[14px] text-gray-500 font-light", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Private Companies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Real Estate" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Technology" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Pricing & Fees" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-6 text-[13px] uppercase tracking-widest", children: "Member Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-500 font-light leading-relaxed mb-6", children: "Log in to view your portfolio, track your daily returns, and read our latest market updates." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: LOGIN, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-none px-6 py-2 text-[12px] font-bold tracking-widest uppercase transition-colors", children: "Log In" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/5 pt-10 text-[11px] text-gray-600 leading-loose text-justify space-y-4 font-light", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "TheSpaceHoldings makes investing simple, but all investing involves risk. The value of your investments can go down as well as up, and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. We recommend talking to a financial advisor if you are unsure if an investment is right for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-white/5 text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " TheSpaceHoldings Inc. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 mt-4 md:mt-0 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Terms of Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Privacy Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#c9a84c] transition-colors", children: "Disclosures" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Publications as component
};
