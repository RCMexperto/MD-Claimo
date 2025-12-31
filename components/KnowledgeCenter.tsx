import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Download, 
  Filter,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Tag,
  Sparkles,
  FileCheck,
  Construction,
  Activity,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  ShieldCheck,
  Users
} from 'lucide-react';
import { MANUALS_AND_GUIDES, LEARN_ARTICLES } from '../constants';
import { LearnItem } from '../types';

interface KnowledgeCenterProps {
  onBack: () => void;
  onArticleClick: (article: LearnItem) => void;
}

const CCM_FAQS = [
  { q: "What is the fundamental goal of CCM?", a: "It is designed to provide better health for patients with multiple chronic conditions through continuous, non-face-to-face care coordination." },
  { q: "Which practitioners are eligible to bill for CCM?", a: "Physicians, NPs, PAs, Clinical Nurse Specialists, and Certified Nurse-Midwives." },
  { q: "Can a patient have CCM services from multiple doctors?", a: "No. Only one practitioner can bill for a specific patient in a given calendar month." },
  { q: "Is patient consent required every month?", a: "No. Consent is obtained only once at the start of the program, unless the patient changes practitioners." },
  { q: "What counts as \"Clinical Staff\" for billing purposes?", a: "Staff working under the direction of the billing practitioner on an \"incident to\" basis, such as MAs or RNs." },
  { q: "Is a face-to-face visit required before starting CCM?", a: "Yes, for new patients or those not seen in a year, an initiating visit (AWV, IPPE, or E/M) is required." },
  { q: "How do I bill for an additional 20 minutes of non-complex staff time?", a: "You use the add-on code 99439 after the initial 20 minutes (99490) are met." },
  { q: "Can CCM and Transitional Care Management (TCM) be billed in the same month?", a: "Yes, TCM and CCM can be billed concurrently if medically necessary, but time cannot be double-counted." },
  { q: "What is the difference between 99490 and 99491?", a: "99490 is for 20 minutes of clinical staff time; 99491 is for 30 minutes of physician/QHP personal time." },
  { q: "What documentation is needed for a \"Complex\" CCM claim (99487)?", a: "You must document at least 60 minutes of staff time and moderate-to-high complexity medical decision-making." },
  { q: "Does Medigap cover the patient’s 20% coinsurance?", a: "Yes, Medigap usually covers the cost-sharing for CCM services." },
  { q: "What happens if a patient dies mid-month?", a: "You can still bill for CCM if the time threshold was met before the patient’s death." },
  { q: "Are there any services that cannot be billed with CCM?", a: "Yes. CCM cannot be billed with home health/hospice supervision (G0181/G0182) or certain ESRD services." },
  { q: "Does the care plan have to be in a certified EHR?", a: "Yes. Patient information must be recorded in a certified EHR to meet the core CCM requirements." }
];

