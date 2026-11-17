/**
 * Single-source structured content for the NLL BOSS Logistics landing page.
 * Copy discipline: emphasizes operating efficiency, margin protection,
 * cash-flow timing, customer communication, and measurable workflows.
 * Contains zero fabricated client results, testimonials, ROI guarantees,
 * or unsupported compliance/integration claims.
 */

export const SITE_META = {
  title: "Freight Brokerage & Logistics Operations Consulting | New Limits Legacy",
  description:
    "BOSS Logistics by New Limits Legacy helps freight brokers, carriers, and growing logistics companies reduce manual dispatch, document handling, customer-update, and invoicing work without necessarily replacing their TMS.",
  canonicalUrl: "https://newlimitslegacy.com/logistics",
  divisionName: "BOSS Logistics Division",
  divisionSubtitle: "New Limits Legacy Consulting",
  parentSiteUrl: "https://newlimitslegacy.com",
  privacyUrl: "https://newlimitslegacy.com/privacy",
  contact: {
    email: "contact@newlimitslegacy.com",
    phoneDisplay: "(214) 843-6001",
    phoneHref: "tel:+12148436001",
    location: "Frisco, Texas",
  },
};

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Assessment", href: "#assessment" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  subheadlineAbove:
    "Smarter operations for freight brokers, carriers, and growing logistics companies.",
  headline: "Move Freight. Not Paperwork.",
  positioning:
    "We help freight operators reduce manual dispatch, document handling, customer-update and invoicing work without necessarily replacing their TMS.",
  primaryCta: {
    label: "Schedule an Operations Assessment",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Solutions",
    href: "#solutions",
  },
  principles: [
    "Keep your current TMS where it works",
    "Shorten the load-to-invoice handoff",
    "Build repeatable workflows your team owns",
  ],
  workflowBlueprint: [
    {
      step: "01",
      name: "Order & Document Intake",
      detail: "Rate confirmations and carrier packets routed into structured records",
      tag: "Operating Efficiency",
    },
    {
      step: "02",
      name: "Dispatch & Carrier Handoff",
      detail: "Assignment rules and dispatch checks without repeated copying",
      tag: "Margin Protection",
    },
    {
      step: "03",
      name: "Visibility & Exceptions",
      detail: "Milestone status updates and proactive shipper communication",
      tag: "Customer Updates",
    },
    {
      step: "04",
      name: "POD Capture & Billing Handoff",
      detail: "Clean BOL/POD verification before QuickBooks invoicing",
      tag: "Cash-Flow Timing",
    },
  ],
};

export const PROBLEM_ITEMS = [
  {
    id: "pod-delays",
    tag: "Cash-Flow Drag",
    title: "Paperwork & POD Delays",
    description:
      "Signed BOLs, proof-of-delivery scans, and lumper receipts arrive scattered across driver texts, shared inboxes, and phone photos.",
    impact:
      "Operational cost: Staff spend hours chasing missing pages before loads can even be queued for billing.",
  },
  {
    id: "manual-dispatch",
    tag: "Coordinator Bottleneck",
    title: "Manual Dispatch Check Calls",
    description:
      "Dispatchers spend peak hours calling carriers for pickup confirmation, transit ETAs, and dock delays while copying updates into customer emails.",
    impact:
      "Operational cost: High coordinator workload limits load capacity per desk and leaves shippers waiting on status.",
  },
  {
    id: "disconnected-stack",
    tag: "Re-Keying Risk",
    title: "Disconnected TMS, Email & Accounting",
    description:
      "Rate confirmations live in email, load notes sit in spreadsheets or a legacy TMS, and billing adjustments get re-typed into QuickBooks.",
    impact:
      "Operational cost: Double entry introduces accessorial omissions, wrong reference numbers, and unbilled margin leaks.",
  },
  {
    id: "invoice-lag",
    tag: "Margin & DSO Exposure",
    title: "Invoice Timing & Reconciliation Lag",
    description:
      "Delivered loads stall in 'pending paperwork' queues for days, slowing customer invoicing while carrier settlement questions pile up.",
    impact:
      "Operational cost: Delayed billing stretches cash conversion cycles and hides true load-level profitability.",
  },
];

