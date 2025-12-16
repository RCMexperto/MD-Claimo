import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, FileText, Ban, Lightbulb } from 'lucide-react';

// Shared styles
interface PropsWithChildren {
  children: React.ReactNode;
}

const H3: React.FC<PropsWithChildren> = ({ children }) => <h3 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h3>;
const P: React.FC<PropsWithChildren> = ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>;
const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 mb-6">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-gray-300">
        <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

interface CalloutProps {
  title: string;
  children: React.ReactNode;
  type?: 'info' | 'warning';
}

const Callout: React.FC<CalloutProps> = ({ title, children, type = 'info' }) => (
  <div className={`p-6 rounded-xl border ${type === 'warning' ? 'bg-red-900/10 border-red-500/20' : 'bg-brand-900/10 border-brand-500/20'} my-6`}>
    <h4 className={`font-bold mb-2 flex items-center gap-2 ${type === 'warning' ? 'text-red-400' : 'text-brand-400'}`}>
      {type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
      {title}
    </h4>
    <div className="text-sm text-gray-300">{children}</div>
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 1: ICD-10 Updates
// ----------------------------------------------------------------------
export const ICD10UpdateArticle = () => (
  <div>
    <P>
      The October 1st ICD-10-CM updates are not just administrative suggestions—they are mandatory. 
      Failing to update your cheat sheets and EHR templates will result in immediate <strong>"Invalid Diagnosis Code"</strong> denials.
      For 2025, CMS has focused heavily on specificity in social factors, hypoglycemia, and eating disorders.
    </P>

    <H3>1. Hypoglycemia Specificity (E16.x)</H3>
    <P>
      "Unspecified" hypoglycemia is no longer sufficient. You must now document the <em>cause</em> level.
      New codes distinguish between hypoglycemia without coma, with coma, and specifically "Level 1" vs "Level 2" events.
    </P>

    <H3>2. Eating Disorders (F50.x)</H3>
    <P>
      Mental health parity has driven expanded coding for Avoidant/Restrictive Food Intake Disorder (ARFID). 
      If you are a pediatrician or psychiatrist, ensure you aren't defaulting to "Eating disorder, unspecified" (F50.9).
    </P>

    <Callout title="The 'Deleted Code' Trap" type="warning">
      <P>
        Using a deleted code (e.g., an old Parkinson's code without the new 'fluctuation' specifier) guarantees a denial. 
        We recommend running a "Utilization Report" on your top 50 codes from last year to cross-reference against the deleted list.
      </P>
    </Callout>

    <H3>Action Plan</H3>
    <List items={[
      "Update EHR 'Favorites' lists to remove deleted codes.",
      "Educate providers on the new documentation requirements for hypoglycemia.",
      "Audit your first 20 claims post-October 1st for immediate rejection feedback."
    ]} />
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 2: Modifier 25
// ----------------------------------------------------------------------
export const Modifier25Article = () => (
  <div>
    <P>
      Modifier 25 is known as the "Payment Saver" but also the "Audit Magnet." 
      It allows you to bill for an Evaluation & Management (E/M) visit on the same day as a procedure, 
      <strong>BUT only if specific criteria are met.</strong>
    </P>

    <H3>The "Significant, Separately Identifiable" Rule</H3>
    <P>
      You cannot bill a visit just because you said "hello" before doing a procedure. 
      The E/M service must be medically necessary and distinct from the pre-operative work associated with the procedure.
    </P>

    <div className="grid md:grid-cols-2 gap-6 my-6">
      <div className="bg-dark-950 p-5 rounded-lg border border-red-500/20">
        <div className="text-red-400 font-bold mb-2 flex items-center gap-2"><Ban className="w-4 h-4"/> Incorrect Usage</div>
        <p className="text-sm text-gray-400">
          Patient comes in for a scheduled wart removal. You freeze the wart and bill 99213-25 + 17000. 
          <br/><br/>
          <em>Why? The assessment of the wart is included in the procedure code.</em>
        </p>
      </div>
      <div className="bg-dark-950 p-5 rounded-lg border border-green-500/20">
        <div className="text-green-400 font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Correct Usage</div>
        <p className="text-sm text-gray-400">
          Patient comes in for wart removal BUT also complains of new onset knee pain. You examine the knee (separate problem) AND remove the wart.
          <br/><br/>
          <em>Result: Bill 99213-25 + 17000.</em>
        </p>
      </div>
    </div>

    <Callout title="Documentation Tip">
      <P>
        To survive an audit, physically separate the notes. Use a header: <strong>"Procedural Note"</strong> distinct from <strong>"HPI/Exam"</strong>.
      </P>
    </Callout>
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 3: Telehealth POS
// ----------------------------------------------------------------------
export const TelehealthArticle = () => (
  <div>
    <P>
      The Public Health Emergency (PHE) waivers have evolved into permanent confusion. 
      The biggest revenue killer in telehealth right now is using the wrong <strong>Place of Service (POS)</strong> code.
    </P>

    <H3>POS 02 vs. POS 10: The Money Difference</H3>
    <P>
      CMS now distinguishes between where the patient is located.
    </P>
    <List items={[
      "POS 10: Telehealth Provided in Patient's Home. (Pays at Non-Facility Rate - HIGHER)",
      "POS 02: Telehealth Provided Other than in Patient's Home (e.g., patient is at a hospital or library). (Pays at Facility Rate - LOWER)"
    ]} />

    <P>
      If you default everything to POS 02, you are voluntarily taking a ~15-20% pay cut on every visit (depending on the code). 
      Most commercial payers have adopted this CMS standard.
    </P>

    <H3>Audio-Only Visits (99441-99443)</H3>
    <P>
      Don't bill standard E/M codes (99213/99214) if the video failed. 
      You must revert to telephone codes (99441-99443). 
      While reimbursement is lower, billing a 99214 for an audio-only call is considered fraudulent without the Modifier 93 (Audio-Only) exception where applicable.
    </P>
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 4: SDOH Z-Codes
// ----------------------------------------------------------------------
export const SDOHArticle = () => (
  <div>
    <P>
      Social Determinants of Health (SDOH) codes (Z55-Z65) used to be "informational only." 
      Today, they are powerful tools for <strong>Risk Adjustment</strong> and justifying <strong>Medical Necessity</strong>.
    </P>

    <H3>Why Capture "Non-Medical" Problems?</H3>
    <P>
      If a patient has "Housing Instability" (Z59.0) or "Food Insecurity" (Z59.4), they are statistically higher risk for readmission and complications.
      Documenting these codes:
    </P>
    <List items={[
      "Increases the complexity of Medical Decision Making (MDM), potentially justifying a Level 4 or 5 visit.",
      "Alerts payers to high-risk patients who may need case management services.",
      "Improves your RAF (Risk Adjustment Factor) score in value-based contracts."
    ]} />

    <Callout title="Who Can Document?" type="info">
      <P>
        Good news: You don't need the MD to document these! 
        SDOH data can be collected by support staff (MAs, Nurses, Social Workers) or via patient intake forms, 
        as long as the provider signs off on the plan of care.
      </P>
    </Callout>
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 5: Incident-To Billing
// ----------------------------------------------------------------------
export const IncidentToArticle = () => (
  <div>
    <P>
      Billing "Incident-To" allows a Nurse Practitioner (NP) or PA to be reimbursed at 100% of the physician fee schedule 
      (instead of the standard 85%). However, the rules are rigid, and the audits are aggressive.
    </P>

    <H3>The 3 Golden Rules</H3>
    <div className="space-y-4 my-6">
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
        <div>
          <strong className="text-white block">Established Problems Only</strong>
          <span className="text-sm text-gray-400">The NP cannot treat a *new* patient or a *new* problem. If the patient has a new complaint, bill under the NP's NPI (at 85%).</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
        <div>
          <strong className="text-white block">Direct Supervision</strong>
          <span className="text-sm text-gray-400">The physician must be <strong>in the office suite</strong> (not just available by phone) and immediately available to assist.</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
        <div>
          <strong className="text-white block">Active Participation</strong>
          <span className="text-sm text-gray-400">The physician must have established the initial plan of care, and the NP is merely following it.</span>
        </div>
      </div>
    </div>

    <Callout title="Audit Risk" type="warning">
      <P>
        If the doctor calls out sick and the NP sees patients alone, 
        <strong>you cannot bill Incident-To</strong>. You must bill under the NP's credential. 
        Update your billing software to flag these days automatically.
      </P>
    </Callout>
  </div>
);

// ----------------------------------------------------------------------
// ARTICLE 6: Medical Necessity
// ----------------------------------------------------------------------
export const MedicalNecessityArticle = () => (
  <div>
    <P>
      "Medical Necessity" is the number one denial reason for E/M codes. 
      It doesn't matter how long you spent with the patient; if the documentation doesn't prove <em>why</em> the care was needed, you won't get paid.
    </P>

    <H3>The "Cloning" Epidemic</H3>
    <P>
      Copy-pasting notes (macros) is a red flag. 
      If a 25-year-old patient's note looks identical to a 65-year-old's note because of "Note Bloat," auditors will downcode it.
    </P>

    <H3>Connecting Diagnosis to Plan</H3>
    <P>
      Don't just list diagnoses. Link them.
    </P>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 border border-red-500/20 rounded bg-red-900/5">
         <span className="text-red-400 font-bold block mb-1">Weak Note:</span>
         <span className="text-gray-400 text-sm">"Diagnosis: Hypertension. Plan: Continue meds."</span>
      </div>
      <div className="p-4 border border-green-500/20 rounded bg-green-900/5">
         <span className="text-green-400 font-bold block mb-1">Strong Note:</span>
         <span className="text-gray-400 text-sm">"Hypertension uncontrolled on current dose. Risk of stroke elevated. Increasing Lisinopril to 20mg."</span>
      </div>
    </div>

    <P>
      The second note justifies the complexity. The first does not.
    </P>
  </div>
);