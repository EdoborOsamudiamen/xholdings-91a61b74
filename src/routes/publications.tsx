import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { 
  ArrowRight, Search, Clock, Calendar, TrendingUp, Lock,
  ChevronDown, ChevronRight, Menu, X, PieChart, Wallet, Layers, ShieldCheck, Building2, Shield, FileText, BookOpen, Sparkles
} from "lucide-react";
import logo from "../assets/logo.png";

const LOGIN = "/login";
const REGISTER = "/register";

export const Route = createFileRoute("/publications")({
  component: Publications,
});

function Publications() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const articles = [
    {
      slug: "tech-ipos-2026",
      category: "IPO Watch",
      title: "Top 5 Technology IPOs to Watch This Year",
      excerpt: "From artificial intelligence startups to space exploration companies, these are the most highly anticipated public offerings coming to the market.",
      date: "October 12, 2026",
      readTime: "6 Min Read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
    },
    {
      slug: "interest-rates",
      category: "Economy",
      title: "Why Interest Rates Matter For Your Savings",
      excerpt: "A simple, easy-to-understand breakdown of how the Federal Reserve changes interest rates, and exactly what it means for your personal investments and wealth.",
      date: "October 08, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop"
    },
    {
      slug: "future-of-ai",
      category: "Technology",
      title: "The Future of AI and Your Portfolio",
      excerpt: "Artificial Intelligence is changing the world at a rapid pace. Here is how we are safely investing in the companies building this future to grow your wealth.",
      date: "September 28, 2026",
      readTime: "8 Min Read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
    },
    {
      slug: "winning-companies",
      category: "Investing 101",
      title: "How We Pick Winning Private Companies",
      excerpt: "Take a look behind the scenes at exactly how our experts choose which private businesses to invest your money in, focusing on safety and steady growth.",
      date: "September 15, 2026",
      readTime: "4 Min Read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      slug: "physical-assets",
      category: "Real Estate",
      title: "Investing in Physical Assets During Inflation",
      excerpt: "Why owning physical things like premium real estate and data centers is one of the best ways to protect your hard-earned money from losing its value.",
      date: "August 30, 2026",
      readTime: "7 Min Read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
    },
    {
      slug: "private-credit",
      category: "Market Update",
      title: "Private Credit vs. Traditional Bonds",
      excerpt: "Understanding the difference between loaning money to private companies versus buying government bonds, and how it impacts your yearly returns.",
      date: "August 12, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30">
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
                  
                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
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
                  </Link>

                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-2 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Yield Calculator</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Interactive wealth projections & APY compounding.</div>
                    </div>
                  </Link>

                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
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
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 2: Platform & Resources (Combined Governance, Custody, Research & Firm Overview) */}
            <div className="relative group/dropdown py-4">
              <button className="flex items-center gap-1.5 text-[#e8c96a] transition-all whitespace-nowrap py-1.5 px-3 rounded-md bg-white/[0.04]">
                <span>Platform & Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#c9a84c] group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 w-[360px] opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50 pt-1">
                <div className="bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col gap-1 ring-1 ring-[#c9a84c]/20 max-h-[75vh] overflow-y-auto">
                  
                  <div className="px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 mb-1">
                    <span>Governance & Custody</span>
                  </div>

                  <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Custody & Governance</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Bankruptcy-remote SPVs & clean legal title.</div>
                    </div>
                  </Link>

                  <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Delaware SPV Structure</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Direct ownership mechanics & segregated entities.</div>
                    </div>
                  </Link>

                  <div className="px-3 py-1 text-[10px] font-mono text-[#c9a84c] tracking-widest uppercase border-b border-white/5 my-1 pt-2">
                    <span>Research & Intelligence</span>
                  </div>

                  <Link to="/publications" className="flex items-start gap-3 p-2 rounded-lg bg-white/[0.06] transition-all group/sub">
                    <div className="p-1.5 rounded-md bg-[#c9a84c] text-[#050811] transition-colors shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#c9a84c] tracking-wider uppercase">Market Publications</div>
                      <div className="text-[11px] text-slate-300 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Macroeconomic reports & IPO watchlists.</div>
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

                  <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-all group/sub hover:translate-x-1">
                    <div className="p-1.5 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] group-hover/sub:bg-[#c9a84c] group-hover/sub:text-[#050811] transition-colors shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white tracking-wider uppercase group-hover/sub:text-[#c9a84c] transition-colors">Firm Overview & Leadership</div>
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5 capitalize tracking-normal">Institutional asset management & executive team.</div>
                    </div>
                  </Link>

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
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Pre-IPO Deal Deck</span> <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono">LIVE</span>
              </Link>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Yield Calculator</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Private Credit Fund IV</span> <span className="text-[9px] text-[#c9a84c] font-mono">12.4% APY</span>
              </Link>
            </div>

            {/* Mobile Category: Platform & Custody */}
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
              <div className="text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Platform & Custody
              </div>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Custody & Governance</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>Delaware SPV Structure</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
            </div>

            {/* Mobile Category: Research & Insights */}
            <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
              <div className="text-[10px] font-mono font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-1 flex items-center gap-2">
                <FileText className="w-3 h-3" /> Research & Insights
              </div>
              <Link to="/publications" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-[#c9a84c] bg-white/5 tracking-wider uppercase py-2 px-3 rounded flex justify-between items-center transition-colors">
                <span>Market Publications</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
              <Link to="/article/$articleId" params={{ articleId: 'pre-ipo-advantage' }} onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors">
                <span>The Pre-IPO Advantage</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
              </Link>
            </div>

            {/* Mobile Category: Firm Overview */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-slate-200 hover:text-[#c9a84c] tracking-wider uppercase py-2 px-3 rounded hover:bg-white/5 flex justify-between items-center transition-colors border-b border-white/10 pb-3">
              <span>Firm Overview</span> <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
            </Link>

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

      {/* Header Section */}
      <section className="pt-40 pb-16 border-b border-white/5 bg-[#0a0f1c]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-[64px] font-light tracking-tight mb-6 font-['Outfit'] text-white leading-tight">
              Market Insights & <br/> <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]">Publications</span>
            </h1>
            <p className="text-[17px] text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
              Read our latest research on upcoming IPOs, economic trends, and simple strategies for growing your wealth safely in private markets.
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search articles, IPOs, or topics..." 
                className="w-full bg-[#070b14] border border-white/10 rounded-none py-4 pl-12 pr-4 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured IPO Article */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-[12px] text-[#c9a84c] uppercase tracking-[0.2em] mb-8 font-bold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Featured Pre-IPO Guide
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 to-transparent z-10 opacity-60 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=3270&auto=format&fit=crop" 
                alt="Stock Market Display" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-6 text-[12px] text-gray-500 uppercase tracking-widest mb-6 font-semibold">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3"/> Oct 15, 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3"/> 10 Min Read</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white font-['Outfit'] leading-tight mb-6 hover:text-[#c9a84c] transition-colors cursor-pointer">
                <Link to="/article/$articleId" params={{ articleId: 'pre-ipo-advantage' }}>The Pre-IPO Advantage: How to Invest Before Companies Go Public</Link>
              </h2>
              <div className="space-y-4 text-[15px] text-gray-400 font-light leading-relaxed mb-8">
                <p>
                  For decades, the biggest investment gains were made exclusively by venture capitalists and Wall Street insiders long before a company ever hit the stock market. When a company finally has an IPO (Initial Public Offering), the average retail investor is often buying at the highest possible price.
                </p>
                <p>
                  At TheSpaceHoldings, we believe everyday investors deserve access to these same early-stage opportunities. In this guide, we break down exactly how Pre-IPO investing works, the risks involved, and how our platform secures shares in some of the world's fastest-growing private companies so you can benefit from their massive growth before they become household names.
                </p>
              </div>
              <Link to="/article/$articleId" params={{ articleId: 'pre-ipo-advantage' }}>
                <Button className="bg-transparent hover:bg-white/5 text-white border border-[#c9a84c]/50 rounded-none px-8 py-6 text-[13px] font-bold tracking-widest uppercase transition-colors flex items-center gap-3">
                  Read Full Guide <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-[#070b14]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h3 className="text-3xl font-light text-white font-['Outfit'] mb-12">Recent Publications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article, index) => (
              <Link to="/article/$articleId" params={{ articleId: article.slug }} key={index} className="group cursor-pointer flex flex-col h-full">
                <div className="h-56 w-full border border-white/5 overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1c]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                
                <div className="text-[11px] text-[#c9a84c] uppercase tracking-widest mb-3 font-bold">
                  {article.category}
                </div>
                
                <h4 className="text-2xl font-light text-white mb-4 group-hover:text-[#e8c96a] transition-colors leading-snug font-['Outfit']">
                  {article.title}
                </h4>
                
                <p className="text-[14px] text-gray-400 font-light leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4 mt-auto">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-none px-10 py-6 text-[13px] font-bold tracking-widest uppercase transition-colors">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-[#0a0f1c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-[#c9a84c]/50 flex items-center justify-center font-bold text-[#e8c96a] font-['Outfit'] text-sm">X</div>
                <span className="font-light text-xl tracking-[0.15em] text-white font-['Outfit'] uppercase">TheSpaceHoldings</span>
              </div>
              <div className="space-y-2 text-[13px] text-gray-500 font-light">
                <p>Global Headquarters</p>
                <p>One World Trade Center</p>
                <p>New York, NY 10007</p>
                <p className="mt-4 pt-4 border-t border-white/5 inline-block">support@thespaceholdings.io</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6 text-[13px] uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-light">
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">About Us</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Our Team</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Help Center</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6 text-[13px] uppercase tracking-widest">Investments</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-light">
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Private Companies</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Real Estate</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Technology</Link></li>
                <li><Link to="/" className="hover:text-[#c9a84c] transition-colors">Pricing & Fees</Link></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-white font-medium mb-6 text-[13px] uppercase tracking-widest">Member Area</h4>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-6">
                Log in to view your portfolio, track your daily returns, and read our latest market updates.
              </p>
              <Link to={LOGIN}>
                <Button className="bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-none px-6 py-2 text-[12px] font-bold tracking-widest uppercase transition-colors">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-10 text-[11px] text-gray-600 leading-loose text-justify space-y-4 font-light">
            <p>
              TheSpaceHoldings makes investing simple, but all investing involves risk. The value of your investments can go down as well as up, and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. We recommend talking to a financial advisor if you are unsure if an investment is right for you.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-white/5 text-[12px]">
              <p>© {new Date().getFullYear()} TheSpaceHoldings Inc. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0 font-medium">
                <Link to="/" className="hover:text-[#c9a84c] transition-colors">Terms of Service</Link>
                <Link to="/" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
                <Link to="/" className="hover:text-[#c9a84c] transition-colors">Disclosures</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