const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({ onBack, onArticleClick }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Manuals' | 'Blogs' | 'Case Studies'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqIndices, setExpandedFaqIndices] = useState<number[]>([]);
  const [isManualOpen, setIsManualOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    if (expandedFaqIndices.length === CCM_FAQS.length) {
      setExpandedFaqIndices([]);
    } else {
      setExpandedFaqIndices(CCM_FAQS.map((_, i) => i));
    }
  };

  const filteredResources = MANUALS_AND_GUIDES.filter(r => 
    (activeTab === 'All' || 
     (activeTab === 'Manuals' && (r.type === 'Manual' || r.type === 'Guide')) ||
     (activeTab === 'Case Studies' && r.type === 'Case Study')) &&
    (r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     r.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredBlogs = LEARN_ARTICLES.filter(b => 
    (activeTab === 'All' || activeTab === 'Blogs') &&
    (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isEmpty = filteredBlogs.length === 0 && filteredResources.length === 0;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors group mb-8 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </button>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold rounded-full uppercase tracking-wider">Expert Resources</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              The MD Claimo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
                Knowledge Center
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Unlock the strategies used by top-performing practices. Access proprietary manuals, expert blog analysis, and specialized billing guides.
            </p>
          </div>

          <div className="w-full lg:w-96 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-white/10 rounded-xl bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-all shadow-2xl"
              placeholder="Search guides, codes, articles..."
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 border-b border-white/5">
        <div className="flex overflow-x-auto gap-8 no-scrollbar">
          {['All', 'Blogs', 'Manuals', 'Case Studies'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                activeTab === tab ? 'text-brand-400' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Chronic Care Management (CCM) Featured Section */}
            {(activeTab === 'All' || activeTab === 'Blogs') && (
              <section className="bg-gradient-to-br from-indigo-900/20 to-dark-900 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-colors shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Activity className="w-64 h-64 text-indigo-400" />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Chronic Care Management (CCM) Hub</h2>
                            <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">2025 Revenue Protocols</p>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">
                       Transform Patient Care into a <br/>
                       <span className="text-indigo-400">Sustainable Revenue Stream</span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-6 font-light">
                       Why Leading Practices Trust MD Claimo for Chronic Care Management
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        Managing chronic conditions is the backbone of primary care, but the administrative burden of CCM billing often leaves thousands of dollars on the table. At MD Claimo, we bridge the gap between clinical excellence and financial performance.
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                       <div className="bg-dark-950/50 p-5 rounded-xl border border-white/5">
                         <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                           <CheckCircle2 className="w-5 h-5 text-indigo-400" /> 2025 Billing Compliance
                         </h4>
                         <p className="text-sm text-gray-400 leading-relaxed">We utilize the most current CPT codes (99490, 99491, 99487) and Medicare PFS rates to maximize your monthly returns.</p>
                       </div>
                       <div className="bg-dark-950/50 p-5 rounded-xl border border-white/5">
                         <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-indigo-400" /> Audit-Proof Documentation
                         </h4>
                         <p className="text-sm text-gray-400 leading-relaxed">Our team ensures every second of clinical staff and physician time is tracked and justified according to "incident to" and supervision rules.</p>
                       </div>
                       <div className="bg-dark-950/50 p-5 rounded-xl border border-white/5">
                         <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                           <Activity className="w-5 h-5 text-indigo-400" /> Seamless Care Integration
                         </h4>
                         <p className="text-sm text-gray-400 leading-relaxed">We assist in establishing and monitoring the electronic comprehensive care plans required by CMS to satisfy all 2025 quality benchmarks.</p>
                       </div>
                       <div className="bg-dark-950/50 p-5 rounded-xl border border-white/5">
                         <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                           <TrendingUp className="w-5 h-5 text-green-400" /> Revenue Growth
                         </h4>
                         <p className="text-sm text-gray-400 leading-relaxed">On average, a practice with 250 CCM patients can see <strong>$116,470</strong> in annual net revenue after expenses. We help you get there.</p>
                       </div>
                    </div>

                    {/* CTA & Manual Toggle */}
                    <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                       <div className="md:pr-8">
                          <h4 className="text-white font-bold text-lg mb-1">2025 Physician’s Manual to CCM Excellence</h4>
                          <p className="text-sm text-gray-300">Download the definitive guide for simplified billing rules, CPT tables, and compliance checklists.</p>
                       </div>
                       <button 
                         onClick={() => setIsManualOpen(!isManualOpen)}
                         className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/20 whitespace-nowrap shrink-0"
                       >
                         {isManualOpen ? <Minus className="w-4 h-4"/> : <BookOpen className="w-4 h-4" />}
                         {isManualOpen ? 'Close Manual' : 'View Manual'}
                       </button>
                    </div>

                    {/* THE MANUAL CONTENT (Collapsible) */}
                    {isManualOpen && (
                        <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-12 mb-12 shadow-2xl animate-fade-in relative overflow-hidden">
                           {/* Decorative background element for paper feel */}
                           <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-bl-full opacity-50 -z-0"></div>

                           <div className="relative z-10">
                             {/* Header */}
                             <div className="border-b-4 border-indigo-600 pb-6 mb-8">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-2">2025 CHRONIC CARE MANAGEMENT (CCM)</h2>
                                <h3 className="text-xl font-bold text-indigo-600 uppercase tracking-widest">The Definitive Physician's Manual</h3>
                             </div>

                             {/* Section 1 */}
                             <div className="mb-10">
                                <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                   <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                                   Defining CCM: The Clinical Standard
                                </h4>
                                <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                                   Chronic Care Management (CCM) is a critical non-face-to-face service designed for Medicare beneficiaries with two or more chronic conditions. This service allows providers to be reimbursed for the extensive work performed outside of the exam room.
                                </p>
                                <ul className="space-y-3 ml-4 border-l-2 border-indigo-100 pl-6 py-2">
                                   <li className="text-slate-700"><strong>Duration:</strong> Conditions must be expected to last at least 12 months or until the patient's death.</li>
                                   <li className="text-slate-700"><strong>Risk Level:</strong> Conditions must place the patient at significant risk of death, acute exacerbation, or functional decline.</li>
                                   <li className="text-slate-700"><strong>Technology:</strong> Services are provided via a certified Electronic Health Record (EHR) and coordinated remotely.</li>
                                </ul>
                             </div>

                             {/* Section 2 */}
                             <div className="mb-10">
                                <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                   <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                                   Patient Eligibility & Enrollment Criteria
                                </h4>
                                <p className="text-slate-600 mb-4 font-medium">To ensure a compliant, audit-proof claim, MD Claimo requires the following documentation:</p>
                                <ul className="space-y-4">
                                   <li className="text-slate-700 flex gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                      <span><strong>The Initiating Visit:</strong> For new patients or those not seen within 12 months, an initiating visit is mandatory. This can be a face-to-face E/M visit (Levels 2-5), an Annual Wellness Visit (AWV), or an Initial Preventive Physical Exam (IPPE). <em className="block mt-1 text-indigo-600 font-semibold">Note: Per 2025 guidelines, this visit can be conducted via Telehealth.</em></span>
                                   </li>
                                   <li className="text-slate-700 flex gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                      <span><strong>Informed Consent:</strong> Must be obtained once (verbal or written). It must be documented in the EHR, specifically noting the patient’s right to stop the service and their responsibility for co-insurance/deductibles.</span>
                                   </li>
                                   <li className="text-slate-700 flex gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                      <span><strong>Comprehensive Care Plan:</strong> A patient-centered care plan must be electronically established and made available to the care team 24/7.</span>
                                   </li>
                                </ul>
                             </div>

                             {/* Section 3: Table */}
                             <div className="mb-12">
                                <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                   <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                                   2025 Billable CPT Codes & National Averages
                                </h4>
                                <p className="text-slate-500 text-sm mb-6 italic bg-yellow-50 p-3 rounded border border-yellow-100 inline-block">Rates are estimated based on the 2025 Medicare Physician Fee Schedule (MPFS) National Average. Actual reimbursement varies by Geographic Practice Cost Index (GPCI).</p>
                                
                                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                   <table className="w-full text-left border-collapse">
                                      <thead>
                                         <tr className="bg-slate-800 text-white">
                                            <th className="p-4 font-bold text-sm uppercase tracking-wider">CPT CODE</th>
                                            <th className="p-4 font-bold text-sm uppercase tracking-wider">DESCRIPTION</th>
                                            <th className="p-4 font-bold text-sm uppercase tracking-wider">STAFF TYPE</th>
                                            <th className="p-4 font-bold text-sm uppercase tracking-wider">TIME REQ.</th>
                                            <th className="p-4 font-bold text-sm uppercase tracking-wider">EST. PAYMENT</th>
                                         </tr>
                                      </thead>
                                      <tbody className="text-slate-700 text-sm font-medium">
                                         <tr className="border-b border-slate-200 hover:bg-slate-50">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99490</td>
                                            <td className="p-4">Non-Complex CCM (Initial)</td>
                                            <td className="p-4">Clinical Staff</td>
                                            <td className="p-4">20 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$60.49</td>
                                         </tr>
                                         <tr className="border-b border-slate-200 hover:bg-slate-50">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99439</td>
                                            <td className="p-4">Add-on (Non-Complex)</td>
                                            <td className="p-4">Clinical Staff</td>
                                            <td className="p-4">+20 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$45.93</td>
                                         </tr>
                                         <tr className="border-b border-slate-200 hover:bg-slate-50 bg-indigo-50/30">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99487</td>
                                            <td className="p-4">Complex CCM (Initial)</td>
                                            <td className="p-4">Clinical Staff</td>
                                            <td className="p-4">60 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$131.65</td>
                                         </tr>
                                         <tr className="border-b border-slate-200 hover:bg-slate-50 bg-indigo-50/30">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99489</td>
                                            <td className="p-4">Add-on (Complex)</td>
                                            <td className="p-4">Clinical Staff</td>
                                            <td className="p-4">+30 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$70.52</td>
                                         </tr>
                                         <tr className="border-b border-slate-200 hover:bg-slate-50">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99491</td>
                                            <td className="p-4">Professional CCM (Initial)</td>
                                            <td className="p-4">MD / QHP</td>
                                            <td className="p-4">30 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$82.16</td>
                                         </tr>
                                         <tr className="hover:bg-slate-50">
                                            <td className="p-4 font-bold text-indigo-700 text-lg">99437</td>
                                            <td className="p-4">Add-on (Professional)</td>
                                            <td className="p-4">MD / QHP</td>
                                            <td className="p-4">+30 Mins</td>
                                            <td className="p-4 font-bold text-green-700">$57.58</td>
                                         </tr>
                                      </tbody>
                                   </table>
                                </div>
                             </div>

                             {/* Section 4 */}
                             <div className="mb-10">
                                <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                   <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                                   Clinical Staff vs. Physician Time (Audit Prevention)
                                </h4>
                                <p className="text-slate-600 mb-4 font-medium">Understanding who performs the work is the #1 way to prevent recoupment during a Medicare audit.</p>
                                <div className="grid md:grid-cols-3 gap-6">
                                   <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow">
                                      <h5 className="font-bold text-indigo-700 mb-2 flex items-center gap-2"><Users className="w-4 h-4"/> Clinical Staff Time</h5>
                                      <p className="text-sm text-slate-600 leading-relaxed"><strong>(99490, 99487)</strong>: Includes work performed by MAs, LPNs, or RNs under <strong>General Supervision</strong>. The physician does not need to be in the same building as the staff during the activity.</p>
                                   </div>
                                   <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow">
                                      <h5 className="font-bold text-indigo-700 mb-2 flex items-center gap-2"><Activity className="w-4 h-4"/> Professional Time</h5>
                                      <p className="text-sm text-slate-600 leading-relaxed"><strong>(99491)</strong>: This is <strong>High-Value Time</strong>. It applies <em>only</em> when the Physician or Qualified Health Professional (NP/PA) personally performs the care management. Staff time <strong>cannot</strong> be counted toward this code.</p>
                                   </div>
                                   <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow">
                                      <h5 className="font-bold text-indigo-700 mb-2 flex items-center gap-2"><Plus className="w-4 h-4"/> Add-on Logic</h5>
                                      <p className="text-sm text-slate-600 leading-relaxed">Add-on codes (99439, 99489, 99437) must only be reported <em>after</em> the initial time threshold for the primary code is exceeded.</p>
                                   </div>
                                </div>
                             </div>

                             {/* Section 5 & 6 */}
                             <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                   <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                      <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                                      Qualifying Conditions
                                   </h4>
                                   <p className="text-slate-600 mb-4 text-sm font-medium">Eligible conditions include, but are not limited to:</p>
                                   <ul className="space-y-2 text-sm text-slate-700 font-medium">
                                      <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div><span><strong>Neurological:</strong> Alzheimer’s, Dementia, Parkinson’s.</span></li>
                                      <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div><span><strong>Respiratory:</strong> Asthma, COPD, Emphysema.</span></li>
                                      <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div><span><strong>Metabolic:</strong> Diabetes (Type I & II), Hyperlipidemia.</span></li>
                                      <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div><span><strong>Cardiovascular:</strong> Hypertension, Atrial Fibrillation, CHF.</span></li>
                                      <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div><span><strong>Mental Health:</strong> Depression, Anxiety, Bipolar Disorder.</span></li>
                                   </ul>
                                </div>
                                <div className="bg-indigo-600 text-white p-6 rounded-2xl border border-indigo-500 shadow-xl">
                                   <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                                      <span className="bg-white text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">6</span>
                                      Complex CCM
                                   </h4>
                                   <p className="text-indigo-100 text-sm leading-relaxed font-medium">
                                      To bill <strong>99487 (Complex CCM)</strong>, the patient’s care must involve <strong>Moderate-to-High Complexity Medical Decision Making (MDM)</strong>.
                                      <br/><br/>
                                      This is not just about time; it requires documentation of a significant revision to the care plan or managing a patient whose condition has acutely worsened.
                                   </p>
                                </div>
                             </div>

                             {/* Footer */}
                             <div className="mt-12 pt-8 border-t-2 border-slate-100 text-center">
                                <h4 className="text-2xl font-bold text-indigo-700 mb-2">Need Help Scaling Your RCM?</h4>
                                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">MD Claimo provides full-service CCM tracking and billing integration for 100% virtual and brick-and-mortar practices.</p>
                                <a href="https://www.mdclaimo.com" target="_blank" className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-indigo-200">
                                   Contact MD Claimo Today
                                </a>
                                <p className="text-xs text-slate-400 mt-6 uppercase tracking-widest font-bold">Your RCM Ally</p>
                             </div>
                           </div>
                        </div>
                    )}

                    {/* FAQ SECTION */}
                    <div className="pt-10 border-t border-indigo-500/20">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                           <HelpCircle className="w-5 h-5 text-indigo-400" /> Top 14 CCM FAQs
                        </h3>
                        <button 
                          onClick={handleExpandAll}
                          className="text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-white transition-colors border border-indigo-500/30 px-3 py-1.5 rounded-lg hover:bg-indigo-500/20"
                        >
                          {expandedFaqIndices.length === CCM_FAQS.length ? 'Collapse All' : 'Expand All'}
                        </button>
                      </div>

                      <div className="space-y-3">
                        {CCM_FAQS.map((faq, idx) => {
                          const isOpen = expandedFaqIndices.includes(idx);
                          return (
                            <div 
                              key={idx} 
                              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                isOpen 
                                  ? 'bg-white/10 border-indigo-500/50 shadow-lg' 
                                  : 'bg-dark-950/40 border-white/5 hover:bg-white/5 hover:border-white/10'
                              }`}
                            >
                              <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-start justify-between p-4 text-left gap-4"
                              >
                                <span className={`font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                                  {faq.q}
                                </span>
                                <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                  {isOpen ? (
                                    <Minus className="w-4 h-4 text-indigo-400" />
                                  ) : (
                                    <Plus className="w-4 h-4 text-gray-500 group-hover:text-white" />
                                  )}
                                </div>
                              </button>
                              
                              <div 
                                className={`px-4 text-gray-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                                  isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                              >
                                <div className="pt-2 border-t border-white/5">
                                  {faq.a}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                </div>
              </section>
            )}
            
            {/* Manuals & Guides Section */}
            {filteredResources.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="w-6 h-6 text-brand-400" />
                  <h2 className="text-2xl font-bold text-white">Manuals & Strategy Guides</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((res) => (
                    <div key={res.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all group hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                          <res.icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">
                          {res.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">{res.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {res.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {res.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/5">{tag}</span>
                        ))}
                      </div>
                      <button className="w-full py-3 px-4 bg-white/5 hover:bg-brand-600 rounded-lg text-sm font-bold text-white flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-brand-500/10">
                        <Download className="w-4 h-4" /> Download Resource
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Blogs Section */}
            {filteredBlogs.length > 0 && (activeTab === 'All' || activeTab === 'Blogs') && (
              <section>
                <div className="flex items-center gap-3 mb-8 border-t border-white/5 pt-12">
                  <Sparkles className="w-6 h-6 text-accent-500" />
                  <h2 className="text-2xl font-bold text-white">Latest Blog Insights</h2>
                </div>
                <div className="space-y-6">
                  {filteredBlogs.map((blog) => (
                    <div 
                      key={blog.id} 
                      onClick={() => onArticleClick(blog)}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-8 hover:bg-white/10 cursor-pointer transition-all hover:border-brand-500/30"
                    >
                      <div className="md:w-1/3 h-48 rounded-xl overflow-hidden shrink-0">
                        <img src={blog.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={blog.title} />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">{blog.category}</span>
                          <span className="text-xs text-gray-500">• {blog.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-brand-300 transition-colors">{blog.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-400">
                          Read Analysis <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isEmpty && (
              <div className="text-center py-24 bg-white/5 rounded-3xl border border-dashed border-white/10 flex flex-col items-center">
                <div className="w-20 h-20 bg-dark-900 rounded-full flex items-center justify-center mb-6 border border-white/10">
                  <Construction className="w-10 h-10 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">More Content Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We are currently verifying additional 2025 RCM protocols and manuals. Please check back shortly for updates.
                </p>
                <button 
                  onClick={onBack}
                  className="mt-8 text-brand-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>

          {/* Sidebar / Sidebar CTAs */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Lead Magnet Sidebar */}
            <div className="bg-gradient-to-br from-brand-600 to-blue-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lock className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">The 2025 RCM Survival Kit</h3>
              <p className="text-brand-100 text-sm mb-6 leading-relaxed relative z-10">
                Get our private dashboard template and 2025 Fee Schedule Audit tools sent directly to your inbox.
              </p>
              <div className="space-y-4 relative z-10">
                <input type="email" placeholder="Work Email Address" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:bg-white/30" />
                <button className="w-full py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
                  Send Me The Kit
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-brand-100 font-medium">
                  <FileCheck className="w-3 h-3" /> Spam-free. Industry data only.
                </div>
              </div>
            </div>

            {/* Quick Links / Official Portals */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Payer Fast-Track</h4>
              <ul className="space-y-3">
                {['Availity Essentials', 'Optum Pay', 'PECOS CMS', 'UHC Provider Portal', 'Aetna Navinet'].map(link => (
                  <li key={link}>
                    <a href="#" className="flex items-center justify-between text-sm text-gray-400 hover:text-brand-400 transition-colors group">
                      {link} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;