export const SOLUTION_CARDS = [
  {
    num: "01",
    focus: "Intake & Compliance",
    title: "Document Intake & POD Processing",
    summary:
      "Standardize how rate confirmations, BOLs, signed PODs, and accessorial receipts are captured, named, and matched to the active load record.",
    outcomes: [
      "Centralized intake routing instead of inbox and text hunting",
      "Missing-document flags immediately after delivery",
      "Clean load folders structured for audit and billing review",
    ],
  },
  {
    num: "02",
    numLabel: "02",
    focus: "Dispatch Operations",
    title: "Dispatch Workflow Automation",
    summary:
      "Connect booking intake, carrier packet checks, dispatch instructions, and internal handoffs so coordinators focus on freight exceptions rather than copy-paste.",
    outcomes: [
      "Consistent load-sheet handoff from booking to dispatch",
      "Structured carrier verification and onboarding checkpoints",
      "Clear desk ownership for brokerage and asset fleets",
    ],
  },
  {
    num: "03",
    focus: "Customer Communication",
    title: "Shipment Visibility & Exception Alerts",
    summary:
      "Replace reactive status firefighting with milestone checkpoints and timely exception alerts when detention, weather, or dock delays arise.",
    outcomes: [
      "Proactive shipper notifications at pickup, transit, and delivery",
      "Early flagging of late arrivals and accessorial events",
      "Fewer inbound 'where is my load?' email threads",
    ],
  },
  {
    num: "04",
    focus: "Cash-Flow Timing",
    title: "Billing & QuickBooks Handoffs",
    summary:
      "Eliminate the gap between delivery and invoice generation by validating complete POD packets, detention charges, and linehaul totals before accounting handoff.",
    outcomes: [
      "Pre-billing completeness checklists tied to load status",
      "Structured QuickBooks invoice preparation and reconciliation",
      "Faster, cleaner settlement tracking across carriers and drivers",
    ],
  },
  {
    num: "05",
    focus: "Executive Visibility",
    title: "Owner KPI Dashboard",
    summary:
      "Give owners and operations managers a straightforward view of unbilled loads, cycle-time delays, exception volume, and desk-level throughput.",
    outcomes: [
      "Daily visibility into loads waiting on PODs or billing",
      "Load-to-cash timing metrics across teams or divisions",
      "Operational reporting built around measurable workflows",
    ],
  },
];

export const PROCESS_STAGES = [
  {
    id: "discover",
    step: "01",
    name: "Discover",
    short: "Map live workflows",
    headline: "Map how loads actually move across desks today",
    description:
      "We shadow and document your real load lifecycle—booking, dispatch, check calls, document collection, billing, and customer updates—without disrupting live freight.",
    deliverables: [
      "Current-state workflow inventory across TMS, email, and spreadsheets",
      "Role and handoff map covering dispatch, carrier ops, and billing",
      "Baseline inventory of manual touchpoints",
    ],
  },
  {
    id: "diagnose",
    step: "02",
    name: "Diagnose",
    short: "Pinpoint friction",
    headline: "Isolate where time, cash flow, and margin stall",
    description:
      "We quantify which manual steps create the largest invoice delays, repeat data entry, or missed accessorial charges so you address root bottlenecks first.",
    deliverables: [
      "Prioritized bottleneck register ranked by time and cash-flow drag",
      "Root-cause breakdown of POD and billing lag",
      "Target opportunity estimate grounded in your volume",
    ],
  },
  {
    id: "design",
    step: "03",
    name: "Design",
    short: "Architect the fix",
    headline: "Design connected workflows around your existing stack",
    description:
      "Before building anything, we specify exact triggers, data fields, approval rules, and TMS/accounting handoffs—keeping what works in your current software.",
    deliverables: [
      "Target-state workflow diagram and field mapping",
      "Exception-handling and human-approval guardrails",
      "Fixed-scope implementation plan and acceptance checklist",
    ],
  },
  {
    id: "implement",
    step: "04",
    name: "Implement",
    short: "Configure & train",
    headline: "Deploy practical automations and role-ready SOPs",
    description:
      "We build and test the agreed document pipelines, alert triggers, billing handoffs, and owner dashboard views, then train your coordinators and back office.",
    deliverables: [
      "Configured workflow automations and workspace views",
      "Role-specific operating SOPs and exception playbooks",
      "End-to-end validation with your team prior to cutover",
    ],
  },
  {
    id: "measure",
    step: "05",
    name: "Measure",
    short: "Verify outcomes",
    headline: "Track cycle time, billing speed, and operational stability",
    description:
      "After launch, we review real operational metrics—POD turnaround, unbilled load aging, manual touch reduction, and team adoption—and refine any edge cases.",
    deliverables: [
      "Post-launch operational scorecard and KPI baseline comparison",
      "Refinement log for edge-case exceptions",
      "Clean internal ownership handoff to your team",
    ],
  },
];

