import React from 'react';
import Section from './ui/Section';
import { ShieldCheck, BarChart3, Undo2, Award, ArrowRight, TrendingUp, Handshake, Clock, Percent, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="my-12">
      <div className="space-y-24">
        
        {/* SECTION 1: Our Commitment (The "Why") */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
             {/* Image Layer - SEO Optimized ALT Text */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[500px]">
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                  alt="Medical billing team discussing revenue cycle management strategies in a modern office" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-dark-950 border border-white/10 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
               <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="text-brand-400 w-8 h-8" />
                 <span className="font-bold text-white text-lg">Provider Focused</span>
               </div>
               <p className="text-gray-400 text-sm">We battle insurance mandates so you can focus on healing.</p>
             </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-400"></span>
              Our Commitment
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Financial Certainty & <br/>Operational Relief
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                At <strong>MD Claimo</strong>, our commitment goes beyond processing claims. We pledge to drastically reduce the administrative burden that burns out your staff and to secure the revenue you've earned but haven't collected.
              </p>
              <p>
                We act as your <strong>financial shield</strong>, absorbing the complexity of payer mandates so you can focus entirely on patient care. We deliver measurable improvements in practice efficiency and cash flow stability.
              </p>
            </div>

            {/* Commitment Metrics - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-brand-900/20 to-transparent border border-white/10 p-5 rounded-xl flex items-center gap-4 hover:border-brand-500/30 transition-colors group">
                 <div className="bg-brand-500/20 p-3 rounded-lg text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">35%</div>
                   <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Reduction in Admin Overhead</div>
                   <div className="text-[10px] text-brand-400 mt-1 font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" /> Save 15+ hours/week
                   </div>
                 </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 p-5 rounded-xl flex items-center gap-4 hover:border-blue-500/30 transition-colors group">
                 <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                   <Percent className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">99%</div>
                   <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Net Collection Rate</div>
                   <div className="text-[10px] text-blue-400 mt-1 font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" /> Maximize every claim
                   </div>
                 </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic border-l-2 border-brand-500 pl-4">
              "We don't just bill; we optimize. By removing the administrative friction, we allow your practice to see more patients and generate more revenue with less stress."
            </p>
          </div>
        </div>

        {/* SECTION 2: Our Unique Expertise (The "How We Are Different") */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h3>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Beyond Billing: Our Three Pillars</h2>
            <p className="text-gray-400 text-lg">
              We observed that the industry often focuses only on the claim submission. Our approach covers the entire cycle, ensuring integrity at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-dark-900/50 p-8 rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <ShieldCheck className="w-32 h-32 text-white" />
              </div>
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors relative z-10">
                <ShieldCheck className="w-7 h-7 text-brand-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Front-End Security <br/><span className="text-sm font-normal text-brand-300">(The Clean Claim Rate)</span></h4>
              <p className="text-gray-400 leading-relaxed relative z-10 text-sm">
                We eliminate the root cause of denials. Our specialists conduct Advanced Verification of Benefits (VOB) and pre-authorization checks 48 hours before the service. This diligence ensures that when a claim is filed, it is already a Clean Claim, drastically reducing A/R days.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-dark-900/50 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <BarChart3 className="w-32 h-32 text-white" />
              </div>
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors relative z-10">
                <BarChart3 className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Data-Driven Defense <br/><span className="text-sm font-normal text-blue-300">(Auditing)</span></h4>
              <p className="text-gray-400 leading-relaxed relative z-10 text-sm">
                We use sophisticated analytics to spot payer trends and coding vulnerabilities specific to your specialty. This proactive strategy strengthens your internal processes, serving as your best defense against targeted audits and regulatory penalties.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-dark-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                <Undo2 className="w-32 h-32 text-white" />
              </div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors relative z-10">
                <Undo2 className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Ethical A/R Recovery <br/><span className="text-sm font-normal text-purple-300">(Maximum Collection)</span></h4>
              <p className="text-gray-400 leading-relaxed relative z-10 text-sm">
                We pursue every dollar you are owed—from payer and patient—with persistent, professional follow-up. Our certified coders and denial management experts know exactly how to appeal, overturn, and accelerate payment that other services often leave on the table.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: Our Results and Credentials (The "Proof") */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
           {/* Background Gradient */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-blue-500 to-purple-500"></div>
           
           <div className="max-w-6xl mx-auto relative z-10">
             <div className="text-center mb-12">
               <h3 className="text-3xl font-heading font-bold text-white mb-4">Results That Speak Louder Than Words</h3>
               <p className="text-gray-300 text-lg">We don't just promise results; we measure them rigorously. Our partnership model is tied directly to your success.</p>
             </div>

             {/* DATA GRID - The "Visualized Data" requested */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Metric 1 */}
                <div className="bg-dark-950/80 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:border-brand-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">A/R Days</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-brand-400">30</span>
                    <span className="text-xl text-white font-medium mb-1">Days</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between w-full text-xs">
                    <span className="text-gray-500">Industry Avg: 45-60</span>
                    <span className="text-green-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Faster</span>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">Faster cash conversion and reduced overhead.</p>
                </div>

                {/* Metric 2 */}
                <div className="bg-dark-950/80 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:border-brand-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">Clean Claim Rate</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-brand-400">98%</span>
                    <span className="text-xl text-white font-medium mb-1">+</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between w-full text-xs">
                    <span className="text-gray-500">Industry Avg: 75-85%</span>
                    <span className="text-green-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Higher</span>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">Minimizes rework and eliminates manual appeal costs.</p>
                </div>

                {/* Metric 3 */}
                <div className="bg-dark-950/80 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:border-brand-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">Net Collection Rate</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-brand-400">99%</span>
                    <span className="text-xl text-white font-medium mb-1"></span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-4"></div>
                   <div className="flex justify-between w-full text-xs">
                    <span className="text-gray-500">Industry Avg: 90-94%</span>
                    <span className="text-green-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Max</span>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">Guaranteed maximization of every billable service.</p>
                </div>

             </div>

             <div className="flex items-center justify-center gap-4 mt-10 p-4 bg-brand-900/10 border border-brand-500/10 rounded-lg">
                <Award className="w-6 h-6 text-brand-400 shrink-0" />
                <p className="text-gray-300 text-sm italic text-center max-w-2xl">
                  "Our team comprises credentialed experts, including AAPC and AHIMA certified professionals, dedicated to upholding the highest standards of HIPAA and payer compliance in a secure, paperless environment."
                </p>
             </div>
           </div>
        </div>

        {/* SECTION 4: Strategic Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-[2px] w-8 bg-brand-400"></div>
               <span className="text-brand-400 font-semibold tracking-wide uppercase text-sm">Strategic Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
              Data That Drives <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Practice Expansion</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              RCM is not just about maintenance; it's about growth. We transform your billing data into a strategic asset. By analyzing payment patterns and patient demographics, we uncover hidden revenue streams and arm you with the leverage needed for contract negotiations.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 border border-brand-500/20">
                  <Handshake className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Payer Contract Negotiation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We provide the "Ammo" for your negotiations. By presenting data on payment velocity and denial rates, we help you demand higher reimbursement rates from underperforming payers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Service Line Expansion</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our analysis identifies untapped opportunities—such as adding Chronic Care Management (CCM) or specific procedural codes—based on your existing patient population.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-brand-500/30 transition-all duration-500 group shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
               <BarChart3 className="w-64 h-64 text-white" />
             </div>
             <div className="relative z-10 space-y-4">
                <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">Growth Intelligence Dashboard</h4>
                
                <div className="bg-dark-950/90 p-5 rounded-xl border border-white/10 flex items-center justify-between shadow-lg transform transition-transform group-hover:translate-x-2">
                   <div>
                     <div className="text-xs text-gray-500 uppercase font-bold mb-1">Contract Analysis</div>
                     <div className="text-white font-bold">BlueCross vs Medicare Rate</div>
                   </div>
                   <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold border border-green-500/20">+12% Negotiated</div>
                </div>
                
                <div className="bg-dark-950/90 p-5 rounded-xl border border-white/10 flex items-center justify-between shadow-lg transform transition-transform group-hover:translate-x-4 delay-75">
                   <div>
                     <div className="text-xs text-gray-500 uppercase font-bold mb-1">New Revenue Stream</div>
                     <div className="text-white font-bold">Remote Patient Monitoring</div>
                   </div>
                   <div className="px-3 py-1 bg-brand-500/20 text-brand-400 rounded-lg text-sm font-bold border border-brand-500/20">$15k/mo Added</div>
                </div>
                
                <div className="bg-dark-950/90 p-5 rounded-xl border border-white/10 flex items-center justify-between shadow-lg transform transition-transform group-hover:translate-x-2 delay-150">
                   <div>
                     <div className="text-xs text-gray-500 uppercase font-bold mb-1">Fee Schedule Audit</div>
                     <div className="text-white font-bold">Under-billed Procedures</div>
                   </div>
                   <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold border border-blue-500/20">Corrected</div>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 5: Call to Action (The "Next Step") */}
        <div className="bg-gradient-to-r from-brand-900/20 to-blue-900/20 rounded-3xl p-8 md:p-16 border border-white/10 text-center">
           <div className="max-w-3xl mx-auto">
             <h3 className="text-2xl font-bold text-white mb-6">Ready to Reclaim Your Focus?</h3>
             <p className="text-gray-300 text-lg leading-relaxed mb-8">
               Your practice's future relies on financial stability and accurate reporting. Stop settling for excuses and incomplete payments. Partner with MD Claimo and secure a reliable RCM solution built on precision, trust, and proven results.
             </p>
             <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/30">
               Contact us for a complimentary Financial Health Assessment
             </a>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default About;