import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Button } from "../components/ui/button";
import logo from "../assets/logo.png";
import { 
  ArrowRight, ChevronRight, Shield, Lock, Wallet, 
  Menu, X, Building2, Sliders, CheckCircle2, Globe, 
  Layers, ShieldCheck, Info, FileText, PieChart, TrendingUp, BarChart3,
  ChevronDown, Sparkles, BookOpen
} from "lucide-react";

const LOGIN = "/login";
const REGISTER = "/register";

export const Route = createFileRoute("/")({
  component: Landing,
});

// Institutional Deal Deck Data - Clean, synchronized color scheme (No rainbow AI badges)
const OPPORTUNITIES = [
  {
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
    badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30",
  },
  {
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
    badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15",
  },
  {
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
    badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30",
  },
  {
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
    badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15",
  },
  {
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
    badgeStyle: "text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/30",
  },
  {
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
    badgeStyle: "text-slate-200 bg-white/[0.05] border-white/15",
  },
];

function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Interactive Wealth Simulator State
  const [initialCapital, setInitialCapital] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [selectedStrategy, setSelectedStrategy] = useState<"credit" | "balanced" | "venture">("balanced");

  // Synchronized, clean styling for strategy selection
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
    },
  };

  const simulationResults = useMemo(() => {
    const rate = strategyRates[selectedStrategy].rate;
    const spRate = 0.095; // 9.5% S&P 500 historical average
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
      multiplier: (strategyBalance / totalInvested).toFixed(2),
    };
  }, [initialCapital, monthlyContribution, timeHorizon, selectedStrategy]);

  const filteredOpportunities = selectedCategory === "All"
    ? OPPORTUNITIES
    : OPPORTUNITIES.filter(op => op.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#050811] text-[#f1f5f9] font-['Inter'] selection:bg-[#c9a84c]/30 overflow-x-hidden">
      {/* Institutional Market Ticker Bar - Synchronized clean text */}
      <div className="bg-[#080d1a] border-b border-white/10 text-[11px] font-mono tracking-wider py-2.5 overflow-hidden text-slate-400 relative z-50">
        <div className="animate-ticker flex items-center gap-10 whitespace-nowrap">
          <span className="flex items-center gap-2">TSH PRIVATE CREDIT FUND IV: <strong className="text-white">12.4% APR</strong> <span className="text-[#c9a84c] font-semibold">+0.15%</span></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">PRE-IPO GROWTH INDEX: <strong className="text-white">$148.20 NAV</strong> <span className="text-[#c9a84c] font-semibold">+4.82% YTD</span></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">GLOBAL INFRASTRUCTURE DEBT: <strong className="text-white">14.5% TARGET IRR</strong> <span className="text-[#c9a84c] font-semibold">+1.12%</span></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">QUANTITATIVE YIELD STRATEGY: <strong className="text-white">16.8% APY</strong> <span className="text-[#c9a84c] font-semibold">+6.45%</span></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2 text-white">TOTAL AUM TRANSACTED: <strong className="text-[#c9a84c] font-semibold">$1.42 BILLION+</strong></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" /> SEGREGATED INSTITUTIONAL SPV CUSTODY</span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">TSH PRIVATE CREDIT FUND IV: <strong className="text-white">12.4% APR</strong> <span className="text-[#c9a84c] font-semibold">+0.15%</span></span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">PRE-IPO GROWTH INDEX: <strong className="text-white">$148.20 NAV</strong> <span className="text-[#c9a84c] font-semibold">+4.82% YTD</span></span>
        </div>
      </div>

      {/* Ultra-Premium Glassmorphic Institutional Navbar */}
      <nav className="sticky top-0 w-full z-40 border-b border-white/[0.08] bg-[#050811]/85 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3.5 cursor-pointer group shrink-0">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-[#c9a84c]/20 via-[#c9a84c]/5 to-transparent border border-[#c9a84c]/40 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.25)] transition-all duration-300">
              <img src={logo} alt="TheSpaceHoldings" className="w-5 h-5 object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base md:text-lg tracking-[0.16em] text-white font-['Cinzel'] uppercase group-hover:text-[#f0eedd] transition-colors">TheSpaceHoldings</span>
              </div>
              <span className="text-[9px] text-slate-400 tracking-[0.2em] uppercase font-mono group-hover:text-slate-300 transition-colors">Private Markets & Yield</span>
            </div>
          </Link>

          {/* Navigation Links - Compact Institutional Architecture (2 Pillars to prevent overflow) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-[12px] xl:text-[13px] font-medium text-slate-300 tracking-[0.08em] uppercase">
            
            {/* Pillar 1: Offerings & Yield */}
            <div className="relative group/dropdown py-4">
              <button className="flex items-center gap-1.5 hover:text-white transition-all whitespace-nowrap py-1.5 px-3 rounded-md hover:bg-white/[0.04] group-hover/dropdown:text-[#c9a84c] group-hover/dropdown:bg-white/[0.04]">
                <span>Offerings & Yield</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 w-[340px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1">
                <div className="bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1 flex items-center justify-between">
                    <span>Active Allocations</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  
                  <a href="#offerings" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2">
                        <span>Pre-IPO Deal Deck</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">LIVE</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Direct equity allocation in tier-1 private leaders.</div>
                    </div>
                  </a>

                  <a href="#simulator" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Yield Calculator</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Interactive wealth projections & APY compounding.</div>
                    </div>
                  </a>

                  <a href="#offerings" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors flex items-center gap-2">
                        <span>Private Credit Fund IV</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#c9a84c]/20 text-[#c9a84c] font-mono">12.4% APY</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Senior secured corporate debt & asset-backed yields.</div>
                    </div>
                  </a>

                  <a href="#offerings" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Secondary Block Equity</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Discounted acquisitions in late-stage tech liquidity.</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Pillar 2: Platform & Resources (Combined Governance, Custody, Research & Firm Overview) */}
            <div className="relative group/dropdown py-4">
              <button className="flex items-center gap-1.5 hover:text-white transition-all whitespace-nowrap py-1.5 px-3 rounded-md hover:bg-white/[0.04] group-hover/dropdown:text-[#c9a84c] group-hover/dropdown:bg-white/[0.04]">
                <span>Platform & Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 w-[360px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1">
                <div className="bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20 max-h-[75vh] overflow-y-auto">
                  
                  <div className="px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1">
                    <span>Governance & Custody</span>
                  </div>

                  <a href="#governance" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Custody & Governance</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Bankruptcy-remote SPVs & clean legal title.</div>
                    </div>
                  </a>

                  <a href="#governance" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Delaware SPV Structure</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Direct ownership mechanics & segregated entities.</div>
                    </div>
                  </a>

                  <div className="px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2">
                    <span>Research & Intelligence</span>
                  </div>

                  <Link to="/publications" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Market Publications</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Macroeconomic reports & IPO watchlists.</div>
                    </div>
                  </Link>

                  <Link to="/article/$articleId" params={{ articleId: 'pre-ipo-advantage' }} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">The Pre-IPO Advantage</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Why institutional allocators enter prior to public listing.</div>
                    </div>
                  </Link>

                  <div className="px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2">
                    <span>Firm Information</span>
                  </div>

                  <a href="#about" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Firm Overview & Leadership</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Institutional asset management & executive team.</div>
                    </div>
                  </a>

                </div>
              </div>
            </div>

          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <Link 
              to={LOGIN} 
              className="text-[11px] xl:text-[12px] font-semibold text-slate-300 hover:text-[#c9a84c] transition-all uppercase tracking-[0.12em] px-3.5 py-2.5 rounded-md border border-transparent hover:border-white/10 hover:bg-white/[0.03] flex items-center gap-1.5 whitespace-nowrap shrink-0 group/login"
            >
              <Lock className="w-3.5 h-3.5 text-[#c9a84c] group-hover/login:scale-110 transition-transform" />
              <span>Client Sign In</span>
            </Link>
            <Link to={REGISTER} className="shrink-0">
              <Button className="relative group/btn overflow-hidden rounded-md bg-gradient-to-r from-[#c9a84c] via-[#d4b459] to-[#e8c96a] hover:from-[#d4b459] hover:to-[#f0d680] text-[#050811] px-5 xl:px-6 h-10 text-[11px] xl:text-[12px] font-bold transition-all duration-300 tracking-[0.14em] uppercase shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap shrink-0">
                <span className="relative z-10 font-bold">Request Allocation</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5 focus:outline-none transition-colors border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#c9a84c]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Institutional Categorized Architecture */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#080d1a]/98 backdrop-blur-2xl border-b border-white/10 p-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 duration-300 max-h-[85vh] overflow-y-auto">
            
            {/* Mobile Category: Investments & Yield */}
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
              <div className="text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" /> Investments & Yield
              </div>
              <a href="#offerings" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Pre-IPO Deal Deck</span> <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">LIVE</span>
              </a>
              <a href="#simulator" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Yield Calculator</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </a>
              <a href="#offerings" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Private Credit Fund IV</span> <span className="text-[9px] text-[#c9a84c] font-mono">12.4% APY</span>
              </a>
            </div>

            {/* Mobile Category: Platform & Custody */}
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
              <div className="text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Platform & Custody
              </div>
              <a href="#governance" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Custody & Governance</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </a>
              <a href="#governance" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Delaware SPV Structure</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </a>
            </div>

            {/* Mobile Category: Research & Insights */}
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
              <div className="text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2">
                <FileText className="w-3 h-3" /> Research & Insights
              </div>
              <Link to="/publications" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Market Publications</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
              <Link to="/article/$articleId" params={{ articleId: 'pre-ipo-advantage' }} onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>The Pre-IPO Advantage</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
            </div>

            {/* Mobile Category: Firm Overview */}
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors border-b border-white/10 pb-3">
              <span>Firm Overview</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
            </a>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Link to={LOGIN} onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center text-xs font-semibold text-white bg-white/5 border border-white/10 py-3.5 uppercase tracking-widest rounded flex justify-center items-center gap-2 hover:bg-white/10 transition-colors">
                <Lock className="w-3.5 h-3.5 text-[#c9a84c]" /> Client Portal Login
              </Link>
              <Link to={REGISTER} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#050811] py-4 text-xs font-bold tracking-widest uppercase rounded shadow-lg">
                  Request Institutional Access
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Clean, Authoritative Hero Section (Human-designed, high readability) */}
      <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden border-b border-white/10 bg-grid-pattern">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1] font-['Cinzel'] text-white">
              Architecting Private <br />
              <span className="font-semibold text-white">Market & Yield</span> Allocation.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-normal max-w-3xl">
              We provide family offices, accredited allocators, and sovereign institutions with direct execution into Pre-IPO growth equity and senior secured private credit under Delaware LLC SPV frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to={REGISTER}>
                <Button className="w-full sm:w-auto bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] rounded-sm px-8 py-6 h-auto text-[13px] font-bold transition-all tracking-[0.15em] uppercase shadow-lg flex items-center justify-center gap-3">
                  Request Offering Deck <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#offerings" className="w-full sm:w-auto text-center sm:text-left bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/15 rounded-sm px-8 py-5 text-[13px] font-semibold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3">
                View Deal Deck <ChevronRight className="w-4 h-4 text-[#c9a84c]" />
              </a>
            </div>

            {/* High-Contrast Synchronized Institutional Trust Bar */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Custody Partner</div>
                <div className="text-sm font-semibold text-white flex items-center gap-2"><Building2 className="w-4 h-4 text-[#c9a84c]" /> BNY Mellon / Fireblocks</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Total Transacted</div>
                <div className="text-sm font-semibold text-white flex items-center gap-2"><BarChart3 className="w-4 h-4 text-[#c9a84c]" /> $1.42B+ Volume</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Structure Protection</div>
                <div className="text-sm font-semibold text-white flex items-center gap-2"><Shield className="w-4 h-4 text-[#c9a84c]" /> Segregated SPVs</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Historical Net IRR</div>
                <div className="text-sm font-semibold text-white flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#c9a84c]" /> 18.4% Realized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Compound Yield Simulator - High Readability */}
      <section id="simulator" className="py-24 lg:py-32 bg-[#080d1a] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Capital Modeling
            </div>
            <h2 className="text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight mb-4">
              Compound Yield Simulator
            </h2>
            <p className="text-slate-300 text-base font-normal leading-relaxed">
              Model projected capital appreciation across our private market strategies compared to standard retail public index benchmarks (S&P 500 historical average of 9.5%).
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Simulator Inputs */}
            <div className="lg:col-span-7 bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold block mb-3">
                    1. Select Institutional Strategy
                  </label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {(["credit", "balanced", "venture"] as const).map((key) => {
                      const strat = strategyRates[key];
                      const isSelected = selectedStrategy === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedStrategy(key)}
                          className={`p-4 rounded-md border text-left transition-all ${
                            isSelected
                              ? "bg-[#c9a84c]/10 border-[#c9a84c] shadow-md"
                              : "bg-black/40 border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="text-sm font-bold font-mono text-[#c9a84c] mb-1">
                            {strat.label}
                          </div>
                          <div className="text-xs font-semibold text-white mb-1">{strat.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal leading-tight">{strat.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                      2. Initial Capital Commitment
                    </label>
                    <span className="text-lg font-mono font-bold text-white">
                      ${initialCapital.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={initialCapital}
                    onChange={(e) => setInitialCapital(Number(e.target.value))}
                    className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>$10,000 (Min)</span>
                    <span>$250,000</span>
                    <span>$500,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                      3. Monthly Recurring Allocation
                    </label>
                    <span className="text-lg font-mono font-bold text-white">
                      ${monthlyContribution.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="250"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>$0</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                      4. Investment Time Horizon
                    </label>
                    <span className="text-lg font-mono font-bold text-white">
                      {timeHorizon} {timeHorizon === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(Number(e.target.value))}
                    className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c9a84c]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>1 Year</span>
                    <span>5 Years</span>
                    <span>10 Years</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 font-normal flex items-center gap-2">
                <Info className="w-4 h-4 text-[#c9a84c] shrink-0" /> Note: Models reflect monthly compounding of target IRR data. Past performance does not guarantee future results.
              </div>
            </div>

            {/* Simulation Results */}
            <div className="lg:col-span-5 bg-[#0b101d] border border-white/15 p-8 sm:p-10 rounded-lg flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#c9a84c] mb-2 flex items-center gap-2 font-semibold">
                  <PieChart className="w-4 h-4" /> Projected Portfolio Value
                </div>
                <div className="text-4xl sm:text-5xl font-bold font-mono text-white mb-2 tracking-tight">
                  ${simulationResults.strategyBalance.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 font-mono font-medium mb-8">
                  {simulationResults.multiplier}x Multiple on Invested Capital (${simulationResults.totalInvested.toLocaleString()} Invested)
                </div>

                <div className="space-y-4 bg-black/40 border border-white/10 p-6 rounded-md">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 font-mono">Total Capital Committed:</span>
                    <span className="text-sm font-mono text-white font-semibold">${simulationResults.totalInvested.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 font-mono">Net Investment Gain:</span>
                    <span className="text-sm font-mono text-[#c9a84c] font-bold">+${simulationResults.netProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 font-mono">S&P 500 Benchmark (9.5%):</span>
                    <span className="text-sm font-mono text-slate-300">${simulationResults.spBalance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs font-semibold text-white uppercase font-mono">TSH Excess Yield (Alpha):</span>
                    <span className="text-base font-mono text-white font-bold">+${simulationResults.alphaOverSp.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link to={REGISTER}>
                  <Button className="w-full bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] py-6 rounded-sm text-xs font-bold tracking-[0.15em] uppercase shadow-md flex items-center justify-center gap-2">
                    Allocate To This Strategy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Deal Deck - High Readability, Synchronized Badges */}
      <section id="offerings" className="py-24 lg:py-32 bg-[#050811] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" /> Active Institutional Opportunities
              </div>
              <h2 className="text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight">
                Curated Private Deal Deck
              </h2>
            </div>
            <p className="text-slate-300 text-sm font-normal leading-relaxed max-w-md">
              Every offering undergoes rigorous credit committee evaluation and independent legal audit. Structured in bankruptcy-remote SPVs with tier-1 institutional custody.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6 mb-12">
            {["All", "Pre-IPO Growth", "Private Credit", "Quantitative Yield", "Secondary Equity"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all font-mono ${
                  selectedCategory === category
                    ? "bg-[#c9a84c] text-[#050811] font-bold shadow-sm"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((op) => (
              <div
                key={op.id}
                className="group bg-[#0b101d] border border-white/10 p-8 rounded-lg flex flex-col justify-between hover:border-white/25 transition-all"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-6">
                    <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-sm border ${op.badgeStyle}`}>
                      {op.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-sm border border-white/10">
                      {op.assetClass}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white font-['Cinzel'] mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {op.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-8">
                    {op.description}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 bg-black/40 px-4 rounded-md mb-6 font-mono">
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold">Target Return</div>
                      <div className="text-sm font-bold text-white">{op.targetReturn}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold">Min Ticket</div>
                      <div className="text-sm font-bold text-[#c9a84c]">{op.minAllocation}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold">Term / Horizon</div>
                      <div className="text-xs font-semibold text-slate-300">{op.term}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold">Risk Profile</div>
                      <div className="text-xs font-semibold text-slate-300">{op.risk}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>Status: <strong className="text-white">{op.status}</strong></span>
                      <span>{op.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c9a84c] transition-all duration-500"
                        style={{ width: `${op.progress}%` }}
                      />
                    </div>
                  </div>

                  <Link to={REGISTER} className="w-full">
                    <Button className="w-full bg-white/[0.05] hover:bg-[#c9a84c] text-white hover:text-[#050811] border border-white/15 hover:border-[#c9a84c] py-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                      Request Offering Memo <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Execution & Custodial Pillars - REPLACES Allocation Roadmap */}
      <section id="governance" className="py-24 lg:py-32 bg-[#080d1a] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-3 font-semibold">
              Custody & Compliance Framework
            </div>
            <h2 className="text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight mb-4">
              Institutional Governance Mandate
            </h2>
            <p className="text-slate-300 text-base font-normal leading-relaxed">
              We bridge traditional tier-1 private equity execution with modern automated settlement. All allocator capital is protected under strict statutory trust frameworks and bankruptcy-remote asset isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-['Cinzel']">Delaware SPV Segregation</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Every investment opportunity is structured inside an independent Special Purpose Vehicle (SPV) segregated from general operating accounts, guaranteeing total asset protection and clear title ownership under Delaware LLC law.
              </p>
            </div>

            <div className="bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-['Cinzel']">Tier-1 Custodial Settlement</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                All client funds are deposited and custodied directly through BNY Mellon and Fireblocks institutional accounts. Fund capital calls instantly via FEDWIRE, CHAPS, or digital settlement with zero conversion markup.
              </p>
            </div>

            <div className="bg-[#0b101d] border border-white/10 p-8 sm:p-10 rounded-lg hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-sm bg-white/[0.05] border border-white/15 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-['Cinzel']">Automated K-1 Tax Prep</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Eliminate administrative friction. Our proprietary accounting ledger calculates monthly yield distributions automatically and generates institutional Schedule K-1 tax filings for seamless delivery to your family office or CPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Overview & Executive Leadership */}
      <section id="about" className="py-24 bg-[#050811] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs text-[#c9a84c] uppercase tracking-[0.2em] font-mono font-semibold">
                Executive Mandate
              </div>
              <h2 className="text-3xl lg:text-5xl font-light text-white font-['Cinzel'] leading-tight">
                Built For Serious Allocators.
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Traditional private wealth management relies on opaque fee schedules, cumbersome 30-day paper subscription workflows, and fragmented custody. We engineered TheSpaceHoldings to deliver institutional execution speed without compromises.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a84c] shrink-0" /> Over $1.42B in transacted private equity & credit volume
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a84c] shrink-0" /> Strict 1% deal acceptance rate by our credit committee
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a84c] shrink-0" /> Real-time NAV reporting and secondary liquidity options
                </div>
              </div>
              <div className="pt-6">
                <Link to={REGISTER}>
                  <Button className="bg-[#c9a84c] hover:bg-[#c5a02e] text-[#050811] rounded-sm px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase shadow-md">
                    Schedule Allocation Call
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0b101d] border border-white/10 p-8 rounded-lg">
                <div className="text-xs font-mono text-[#c9a84c] uppercase tracking-widest mb-4 font-semibold">Managing Director Quote</div>
                <p className="text-sm italic text-slate-200 font-serif-luxury mb-6 leading-relaxed">
                  "TheSpaceHoldings gives our multi-family office the exact same Pre-IPO pricing and private credit covenants we normally only receive at $25M+ institutional check sizes."
                </p>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">— Marcus Vance</div>
                <div className="text-[11px] text-slate-400 font-mono">Chief Investment Officer, Vance Family Office</div>
              </div>

              <div className="bg-[#0b101d] border border-white/10 p-8 rounded-lg">
                <div className="text-xs font-mono text-[#c9a84c] uppercase tracking-widest mb-4 font-semibold">Sovereign Allocator Quote</div>
                <p className="text-sm italic text-slate-200 font-serif-luxury mb-6 leading-relaxed">
                  "The automated K-1 generation and real-time Fireblocks custody integration cut our quarterly reporting overhead by more than 70%. A masterclass in private market infrastructure."
                </p>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">— Dr. Aris Thorne</div>
                <div className="text-[11px] text-slate-400 font-mono">Managing Partner, Meridian Global Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Institutional Footer - Clean & Readable */}
      <footer className="bg-[#04070d] text-slate-400 py-16 border-t border-white/10 font-['Inter']">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm">
                  <img src={logo} alt="TSH" className="w-5 h-5 object-contain" />
                </div>
                <span className="font-semibold text-lg tracking-[0.18em] text-white font-['Cinzel'] uppercase">TheSpaceHoldings</span>
              </div>
              <p className="text-xs text-slate-400 font-normal leading-relaxed max-w-sm">
                TheSpaceHoldings Inc. is a premier institutional private wealth management and digital allocation platform. All securities transactions are conducted through FINRA / SIPC registered broker-dealer affiliates.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">
                Delaware Statutory SPV Custodial Platform.
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4">Strategies</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#offerings" className="hover:text-white transition-colors">Pre-IPO Growth Equity</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Senior Secured Credit</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Digital Asset Arbitrage</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Clean Energy Yield</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Secondary Block Trades</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4">Governance</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#governance" className="hover:text-white transition-colors">Delaware SPV Framework</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">BNY Mellon Custody</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">Fireblocks Asset Insurance</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">Automated K-1 Filings</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">AML / KYC Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-4">Portal Access</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to={LOGIN} className="hover:text-white transition-colors">Client Portal Login</Link></li>
                <li><Link to={REGISTER} className="hover:text-white transition-colors">Accredited Onboarding</Link></li>
                <li><Link to="/publications" className="hover:text-white transition-colors">Research & Whitepapers</Link></li>
                <li><a href="#about" className="hover:text-white transition-colors">Institutional Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono">
            <div>
              © {new Date().getFullYear()} TheSpaceHoldings Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Notice</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Allocation</span>
              <span className="hover:text-slate-400 cursor-pointer">FINRA BrokerCheck</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