export const ASSESSMENT_PILLARS = [
  {
    num: "01",
    title: "Review One High-Friction Workflow",
    description:
      "Walk through a single high-volume process—such as load-to-cash, dispatch check calls, or carrier packet intake—using real day-to-day examples.",
  },
  {
    num: "02",
    title: "Map Operational Bottlenecks",
    description:
      "Pinpoint where manual re-keying, scattered emails, missing PODs, or delayed billing handoffs slow down coordinators and back-office staff.",
  },
  {
    num: "03",
    title: "Estimate Operational Opportunity",
    description:
      "Evaluate weekly coordinator hours tied up in manual follow-ups, typical days between delivery and invoicing, and margin leakage risks.",
  },
  {
    num: "04",
    title: "Propose Scoped Next Steps",
    description:
      "Leave with a plain-English recommendation outlining what can stay in your current TMS, what should be automated first, and clear next-step scope.",
  },
];

export const ASSESSMENT_BOTTLENECK_PREVIEWS = [
  {
    value: "paperwork",
    label: "Paperwork & POD Delays",
    focusTitle: "Assessment Focus: Document Intake & POD Completion",
    focusSummary:
      "We trace how rate confirmations, signed BOLs, PODs, and lumper receipts arrive today—identifying where missing pages block billing.",
  },
  {
    value: "dispatch",
    label: "Dispatch & Check Calls",
    focusTitle: "Assessment Focus: Dispatch Handoffs & Carrier Coordination",
    focusSummary:
      "We review how loads move from booking to carrier assignment, how dispatch packets go out, and where coordinators re-key load data.",
  },
  {
    value: "tracking",
    label: "Tracking & Exception Alerts",
    focusTitle: "Assessment Focus: Transit Visibility & Customer Updates",
    focusSummary:
      "We examine how check calls, appointment changes, and detention warnings are logged and communicated to shippers.",
  },
  {
    value: "invoicing",
    label: "Invoicing & QuickBooks",
    focusTitle: "Assessment Focus: Delivery-to-Invoice & Accounting Handoffs",
    focusSummary:
      "We inspect the handoff from completed delivery to invoice generation in QuickBooks or factoring—targeting cash-flow lag and missed accessorials.",
  },
  {
    value: "carrier verification",
    label: "Carrier Verification",
    focusTitle: "Assessment Focus: Carrier Packet & Compliance Checks",
    focusSummary:
      "We review how carrier onboarding packets, insurance certificates, and dispatch readiness checks are verified before tendering freight.",
  },
  {
    value: "other",
    label: "Full Load-to-Cash Flow",
    focusTitle: "Assessment Focus: End-to-End Brokerage or Fleet Workflow",
    focusSummary:
      "We map your full sequence—booking, dispatch, tracking, POD, invoice, and payment—to isolate the #1 bottleneck worth fixing first.",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-tms",
    question: "Do I need a new TMS?",
    answer:
      "No. Most operators already have a TMS or dispatch board that works well enough for core load tracking, while the biggest slowdowns happen in the spaces around it—email inboxes, PDF rate confirmations, driver text messages, check calls, and QuickBooks handoffs. We design workflows around your existing tools first and only recommend system changes if a true operational limitation requires it.",
  },
  {
    id: "faq-assessment",
    question: "What happens in an assessment?",
    answer:
      "An Operations Assessment is a focused 30-minute working session. We review one high-friction workflow end-to-end (for example, delivery to POD collection to invoice), map where manual handoffs or delays happen across your team and software, estimate the operational time and cash-flow timing upside, and outline practical, scoped next steps. There is no obligation to move into an implementation engagement.",
  },
  {
    id: "faq-small-brokerages",
    question: "Can small brokerages use this?",
    answer:
      "Yes. Small and mid-sized freight brokerages, asset-based carriers, and hybrid broker-carriers often feel administrative friction most sharply because every coordinator wears multiple hats. Our engagements are scoped around lean teams—improving reliability and reducing manual admin work without requiring an internal IT department.",
  },
  {
    id: "faq-cost",
    question: "What does implementation cost?",
    answer:
      "Implementation pricing depends on the workflow scope, number of handoffs, and tools involved. After the Operations Assessment identifies your highest-leverage bottleneck, we provide a clear, fixed-scope proposal before any implementation begins—starting with targeted single-workflow improvements rather than open-ended consulting retainers.",
  },
];
