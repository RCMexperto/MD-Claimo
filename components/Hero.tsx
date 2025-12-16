import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Database, LayoutGrid } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Introduction">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-20"></div>
        {/* Subtle Grid Texture for Tech Feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:border-brand-500/30 transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-400"></span>
          <span className="text-sm font-medium text-brand-200">Accepting New Medical Practices • 2025</span>
        </motion.div>

        {/* H1 Optimized for: "Revenue Cycle Management" and "Medical Billing" */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-5xl"
        >
          Premier <span className="text-brand-400">Revenue Cycle</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">
            Management Solutions
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed"
        >
          MD Claimo maximizes collections for private practices through expert coding audits, aggressive denial management, and seamless credentialing. HIPAA Compliant & EHR Agnostic.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            className="group bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)]"
            aria-label="Book a free consultation"
          >
            Free Financial Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 rounded-lg text-lg font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Trust/Integration Bar - Top 100 Competitor Trait */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 w-full"
        >
          <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-6">Seamlessly Integrates With Major EHRs</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
             {/* Text placeholders for logos to ensure speed/reliability */}
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><LayoutGrid className="w-6 h-6" /> Epic</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Database className="w-6 h-6" /> Cerner</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><LayoutGrid className="w-6 h-6" /> eClinicalWorks</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Database className="w-6 h-6" /> Kareo</div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><LayoutGrid className="w-6 h-6" /> AthenaHealth</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center w-full max-w-6xl"
        >
          {[
            { label: 'Clean Claim Rate', value: '99%' },
            { label: 'Avg Revenue Increase', value: '25%' },
            { label: 'Active Providers', value: '500+' },
            { label: 'Denial Reduction', value: '40%' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-brand-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;