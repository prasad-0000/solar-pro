import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import monoImage from "../assets/zap91.png";
import polyImage from "../assets/saatvik.png";
import temperedGlassImg from "../assets/sheetsatwik.jfif";
import evaImg from "../assets/azapimg.jfif";
import installImage1 from "../assets/image1.jpeg";
import installImage2 from "../assets/image2.jpeg";
import installImage3 from "../assets/image3.jpeg";
import installImage4 from "../assets/image4.jpeg";
import teamImage from "../assets/teamimage.png";
import swelectimage from "../assets/swelect.jpg"
import Apsimage from "../assets/aps.jfif"

import {
  ArrowRight,
  BookOpen,
  Cable,
  Calculator,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  HardHat,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

/* ------------------------------------------------------------------ */
/*  CONTENT — from client sheet                                        */
/*  Services: Solar EPC, AMC and Sales                                 */
/*  Plant types: Residential / Commercial / Industrial / Other         */
/*  Capacities: 3/5/10/15/20/25/50/100/500/10000 kW                    */
/*  Panels: SAATVIK, SWELECT, APS, ZAP91                               */
/*  Inverters: APS, DEYE, SOLIS, DUROSAL                               */
/*  Battery: No (on-grid systems)   Area: AP and Telangana             */
/* ------------------------------------------------------------------ */

const services = [
  { icon: HardHat, title: "Solar EPC", body: "Design, DISCOM approval, supply, installation and commissioning by one team, from 3 kW homes to 10 MW plants." },
  { icon: ShoppingCart, title: "Solar sales", body: "Panels and inverters from SAATVIK, SWELECT, APS, ZAP91, DEYE, SOLIS and DUROSAL, supplied with warranty." },
  { icon: Wrench, title: "AMC and service", body: "Yearly maintenance contracts: panel cleaning, inverter checks, earthing tests and performance reports." },
];

const steps = [
  { n: "01", title: "Free site visit", body: "We check your roof or land, shadow and monthly units to size the right system." },
  { n: "02", title: "Design and approvals", body: "Drawings, DISCOM application, net-metering and subsidy paperwork, filed for you." },
  { n: "03", title: "Installation", body: "Certified crews, GI structure, proper earthing and lightning protection, clean finish." },
  { n: "04", title: "Net meter and switch on", body: "After inspection and meter change, track daily units from your phone." },
];

/* Indicative: 545 Wp panel, ~100 sq ft per kW, ~4 units/kW/day (120/month), ~₹7 per unit */
const plantTypes = [
  {
    key: "Residential",
    blurb: "Homes and apartments. PM Surya Ghar subsidy applies (up to ₹78,000).",
    rows: [
      { kw: "3 kW", panels: 6, space: "300 sq ft", units: "360", cost: "₹1.8 lakh", save: "₹2,500", supply: "230 V, 1-phase", subsidy: "₹78,000" },
      { kw: "5 kW", panels: 10, space: "500 sq ft", units: "600", cost: "₹3 lakh", save: "₹4,200", supply: "230 V / 415 V", subsidy: "₹78,000" },
      { kw: "10 kW", panels: 19, space: "1,000 sq ft", units: "1,200", cost: "₹5.5 lakh", save: "₹8,400", supply: "415 V, 3-phase", subsidy: "₹78,000" },
    ],
  },
  {
    key: "Commercial",
    blurb: "Shops, offices, schools, hospitals and hotels. No subsidy; savings pay back in about 3 to 4 years.",
    rows: [
      { kw: "15 kW", panels: 28, space: "1,500 sq ft", units: "1,800", cost: "₹8 lakh", save: "₹12,600", supply: "415 V, 3-phase", subsidy: "—" },
      { kw: "20 kW", panels: 37, space: "2,000 sq ft", units: "2,400", cost: "₹10 lakh", save: "₹16,800", supply: "415 V, 3-phase", subsidy: "—" },
      { kw: "25 kW", panels: 46, space: "2,500 sq ft", units: "3,000", cost: "₹12 lakh", save: "₹21,000", supply: "415 V, 3-phase", subsidy: "—" },
      { kw: "50 kW", panels: 92, space: "5,000 sq ft", units: "6,000", cost: "₹23 lakh", save: "₹42,000", supply: "415 V, 3-phase", subsidy: "—" },
    ],
  },
  {
    key: "Industrial",
    blurb: "Factories, cold storage and large campuses, from rooftop to ground-mount and open-access plants.",
    rows: [
      { kw: "100 kW", panels: 184, space: "10,000 sq ft", units: "12,000", cost: "₹44 lakh", save: "₹84,000", supply: "415 V, 3-phase", subsidy: "—" },
      { kw: "500 kW", panels: 918, space: "50,000 sq ft", units: "60,000", cost: "₹2.1 crore", save: "₹4.2 lakh", supply: "HT, 11–33 kV", subsidy: "—" },
      { kw: "10,000 kW (10 MW)", panels: "18,350", space: "~45 acres", units: "12 lakh", cost: "₹40 crore", save: "₹84 lakh", supply: "HT, 33 kV+", subsidy: "—" },
    ],
  },
];

const electrical = [
  { label: "Home supply", value: "230 V", note: "Single-phase, 50 Hz" },
  { label: "Business supply", value: "415 V", note: "Three-phase, 50 Hz" },
  { label: "Panel voltage", value: "~41 V Vmp", note: "About 49 V open-circuit" },
  { label: "Panel rating", value: "540–550 Wp", note: "Per module, standard test" },
];

const panelBrands = [
  { name: "SAATVIK", desc: "Cost-effective modules with dependable output for homes and businesses.", image: polyImage },
  { name: "ZAP91", desc: "High-efficiency modules, great when roof space is limited.", image: monoImage },
  { name: "SWELECT", desc: "Trusted modules for residential and commercial rooftops.", image: swelectimage },
  { name: "APS", desc: "Modules supplied with matching APS inverters as a single package.", image: Apsimage },
];

const inverterBrands = ["APS", "DEYE", "SOLIS", "DUROSAL"];

const faqItems = [
  { q: "How long does a solar installation take?", a: "A home system is installed in 1 to 3 days. From signed order to net-meter activation, most homes take 3 to 6 weeks, depending on DISCOM approval. Larger plants are scheduled after the site survey." },
  { q: "Will solar work during power cuts?", a: "Our standard systems are on-grid without battery, so they switch off during a grid outage for safety. They cut your bill during the day and export extra units to the grid." },
  { q: "Do you handle DISCOM paperwork and subsidy?", a: "Yes. We manage design, DISCOM application, net-metering, inspection and the PM Surya Ghar subsidy claim for homes. Subsidy is credited to your bank account after commissioning." },
  { q: "Do you work outside Andhra Pradesh?", a: "We install and service systems across Andhra Pradesh and Telangana. For other states, call us and we will check." },
  { q: "What does the AMC include?", a: "Scheduled panel cleaning, inverter and cable checks, earthing and protection tests, and a performance report so you know the system is producing what it should." },
  { q: "How much can I save?", a: "A 3 kW system produces roughly 360 units a month, which can save around ₹2,500 a month at ₹7 per unit. Most homes recover the cost in 3 to 5 years." },
];

const resources = [
  { icon: BookOpen, title: "Solar buying guide", body: "How to choose system size, panel brand and inverter for your building." },
  { icon: Calculator, title: "Savings checklist", body: "Compare your bill, subsidy, loan EMI and payback before you decide." },
  { icon: Cpu, title: "Inverter guide", body: "APS, DEYE, SOLIS and DUROSAL compared by size and use." },
  { icon: ShieldCheck, title: "Maintenance tips", body: "Cleaning and checks that protect output and your warranty." },
];

const testimonials = [
  { quote: "Our monthly bill dropped from ₹6,800 to under ₹900. The crew was professional and always on time.", name: "Ravi Teja", location: "Kakinada, AP" },
  { quote: "They handled DISCOM approval, net-metering and subsidy without any stress. Highly recommended.", name: "Lakshmi Prasanna", location: "Rajahmundry, AP" },
  { quote: "Neat installation, and the mobile app makes it easy to track daily production.", name: "Srinivas K.", location: "Hyderabad, TS" },
];

/* ------------------------------------------------------------------ */
/*  HERO ANIMATION                                                     */
/* ------------------------------------------------------------------ */

function orbitPath(cx, cy, rx, ry) {
  return `M ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy}`;
}

const SUN_X = 240;
const SUN_Y = 68;

const orbits = [
  { name: "Venus", rx: 52, ry: 38, size: 4, color: "#E8C39E", dur: "6s" },
  { name: "Earth", rx: 72, ry: 46, size: 5, color: "var(--secondary)", dur: "9s" },
  { name: "Jupiter", rx: 96, ry: 54, size: 7, color: "url(#jupiterGradient)", dur: "14s" },
];

function SolarFlowAnimation() {
  return (
    <div className="solar-flow relative w-full">
      <svg viewBox="0 0 600 400" className="h-auto w-full" role="img" aria-label="The sun with Venus, Earth and Jupiter orbiting it, sunlight striking a solar panel, and power flowing to a home">
        <defs>
          <linearGradient id="rayGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
          </linearGradient>
          <radialGradient id="jupiterGradient" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F2B879" />
            <stop offset="100%" stopColor="#9A5A28" />
          </radialGradient>
        </defs>

        {orbits.map((o) => (
          <ellipse key={o.name} cx={SUN_X} cy={SUN_Y} rx={o.rx} ry={o.ry} fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 5" opacity="0.6" />
        ))}

        <circle cx={SUN_X} cy={SUN_Y} r="16" fill="var(--primary)" />
        <circle cx={SUN_X} cy={SUN_Y} r="16" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="8" className="sf-sun-halo" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          return (
            <line key={i} x1={SUN_X + Math.cos(a) * 23} y1={SUN_Y + Math.sin(a) * 23} x2={SUN_X + Math.cos(a) * 33} y2={SUN_Y + Math.sin(a) * 33} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" className="sf-ray-spoke" style={{ animationDelay: `${i * 0.12}s` }} />
          );
        })}

        {orbits.map((o) => (
          <circle key={o.name} r={o.size} fill={o.color}>
            <animateMotion dur={o.dur} repeatCount="indefinite" path={orbitPath(SUN_X, SUN_Y, o.rx, o.ry)} />
          </circle>
        ))}

        {[
          { x1: 214, y1: 132, x2: 196, y2: 168, delay: "0s" },
          { x1: 240, y1: 136, x2: 240, y2: 168, delay: "0.35s" },
          { x1: 266, y1: 132, x2: 284, y2: 168, delay: "0.7s" },
        ].map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="url(#rayGradient)" strokeWidth="3" strokeLinecap="round" className="sf-ray-fall" style={{ animationDelay: r.delay }} />
        ))}
        <text x="300" y="150" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">SUNLIGHT</text>

        <rect x="150" y="170" width="180" height="96" rx="10" fill="url(#panelGradient)" stroke="var(--border)" strokeWidth="1.5" />
        {[0, 1, 2].flatMap((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect key={`${row}-${col}`} x={158 + col * 43} y={177 + row * 30} width="37" height="24" rx="3" fill="rgba(79,209,197,0.14)" stroke="rgba(79,209,197,0.35)" strokeWidth="1" />
          ))
        )}
        <text x="240" y="288" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">SOLAR PANEL</text>

        <path d="M 330 218 C 390 218, 400 306, 452 306" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4.5" fill="var(--secondary)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.75}s`} path="M 330 218 C 390 218, 400 306, 452 306" />
          </circle>
        ))}

        <g transform="translate(430,256)">
          <path d="M0 62 V22 L50 -14 L100 22 V62 Z" fill="rgba(255,255,255,0.03)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="18" y="32" width="24" height="30" rx="2" fill="rgba(255,183,77,0.16)" stroke="var(--border)" />
          <rect x="58" y="32" width="24" height="18" rx="2" fill="rgba(79,209,197,0.16)" stroke="var(--border)" />
        </g>
        <text x="480" y="348" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">YOUR HOME · 230 V</text>
      </svg>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {orbits.map((o) => (
          <span key={o.name} className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full" style={{ background: o.name === "Jupiter" ? "#F2B879" : o.color }} />
            {o.name}
          </span>
        ))}
      </div>

      <style>{`
        .sf-sun-halo { transform-box: fill-box; transform-origin: center; animation: sf-halo 2.6s ease-in-out infinite; }
        .sf-ray-spoke { animation: sf-flicker 2.6s ease-in-out infinite; }
        .sf-ray-fall { stroke-dasharray: 10 40; animation: sf-fall 1.8s linear infinite; }
        @keyframes sf-halo { 0%,100% { opacity: .35; transform: scale(1); } 50% { opacity: .05; transform: scale(1.18); } }
        @keyframes sf-flicker { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes sf-fall { 0% { stroke-dashoffset: 50; opacity: 0; } 15% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: .2; } }
        @media (prefers-reduced-motion: reduce) { .sf-sun-halo, .sf-ray-spoke, .sf-ray-fall { animation: none; } }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

