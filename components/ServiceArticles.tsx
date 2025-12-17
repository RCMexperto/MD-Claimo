import React from 'react';
import { 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  FileText, 
  BadgeCheck, 
  DollarSign, 
  Search,
  Clock,
  Ban,
  Scale,
  ArrowRight,
  FileWarning,
  Siren,
  Gavel,
  ScrollText,
  LineChart,
  History,
  Laptop2
} from 'lucide-react';

// Shared UI Components
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

const MetricCard: React.FC<{ value: string; label: string; trend?: string; color: string }> = ({ value, label, trend, color }) => (
  <div className={`bg-dark-950 p-6 rounded-2xl border border-${color}-500/30 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
    <div className={`absolute top-0 right-0 p-4 opacity-10 text-${color}-500`}>
      <TrendingUp className="w-16 h-16" />
    </div>
    <div className={`text-4xl font-bold text-white mb-2`}>{value}</div>
    <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{label}</div>
    {trend && (
      <div className={`mt-4 text-${color}-400 text-xs font-bold flex items-center gap-1`}>
        <TrendingUp className="w-3 h-3" /> {trend}
      </div>
    )}
  </div>
);

// ----------------------------------------------------------------------
// 1. Advance Eligibility & VOB Article
// ----------------------------------------------------------------------
export const EligibilityArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="The First Line of Defense: Advance Eligibility & Verification of Benefits (VOB)"
        subtitle="Providing medical services without verifying coverage is akin to gambling with your practice's revenue. In an era of high-deductible plans, the patient is often your biggest payer."
      />
      <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
        <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Ban className="w-5 h-5"/> The Cost of Assumption</h4>
        <p className="text-sm">
          Industry data shows that <strong>24% of all claim denials</strong> stem from eligibility issues—coverage terminated, service not covered, or max benefits reached. These are 100% preventable errors that cost practices billions annually.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">MD Claimo's "Clear-View" VOB Protocol</h3>
      <div className="grid gap-6">
        <StrategyCard number="1" title="Comprehensive Benefit Analysis" color="brand">
          <p className="mb-4 text-sm text-gray-400">We don't just check "Active/Inactive." We map the entire financial landscape of the patient visit.</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Specific CPT Code Coverage</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Deductible Remaining & Co-insurance %</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Out-of-Pocket Maximums</li>
          </ul>
        </StrategyCard>

        <StrategyCard number="2" title="The Prior Authorization Engine" color="blue">
          <p className="mb-4 text-sm text-gray-400">Missing an authorization is a guaranteed denial that cannot be appealed. We manage the entire auth lifecycle.</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Initiating auth requests 72 hours pre-visit</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Tracking "auth units" to prevent over-delivery</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Retro-authorization management for emergency cases</li>
          </ul>
        </StrategyCard>
      </div>

      <ImpactBox icon={TrendingUp} title="Quantifiable Results">
        Practices utilizing our VOB protocol experience a <strong>99.2% clean claim rate</strong> regarding eligibility. Additionally, Point-of-Service (POS) collections increase by an average of <strong>25%</strong> because staff can confidently collect exact co-pays and deductibles upfront.
      </ImpactBox>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 2. Provider Credentialing Article
// ----------------------------------------------------------------------
export const CredentialingArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="Provider Contracting & Credentialing: The Invisible Barrier to Revenue"
        subtitle="You cannot bill for what you are not authorized to perform. Credentialing bottlenecks are the #1 reason for delayed revenue in new practices."
      />
      <p className="mb-6">
        The credentialing process is a bureaucratic maze of CAQH profiles, NPI enumerations, and 50-page payer applications. One missing signature can delay your ability to bill by 90 days or more.
      </p>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Our "Fast-Track" Enrollment Ecosystem</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <FileText className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Contract Negotiation</h4>
          <p className="text-sm text-gray-400">We don't just sign you up; we review fee schedules. We identify codes where payers are offering below-Medicare rates and negotiate for better reimbursement tiers before the ink dries.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <Clock className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Expirations Monitoring</h4>
          <p className="text-sm text-gray-400">Malpractice, DEA, State License, Board Certifications. We track every expiry date and initiate renewals proactively so you never fall out of network.</p>
        </div>
      </div>

      <div className="bg-dark-950 border border-purple-500/20 rounded-xl p-8">
        <h4 className="text-xl font-bold text-white mb-4">The Cost of "Pending" Status</h4>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">X</div>
            <span className="text-sm">Holding claims for 3+ months ruins cash flow.</span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">X</div>
            <span className="text-sm">Risk of "Timely Filing" denials if enrollment takes too long.</span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">X</div>
            <span className="text-sm">Patient dissatisfaction when they receive "Out of Network" bills.</span>
          </li>
        </ul>
      </div>

      <ImpactBox 
        icon={Activity} 
        title="MD Claimo Impact" 
        colorClass="text-purple-400" 
        bgClass="bg-purple-900/10 border-purple-500/20"
      >
        We reduce the average credentialing turnaround time by <strong>30% (saving approx. 3-4 weeks)</strong>. For a provider billing $50k/month, that is <strong>$50,000 in accelerated revenue</strong> that hits your bank account sooner.
      </ImpactBox>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 3. Billing & Coding Article (ENHANCED for "Compliance, Audits & Coding")
// ----------------------------------------------------------------------
export const BillingCodingArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="Medical Billing & Coding: The Shield Against Clawbacks"
        subtitle="In a regulatory environment where an audit can bankrupt a practice, coding is no longer just about 'getting paid'. It's about 'keeping the payment'. We combine maximum reimbursement with ironclad compliance."
      />
      
      {/* The Unspecified Trap Warning */}
      <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
        <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
          <FileWarning className="w-5 h-5"/> 
          The "Unspecified" Trap (ICD-10)
        </h4>
        <p className="text-sm mb-2">
          Payers are aggressively denying claims with "Unspecified" codes (usually ending in .9). 
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 bg-black/20 p-4 rounded-lg">
           <div className="flex-1">
             <div className="text-xs text-red-400 uppercase font-bold">The Wrong Way</div>
             <div className="text-white font-mono text-sm">M54.5 (Low back pain)</div>
             <div className="text-xs text-gray-400">Often denied for "Medical Necessity" on MRIs.</div>
           </div>
           <ArrowRight className="hidden md:block text-gray-500 self-center" />
           <div className="flex-1">
             <div className="text-xs text-green-400 uppercase font-bold">The MD Claimo Way</div>
             <div className="text-white font-mono text-sm">M54.51 (Vertebrogenic low back pain)</div>
             <div className="text-xs text-gray-400">Specific laterality and site ensures payment.</div>
           </div>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Strategic Coding Protocols</h3>
      <div className="grid gap-8">
        
        <StrategyCard number="1" title="The NCCI Edit Firewall" color="brand">
          <p className="mb-4 text-sm text-gray-400">
            Unbundling procedures is the fastest way to an audit. We utilize the latest National Correct Coding Initiative (NCCI) edits to know exactly when Modifier 25 or 59 is appropriate—and when it isn't.
          </p>
          <div className="flex items-center gap-2 bg-brand-900/20 p-3 rounded-lg border border-brand-500/20">
             <CheckCircle2 className="w-5 h-5 text-brand-400" />
             <span className="text-sm font-medium text-brand-200">
               We verify that documentation supports "Significant, Separately Identifiable" services before applying Modifier 25.
             </span>
          </div>
        </StrategyCard>

        <StrategyCard number="2" title="Risk Adjustment (HCC) Coding" color="purple">
          <p className="mb-4 text-sm text-gray-400">
            It's not just about today's claim. In value-based care, your patient's "Acuity Score" determines next year's budget.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-purple-500"/> <strong>Capture:</strong> We code all chronic conditions (Diabetes, CKD, COPD) annually, not just acute issues.</li>
            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-purple-500"/> <strong>Impact:</strong> Correct HCC coding can increase per-patient capitation rates by 20-30%.</li>
          </ul>
        </StrategyCard>
        
        <StrategyCard number="3" title="The 24-Hour Submission Standard" color="blue">
          <p className="mb-4 text-sm text-gray-400">Velocity matters. The longer a chart sits unbilled, the colder the cash flow becomes.</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Charts received by 5 PM are coded by 10 AM next day.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Double-tier scrubbing: Automated AI scrub + Human Auditor review.</li>
          </ul>
        </StrategyCard>
      </div>

      <ImpactBox 
        icon={DollarSign} 
        title="Financial Outcome" 
        colorClass="text-green-400"
        bgClass="bg-green-900/10 border-green-500/20"
      >
        Our clients experience an average <strong>15-20% increase in monthly revenue</strong> within the first 6 months. We maintain a <strong>96.8% First-Pass Acceptance Rate</strong>, meaning only 3.2% of claims ever need rework.
      </ImpactBox>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 4. AR & Denial Management Article
// ----------------------------------------------------------------------
export const ARDenialArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="A/R Follow-Up & Denial Management: We Don't Take 'No' for an Answer"
        subtitle="A denial is not a dead end; it is a request for more information. Yet, 65% of denials are never reworked by average billing teams due to lack of time or expertise."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard value="94%" label="Denial Overturn Rate" trend="First Appeal Success" color="brand" />
        <MetricCard value="28 Days" label="Avg Days in A/R" trend="vs 45 Industry Avg" color="blue" />
        <MetricCard value="$32k" label="Recovered / Provider" trend="Old A/R Cleanup" color="green" />
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The "Aging Bucket" Science</h3>
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 mb-8">
         <p className="mb-6">
           Time is the enemy of revenue. The likelihood of collecting on a claim drops by <strong>50%</strong> once it crosses the 90-day threshold. Our "30-Day Blitz" strategy targets claims immediately upon the first statement cycle.
         </p>
         
         <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-bold">0-30 Days (The Golden Window)</span>
                <span className="text-green-400 font-bold">98% Collection Probability</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-bold">60-90 Days (The Danger Zone)</span>
                <span className="text-yellow-400 font-bold">45% Collection Probability</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-bold">120+ Days (The Graveyard)</span>
                <span className="text-red-400 font-bold">12% Collection Probability</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '12%'}}></div>
              </div>
            </div>
         </div>
         <p className="mt-6 text-sm text-gray-400 italic">
           *Most billing companies don't touch claims until day 45. We touch them at Day 25 if unpaid.
         </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Tactical Denial Defense: Code by Code</h3>
      <p className="mb-6">We don't send generic appeal letters. We have specific playbooks for the most common CARC (Claim Adjustment Reason Codes).</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <StrategyCard number="CO-16" title="Claim/Service Lacks Info" color="brand">
          <p className="text-sm text-gray-400 mb-2">Often a "Soft Denial" asking for medical records.</p>
          <div className="text-sm border-l-2 border-brand-500 pl-3 text-gray-300">
            <strong>Strategy:</strong> We attach the operative report or consult note electronically via the clearinghouse portal within 24 hours, preventing the "mailroom black hole."
          </div>
        </StrategyCard>

        <StrategyCard number="CO-11" title="Diagnosis Inconsistent" color="blue">
          <p className="text-sm text-gray-400 mb-2">The "Medical Necessity" denial.</p>
          <div className="text-sm border-l-2 border-blue-500 pl-3 text-gray-300">
            <strong>Strategy:</strong> Our coders review the LCD/NCD policies. If the clinical findings support it, we re-code with a more specific ICD-10 code rather than writing a letter.
          </div>
        </StrategyCard>

        <StrategyCard number="CO-22" title="Coordination of Benefits" color="purple">
          <p className="text-sm text-gray-400 mb-2">Patient has other insurance.</p>
          <div className="text-sm border-l-2 border-purple-500 pl-3 text-gray-300">
            <strong>Strategy:</strong> We conference call the patient and the payer immediately. We don't wait for the patient to figure it out; we facilitate the "Update COB" conversation.
          </div>
        </StrategyCard>

        <StrategyCard number="CO-97" title="Inclusive / Bundled" color="brand">
          <p className="text-sm text-gray-400 mb-2">Procedure bundled into another.</p>
          <div className="text-sm border-l-2 border-brand-500 pl-3 text-gray-300">
            <strong>Strategy:</strong> We audit for Modifier 25/59 opportunities. If the service was distinct, we appeal with the NCCI edit guidelines and page numbers highlighted.
          </div>
        </StrategyCard>
      </div>
    </section>

    <section>
       <h3 className="text-2xl font-bold text-white mb-6">The "Denial Prevention Loop"</h3>
       <div className="flex flex-col md:flex-row gap-4 items-center bg-dark-950 p-6 rounded-xl border border-white/10">
          <div className="flex-1 text-center">
             <div className="text-brand-400 font-bold text-lg mb-2">1. Analyze</div>
             <p className="text-xs text-gray-400">Identify Root Cause (e.g., Front Desk entering wrong IDs)</p>
          </div>
          <ArrowRight className="text-gray-600 w-6 h-6 rotate-90 md:rotate-0" />
          <div className="flex-1 text-center">
             <div className="text-blue-400 font-bold text-lg mb-2">2. Educate</div>
             <p className="text-xs text-gray-400">Train staff & update Rules Engine (Edit Checks)</p>
          </div>
          <ArrowRight className="text-gray-600 w-6 h-6 rotate-90 md:rotate-0" />
          <div className="flex-1 text-center">
             <div className="text-green-400 font-bold text-lg mb-2">3. Prevent</div>
             <p className="text-xs text-gray-400">Clean Claim Rate improves next month</p>
          </div>
       </div>
       <p className="mt-4 text-sm text-gray-400 text-center">
         This feedback loop is why our clients see a <strong>40% reduction in denials</strong> within the first 90 days.
       </p>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 5. Auditing & Reporting Article (ENHANCED for "Compliance, Audits & Coding")
// ----------------------------------------------------------------------
export const AuditArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="Auditing & Reporting: Your Financial X-Ray"
        subtitle="You can't manage what you don't measure. In a landscape of increased RAC audits and OIG scrutiny, our forensic auditing protects your practice from takebacks and identifies missed revenue."
      />
      
      {/* The Bell Curve Visualization */}
      <div className="bg-dark-950 border border-brand-500/20 rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-5">
          <LineChart className="w-64 h-64 text-brand-500" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Siren className="w-5 h-5 text-red-500" /> The "Bell Curve" Risk Analysis
        </h4>
        <p className="text-sm text-gray-300 mb-6 max-w-2xl">
          The OIG compares your E/M coding (99213 vs 99214) against national averages for your specialty. If you code 99214 100% of the time, <strong>you are a target</strong>.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
           <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-gray-400 text-xs uppercase mb-1">Your 99213</div>
              <div className="text-2xl font-bold text-blue-400">20%</div>
              <div className="text-[10px] text-gray-500">Natl Avg: 45%</div>
           </div>
           <div className="bg-white/5 p-4 rounded-lg border border-red-500/30 relative">
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">FLAG</div>
              <div className="text-gray-400 text-xs uppercase mb-1">Your 99214</div>
              <div className="text-2xl font-bold text-red-400">75%</div>
              <div className="text-[10px] text-gray-500">Natl Avg: 40%</div>
           </div>
           <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-gray-400 text-xs uppercase mb-1">Your 99215</div>
              <div className="text-2xl font-bold text-green-400">5%</div>
              <div className="text-[10px] text-gray-500">Natl Avg: 5%</div>
           </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4 italic">
          *We provide this "Peer Benchmarking" report quarterly to keep you safe.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Prospective vs. Retrospective Auditing</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-brand-400 font-bold mb-2 flex items-center gap-2">
            <ScrollText className="w-5 h-5" /> Prospective (Pre-Bill)
          </h4>
          <p className="text-sm text-gray-300 mb-4">
            We review charts <strong>before</strong> the claim goes out.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Prevents denials before they happen.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Corrects coding errors in real-time.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Ideal for new providers or high-risk procedures.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
            <History className="w-5 h-5" /> Retrospective (Post-Bill)
          </h4>
          <p className="text-sm text-gray-300 mb-4">
            We review paid claims to identify patterns.
          </p>
           <ul className="text-sm space-y-2">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Finds "Missed Revenue" (Under-coding).</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Identifies systemic compliance risks.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Prepares you for payer contract negotiations.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-6">The "OIG Red Flag" Checklist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          { icon: Laptop2, title: "Cloning (Copy-Paste)", desc: "Does every note look identical? This is the #1 trigger for Medicare audits." },
          { icon: Gavel, title: "Medical Necessity", desc: "Did the patient's condition actually warrant a Level 4 visit? Or just the time spent?" },
          { icon: AlertCircle, title: "Signature Compliance", desc: "Are orders signed and dated prior to the service date? Timestamps matter." },
          { icon: ShieldCheck, title: "Incident-To Rules", desc: "Is the physician actually in the office suite when the NP sees the patient?" }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <item.icon className="w-6 h-6 text-orange-400 mb-3" />
            <h5 className="font-bold text-white mb-1">{item.title}</h5>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <ImpactBox 
        icon={Activity} 
        title="The Value of Insight" 
        colorClass="text-blue-400" 
        bgClass="bg-blue-900/10 border-blue-500/20"
      >
         Our retrospective audits frequently uncover <strong>10-15% in missed revenue opportunities</strong>—money that was earned but never billed. Furthermore, our compliance audits reduce your risk of payer recoupment to near zero.
      </ImpactBox>
    </section>
  </div>
);