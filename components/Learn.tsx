import React from 'react';
import Section from './ui/Section';
import { LEARN_ARTICLES } from '../constants';
import { 
  ArrowRight, 
  ShieldAlert, 
  FileCheck, 
  Scale, 
  Wallet, 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  Tag,
  Target,
  RefreshCcw,
  Landmark,
  Users
} from 'lucide-react';
import { LearnItem } from '../types';

interface LearnProps {
  onArticleClick: (article: LearnItem) => void;
}

// Enhanced Pillars based on top RCM competitor analysis
// Structure: Problem -> Solution -> Metric (High Trust Signals)
const PILLARS = [
  {
    title: "Denial Prevention & Recovery",
    icon: ShieldAlert,
    problem: "Is your denial rate creeping above 5%?",
    solution: "Shift from reactive appeals to proactive prevention. We cover clinical documentation improvement (CDI) and root-cause analysis to stop revenue leakage.",
    metric: "Recover 95% of Claims",
    color: "red"
  },
  {
    title: "Front-End Revenue Cycle",
    icon: Target,
    problem: "Losing revenue before the patient arrives?",
    solution: "Mastering eligibility verification, prior authorizations, and patient demographic entry is the only way to secure a 98% Clean Claim Rate.",
    metric: "Reduce Rejections by 40%",
    color: "brand"
  },
  {
    title: "Regulatory Compliance & Audits",
    icon: Landmark,
    problem: "Worried about an OIG or RAC audit?",
    solution: "Stay ahead of the 'Alphabet Soup' of regulations (MACRA, MIPS, HIPAA). Our coding audits ensure your documentation supports your billing levels.",
    metric: "100% Audit Readiness",
    color: "blue"
  },
  {
    title: "Patient Financial Experience",
    icon: Users,
    problem: "High deductibles turning into bad debt?",
    solution: "Modernize your collections with compassionate financial counseling, transparent estimates (GFE), and mobile-first payment options.",
    metric: "+25% POS Collections",
    color: "purple"
  },
  {
    title: "Strategic Growth Analytics",
    icon: TrendingUp,
    problem: "Flying blind without data?",
    solution: "Move beyond basic spreadsheets. Leverage predictive analytics to negotiate better payer contracts and identify profitable service lines.",
    metric: "Actionable Intelligence",
    color: "orange"
  }
];

const Learn: React.FC<LearnProps> = ({ onArticleClick }) => {
  return (
    <Section id="learn">
      {/* Introduction Header: The Knowledge Engine */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
           <div className="h-[2px] w-8 bg-brand-400"></div>
           <span className="text-brand-400 font-semibold tracking-wide uppercase text-sm">The MD Claimo Learn Center</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 max-w-5xl leading-tight">
          The Knowledge Engine: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">
             Strategic RCM Intelligence
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              Welcome to the MD Claimo Learn Center—your resource for cutting through the financial noise of healthcare. This is not a generalized blog; this is a strategic intelligence platform crafted by certified Revenue Cycle Management (RCM) experts for practice managers, CFOs, and dedicated providers.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-center">
             <p className="text-gray-200 text-lg font-medium relative z-10 italic">
               "We understand that knowledge is power, and in this industry, power translates directly into prompt reimbursement and lower administrative costs. Our goal is to build your Audit Defense."
             </p>
             <div className="mt-4 flex items-center gap-2 text-brand-400 font-bold uppercase text-xs tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Expert Insights</span>
             </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: The Core Content Pillars (ENHANCED FOR SEO & CONVERSION) */}
      <div className="mb-24">
        <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-8">
           <h3 className="text-2xl font-bold text-white">Section 1: RCM Expertise Pillars</h3>
           <span className="text-sm text-gray-500 hidden md:block">Select a pillar to explore strategies</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => (
            <div 
              key={index} 
              className={`
                bg-dark-950 p-8 rounded-2xl border border-white/10 group relative overflow-hidden flex flex-col
                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10
                ${index === 0 ? 'lg:col-span-2 lg:flex-row lg:items-center gap-8 bg-gradient-to-r from-dark-950 to-brand-900/10' : ''}
              `}
            >
              {/* Top/Left Icon Section */}
              <div className="flex-shrink-0">
                 <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 lg:mb-0 transition-colors
                   ${pillar.color === 'red' ? 'bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white' : ''}
                   ${pillar.color === 'brand' ? 'bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white' : ''}
                   ${pillar.color === 'blue' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : ''}
                   ${pillar.color === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white' : ''}
                   ${pillar.color === 'orange' ? 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white' : ''}
                 `}>
                   <pillar.icon className="w-7 h-7" />
                 </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                 <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">{pillar.title}</h4>
                 
                 <div className="mb-4">
                   <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">The Challenge:</p>
                   <p className="text-sm text-gray-400 italic">"{pillar.problem}"</p>
                 </div>
                 
                 <div className="mb-4">
                   <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">The Solution:</p>
                   <p className="text-sm text-gray-300 leading-relaxed">{pillar.solution}</p>
                 </div>

                 {/* Metric Badge */}
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white mt-auto">
                    <TrendingUp className="w-3 h-3 text-brand-400" />
                    {pillar.metric}
                 </div>
              </div>

              {/* Decorative Gradient Blob */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Suggested Content Titles (Articles) */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Section 2: Latest Intelligence</h3>
            <p className="text-gray-400 text-sm">High-value analysis on specific financial pain points.</p>
          </div>
          <button className="text-brand-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-bold uppercase tracking-wide">
            View Archive <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARN_ARTICLES.map((article) => (
            <div 
              key={article.id}
              onClick={() => {
                if (article.link) {
                  window.open(article.link, '_blank', 'noopener,noreferrer');
                } else {
                  onArticleClick(article);
                }
              }}
              className="flex flex-col bg-dark-900 rounded-2xl overflow-hidden hover:bg-white/5 transition-colors group cursor-pointer h-full border border-white/10 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-900/10"
            >
              <div className="h-56 overflow-hidden bg-gray-800 relative">
                 <img 
                  src={article.image || `https://picsum.photos/400/250?random=${article.id}`} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                 />
                 
                 {/* Visual Date Badge - Requested Feature */}
                 <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-dark-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white font-bold border border-white/20 shadow-lg flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-brand-400" />
                      {article.date}
                    </div>
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-400 uppercase tracking-wider bg-brand-500/10 px-2 py-1 rounded border border-brand-500/20">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-300 transition-colors leading-snug">
                  {article.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-bold text-white group-hover:text-brand-400 transition-colors gap-2">
                  Read Analysis <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Learn;