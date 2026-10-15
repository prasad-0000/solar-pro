import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import monoImage from "../assets/zap91.png";
import polyImage from "../assets/saatvik.png";
import evaImg from "../assets/azapimg.jfif";
import installImage1 from "../assets/image1.jpeg";
import installImage2 from "../assets/image2.jpeg";
import installImage3 from "../assets/image3.jpeg";
import installImage4 from "../assets/image4.jpeg";
import teamImage from "../assets/teamimage.png";
import swelectimage from "../assets/swelect.jpg";
import Apsimage from "../assets/aps.jfif";
import toughenedGlassImg from "../assets/toughened-glass.jfif";
import realProjectImg from "../assets/real-project-spv.jfif";

import {
  ArrowRight,
  BookOpen,
  Box,
  Cable,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Factory,
  Gauge,
  HardHat,
  Home as HomeIcon,
  Leaf,
  Network,
  ShieldCheck,
  ShoppingCart,
  Sun,
  TreePine,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                            */
/* ------------------------------------------------------------------ */

const STATES = "AP, TS, UP & TN";

const services = [
  { icon: HardHat, title: "Solar EPC", to: "/services", body: "One team from design to switch-on, for homes, businesses, factories and power plants up to 10 MW.", points: ["Design and DISCOM approval", "Supply and installation", "Commissioning and net-metering"] },
  { icon: ShoppingCart, title: "Solar sales", to: "/products", body: "Quality panels and inverters from trusted brands, supplied with warranty.", points: ["SAATVIK, SWELECT, APS, ZAP91", "DEYE, SOLIS, DUROSAL inverters", "12-year manufacturing warranty"] },
  { icon: Wrench, title: "AMC and service", to: "/services", body: "Yearly maintenance contracts that keep your plant producing at its best.", points: ["Robo panel cleaning", "Inverter and earthing checks", "Performance reports"] },
];

const steps = [
  { n: "01", title: "Site Visit", body: "We check your roof or land, shadow and monthly units to size the right system." },
  { n: "02", title: "Registration & Design Approvals", body: "Drawings, DISCOM registration, net-metering and subsidy paperwork, filed for you." },
  { n: "03", title: "Installation & Commissioning", body: "Certified crews, GI structure, proper earthing and lightning protection, then net meter and switch on." },
];

/* 600 Wp panels. 3 kW = 185 sq ft, 5 kW = 330 sq ft, 10 kW = 750 sq ft.
   Units = 4 per kW per day. Saving = units x Rs 7.
   Payback = cost / (saving x 12). For homes the cost is after subsidy. */
const plantTypes = [
  {
    key: "Residential",
    blurb: "Homes and apartments. PM Surya Ghar subsidy applies (up to ₹78,000).",
    rows: [
      { kw: "3 kW", panels: 5, space: "185 sq ft", units: "360", cost: "₹1.95 lakh", save: "₹2,500", supply: "230 V, 1-phase", subsidy: "₹78,000", net: "₹1.17 lakh", payback: "~3.9 yrs" },
      { kw: "5 kW", panels: 9, space: "330 sq ft", units: "600", cost: "₹3.15 lakh", save: "₹4,200", supply: "230 V / 415 V", subsidy: "₹78,000", net: "₹2.37 lakh", payback: "~4.7 yrs" },
      { kw: "10 kW", panels: 17, space: "750 sq ft", units: "1,200", cost: "₹5.25 lakh", save: "₹8,400", supply: "415 V, 3-phase", subsidy: "₹78,000", net: "₹4.47 lakh", payback: "~4.4 yrs" },
    ],
  },
  {
    key: "Commercial",
    blurb: "Shops, offices, schools, hospitals and hotels. No subsidy; savings pay back in about 5 years.",
    rows: [
      { kw: "10 kW", panels: 17, space: "750 sq ft", units: "1,200", cost: "₹5.25 lakh", save: "₹8,400", supply: "415 V, 3-phase", subsidy: "—", payback: "~5.2 yrs" },
      { kw: "15 kW", panels: 25, space: "1,100 sq ft", units: "1,800", cost: "₹8 lakh", save: "₹12,600", supply: "415 V, 3-phase", subsidy: "—", payback: "~5.3 yrs" },
      { kw: "20 kW", panels: 34, space: "1,500 sq ft", units: "2,400", cost: "₹10 lakh", save: "₹16,800", supply: "415 V, 3-phase", subsidy: "—", payback: "~5.0 yrs" },
      { kw: "50 kW", panels: 84, space: "3,700 sq ft", units: "6,000", cost: "₹23 lakh", save: "₹42,000", supply: "415 V, 3-phase", subsidy: "—", payback: "~4.6 yrs" },
    ],
  },
  {
    key: "Industrial & Power Plants",
    blurb: "Factories, cold storage, large campuses and solar power plants, from rooftop to ground-mount and open-access plants.",
    rows: [
      { kw: "100 kW", panels: 167, space: "7,500 sq ft", units: "12,000", cost: "₹44 lakh", save: "₹84,000", supply: "415 V, 3-phase", subsidy: "—", payback: "~4.4 yrs" },
      { kw: "500 kW", panels: 834, space: "37,000 sq ft", units: "60,000", cost: "₹2.1 crore", save: "₹4.2 lakh", supply: "HT, 11–33 kV", subsidy: "—", payback: "~4.2 yrs" },
      { kw: "10,000 kW (10 MW)", panels: "16,667", space: "~45 acres", units: "12 lakh", cost: "₹40 crore", save: "₹84 lakh", supply: "HT, 33 kV+", subsidy: "—", payback: "~4.0 yrs" },
    ],
  },
];

const electrical = [
  { label: "Home supply", value: "230 V", note: "Single-phase, 50 Hz" },
  { label: "Business supply", value: "415 V", note: "Three-phase, 50 Hz" },
  { label: "Panel voltage", value: "40–45 V", note: "At max power, varies by model" },
  { label: "Panel rating", value: "540–720 Wp", note: "Per module, standard test" },
];

const panelWattages = ["540 Wp", "550 Wp", "580 Wp", "600 Wp", "625 Wp", "720 Wp"];

const panelBrands = [
  { name: "SAATVIK", desc: "Cost-effective modules with dependable output for homes and businesses.", image: polyImage },
  { name: "ZAP91", desc: "High-efficiency modules, great when roof space is limited.", image: monoImage },
  { name: "SWELECT", desc: "Trusted modules for residential and commercial rooftops.", image: swelectimage },
  { name: "APS", desc: "Modules supplied with matching APS inverters as a single package.", image: Apsimage },
];

const inverterBrands = ["APS", "DEYE", "SOLIS", "DUROSAL"];

/* System flow (Solar Photo Voltaic Power System Plant) */
const systemFlow = [
  { icon: Sun, title: "Solar panels", note: "Convert sunlight to DC power" },
  { icon: Box, title: "DC junction box", note: "Combines and protects panel strings" },
  { icon: Cpu, title: "Inverter", note: "Converts DC to AC" },
  { icon: Box, title: "AC junction box", note: "Distributes AC output safely" },
  { icon: Cable, title: "Cables", note: "Carry power to the meter" },
  { icon: Gauge, title: "Net meter", note: "Records import and export units" },
  { icon: Network, title: "Grid", note: "Extra units are exported" },
];

/* Residential impact */
const IMPACT = { energy: 1752000, bill: 10512000, trees: 1009900, co2: Math.round(1752000 * 0.71) };
const impactStats = [
  { icon: Zap, label: "Total energy saved", value: `${IMPACT.energy.toLocaleString("en-IN")} kWh` },
  { icon: Wallet, label: "Total bill amount saved", value: `₹${IMPACT.bill.toLocaleString("en-IN")}` },
  { icon: TreePine, label: "Total trees saved", value: `${IMPACT.trees.toLocaleString("en-IN")} Nos` },
  { icon: Leaf, label: "Total CO₂ emissions reduced", value: `${IMPACT.co2.toLocaleString("en-IN")} kg`, note: "kWh × 0.71 kg CO₂" },
];

const faqItems = [
  { q: "How long does a solar installation take?", a: "A home system is installed in 1 to 3 days. From signed order to net-meter activation, most homes take 3 to 6 weeks, depending on DISCOM approval. Larger plants are scheduled after the site survey." },
  { q: "Will solar work during power cuts?", a: "Our standard systems are on-grid without battery, so they switch off during a grid outage for safety. They cut your bill during the day and export extra units to the grid." },
  { q: "Do you handle DISCOM paperwork and subsidy?", a: "Yes. We manage design, DISCOM application, net-metering, inspection and the PM Surya Ghar subsidy claim for homes. The subsidy is paid to your bank account after commissioning and inspection, not as an upfront discount." },
  { q: "Which states do you serve?", a: "We install and service systems across Andhra Pradesh, Telangana, Uttar Pradesh and Tamil Nadu. For other states, call us and we will check." },
  { q: "What warranty do panels carry?", a: "Our panels carry a 12-year piece-to-piece manufacturing warranty, along with a long-term performance warranty." },
  { q: "What does the AMC include?", a: "Scheduled robo panel cleaning, inverter and cable checks, earthing and protection tests, and a performance report so you know the system is producing what it should." },
  { q: "How much can I save?", a: "A 3 kW system produces roughly 360 units a month, which can save around ₹2,500 a month at ₹7 per unit. After the subsidy, most homes recover the cost in 4 to 5 years." },
];

const resources = [
  { icon: BookOpen, title: "Solar buying guide", body: "How to choose system size, panel brand and inverter for your building." },
  { icon: Calculator, title: "Savings checklist", body: "Compare your bill, subsidy, loan EMI and payback before you decide." },
  { icon: Cpu, title: "Inverter guide", body: "APS, DEYE, SOLIS and DUROSAL compared by size and use." },
  { icon: ShieldCheck, title: "Maintenance tips", body: "Cleaning and checks that protect output and your warranty." },
];

/* TODO: replace these with real customer reviews before launch */
const testimonials = [
  { quote: "Our monthly bill dropped from ₹6,800 to under ₹900. The crew was professional and always on time.", name: "Ravi Teja", location: "Kakinada, AP" },
  { quote: "They handled DISCOM approval, net-metering and subsidy without any stress. Highly recommended.", name: "Lakshmi Prasanna", location: "Rajahmundry, AP" },
  { quote: "Neat installation, and the mobile app makes it easy to track daily production.", name: "Srinivas K.", location: "Hyderabad, TS" },
];

/* ------------------------------------------------------------------ */
/*  HERO ANIMATION (real-time panels)                                  */
/* ------------------------------------------------------------------ */

const SUN_X = 240;
const SUN_Y = 50;

function SolarFlowAnimation() {
  return (
    <div className="solar-flow relative w-full">
      <svg viewBox="0 0 600 400" className="h-auto w-full" role="img" aria-label="Sunlight striking live solar panels and power flowing to a home">
        <defs>
          <linearGradient id="rayGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
          </linearGradient>
        </defs>

        <circle cx={SUN_X} cy={SUN_Y} r="20" fill="var(--primary)" />
        <circle cx={SUN_X} cy={SUN_Y} r="20" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="9" className="sf-sun-halo" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          return (
            <line key={i} x1={SUN_X + Math.cos(a) * 28} y1={SUN_Y + Math.sin(a) * 28} x2={SUN_X + Math.cos(a) * 40} y2={SUN_Y + Math.sin(a) * 40} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" className="sf-ray-spoke" style={{ animationDelay: `${i * 0.12}s` }} />
          );
        })}

        {[
          { x1: 205, y1: 98, x2: 180, y2: 150, delay: "0s" },
          { x1: 240, y1: 104, x2: 240, y2: 150, delay: "0.35s" },
          { x1: 275, y1: 98, x2: 300, y2: 150, delay: "0.7s" },
        ].map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="url(#rayGradient)" strokeWidth="3" strokeLinecap="round" className="sf-ray-fall" style={{ animationDelay: r.delay }} />
        ))}

        {/* live panel array: 4 x 3 cells, each pulses in sequence */}
        <rect x="130" y="155" width="220" height="130" rx="10" fill="url(#panelGradient)" stroke="var(--border)" strokeWidth="1.5" />
        {[0, 1, 2].flatMap((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect key={`${row}-${col}`} className="sf-cell" style={{ animationDelay: `${(row * 4 + col) * 0.18}s` }} x={140 + col * 52} y={165 + row * 38} width="44" height="30" rx="3" fill="rgba(79,209,197,0.2)" stroke="rgba(79,209,197,0.5)" strokeWidth="1" />
          ))
        )}
        <circle cx="140" cy="140" r="4" fill="var(--secondary)" className="sf-live-dot" />
        <text x="150" y="144" fontSize="10" fontWeight="700" letterSpacing="0.5" fill="var(--secondary)">LIVE PANELS</text>
        <text x="240" y="308" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">600 Wp SOLAR PANELS</text>

        <path d="M 350 220 C 400 220, 410 316, 452 316" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4.5" fill="var(--secondary)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.75}s`} path="M 350 220 C 400 220, 410 316, 452 316" />
          </circle>
        ))}

        <g transform="translate(430,266)">
          <path d="M0 62 V22 L50 -14 L100 22 V62 Z" fill="rgba(255,255,255,0.03)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="18" y="32" width="24" height="30" rx="2" fill="rgba(255,183,77,0.16)" stroke="var(--border)" />
          <rect x="58" y="32" width="24" height="18" rx="2" fill="rgba(79,209,197,0.16)" stroke="var(--border)" />
        </g>
        <text x="480" y="358" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">YOUR HOME · 230 V</text>
      </svg>

      <style>{`
        .sf-sun-halo { transform-box: fill-box; transform-origin: center; animation: sf-halo 2.6s ease-in-out infinite; }
        .sf-ray-spoke { animation: sf-flicker 2.6s ease-in-out infinite; }
        .sf-ray-fall { stroke-dasharray: 10 40; animation: sf-fall 1.8s linear infinite; }
        .sf-cell { animation: sf-cell 2.4s ease-in-out infinite; }
        .sf-live-dot { animation: sf-flicker 1.2s ease-in-out infinite; }
        @keyframes sf-halo { 0%,100% { opacity: .35; transform: scale(1); } 50% { opacity: .05; transform: scale(1.18); } }
        @keyframes sf-flicker { 0%,100% { opacity: .45; } 50% { opacity: 1; } }
        @keyframes sf-fall { 0% { stroke-dashoffset: 50; opacity: 0; } 15% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: .2; } }
        @keyframes sf-cell { 0%,100% { fill: rgba(79,209,197,0.12); } 50% { fill: rgba(255,183,77,0.55); } }
        @media (prefers-reduced-motion: reduce) { .sf-sun-halo, .sf-ray-spoke, .sf-ray-fall, .sf-cell, .sf-live-dot { animation: none; } }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

