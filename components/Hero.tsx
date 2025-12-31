import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Database, LayoutGrid } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Introduction">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/30 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] opacity-30"></div>
        {/* Subtle Grid Texture for Tech Feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:border-brand-500/50 hover:bg-white/10 transition-all cursor-default shadow-lg shadow-brand-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
          </span>
          <span className="text-sm font-bold text-brand-100 tracking-wide">Accepting New Medical Practices • 2025</span>
        </motion.div>

        {/* H1 Optimized for: "Revenue Cycle Management" and "Medical Billing" */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-6xl drop-shadow-2xl"
        >
          Premier <span className="text-brand-500">Revenue Cycle</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-400 to-accent-500">
            Management Solutions
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light"
        >
          MD Claimo maximizes collections for private practices through expert coding audits, aggressive denial management, and seamless credentialing. <span className="text-white font-medium">HIPAA Compliant & EHR Agnostic.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a 
            href="#contact" 
            className="group bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(51,161,222,0.6)] hover:shadow-[0_0_60px_-15px_rgba(51,161,222,0.8)] active:scale-95 border-t border-white/20"
            aria-label="Book a free consultation"
          >
            Free Financial Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 rounded-xl text-lg font-bold text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center backdrop-blur-sm"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Trust/Integration Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 w-full border-t border-white/5 pt-10"
        >
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Seamlessly Integrates With Major EHRs</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><LayoutGrid className="w-6 h-6" /> Epic</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Database className="w-6 h-6" /> Cerner</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><LayoutGrid className="w-6 h-6" /> eClinicalWorks</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Database className="w-6 h-6" /> Kareo</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><LayoutGrid className="w-6 h-6" /> AthenaHealth</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center w-full max-w-5xl"
        >
          {[
            { label: 'Clean Claim Rate', value: '96.8%' },
            { label: 'Avg Revenue Increase', value: '25%' },
            { label: 'Active Providers', value: '50+' },
            { label: 'Denial Reduction', value: '40%' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 group">
              <span className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-bottom">{stat.value}</span>
              <span className="text-xs text-brand-300 font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;