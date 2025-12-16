import React from 'react';
import Section from './ui/Section';
import { ExternalLink, Building2, BookText, UserCheck, ShieldAlert, ArrowRight, FileText, Database } from 'lucide-react';

const RESOURCES = [
  {
    title: "CMS Home",
    url: "https://www.cms.gov/",
    desc: "The official agency website for Centers for Medicare & Medicaid Services. Access federal regulations, news, and program updates.",
    icon: Building2,
    tag: "Federal Portal"
  },
  {
    title: "CMS Manuals (IOMs)",
    url: "https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Internet-Only-Manuals-IOMs",
    desc: "The definitive day-to-day operating instructions, policies, and procedures for administering CMS programs.",
    icon: BookText,
    tag: "Guidelines"
  },
  {
    title: "Medicare Enrollment (PECOS)",
    url: "https://pecos.cms.hhs.gov/",
    desc: "Provider Enrollment, Chain, and Ownership System. The centralized portal for submitting and managing Medicare enrollment.",
    icon: UserCheck,
    tag: "Enrollment"
  },
  {
    title: "NCCI PTP Edits",
    url: "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits/medicare-ncci-procedure-procedure-ptp-edits",
    desc: "National Correct Coding Initiative edits to prevent improper payment when incorrect code combinations are reported.",
    icon: ShieldAlert,
    tag: "Coding"
  }
];

const Resources: React.FC = () => {
  return (
    <Section id="resources" className="bg-dark-950 border-t border-white/5 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -z-10"></div>

       <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
         <div className="max-w-2xl">
           <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-brand-400"></div>
              <span className="text-brand-400 font-semibold tracking-wide uppercase text-sm">Provider Toolkit</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
             Official Industry Resources
           </h2>
           <p className="text-gray-400 text-lg">
             Quick access to critical government portals and compliance manuals. We believe in empowering our clients with direct access to source-of-truth data.
           </p>
         </div>
         
         <div className="bg-brand-900/10 border border-brand-500/20 p-4 rounded-xl flex items-center gap-4 max-w-sm">
            <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400">
               <Database className="w-5 h-5" />
            </div>
            <div>
               <div className="text-white font-bold text-sm">Data Integrity</div>
               <div className="text-xs text-gray-400">All links redirect to official .gov sites.</div>
            </div>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {RESOURCES.map((res, index) => (
           <a 
             key={index}
             href={res.url}
             target="_blank"
             rel="noopener noreferrer"
             className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-brand-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
           >
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-xl bg-dark-950 flex items-center justify-center border border-white/10 group-hover:border-brand-500/30 transition-colors shadow-lg">
                   <res.icon className="w-6 h-6 text-brand-400" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded bg-dark-950 group-hover:text-brand-400 group-hover:border-brand-500/20 transition-colors">
                    {res.tag}
                 </span>
               </div>
               
               <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors flex items-center gap-2">
                 {res.title}
                 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
               </h3>
               
               <p className="text-sm text-gray-400 leading-relaxed mb-6">
                 {res.desc}
               </p>

               <div className="mt-auto flex items-center text-xs font-bold text-gray-500 group-hover:text-white transition-colors">
                  Access Portal <ArrowRight className="w-3 h-3 ml-1" />
               </div>
             </div>
           </a>
         ))}
       </div>
    </Section>
  );
};

export default Resources;