/* Left-aligned section heading (original spacing and size) */
function SectionHead({ eyebrow, title, body }) {
  return (
    <Reveal className="max-w-3xl text-left">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">{body}</p>}
    </Reveal>
  );
}

const Section = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
  </section>
);

const IconBox = ({ icon: Icon }) => (
  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
    <Icon size={20} className="text-[var(--primary)]" />
  </div>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [plantKey, setPlantKey] = useState("Residential");
  const [liveKw, setLiveKw] = useState(3.9);
  const [liveUnits, setLiveUnits] = useState(12.4);
  const storiesSliderRef = useRef(null);
  const plant = plantTypes.find((p) => p.key === plantKey);

  /* real-time demo values for the hero card */
  useEffect(() => {
    const id = setInterval(() => {
      setLiveKw(() => +(3.4 + Math.random() * 1.4).toFixed(2));
      setLiveUnits((u) => (u >= 20 ? 12.4 : +(u + 0.08).toFixed(2)));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const panelLayers = [
    { name: "Toughened Tempered Glass", note: "Toughened front glass protects the cells from hail, dust and rain.", image: toughenedGlassImg },
    { name: "EVA encapsulant", note: "Bonds the cells to the glass and seals out moisture.", image: evaImg },
    { name: "Solar cells and backsheet", note: "Cells make the electricity; the backsheet insulates the rear.", image: monoImage },
  ];

  const customerStories = [
    { image: installImage1, testimonial: testimonials[0] },
    { image: installImage2, testimonial: testimonials[1] },
    { image: installImage3, testimonial: testimonials[2] },
    { image: installImage4, testimonial: null },
  ];

  const scrollStories = (dir) =>
    storiesSliderRef.current?.scrollBy({ left: dir * storiesSliderRef.current.clientWidth * 0.85, behavior: "smooth" });

  return (
    <div>
      {/* ============================ 1. HERO ============================ */}
      <section className="relative overflow-hidden">
        <div className="solar-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="absolute -top-24 right-[-15%] h-80 w-80 rounded-full bg-[rgba(255,122,69,0.12)] blur-[90px]" />
        <div className="absolute left-[-8%] top-1/3 h-72 w-72 rounded-full bg-[rgba(79,209,197,0.12)] blur-[90px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[var(--bg)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-3xl lg:mx-0">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
                <Sun size={12} /> Solar EPC, sales and AMC · {STATES}
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Bright ideas.
                <br />
                <span className="text-gradient">Smarter power.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Helios designs, gets approved, installs and maintains solar plants from 3 kW to 10 MW, for homes,
                businesses, industry and power plants. Lower bills, protection from tariff hikes, neat finish.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Get your free quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/portfolio" className="btn-secondary">See our portfolio</NavLink>
              </motion.div>

              {/* state chips replace the sample avatars */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex items-center gap-4">
                <div className="flex items-center -space-x-2">
                  {["AP", "TS", "UP", "TN"].map((label) => (
                    <span key={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[10px] font-semibold tracking-[0.12em] text-[var(--muted-strong)]">
                      {label}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-[var(--text)]">740+ projects in 3.5 years</div>
                  <div className="text-sm text-[var(--muted)]">Delivered across 4 states</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Residential", to: "/residential", description: "3 – 10 kW homes" },
                  { label: "Commercial", to: "/commercial", description: "10 – 50 kW business" },
                  { label: "Industrial & Power Plants", to: "/industrial", description: "100 kW – 10 MW" },
                ].map((item) => (
                  <NavLink key={item.label} to={item.to} className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,183,77,0.3)] hover:bg-[rgba(255,183,77,0.04)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">{item.label}</div>
                    <div className="mt-1.5 text-sm text-[var(--muted)]">{item.description}</div>
                  </NavLink>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-xl">
              <div className="hero-card relative overflow-hidden p-4 sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.18),_transparent_42%)]" />
                <div className="relative flex flex-col gap-4 sm:gap-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="floating-badge">
                      <Leaf size={12} className="text-[var(--secondary)]" /> Sample 5 kW home system
                    </span>
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      230 V · 50 Hz
                    </span>
                  </div>

                  <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-3 sm:p-4">
                    <SolarFlowAnimation />
                    <p className="mt-2 text-center text-xs text-[var(--muted)]">Live demo: sunlight on 600 Wp panels powering your home</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="card-surface rounded-2xl p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Live output</div>
                      <div className="mt-2 font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">{liveKw} kW</div>
                      <div className="mt-1 text-xs text-[var(--muted)] sm:text-sm">Today: {liveUnits} units</div>
                    </div>
                    <div className="card-surface rounded-2xl p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Monthly saving</div>
                      <div className="mt-2 font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">₹4,200</div>
                      <div className="mt-1 text-xs text-[var(--muted)] sm:text-sm">At about ₹7 per unit</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== 2. QUICK FACTS ========================= */}
      <section className="pb-8 pt-2 md:pb-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:gap-5 md:px-8 xl:grid-cols-6">
          {[
            { icon: Sun, v: "740+", l: "Systems installed" },
            { icon: Clock, v: "3.5 years", l: "Of experience" },
            { icon: Network, v: "4 states", l: STATES },
            { icon: Zap, v: "3 kW – 10 MW", l: "Capacity range" },
            { icon: ShieldCheck, v: "12 years", l: "Manufacturing warranty" },
            { icon: Gauge, v: "600 Wp", l: "Tempered glass panels" },
          ].map((f) => (
            <div key={f.l} className="card-surface flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,183,77,0.4)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                <f.icon size={22} className="text-[var(--primary)]" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-lg font-bold leading-tight text-[var(--text)]">{f.v}</div>
                <div className="mt-0.5 text-xs text-[var(--muted)]">{f.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= 3. SERVICES =========================== */}
      <Section>
        <SectionHead eyebrow="What we do" title="Solar EPC, sales and AMC under one roof" body="Design, approvals, equipment, installation and yearly service, handled by one team." />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} className="card-surface group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,183,77,0.4)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-dawn-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                  <s.icon size={24} className="text-[var(--primary)]" />
                </span>
                <span className="font-mono text-5xl font-bold text-[rgba(255,183,77,0.12)]">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--text)]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
              <ul className="mt-5 space-y-2.5 border-t border-[var(--border)] pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[var(--muted-strong)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" /> {p}
                  </li>
                ))}
              </ul>
              <NavLink to={s.to} className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[var(--primary)] transition-all group-hover:gap-3">
                Learn more <ArrowRight size={15} />
              </NavLink>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      <div className="section-divider" />

      {/* ========================== 4. SYSTEM SIZES ====================== */}
      <Section>
        <SectionHead
          eyebrow="System size and cost"
          title="Pick the right capacity for your property."
          body="Approximate figures for grid-connected systems without battery, using 600 Wp panels."
        />

        {/* plant type tabs */}
        <div role="tablist" aria-label="Plant type" className="mt-8 flex flex-wrap gap-3">
          {[...plantTypes.map((p) => p.key), "Other"].map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={plantKey === k}
              onClick={() => setPlantKey(k)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                plantKey === k
                  ? "border-transparent bg-dawn-gradient text-[var(--bg)] shadow-glow"
                  : "border-[var(--border)] bg-[var(--panel)] text-[var(--muted-strong)] hover:text-[var(--text)]"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {plant ? (
          <>
            <p className="mt-5 max-w-3xl text-sm text-[var(--muted)] md:text-base">{plant.blurb}</p>

            <motion.div
              key={plantKey}
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="card-surface mt-6 overflow-hidden rounded-3xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      <th className="px-5 py-4 font-semibold">Capacity</th>
                      <th className="px-5 py-4 font-semibold">Panels (600 Wp)</th>
                      <th className="px-5 py-4 font-semibold">Space needed</th>
                      <th className="px-5 py-4 font-semibold">Units / month</th>
                      <th className="px-5 py-4 font-semibold">Approx. cost</th>
                      <th className="px-5 py-4 font-semibold">Saves / month</th>
                      <th className="px-5 py-4 font-semibold">Supply</th>
                      <th className="px-5 py-4 font-semibold">Payback</th>
                      {plant.key === "Residential" && (
                        <>
                          <th className="px-5 py-4 font-semibold">Subsidy</th>
                          <th className="px-5 py-4 font-semibold">After subsidy</th>
                        </>
                      )}
                      <th className="px-5 py-4" />
                    </tr>
                  </thead>
                  <tbody>
                    {plant.rows.map((r) => (
                      <tr key={r.kw} className="border-b border-[var(--border)] transition-colors last:border-b-0 hover:bg-[rgba(255,183,77,0.05)]">
                        <td className="whitespace-nowrap px-5 py-4 font-display text-base font-bold text-[var(--text)]">{r.kw}</td>
                        <td className="px-5 py-4 text-[var(--muted-strong)]">{r.panels}</td>
                        <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.space}</td>
                        <td className="px-5 py-4 text-[var(--muted-strong)]">{r.units}</td>
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-[var(--text)]">{r.cost}</td>
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-[var(--primary)]">{r.save}</td>
                        <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.supply}</td>
                        <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.payback}</td>
                        {plant.key === "Residential" && (
                          <>
                            <td className="whitespace-nowrap px-5 py-4 text-[var(--accent-green)]">{r.subsidy}</td>
                            <td className="whitespace-nowrap px-5 py-4 font-semibold text-[var(--text)]">{r.net}</td>
                          </>
                        )}
                        <td className="px-5 py-4">
                          <NavLink to="/contact" className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-[var(--primary)]">
                            Get quote <ArrowRight size={14} />
                          </NavLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="card-surface mt-6 flex max-w-3xl flex-col items-start gap-5 rounded-3xl p-8">
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
              Farms, water pumping, institutions, RWAs or a size not listed? Tell us your monthly units and site type and we will prepare a custom quote.
            </p>
            <NavLink to="/contact" className="btn-primary">Request custom quote</NavLink>
          </div>
        )}

        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-[var(--muted)]">
          Estimates assume about 4 units per kW per day and a tariff of about ₹7 per unit. Payback is cost divided by yearly saving (after subsidy for homes).
          Final price depends on panel and inverter brand, roof or land type and the site survey.
          Residential subsidy under PM Surya Ghar: ₹30,000 per kW for the first 2 kW and ₹18,000 for the 3rd kW, capped at ₹78,000, paid after commissioning and inspection. Commercial and industrial plants are not eligible.
        </p>

        {/* electrical specs strip */}
        <div className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 md:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted-strong)]">
            <Cable size={16} className="text-[var(--primary)]" /> Electrical specs at a glance
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {electrical.map((e) => (
              <div key={e.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-4">
                <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{e.label}</div>
                <div className="mt-1 font-display text-xl font-semibold text-[var(--text)] md:text-2xl">{e.value}</div>
                <div className="mt-0.5 text-xs text-[var(--muted)]">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================== 5. PROCESS =========================== */}
      <Section className="bg-[var(--panel)]">
        <SectionHead eyebrow="The process" title="From site visit to power-on in three steps." />
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="card-surface h-full rounded-2xl p-7">
                <div className="font-mono text-3xl font-bold text-[var(--primary)]">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--text)] md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====================== 6. PANELS AND INVERTERS ================== */}
      <Section>
        <SectionHead eyebrow="Equipment" title="Panels and inverters we supply." body="Choose from a full range of panel ratings, with a 12-year piece to piece manufacturing warranty." />

        <div className="mt-8 flex flex-wrap gap-3">
          {panelWattages.map((w) => (
            <span key={w} className="rounded-full border border-[rgba(255,183,77,0.35)] bg-[rgba(255,183,77,0.08)] px-5 py-2 font-display text-sm font-semibold text-[var(--text)]">{w}</span>
          ))}
        </div>

        <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {panelBrands.map((p) => (
            <motion.div key={p.name} variants={staggerItem} className="card-surface flex flex-col overflow-hidden rounded-2xl">
              <div className="h-44 w-full overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={`${p.name} solar panel`} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[rgba(79,209,197,0.08)] font-display text-2xl font-semibold text-[var(--muted-strong)]">
                    {p.name}
                  </div>
                )}
              </div>
              <div className="flex-1 p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>

        {/* inverter brands strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-[var(--primary)]" />
            <h3 className="font-display text-lg font-semibold">Inverter brands</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {inverterBrands.map((b) => (
              <span key={b} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold text-[var(--text)]">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold">What is inside a panel</h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">A crystalline module is made of stacked layers, each with one job.</p>
          <RevealStagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panelLayers.map((layer, index) => (
              <motion.div key={layer.name} variants={staggerItem} className="card-surface group overflow-hidden rounded-2xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={layer.image} alt={layer.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,25,0.5)] to-transparent" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-semibold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-semibold text-[var(--text)]">{layer.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{layer.note}</p>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ============ 7. REAL PROJECT + SPV SYSTEM FLOW ============ */}
      <Section className="bg-[var(--panel)]">
        <SectionHead
          eyebrow="Real project"
          title="Solar Photo Voltaic Power System Plant"
          body="Residential, Industrial and Power Plant installations, built to the same standard."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="group relative h-72 overflow-hidden rounded-3xl border border-[var(--border)] md:h-[360px]">
              <img src={realProjectImg} alt="Real Helios solar PV project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,19,29,0.85)] via-[rgba(7,19,29,0.1)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 p-5">
                <span className="rounded-full bg-dawn-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--bg)]">Real project</span>
                {["Residential", "Industrial", "Power Plant"].map((t) => (
                  <span key={t} className="rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card-surface flex h-full flex-col justify-center gap-5 rounded-3xl p-6 md:p-7">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: HomeIcon, label: "Residential" },
                  { icon: Factory, label: "Industrial" },
                  { icon: Zap, label: "Power Plant" },
                ].map((t) => (
                  <div key={t.label} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-2 py-4">
                    <t.icon size={22} className="mx-auto text-[var(--primary)]" />
                    <div className="mt-2 text-xs font-semibold text-[var(--muted-strong)] md:text-sm">{t.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[rgba(255,183,77,0.3)] bg-[rgba(255,183,77,0.07)] p-4">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
                  <b className="text-[var(--text)]">Lightning Arrester &amp; Earthing</b> protect the panels and inverter from lightning and surge.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* system flow: blocks appear one by one while scrolling */}
        <div className="card-surface mt-8 rounded-3xl p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold md:text-2xl">How the system works</h3>
          <ol className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 xl:grid-cols-7 xl:gap-x-5">
            {systemFlow.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.3 }}
                className="relative flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-3 pb-4 pt-6 text-center transition-colors hover:border-[rgba(255,183,77,0.4)]"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.3 + 0.2 }}
                  className="absolute -top-3 left-1/2 -ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-dawn-gradient text-[11px] font-bold text-[var(--bg)]"
                >
                  {i + 1}
                </motion.span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,183,77,0.1)]">
                  <s.icon size={20} className="text-[var(--primary)]" />
                </span>
                <div className="mt-3 font-display text-sm font-semibold text-[var(--text)]">{s.title}</div>
                <div className="mt-1 text-[11px] leading-snug text-[var(--muted)]">{s.note}</div>

                {i < systemFlow.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.3 + 0.35 }}
                    className="absolute -right-[18px] top-1/2 z-10 hidden -translate-y-1/2 text-[var(--primary)] xl:block"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ============ 8. RESIDENTIAL IMPACT ============ */}
      <Section>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[rgba(255,183,77,0.14)] blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[rgba(79,209,197,0.14)] blur-[80px]" />
          <div className="relative">
            <SectionHead eyebrow="Our impact" title="Residential savings delivered so far." />
            <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((s) => (
                <motion.div key={s.label} variants={staggerItem} className="card-surface rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                    <s.icon size={22} className="text-[var(--primary)]" />
                  </div>
                  <div className="text-gradient mt-4 font-display text-2xl font-bold md:text-3xl">{s.value}</div>
                  <div className="mt-2 text-sm font-medium text-[var(--muted-strong)]">{s.label}</div>
                  {s.note && <div className="mt-1 text-xs text-[var(--muted)]">{s.note}</div>}
                </motion.div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ======================= 9. CUSTOMER STORIES ===================== */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Customer stories" title="Recent installations, loved by customers." />
          <div className="flex gap-2">
            <button type="button" aria-label="Previous customer stories" onClick={() => scrollStories(-1)} className="theme-toggle"><ChevronLeft size={18} /></button>
            <button type="button" aria-label="Next customer stories" onClick={() => scrollStories(1)} className="theme-toggle"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div ref={storiesSliderRef} aria-label="Recent solar installations and customer reviews" className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {customerStories.map(({ image, testimonial }, index) => (
            <article key={index} className="card-surface flex w-[88%] flex-none snap-start flex-col overflow-hidden rounded-2xl sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]">
              <img src={image} alt={`Solar installation ${index + 1}`} className="h-56 w-full object-cover sm:h-64" loading="lazy" />
              <div className="flex flex-1 flex-col p-5 md:p-6">
                {testimonial ? (
                  <>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] font-semibold text-[var(--text)]">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-[var(--text)]">{testimonial.name}</div>
                        <div className="text-xs text-[var(--muted)]">{testimonial.location}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-lg font-semibold text-[var(--text)]">Recent installation</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">A closer look at a completed solar project.</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============================ 10. TEAM =========================== */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="card-surface grid overflow-hidden rounded-[2rem] md:grid-cols-2">
            <Reveal className="relative min-h-64 md:min-h-[420px]">
              <img src={teamImage} alt="The Helios solar installation team" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
              <span className="eyebrow w-fit">Meet the team</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">Good energy starts with good people.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                From the first conversation to the final walkthrough, our team keeps every solar project clear, carefully planned, and built around your property.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <NavLink to="/about" className="btn-secondary">Get to know us</NavLink>
                <NavLink to="/contact" className="btn-primary">Talk with our team</NavLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========================== 11. RESOURCES ======================== */}
      <Section>
        <SectionHead eyebrow="Resources" title="Clear guidance for smarter solar decisions." />
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {resources.map((r) => (
            <motion.div key={r.title} variants={staggerItem} className="card-surface rounded-2xl p-7 transition-colors duration-300 hover:border-[rgba(255,183,77,0.35)]">
              <IconBox icon={r.icon} />
              <h3 className="font-display text-xl font-semibold text-[var(--text)]">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{r.body}</p>
            </motion.div>
          ))}
        </RevealStagger>
        <div className="mt-10">
          <NavLink to="/resources" className="btn-secondary">Explore all resources</NavLink>
        </div>
      </Section>

      {/* ============================= 12. FAQ =========================== */}
      <Section className="bg-[var(--panel)]">
        <SectionHead eyebrow="Frequently asked" title="Helpful answers before your first call." body="Still have a question? Call or message us and we will reply the same day." />
        <div className="mt-10 grid items-start gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <div key={item.q} className="card-surface overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpenFaq((c) => (c === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                aria-expanded={openFaq === index}
              >
                <span className="font-display text-base font-semibold text-[var(--text)] md:text-lg">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[var(--primary)] transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <motion.div initial={false} animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)] md:px-6">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================= 13. CTA =========================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.15)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">See how much your roof can save you.</h3>
                  <p className="mt-2 max-w-md text-sm text-[rgba(10,18,26,0.75)]">
                    Free, no-obligation site visit and a clear quote in ₹, including your subsidy. Serving {STATES}.
                  </p>
                </div>
                <NavLink to="/contact" className="btn-secondary shrink-0 border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Get your free quote
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
