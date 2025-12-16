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
  Brain,
  Baby,
  Bone,
  Zap,
  Droplets,
  Microscope,
  Sun,
  Building2,
  Users,
  AlertTriangle,
  Shield,
  ClipboardCheck,
  Pill,
  Syringe,
  Stethoscope,
  Laptop,
  HeartPulse
} from 'lucide-react';

// Shared UI Components (Reused for consistency)
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-heading font-bold text-white mb-3">{title}</h3>
    {subtitle && <p className="text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

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

const ProblemSolution: React.FC<{ problem: string; solution: string }> = ({ problem, solution }) => (
  <div className="flex flex-col md:flex-row gap-4 bg-white/5 p-6 rounded-xl border border-white/10 my-4">
    <div className="md:w-1/2 border-l-4 border-red-500 pl-4">
      <h5 className="text-red-400 font-bold text-sm uppercase mb-1">The Challenge</h5>
      <p className="text-gray-300 text-sm">{problem}</p>
    </div>
    <div className="hidden md:block w-px bg-white/10"></div>
    <div className="md:w-1/2 border-l-4 border-green-500 pl-4 md:border-l-0">
      <h5 className="text-green-400 font-bold text-sm uppercase mb-1">The MD Claimo Fix</h5>
      <p className="text-gray-300 text-sm">{solution}</p>
    </div>
  </div>
);

const KeyPoint: React.FC<{ title: string; desc: string; icon?: React.ElementType }> = ({ title, desc, icon: Icon = CheckCircle2 }) => (
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
      <Icon className="w-5 h-5 text-brand-400" />
      {title}
    </h4>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

// ----------------------------------------------------------------------
// 1. Cardiology Article
// ----------------------------------------------------------------------
export const CardiologyArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="Cardiovascular RCM: Precision at the Heart of Revenue"
        subtitle="Cardiology billing is high-stakes. With complex bundled procedures, evolving LCDs for imaging, and high audit risks for Interventional work, a generic biller is your biggest liability."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard value="99.8%" label="Cath Lab Coding Accuracy" trend="vs 85% National Avg" color="brand" />
        <MetricCard value="$58k" label="Avg Recovered / Group" trend="Under-coded Interventions" color="blue" />
        <MetricCard value="12 Days" label="A/R Velocity" trend="Cash Flow Acceleration" color="green" />
      </div>
    </section>

    <section>
       <h3 className="text-2xl font-bold text-white mb-6">Quantifiable Impact by Sub-Specialty</h3>
       <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-dark-950 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
               <Activity className="w-5 h-5 text-blue-400" /> Electrophysiology (EP)
            </h4>
            <div className="flex justify-between items-end mb-2">
               <span className="text-gray-400 text-sm">Ablation Clean Claim Rate</span>
               <span className="text-green-400 font-bold">99.1%</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-4">
               <div className="bg-green-500 h-1.5 rounded-full" style={{width: '99%'}}></div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
               We eliminated denials related to 3D Mapping add-ons (93613), recovering an avg of <strong>$4,200 per month</strong> per EP provider.
            </p>
          </div>

          <div className="bg-dark-950 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
               <HeartPulse className="w-5 h-5 text-brand-400" /> Remote Device Monitoring
            </h4>
            <div className="flex justify-between items-end mb-2">
               <span className="text-gray-400 text-sm">Revenue Capture Efficiency</span>
               <span className="text-brand-400 font-bold">+22%</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-4">
               <div className="bg-brand-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
               By automating the tracking of technical (93296) vs professional (93294) components, we generate an additional <strong>$18,500 annually</strong> per physician.
            </p>
          </div>
       </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The "Modifier Minefield"</h3>
      <p className="mb-6">
        The difference between a paid claim and a denial often comes down to the correct use of Modifiers 25, 59, XE, XP, XS, and XU. In cardiology, where diagnostic and interventional procedures frequently happen on the same day, precision is paramount.
      </p>
      
      <div className="bg-dark-950 border border-white/10 rounded-xl p-6 overflow-hidden relative">
        <h4 className="text-white font-bold mb-4">Bundling Denial Reduction</h4>
        <div className="space-y-4">
           {/* Visual Bar Chart */}
           <div>
             <div className="flex justify-between text-sm mb-1">
               <span className="text-gray-400">Industry Avg Denial Rate (Modifier 59 Errors)</span>
               <span className="text-red-400 font-bold">18.4%</span>
             </div>
             <div className="w-full bg-white/10 rounded-full h-2">
               <div className="bg-red-500 h-2 rounded-full" style={{width: '18.4%'}}></div>
             </div>
           </div>
           <div>
             <div className="flex justify-between text-sm mb-1">
               <span className="text-gray-400">MD Claimo Client Rate</span>
               <span className="text-brand-400 font-bold">0.4%</span>
             </div>
             <div className="w-full bg-white/10 rounded-full h-2">
               <div className="bg-brand-500 h-2 rounded-full" style={{width: '0.4%'}}></div>
             </div>
           </div>
        </div>
        <p className="mt-4 text-sm text-gray-400 italic">
          *Data based on 2024 audit of 50 cardiology practices comparing pre- and post-MD Claimo performance.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Specialty-Specific Solutions</h3>
      <ProblemSolution 
        problem="High denial rate (15%+) for Echocardiograms due to 'Medical Necessity'."
        solution="We cross-reference every Echo CPT (93306) with the diagnosis code (ICD-10) against current Local Coverage Determinations (LCD) before submission. This pre-check reduced medical necessity denials to <0.1% for our Florida client base."
      />
      <ProblemSolution 
        problem="Lost revenue from Peripheral Interventions (Lower Extremity)."
        solution="We increased reimbursement by 12% by accurately coding for multiple vascular territories (36245-36248) and adhering to the strict hierarchy of catheter placement codes, which many general coders miss."
      />
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 2. Psychiatry Article
// ----------------------------------------------------------------------
export const PsychiatryArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Psychiatry & Behavioral Health RCM: Mastering the Mind & The Wallet"
      subtitle="From solo Psychologists (PhD/PsyD) and LCSWs to multi-provider Psychiatric groups (MD/NP/PA). We navigate the maze of time-based coding, supervision rules, and the 'Medical Necessity' scrutiny of mental health parity."
    />

    {/* Top Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <MetricCard value="22%" label="Revenue Uplift" trend="E/M + Add-on Optimization" color="purple" />
      <MetricCard value="99.5%" label="Telehealth Compliance" trend="POS 10 vs 02 Accuracy" color="brand" />
      <MetricCard value="Zero" label="Audit Clawbacks" trend="Documentation Defense" color="blue" />
    </div>
    
    {/* Section 1: The Provider Matrix */}
    <section>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Users className="w-6 h-6 text-brand-400" />
        The Provider Billing Hierarchy
      </h3>
      <p className="mb-6 text-gray-400">
        Behavioral health is unique because <em>who</em> provides the service determines <em>how</em> it is billed. A "one-size-fits-all" approach leads to audit disasters.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
          <Stethoscope className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="font-bold text-white mb-2">Psychiatrists (MD/DO)</h4>
          <p className="text-sm text-gray-400">Reimbursed at 100% of Fee Schedule. Focus on <strong>Medication Management (E/M)</strong> combined with therapy add-ons. High scrutiny on complex E/M leveling.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
          <Activity className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="font-bold text-white mb-2">APPs (NP/PA)</h4>
          <p className="text-sm text-gray-400">Reimbursed at 85% (Medicare) unless meeting strict "Incident-To" criteria. <strong>Warning:</strong> Incident-to is rarely compliant in psych due to the independent nature of therapy sessions.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
          <Brain className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="font-bold text-white mb-2">Therapists (LCSW/PhD)</h4>
          <p className="text-sm text-gray-400">Cannot bill medical E/M codes. Revenue is driven by time-based therapy codes (90832, 90834, 90837) and testing. "Incident-to" does not apply.</p>
        </div>
      </div>
    </section>

    {/* Section 2: Revenue Optimization Visual */}
    <section className="bg-dark-950 p-8 rounded-2xl border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">The "Golden Combo" Revenue Impact</h3>
      <p className="mb-8 text-gray-400">
        Many psychiatrists default to billing just a therapy code (90837) or just a med check (99214) to avoid paperwork. This leaves massive revenue on the table.
      </p>
      
      <div className="space-y-6">
        {/* Scenario 1 */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm">Standard: Bill 99214 Only (Med Check)</span>
            <span className="text-gray-400 text-sm font-bold">$128 Avg</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-4">
            <div className="bg-gray-600 h-4 rounded-full" style={{width: '40%'}}></div>
          </div>
        </div>

        {/* Scenario 2 */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-sm">Optimized: Bill 99214 + 90833 (Med Check + 16-37 min Therapy)</span>
            <span className="text-brand-400 text-sm font-bold">$195 Avg (+52%)</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-500/20 animate-pulse"></div>
            <div className="bg-gradient-to-r from-brand-600 to-purple-500 h-4 rounded-full" style={{width: '65%'}}></div>
          </div>
        </div>

         {/* Scenario 3 */}
         <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-sm">Maximized: Bill 99214 + 90833 + 90785 (Interactive Complexity)</span>
            <span className="text-green-400 text-sm font-bold">$215 Avg (+68%)</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-4">
            <div className="bg-gradient-to-r from-green-600 to-emerald-400 h-4 rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-gray-500 italic">* Reimbursement rates vary by payer and region. 90833 requires separate documentation of therapeutic intervention distinct from med management.</p>
    </section>

    {/* Section 3: Deep Dive Coding Strategies */}
    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Mastering the Code Set</h3>
      <div className="grid gap-6">
        <KeyPoint 
          title="Interactive Complexity (90785)" 
          desc="The 'Hidden Revenue' code. Billable when specific factors complicate delivery: Caregiver interference, use of play equipment, third-party interpreters, or management of sentinel events. Must be documented specifically." 
          icon={Zap}
        />
        <KeyPoint 
          title="Psychological Testing (96130-96133)" 
          desc="We ensure the distinction between 'Test Administration' (Tech or Pro) and 'Evaluation services' (Pro) is clear. We track units (per hour vs per 30 mins) to prevent 'Max Units' denials." 
          icon={ClipboardCheck}
        />
        <KeyPoint 
          title="Crisis Intervention (90839/90840)" 
          desc="Requires 'Imminent life-threatening' condition. We audit notes to ensure the acuity justifies the code and that it isn't billed with other routine service codes, which triggers unbundling edits." 
          icon={AlertTriangle}
        />
      </div>
    </section>

    {/* Section 4: Telehealth & POS */}
    <div className="bg-brand-900/10 border border-brand-500/20 p-6 rounded-xl mt-4">
      <h4 className="text-brand-400 font-bold mb-2 flex items-center gap-2">
        <Laptop className="w-5 h-5" /> 
        Telehealth Nuance: POS 10 vs 02
      </h4>
      <p className="text-sm text-gray-300 mb-4">
        Since 2024, payers distinguish between Telehealth provided in the patient's home (<strong>POS 10</strong>) vs. other locations (<strong>POS 02</strong>).
      </p>
      <ul className="grid md:grid-cols-2 gap-4 text-sm">
        <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-4 h-4 text-green-500"/> <strong>POS 10:</strong> Often pays at the higher Non-Facility rate (100%).</li>
        <li className="flex items-center gap-2 text-gray-400"><Ban className="w-4 h-4 text-red-500"/> <strong>POS 02:</strong> Often pays at the lower Facility rate.</li>
      </ul>
      <p className="text-xs text-brand-300 mt-4">We automatically scrub claims to ensure POS 10 is used whenever the patient is at home, maximizing your reimbursement.</p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 3. Orthopedics Article
// ----------------------------------------------------------------------
export const OrthopedicsArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Orthopedics RCM: Managing The Global Surgical Package"
      subtitle="From high-volume joint replacements to complex trauma, orthopedic billing demands a deep understanding of the 90-day global period and the cost of implantable hardware."
    />
    
    <div className="bg-dark-950 border border-white/10 p-8 rounded-xl mb-10">
      <h3 className="text-xl font-bold text-white mb-6">The Implant Log Recon</h3>
      <p className="mb-4">One of the largest sources of lost revenue in Orthopedics is unbilled implants and hardware.</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">1</div>
          <span className="text-gray-300">Surgeon dictates "used Synthes plate".</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold">2</div>
          <span className="text-gray-300">Invoice not attached to chart. Claim sent without L-code.</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">3</div>
          <span className="text-white font-bold">The MD Claimo Way:</span>
        </div>
        <p className="ml-12 text-brand-400 text-sm">We hold the claim until the implant invoice is reconciled, ensuring you get reimbursed for 100% of supply costs + markup.</p>
      </div>
    </div>

    <section>
       <h3 className="text-2xl font-bold text-white mb-6">Surgical Coding Nuances</h3>
       <div className="grid md:grid-cols-2 gap-6">
          <KeyPoint 
            title="Fracture Care (Global vs Itemized)" 
            desc="We analyze whether it's more profitable to bill global fracture care codes or itemize the E/M + casting supplies based on your specific payer contracts."
            icon={Bone}
          />
          <KeyPoint 
            title="Modifier 57 (Decision for Surgery)" 
            desc="Ensuring you get paid for the E/M visit the day prior to or day of a major surgery, which is often wrongly bundled by payers."
            icon={CheckCircle2}
          />
       </div>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 4. Pediatrics Article
// ----------------------------------------------------------------------
export const PediatricsArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Pediatrics RCM: Precision in a High-Volume Environment"
      subtitle="Pediatric practices operate on thinner margins than almost any other specialty. With high patient volume and complex vaccine inventory management, a 5% error rate in billing can completely erase a practice's profitability."
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <MetricCard value="100%" label="Vaccine Inventory Match" trend="Zero Shrinkage" color="brand" />
      <MetricCard value="$15k" label="Recovered / Provider" trend="Missed Admin Codes" color="blue" />
      <MetricCard value="98%" label="Well+Sick Payment" trend="Modifier 25 Success" color="purple" />
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The Vaccine Financial Ecosystem</h3>
      <div className="bg-dark-950 p-6 rounded-xl border border-white/10 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Syringe className="w-32 h-32 text-white" />
        </div>
        <p className="mb-4 relative z-10">
          Vaccines are the second largest expense for a pediatric practice after payroll. Managing the billing between <strong>Vaccines for Children (VFC)</strong> and <strong>Private Stock</strong> is critical.
        </p>
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
           <div className="bg-white/5 p-4 rounded-lg">
             <h4 className="text-brand-400 font-bold mb-2">Private Stock</h4>
             <p className="text-sm text-gray-400">We verify that every dose billed includes both the CPT for the toxoid (e.g., 90707 for MMR) AND the administration codes (90460/90461). Missing the second or third component in a combo vaccine (90461) is a common revenue leak.</p>
           </div>
           <div className="bg-white/5 p-4 rounded-lg">
             <h4 className="text-blue-400 font-bold mb-2">VFC Program</h4>
             <p className="text-sm text-gray-400">For Medicaid patients, we ensure the "SL" modifier is appended (state-dependent) and that you are billed only for the administration fee, preventing "double-dipping" audits that lead to heavy fines.</p>
           </div>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The "Well + Sick" Visit Strategy (Modifier 25)</h3>
      <p className="mb-6">
        When a parent brings a child in for a Well-Child check (99391-99395) but also brings up a new, significant concern like an ear infection or asthma flare-up, you deserve to be paid for both.
      </p>
      
      <ProblemSolution 
        problem="Payers routinely deny the Sick Visit (99213/99214) as 'inclusive' to the physical."
        solution="We audit the chart for 'Significant, Separately Identifiable Evaluation and Management'. We ensure the documentation clearly separates the preventive counseling from the acute management history and exam, creating a bulletproof defense for Modifier 25 usage."
      />
    </section>

    <section>
       <h3 className="text-2xl font-bold text-white mb-6">Maximizing Screening Revenue</h3>
       <p className="mb-6">Pediatrics is proactive. We track age-specific periodicity schedules to ensure no screening opportunity is missed.</p>
       <div className="grid gap-4">
          <KeyPoint 
            title="Developmental & Autism Screening (96110 / 96111)" 
            desc="We track benchmarks at 9, 18, and 30 months. We automate alerts if these codes are missing from eligible well-visits." 
            icon={Baby} 
          />
          <KeyPoint 
            title="Adolescent Depression (96127)" 
            desc="With mental health crises on the rise, we ensure every adolescent physical includes (and bills for) a structured depression inventory." 
            icon={Brain} 
          />
          <KeyPoint 
            title="Maternal Depression (96161)" 
            desc="Often overlooked, this code allows pediatricians to bill for screening the mother during the infant's visit. We ensure it's billed under the child's insurance where allowable." 
            icon={Users} 
          />
       </div>
    </section>

    <div className="bg-brand-900/10 border border-brand-500/20 p-6 rounded-xl mt-8">
      <h4 className="text-brand-400 font-bold mb-2 flex items-center gap-2">
        <Activity className="w-5 h-5" /> 
        Newborn Hospital Care
      </h4>
      <p className="text-sm text-gray-300">
        We manage the critical transition of insurance from "Baby Boy/Girl Smith" to the actual named policyholder. Our team aggressively follows up on the 30-day window to ensure hospital rounds (99460-99463) are paid before the "newborn placeholder" coverage expires.
      </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 5. Internal Medicine Article
// ----------------------------------------------------------------------
export const InternalMedicineArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Internal Medicine: The Engine of Healthcare Revenue"
      subtitle="Internal Medicine practices often leave significant money on the table by failing to capture non-face-to-face revenue and properly coding for high-complexity patients."
    />

    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">Capturing Chronic Care Revenue</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-brand-400 font-bold mb-2">Chronic Care Management (CCM)</h4>
          <p className="text-sm mb-4">
            For Medicare patients with 2+ chronic conditions, you can bill for non-face-to-face coordination time.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>99490:</strong> 20 mins of staff time ($40-45 avg)</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>99491:</strong> 30 mins of provider time</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>99491:</strong> Recurring monthly revenue stream</li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-400 font-bold mb-2">Remote Patient Monitoring (RPM)</h4>
          <p className="text-sm mb-4">
            Billing for data transmitted from connected devices (BP cuffs, scales, glucometers).
          </p>
           <ul className="text-sm space-y-2">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>99454:</strong> Device supply & transmission</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>99457:</strong> 20 mins of treatment management</li>
          </ul>
        </div>
      </div>
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Annual Wellness Visits (AWV)</h3>
      <p className="mb-6">
        We track eligibility for G0438 (Initial) and G0439 (Subsequent) to ensure you capture this high-value preventive service annually. We also ensure the correct screening codes (Advance Care Planning, Depression Screen, Alcohol Misuse) are attached to maximize the encounter value.
      </p>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 6. Family Medicine Article
// ----------------------------------------------------------------------
export const FamilyMedicineArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Family Medicine RCM: Breadth and Depth"
      subtitle="Family medicine requires the broadest coding knowledge base. From newborn care to geriatrics, and from minor surgery to counseling, your billing team must be versatile."
    />

    <section>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-dark-950 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
          <Activity className="w-8 h-8 text-brand-400 mb-4" />
          <h4 className="font-bold text-white mb-2">Minor Procedures</h4>
          <p className="text-sm text-gray-400">Ensuring proper billing for joint injections (20610), skin tags, and laceration repairs. We check for Modifier 25 opportunities on every procedure note.</p>
        </div>
        <div className="bg-dark-950 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
          <Building2 className="w-8 h-8 text-brand-400 mb-4" />
          <h4 className="font-bold text-white mb-2">Transitional Care</h4>
          <p className="text-sm text-gray-400">Capturing TCM codes (99495/99496) when patients are discharged from the hospital. These are high-value codes that require phone contact within 2 business days.</p>
        </div>
        <div className="bg-dark-950 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
          <Users className="w-8 h-8 text-brand-400 mb-4" />
          <h4 className="font-bold text-white mb-2">Preventive Medicine</h4>
          <p className="text-sm text-gray-400">Managing the split-billing of a preventive exam (9939X) and a problem-oriented visit (9921X) on the same day.</p>
        </div>
      </div>
    </section>

    <ProblemSolution 
      problem="Denials for 'Global' vs 'Itemized' billing on family planning services."
      solution="We maintain payer-specific rules for IUD insertions and removals, ensuring supply codes (J-codes) are billed alongside the procedure when the device is purchased by the practice."
    />
  </div>
);

// ----------------------------------------------------------------------
// 7. Urgent Care Article
// ----------------------------------------------------------------------
export const UrgentCareArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Urgent Care RCM: Speed, Volume, and Contract Nuance"
      subtitle="The Urgent Care model relies on high volume and rapid turnover. Your billing process must match that speed. A backlog in Urgent Care billing is fatal to cash flow."
    />

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The "S-Code" vs "E/M" Dilemma</h3>
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
        <p className="mb-4">
          Many payers mandate specific "S" codes (e.g., S9083) for urgent care visits instead of standard 99202-99215 E/M codes. These are often flat-rate ("Case Rate") contracts.
        </p>
        <ul className="space-y-3">
           <li className="flex gap-3">
             <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
             <span className="text-sm text-gray-300"><strong>Risk:</strong> Billing a CPT code to a payer requiring an S-code results in 100% denial.</span>
           </li>
           <li className="flex gap-3">
             <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
             <span className="text-sm text-gray-300"><strong>Solution:</strong> Our rules engine automatically swaps CPTs for S-codes based on the specific payer contract linked to the patient's plan.</span>
           </li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Occupational Medicine & Workers Comp</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <KeyPoint 
           title="Separate Workflows"
           desc="We separate OccMed/WorkComp claims from standard medical claims. These require paper attachments (First Report of Injury) and specific state-mandated fee schedules."
           icon={FileText}
        />
        <KeyPoint 
           title="Employer Direct Billing"
           desc="For pre-employment physicals and drug screens, we manage direct invoicing to employers, keeping your A/R clean of 'patient responsibility' that is actually corporate responsibility."
           icon={Building2}
        />
      </div>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 8. SNF Article
// ----------------------------------------------------------------------
export const SNFArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Skilled Nursing Facility (SNF) RCM: The PDPM Era"
      subtitle="Since the shift to the Patient Driven Payment Model (PDPM), revenue is no longer driven by therapy minutes but by clinical characteristics and nursing needs."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <MetricCard value="PDPM" label="Compliance" trend="MDS Assessment Alignment" color="brand" />
      <MetricCard value="Part A" label="Consolidated Billing" trend="Denial Prevention" color="blue" />
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Key Revenue Drivers</h3>
      <div className="space-y-6">
        <KeyPoint 
          title="Consolidated Billing Logic"
          desc="We prevent denials by ensuring services like labs, x-rays, and 'outside' consults are billed to the facility (not Medicare B) when the patient is in a Part A stay. Misdirecting these claims is the #1 cause of SNF write-offs."
          icon={Shield}
        />
        <KeyPoint 
          title="MDS Coding Alignment"
          desc="We work with your MDS coordinators to ensure that the billing data (diagnosis codes, functional scores) perfectly matches the Minimum Data Set (MDS) assessment. Discrepancies here trigger audits and payment retractions."
          icon={ClipboardCheck}
        />
      </div>
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 9. DME Article
// ----------------------------------------------------------------------
export const DMEArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Durable Medical Equipment (DME): Documentation is Currency"
      subtitle="DME billing is heavily audited. The 'Medical Necessity' documentation must be flawless, and the technical requirements for orders are rigid."
    />

    <section>
      <div className="bg-dark-950 p-8 rounded-xl border border-white/10 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">The Compliance Checklist</h3>
        <p className="text-gray-400 mb-6">Before a single claim is transmitted, we verify:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-green-500"/> Valid Face-to-Face Exam notes</li>
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-green-500"/> Standard Written Order (SWO)</li>
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-green-500"/> Proof of Delivery (POD)</li>
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-green-500"/> CMN / DIF forms signed & dated</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Rental vs Purchase Management</h3>
      <ProblemSolution 
        problem="Billing rentals beyond the capped period (e.g., 13 months for oxygen) results in overpayment demands."
        solution="Our system tracks the rental cycle month-by-month. We automatically add the 'KH', 'KI', and 'KJ' modifiers correctly and stop billing once the cap is reached, or convert to maintenance billing."
      />
    </section>
  </div>
);

// ----------------------------------------------------------------------
// 10. Pharmacy Article (ENHANCED)
// ----------------------------------------------------------------------
export const PharmacyArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    {/* Header */}
    <SectionHeader
      title="Pharmacy & Infusion RCM: High Cost, High Stakes"
      subtitle="In pharmacy and infusion billing, margins are slim and inventory costs are astronomical. A single denied J-code claim can wipe out the profit of 50 successful visits."
    />

    {/* Metrics */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <MetricCard value="100%" label="J-Code Unit Audit" trend="NDC-to-Billable Match" color="purple" />
      <MetricCard value="$12k" label="Recovered / Mo" trend="Wastage Capture (JW)" color="blue" />
      <MetricCard value="99%" label="Auth Rate" trend="Step Therapy Compliance" color="brand" />
    </div>

    {/* Section 1: The Math of J-Codes (NDC Units) */}
    <section>
       <h3 className="text-2xl font-bold text-white mb-6">The "Math Problem" of Billing</h3>
       <div className="bg-dark-950 p-6 rounded-xl border border-white/10 mb-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-10">
           <Pill className="w-32 h-32 text-purple-500" />
         </div>
         <p className="mb-6 relative z-10">
           The most common cause of denials is the mismatch between <strong>NDC Units</strong> (e.g., ML or GM) and <strong>Billing Units</strong> (e.g., 10mg).
         </p>
         <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
              <div className="text-red-400 font-bold text-sm uppercase mb-2">The Risk</div>
              <p className="text-sm">Billing 1 Unit of J1745 (Remicade) when the patient received 100mg. Since J1745 is 10mg per unit, billing "1" gets you paid $40 instead of $400.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-green-500/30">
              <div className="text-green-400 font-bold text-sm uppercase mb-2">The Solution</div>
              <p className="text-sm">Our system automatically calculates the multiplier based on the specific NDC package size, ensuring you bill <strong>10 Units</strong> for that 100mg dose.</p>
            </div>
         </div>
       </div>
    </section>

    {/* Section 2: Infusion Hierarchy */}
    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The Infusion Hierarchy Rules</h3>
      <p className="mb-6 text-gray-400">
         You cannot bill codes in random order. The "Initial" service code (e.g., 96365) drives the payment. We structure claims to ensure the highest-value service is listed as primary.
      </p>
      <div className="space-y-4">
        <KeyPoint
          title="Chemotherapy > Therapeutic > Hydration"
          desc="We ensure Chemo admin (96413) is primary over saline hydration (96360), even if hydration started first. Getting this hierarchy wrong results in 'Inclusive Service' denials."
          icon={TrendingUp}
        />
        <KeyPoint
          title="Concurrent vs. Sequential"
          desc="Are two drugs running at the same time (96368) or one after another (96367)? Mis-coding concurrent infusions as sequential triggers immediate audits."
          icon={Clock}
        />
      </div>
    </section>

    {/* Section 3: Wastage & Buy-and-Bill */}
    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Inventory Revenue (Buy-and-Bill)</h3>
      <ProblemSolution
        problem="Discarding the unused portion of a single-use vial (e.g., using 400mg of a 500mg Rituxan vial) is literally throwing money in the trash."
        solution="We mandate the JW Modifier. We bill the 400mg on one line, and the 100mg wastage on a second line with modifier JW. This ensures you are reimbursed for the entire cost of the vial you purchased."
      />
    </section>

    {/* Section 4: 340B & Modifiers */}
    <div className="bg-brand-900/10 border border-brand-500/20 p-6 rounded-xl mt-4">
      <h4 className="text-brand-400 font-bold mb-2 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5" />
        340B Compliance
      </h4>
      <p className="text-sm text-gray-300 mb-4">
        For covered entities purchasing drugs at discounted 340B rates, standard billing constitutes fraud.
      </p>
      <ul className="text-sm space-y-2">
        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>JG Modifier:</strong> Applied to drugs acquired via 340B.</li>
        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> <strong>TB Modifier:</strong> Used for pass-through payments.</li>
      </ul>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 11. Pain Management Article (NEW)
// ----------------------------------------------------------------------
export const PainMgmtArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Pain Management RCM: Navigating Medical Necessity & Bundling"
      subtitle="Pain management is one of the most audited specialties due to the high volume of procedures and opioid-related scrutiny. Proper documentation of 'Conservative Therapy' failure is critical."
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MetricCard value="Urine Tox" label="Frequency Audit" trend="100% Compliant" color="brand" />
      <MetricCard value="Epidurals" label="Imaging Capture" trend="Fluoroscopy Bundling" color="blue" />
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Fluoroscopy & Imaging Rules</h3>
      <div className="bg-dark-950 p-6 rounded-xl border border-white/10 mb-8">
        <p className="mb-4">
           A common error is billing fluoroscopy (77003) separately when it is already bundled into the primary procedure code.
        </p>
        <div className="grid gap-3">
           <div className="flex items-center gap-3">
             <Ban className="w-5 h-5 text-red-500" />
             <span className="text-sm"><strong>Do Not Bill 77003</strong> with Facet Joint Injections (64490-64495). It is now bundled.</span>
           </div>
           <div className="flex items-center gap-3">
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span className="text-sm"><strong>Do Bill 77003</strong> with Sacroiliac Joint Injections (27096) if guidance is used and documented.</span>
           </div>
        </div>
      </div>
    </section>

    <ProblemSolution 
      problem="Denials for Drug Testing (G0480-G0483) due to frequency limits."
      solution="We track the number of testing units per patient year. We ensure 'Definitive' testing is only billed when 'Presumptive' testing shows a discrepancy, aligning with Medicare's strict LCDs."
    />
  </div>
);

// ----------------------------------------------------------------------
// 12. OB/GYN Article (NEW)
// ----------------------------------------------------------------------
export const ObGynArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="OB/GYN RCM: The Global Maternity Puzzle"
      subtitle="Obstetrics billing is unique due to the 'Global Maternity Package'. Splitting antepartum, delivery, and postpartum care correctly when insurance changes or patients transfer is an art form."
    />

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
        <Baby className="w-8 h-8 text-brand-400 mx-auto mb-2" />
        <div className="font-bold text-white">Global Package</div>
        <div className="text-xs text-gray-400">59400 / 59510</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
        <Activity className="w-8 h-8 text-blue-400 mx-auto mb-2" />
        <div className="font-bold text-white">Itemized Care</div>
        <div className="text-xs text-gray-400">High-Risk Visits</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
        <Search className="w-8 h-8 text-purple-400 mx-auto mb-2" />
        <div className="font-bold text-white">Ultrasounds</div>
        <div className="text-xs text-gray-400">Multiple Gestation</div>
      </div>
    </div>

    <section>
       <h3 className="text-2xl font-bold text-white mb-6">Key Billing Scenarios</h3>
       <div className="space-y-4">
         <KeyPoint 
           title="Ultrasounds: Routine vs Medical"
           desc="Routine screening ultrasounds often aren't covered by commercial plans. We distinguish between Z36 (Screening) and problem-oriented codes (e.g., O28.3 - Abnormal findings) to maximize coverage."
           icon={Search}
         />
         <KeyPoint 
           title="Multiple Births"
           desc="Billing for twins requires specific modifiers (usually 22 for increased work, or 51 for second delivery). We know which payers prefer which method to prevent the second delivery from being denied as a duplicate."
           icon={Users}
         />
       </div>
    </section>

    <div className="bg-brand-900/10 border-l-4 border-brand-500 p-6 rounded-r-xl mt-8">
      <h4 className="text-brand-400 font-bold mb-2">Preventive vs Problem Visits</h4>
      <p className="text-sm text-gray-300">
        When a patient comes in for a "Well Woman" exam but discusses a new issue (e.g., heavy bleeding), we compliant bill both the preventive code (9939X) and the E/M code (9921X) with Modifier 25, ensuring you are paid for the extra work.
      </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 13. Dermatology Article (NEW)
// ----------------------------------------------------------------------
export const DermatologyArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Dermatology RCM: Procedures, Pathology, and Cosmetics"
      subtitle="Dermatology is procedure-heavy. The challenge lies in accurately documenting lesion destruction measurements, Mohs surgery stages, and strictly separating cosmetic from medical services."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <MetricCard value="Mohs" label="Staging Accuracy" trend="Zero Recoupments" color="brand" />
      <MetricCard value="Lesions" label="Measurement Audit" trend="Optimized CPT Selection" color="blue" />
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Mohs Micrographic Surgery</h3>
      <div className="bg-dark-950 p-6 rounded-xl border border-white/10 mb-8">
        <p className="mb-4">
          Mohs billing (17311-17315) depends entirely on the "Stage" and the anatomic site.
        </p>
        <ul className="space-y-3">
           <li className="flex gap-3">
             <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
             <span className="text-sm text-gray-300"><strong>Block Mapping:</strong> We ensure the histology map is included in the documentation to support the billed stages.</span>
           </li>
           <li className="flex gap-3">
             <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
             <span className="text-sm text-gray-300"><strong>Reconstruction:</strong> Closures (Flaps/Grafts) are billed separately. We ensure they aren't bundled incorrectly.</span>
           </li>
        </ul>
      </div>
    </section>

    <ProblemSolution 
      problem="Benign vs Malignant Destruction codes."
      solution="We wait for the pathology report before billing destruction codes (17000 vs 17260). Guessing based on clinical impression often leads to downcoding and revenue loss."
    />

    <div className="mt-8 flex gap-4 items-center bg-yellow-900/10 border border-yellow-500/20 p-4 rounded-lg">
      <Sun className="w-8 h-8 text-yellow-500" />
      <p className="text-sm text-yellow-200">
        <strong>Cosmetic Waiver Management:</strong> For procedures like skin tag removal (often cosmetic), we ensure an ABN is on file to bill the patient directly if insurance denies.
      </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 14. Gastroenterology Article (NEW)
// ----------------------------------------------------------------------
export const GastroArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Gastroenterology RCM: Endoscopy & Screening Rules"
      subtitle="GI billing revolves around the nuances of colonoscopy coding: Screening vs Diagnostic vs Surveillance. One wrong modifier changes a 'free' preventive visit into a billable deductible event, causing patient outrage."
    />

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">The Colonoscopy Matrix</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white/5 p-5 rounded-xl border border-white/10">
           <div className="text-brand-400 font-bold mb-2">Screening</div>
           <p className="text-xs text-gray-400">Asymptomatic, age-appropriate. Code Z12.11. Modifier 33 for commercial.</p>
         </div>
         <div className="bg-white/5 p-5 rounded-xl border border-white/10">
           <div className="text-blue-400 font-bold mb-2">Diagnostic</div>
           <p className="text-xs text-gray-400">Symptomatic (bleeding, pain). Patient pays deductible. Code symptoms first.</p>
         </div>
         <div className="bg-white/5 p-5 rounded-xl border border-white/10">
           <div className="text-purple-400 font-bold mb-2">Converted</div>
           <p className="text-xs text-gray-400">Started as screening, found polyp. Modifier PT (Medicare) or 33 (Commercial) is critical.</p>
         </div>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Multiple Endoscopy Rule</h3>
      <p className="mb-4">
        When an EGD (43239) and Colonoscopy (45378) are performed in the same session, the lower-valued procedure is reduced.
      </p>
      <KeyPoint 
        title="Base Value Calculation"
        desc="We audit payments to ensure the reduction is applied to the physician work RVUs only, not the practice expense, maximizing the allowable reimbursement."
        icon={Scale}
      />
    </section>

    <div className="bg-dark-950 p-6 rounded-xl border border-white/10 mt-8">
       <h4 className="text-white font-bold mb-2 flex items-center gap-2">
         <Microscope className="w-5 h-5 text-green-500" /> Anesthesia Billing (Propofol)
       </h4>
       <p className="text-sm text-gray-400">
         We assist in billing for MAC anesthesia (00812) used during GI procedures. We track the 'qualifying circumstances' to justify deep sedation over moderate sedation if challenged by payers.
       </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 15. Nephrology Article (NEW)
// ----------------------------------------------------------------------
export const NephrologyArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader 
      title="Nephrology RCM: The Monthly Capitation Puzzle"
      subtitle="Nephrology billing is dominated by the Monthly Capitation Payment (MCP) for dialysis. Tracking the exact number of face-to-face visits per month determines your tier of payment."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <MetricCard value="MCP" label="Visit Tracking" trend="Tier Optimization" color="blue" />
      <MetricCard value="CKD" label="Stage Documentation" trend="Risk Adjustment" color="green" />
    </div>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">Dialysis MCP Tiers (90960-90962)</h3>
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
        <p className="mb-4 text-sm">Revenue varies drastically based on visit frequency:</p>
        <div className="space-y-3">
           <div className="flex justify-between items-center bg-dark-950 p-3 rounded-lg border border-white/5">
             <span className="text-gray-300">1 Visit / Month</span>
             <span className="text-red-400 font-bold">Base Pay</span>
           </div>
           <div className="flex justify-between items-center bg-dark-950 p-3 rounded-lg border border-white/5">
             <span className="text-gray-300">2-3 Visits / Month</span>
             <span className="text-yellow-400 font-bold">Mid Tier</span>
           </div>
           <div className="flex justify-between items-center bg-dark-950 p-3 rounded-lg border border-brand-500/30">
             <span className="text-white font-bold">4+ Visits / Month</span>
             <span className="text-green-400 font-bold">Max Reimbursement</span>
           </div>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          *We track provider rounding schedules to ensure you hit the 4-visit threshold for maximum reimbursement whenever clinically appropriate.
        </p>
      </div>
    </section>

    <ProblemSolution 
      problem="Denials for anemia management (ESA injections) in dialysis patients."
      solution="We monitor Hemoglobin/Hematocrit levels. We append the EA or EC modifiers correctly to certify that the levels support medical necessity for Epogen/Aranesp administration."
    />

    <div className="mt-8">
       <KeyPoint 
         title="CKD Staging & Risk Adjustment" 
         desc="We audit charts to ensure CKD stages (1-5) are documented specifically. 'Unspecified' renal failure lowers the patient's Risk Adjustment Factor (RAF) score, reducing potential value-based payments."
         icon={Droplets}
       />
    </div>
  </div>
);