function SectionHead({ eyebrow, title, body }) {
  return (
    <Reveal className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">{body}</p>}
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
  const storiesSliderRef = useRef(null);
  const plant = plantTypes.find((p) => p.key === plantKey);

  const panelLayers = [
    { name: "Tempered glass", note: "Protects the front surface from hail, dust and rain.", image: temperedGlassImg },
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

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 md:px-8 md:pb-20 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
                <Sun size={12} /> Solar EPC, sales and AMC · AP and Telangana
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Bright ideas.
                <br />
                <span className="text-gradient">Smarter power.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Solstice designs, gets approved, installs and maintains solar plants from 3 kW to 10 MW, for homes,
                businesses and industry. Lower bills, protection from tariff hikes, neat finish.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Get your free quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/projects" className="btn-secondary">See recent installs</NavLink>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex items-center gap-4">
                <div className="flex items-center -space-x-2">
                  {["SL", "AR", "MK"].map((label) => (
                    <span key={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[10px] font-semibold tracking-[0.12em] text-[var(--muted-strong)]">
                      {label}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-[var(--text)]">4,200+ projects</div>
                  <div className="text-sm text-[var(--muted)]">Trusted by Helios Electrical and Energy Solutions</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Residential", to: "/residential", description: "3 – 10 kW homes" },
                  { label: "Commercial", to: "/commercial", description: "15 – 50 kW business" },
                  { label: "Industrial", to: "/industrial", description: "100 kW – 10 MW" },
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
                    <p className="mt-2 text-center text-xs text-[var(--muted)]">Venus, Earth &amp; Jupiter orbit the sun that powers your panels</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="card-surface rounded-2xl p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Energy today</div>
                      <div className="mt-2 font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">20 units</div>
                      <div className="mt-1 text-xs text-[var(--muted)] sm:text-sm">About 600 units a month</div>
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
      <div className="border-y border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            ["4,200+", "Systems installed"],
            ["3 kW – 10 MW", "Capacity range"],
            ["AP & Telangana", "Service area"],
            ["25 years", "Panel performance warranty"],
          ].map(([v, l]) => (
            <div key={l} className="text-center md:text-left">
              <div className="font-display text-2xl font-semibold text-[var(--text)] md:text-3xl">{v}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================= 3. SERVICES =========================== */}
      <Section>
        <SectionHead eyebrow="What we do" title="Solar EPC, sales and AMC under one roof." body="One team takes care of design, approvals, equipment, installation and yearly service." />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <motion.div key={s.title} variants={staggerItem} className="card-surface rounded-2xl p-7 transition-colors duration-300 hover:border-[rgba(255,183,77,0.35)]">
              <IconBox icon={s.icon} />
              <h3 className="font-display text-xl font-semibold text-[var(--text)]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      <div className="section-divider" />

      {/* ========================== 4. SYSTEM SIZES ====================== */}
      <Section>
        <SectionHead
          eyebrow="System size and cost"
          title="Pick the right capacity for your building."
          body="Approximate figures for grid-connected systems without battery. Final price depends on panel and inverter brand, roof or land type, and the site survey."
        />

        <div role="tablist" aria-label="Plant type" className="mt-10 flex flex-wrap gap-2">
          {[...plantTypes.map((p) => p.key), "Other"].map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={plantKey === k}
              onClick={() => setPlantKey(k)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                plantKey === k
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--bg)]"
                  : "border-[var(--border)] bg-[var(--panel)] text-[var(--muted-strong)] hover:border-[rgba(255,183,77,0.4)]"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {plant ? (
          <>
            <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">{plant.blurb}</p>
            <div className="card-surface mt-6 overflow-x-auto rounded-2xl">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {["Capacity", "Panels (545 Wp)", "Space needed", "Units / month", "Approx. cost", "Saves / month", "Supply", "Subsidy"].map((h) => (
                      <th key={h} className="whitespace-nowrap px-5 py-4 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plant.rows.map((r) => (
                    <tr key={r.kw} className="border-b border-[var(--border)] last:border-0">
                      <td className="whitespace-nowrap px-5 py-4 font-display text-base font-semibold text-[var(--text)]">{r.kw}</td>
                      <td className="px-5 py-4 text-[var(--muted-strong)]">{r.panels}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.space}</td>
                      <td className="px-5 py-4 text-[var(--muted-strong)]">{r.units}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-[var(--text)]">{r.cost}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-[var(--primary)]">{r.save}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.supply}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-[var(--muted-strong)]">{r.subsidy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="card-surface mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl p-7 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Farms, water pumping, institutions, RWAs or a size not listed? Tell us your monthly units and site type and we will prepare a custom quote.
            </p>
            <NavLink to="/contact" className="btn-primary shrink-0">Request custom quote</NavLink>
          </div>
        )}

        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-[var(--muted)]">
          Estimates assume about 4 units per kW per day and a tariff of about ₹7 per unit. Residential subsidy under PM Surya Ghar: ₹30,000 per kW for the
          first 2 kW and ₹18,000 for the 3rd kW, capped at ₹78,000. Commercial and industrial plants are not eligible for this subsidy.
        </p>

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
              <Cable size={18} className="text-[var(--primary)]" />
            </div>
            <h3 className="font-display text-xl font-semibold">Electrical specs at a glance</h3>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {electrical.map((e) => (
              <div key={e.label}>
                <div className="text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{e.label}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-[var(--text)]">{e.value}</div>
                <div className="mt-0.5 text-sm text-[var(--muted)]">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================== 5. PROCESS =========================== */}
      <Section className="bg-[var(--panel)]">
        <SectionHead eyebrow="The process" title="From site visit to power-on in four steps." />
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-[14px] hidden h-px bg-gradient-to-r from-transparent via-[rgba(255,183,77,0.3)] to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative mb-4 inline-flex h-7 items-center bg-[var(--panel)] pr-3 font-mono text-sm font-semibold text-[var(--primary)]">{s.n}</div>
              <h3 className="font-display text-lg font-semibold text-[var(--text)]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====================== 6. PANELS AND INVERTERS ================== */}
      <Section>
        <SectionHead eyebrow="Equipment" title="Panels and inverters we supply." body="
        " />

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {panelBrands.map((p) => (
            <motion.div key={p.name} variants={staggerItem} className="card-surface group flex flex-col overflow-hidden rounded-2xl">
              <div className="h-44 w-full overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={`${p.name} solar panel`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
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

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-[var(--primary)]" />
            <h3 className="font-display text-lg font-semibold">Inverter brands</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {inverterBrands.map((b) => (
              <span key={b} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--text)]">{b}</span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold">What is inside a panel</h3>
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

      {/* ======================= 7. CUSTOMER STORIES ===================== */}
      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead eyebrow="Customer stories" title="Recent installations, loved by customers." />
          <div className="flex gap-2">
            <button type="button" aria-label="Previous customer stories" onClick={() => scrollStories(-1)} className="theme-toggle"><ChevronLeft size={18} /></button>
            <button type="button" aria-label="Next customer stories" onClick={() => scrollStories(1)} className="theme-toggle"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div ref={storiesSliderRef} aria-label="Recent solar installations and customer reviews" className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

      {/* ============================ 8. TEAM ============================ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="card-surface grid overflow-hidden rounded-[2rem] md:grid-cols-2">
            <Reveal className="relative min-h-64 md:min-h-[420px]">
              <img src={teamImage} alt="The Solstice solar installation team" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
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

      {/* ========================== 9. RESOURCES ========================= */}
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
        <div className="mt-10 text-center">
          <NavLink to="/resources" className="btn-secondary">Explore all resources</NavLink>
        </div>
      </Section>

      {/* ============================= 10. FAQ =========================== */}
      <Section className="bg-[var(--panel)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHead eyebrow="Frequently asked" title="Helpful answers before your first call." body="Still have a question? Call or message us and we will reply the same day." />
          <div className="space-y-4">
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
        </div>
      </Section>

      {/* ============================= 11. CTA =========================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.15)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">See how much your roof can save you.</h3>
                  <p className="mt-2 max-w-md text-sm text-[rgba(10,18,26,0.75)]">
                    Free, no-obligation site visit and a clear quote in ₹, including your subsidy. Serving Andhra Pradesh and Telangana.
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