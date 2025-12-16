import React from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Brain, 
  MessageCircle, 
  Activity, 
  Smartphone,
  Users,
  AlertTriangle,
  FileSearch,
  ShieldCheck,
  Ban,
  Clock,
  ArrowRight,
  Phone
} from 'lucide-react';

// Reusing UI components pattern for consistency
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-heading font-bold text-white mb-3">{title}</h3>
    {subtitle && <p className="text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

const ImpactBox: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode, colorClass?: string, bgClass?: string }> = ({ 
  icon: Icon, 
  title, 
  children, 
  colorClass = "text-brand-400",
  bgClass = "bg-brand-900/10 border-brand-500/20"
}) => (
  <div className={`${bgClass} p-5 rounded-xl border flex gap-4 mt-6`}>
    <Icon className={`w-6 h-6 ${colorClass} shrink-0 mt-1`} />
    <div>
      <strong className={`block mb-1 ${colorClass}`}>{title}</strong>
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

const StrategyCard: React.FC<{ number: string; title: string; children: React.ReactNode; color: 'brand' | 'blue' | 'purple' }> = ({ 
  number, 
  title, 
  children, 
  color 
}) => {
  const colors = {
    brand: { bg: 'bg-brand-500/20', text: 'text-brand-400', border: 'hover:border-brand-500/30' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'hover:border-blue-500/30' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'hover:border-purple-500/30' }
  };
  
  const c = colors[color];

  return (
    <div className={`bg-dark-950 border border-white/10 rounded-2xl p-8 transition-colors ${c.border}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center ${c.text} font-bold text-xl`}>{number}</div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
};

const SchedulingArticle: React.FC = () => {
  return (
    <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
      <section>
        <SectionHeader 
          title="The Scheduling Sinkhole: Fixing the Leak at the Source"
          subtitle="A 5-minute error at the front desk creates 5 months of rework for the billing team. Scheduling isn't just administrative—it's the first step of clinical and financial triage."
        />
        
        {/* The Problem Statement */}
        <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
          <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
            <Ban className="w-5 h-5" />
            The "Dirty Data" Reality
          </h4>
          <p className="text-sm">
            If a patient's name is spelled "Jon" instead of "John" in your PMS, the claim is dead on arrival. 
            <strong> 22% of all denials</strong> in the US are attributed to registration eligibility errors. 
            This "Scheduling Sinkhole" swallows front-end revenue before it ever has a chance to mature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-dark-950 p-6 rounded-xl border border-white/10">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500"/> The Time Cost</h5>
              <p className="text-sm text-gray-400">Reworking a denial costs approx. $25 in staff labor. If you have 100 registration denials a month, that's <strong>$2,500 in pure waste</strong>, not counting the delayed cash flow.</p>
           </div>
           <div className="bg-dark-950 p-6 rounded-xl border border-white/10">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-orange-500"/> The Patient Cost</h5>
              <p className="text-sm text-gray-400">Patients blindsided by bills due to "inactive coverage" often leave the practice. Registration accuracy is a retention strategy.</p>
           </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">MD Claimo’s "T-Minus 48" Protocol</h3>
        <p className="mb-8 text-gray-400">
          We don't wait for the patient to walk in. We move the registration process upstream with a strict timeline.
        </p>

        <div className="space-y-4">
           {/* Timeline Item 1 */}
           <div className="flex gap-4 items-start">
              <div className="w-24 shrink-0 text-right pt-1 font-bold text-brand-400">Booking</div>
              <div className="w-px bg-white/10 self-stretch relative min-h-[100px]">
                 <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-brand-500"></div>
              </div>
              <div className="pb-4">
                 <h4 className="text-white font-bold text-lg">Initial Data Capture</h4>
                 <p className="text-sm text-gray-400 mt-1">Collect insurance member ID and a photo of the card immediately via secure text link. No "bringing it in later."</p>
              </div>
           </div>

           {/* Timeline Item 2 */}
           <div className="flex gap-4 items-start">
              <div className="w-24 shrink-0 text-right pt-1 font-bold text-blue-400">48 Hrs Prior</div>
              <div className="w-px bg-white/10 self-stretch relative min-h-[100px]">
                 <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              </div>
              <div className="pb-4">
                 <h4 className="text-white font-bold text-lg">The "Deep Dive" VOB</h4>
                 <p className="text-sm text-gray-400 mt-1">
                   We verify active status, specific procedure coverage (e.g., "Is CPT 99392 covered?"), and remaining deductible. 
                   <span className="block mt-2 text-blue-300 font-medium">If coverage is inactive, we contact the patient immediately to fix it or reschedule.</span>
                 </p>
              </div>
           </div>

           {/* Timeline Item 3 */}
           <div className="flex gap-4 items-start">
              <div className="w-24 shrink-0 text-right pt-1 font-bold text-green-400">Check-In</div>
              <div className="w-px bg-white/10 self-stretch relative min-h-[100px]">
                 <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="pb-4">
                 <h4 className="text-white font-bold text-lg">Financial Clearance</h4>
                 <p className="text-sm text-gray-400 mt-1">Patient is informed of exact co-pay and past-due balance. Collection happens <em>before</em> seeing the provider.</p>
              </div>
           </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">The 7-Point "Clean Intake" Checklist</h3>
        <p className="mb-6 text-gray-400">Your front desk should never create an appointment without confirming these 7 specific data points.</p>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-500/30 transition-colors">
          <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Legal Name (matches Insurance Card exactly)</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Date of Birth (Common typo source)</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Current Address & Phone</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Insurance Carrier & Plan Name</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Subscriber ID & Group Number</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Policy Holder Relationship (Self/Spouse)</span>
             </li>
             <li className="flex items-center gap-3 text-sm">
               <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
               <span className="text-gray-300">Reason for Visit (Critical for Authorization)</span>
             </li>
          </ul>
        </div>
      </section>

      <section>
         <h3 className="text-2xl font-bold text-white mb-6">Financial Counseling Scripts</h3>
         <p className="mb-6">Empower your staff with words that work. Reduce friction when collecting money upfront.</p>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-950 border border-purple-500/20 rounded-xl p-6">
               <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Scenario: High Deductible</div>
               <p className="text-white italic mb-4 text-sm leading-relaxed">"Based on your verification today, you haven't met your annual deductible yet. The estimated cost for today's visit is $150. Would you like to take care of that with Visa, MasterCard, or HSA?"</p>
               <p className="text-xs text-gray-500 flex items-center gap-2"><Brain className="w-3 h-3"/> <strong>Why it works:</strong> It assumes payment ("Which card?") rather than asking "Do you want to pay?"</p>
            </div>
            
            <div className="bg-dark-950 border border-blue-500/20 rounded-xl p-6">
               <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Scenario: Past Due Balance</div>
               <p className="text-white italic mb-4 text-sm leading-relaxed">"I see a balance of $40 from your last visit. We can add that to today's co-pay for a total of $70. I'll get that receipt printed for you right now."</p>
               <p className="text-xs text-gray-500 flex items-center gap-2"><Brain className="w-3 h-3"/> <strong>Why it works:</strong> It frames the collection as a standard administrative step, not a confrontation.</p>
            </div>
         </div>
      </section>

      <ImpactBox icon={ShieldCheck} title="The Bottom Line">
        Moving the "Revenue Cycle" to the front desk isn't about turning receptionists into billers; it's about giving them the tools to prevent errors. Practices that adopt our Intake Protocol see a <strong>40% reduction in front-end denials</strong> within 90 days.
      </ImpactBox>
    </div>
  );
};

export default SchedulingArticle;