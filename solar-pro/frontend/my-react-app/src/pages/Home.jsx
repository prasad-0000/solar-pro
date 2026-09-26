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

import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  Building2,
  Calculator,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Lightbulb,
  PiggyBank,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";
import StatCounter from "../components/StatCounter.jsx";

const highlights = [
  { icon: Zap, title: "Live in ~6 weeks", body: "Design, permits, and install handled end to end by one crew." },
  { icon: PiggyBank, title: "0% financing", body: "Own your system for less than most people pay for grid power." },
  { icon: ShieldCheck, title: "25-year warranty", body: "Panels, inverter, and labor — all covered, all in writing." },
];

const steps = [
  { n: "01", title: "Free site assessment", body: "We map your roof, shading, and usage to size a system that fits." },
  { n: "02", title: "Custom design + permits", body: "Engineering drawings and utility paperwork, filed for you." },
  { n: "03", title: "Install in 1–2 days", body: "Certified crews, minimal disruption, full site cleanup." },
  { n: "04", title: "Flip the switch", body: "Monitor production from your phone from day one." },
];

const faqItems = [
  { q: "How long does a solar installation take?", a: "Most residential systems take about 4 to 8 weeks from signed contract to final utility approval, with installation itself usually completed in 1 to 2 days." },
  { q: "Will solar still work during storms or outages?", a: "Yes. Panels continue producing when conditions are safe, and paired battery storage keeps essential loads running during grid outages." },
  { q: "Do you handle permits and utility paperwork?", a: "Absolutely. Our team manages design, permits, interconnection, inspection coordination, and final activation for you." },
  { q: "What if my roof isn’t ideal for solar?", a: "We review roof orientation, shading, age, and usage before recommending the best possible system design or alternative solutions." },
];

const resources = [
  {
    icon: BookOpen,
    title: "Solar buying guide",
    body: "A practical breakdown of system sizing, panel choices, and what really matters during design.",
  },
  {
    icon: Calculator,
    title: "ROI checklist",
    body: "Compare utility offset, financing, and maintenance planning before committing to a project.",
  },
  {
    icon: Lightbulb,
    title: "Battery planning",
    body: "Learn how backup power improves resilience and supports smarter energy use during peak rates.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance essentials",
    body: "Simple best practices for protecting performance, warranties, and long-term production.",
  },
];

/**
 * Replaces the old static <SunArc /> block in the hero's right column.
 * Fully responsive (scales inside its aspect-ratio wrapper), and shows
 * the actual physical story: sunlight hits the panel, the panel converts
 * it into power, power flows to the home.
 */
// Elliptical orbit path for animateMotion: two half-arcs make a closed loop.
function orbitPath(cx, cy, rx, ry) {
  return `M ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy}`;
}

const SUN_X = 240;
const SUN_Y = 84;

const orbits = [
  { name: "Venus", rx: 34, ry: 16, size: 4, color: "#E8C39E", dur: "6s" },
  { name: "Earth", rx: 50, ry: 24, size: 5, color: "var(--secondary)", dur: "9s" },
  { name: "Jupiter", rx: 68, ry: 34, size: 7, color: "url(#jupiterGradient)", dur: "14s" },
];

function SolarFlowAnimation() {
  return (
    <div className="solar-flow relative w-full">
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        role="img"
        aria-label="Animation of the sun with Venus, Earth, and Jupiter orbiting it, sunlight striking a solar panel below, and the resulting power flowing to a home"
      >
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

        {/* ---- Orbit rings ---- */}
        {orbits.map((o) => (
          <ellipse
            key={o.name}
            cx={SUN_X}
            cy={SUN_Y}
            rx={o.rx}
            ry={o.ry}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="2 5"
            opacity="0.55"
          />
        ))}

        {/* ---- Sun ---- */}
        <g className="sf-sun" style={{ transformOrigin: `${SUN_X}px ${SUN_Y}px` }}>
          <circle cx={SUN_X} cy={SUN_Y} r="20" fill="var(--primary)" />
          <circle
            cx={SUN_X}
            cy={SUN_Y}
            r="20"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.35"
            strokeWidth="8"
            className="sf-sun-halo"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = SUN_X + Math.cos(angle) * 27;
            const y1 = SUN_Y + Math.sin(angle) * 27;
            const x2 = SUN_X + Math.cos(angle) * 40;
            const y2 = SUN_Y + Math.sin(angle) * 40;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--primary)"
                strokeWidth="3"
                strokeLinecap="round"
                className="sf-ray-spoke"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            );
          })}
        </g>

        {/* ---- Venus, Earth, Jupiter orbiting the sun ---- */}
        {orbits.map((o) => (
          <circle key={o.name} r={o.size} fill={o.color}>
            <animateMotion
              dur={o.dur}
              repeatCount="indefinite"
              path={orbitPath(SUN_X, SUN_Y, o.rx, o.ry)}
            />
          </circle>
        ))}

        {/* ---- Rays falling onto the panel ---- */}
        {[
          { x1: 216, y1: 122, x2: 199, y2: 160, delay: "0s" },
          { x1: 240, y1: 126, x2: 240, y2: 160, delay: "0.35s" },
          { x1: 264, y1: 122, x2: 281, y2: 160, delay: "0.7s" },
        ].map((r, i) => (
          <line
            key={i}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            stroke="url(#rayGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="sf-ray-fall"
            style={{ animationDelay: r.delay }}
          />
        ))}

        {/* ---- Solar panel ---- */}
        <g>
          <rect
            x="150"
            y="160"
            width="180"
            height="104"
            rx="10"
            fill="url(#panelGradient)"
            stroke="var(--border)"
            strokeWidth="1.5"
          />
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={158 + col * 43}
                y={168 + row * 32}
                width="37"
                height="27"
                rx="3"
                fill="rgba(79,209,197,0.14)"
                stroke="rgba(79,209,197,0.35)"
                strokeWidth="1"
              />
            ))
          )}
        </g>

        {/* ---- Energy particles: panel -> home ---- */}
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4.5" fill="var(--secondary)">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              begin={`${i * 0.75}s`}
              path="M 240 264 C 240 303, 300 303, 300 306 L 452 306"
            />
          </circle>
        ))}
        <path
          d="M 240 264 C 240 303, 300 303, 300 306 L 452 306"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.5"
        />

        {/* ---- Home ---- */}
        <g transform="translate(430,256)">
          <path
            d="M0 62 V22 L50 -14 L100 22 V62 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="var(--border)"
            strokeWidth="1.5"
          />
          <rect x="18" y="32" width="24" height="30" rx="2" fill="rgba(255,183,77,0.16)" stroke="var(--border)" />
          <rect x="58" y="32" width="24" height="18" rx="2" fill="rgba(79,209,197,0.16)" stroke="var(--border)" />
        </g>

        {/* ---- Labels ---- */}
        <text x="240" y="146" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">
          SUNLIGHT
        </text>
        <text x="240" y="284" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">
          SOLAR CELLS
        </text>
        <text x="480" y="348" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.5" fill="var(--muted)">
          YOUR HOME
        </text>
      </svg>

      {/* ---- Orbit legend ---- */}
      <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {orbits.map((o) => (
          <span key={o.name} className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: o.name === "Jupiter" ? "#F2B879" : o.color }}
            />
            {o.name}
          </span>
        ))}
      </div>

      <style>{`
        .sf-sun-halo {
          animation: sf-halo 2.6s ease-in-out infinite;
        }
        .sf-ray-spoke {
          animation: sf-flicker 2.6s ease-in-out infinite;
          transform-origin: ${SUN_X}px ${SUN_Y}px;
        }
        .sf-ray-fall {
          stroke-dasharray: 10 40;
          animation: sf-fall 1.8s linear infinite;
        }
        @keyframes sf-halo {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.05; transform: scale(1.18); }
        }
        @keyframes sf-flicker {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes sf-fall {
          0% { stroke-dashoffset: 50; opacity: 0; }
          15% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sf-sun-halo, .sf-ray-spoke, .sf-ray-fall { animation: none; }
          .solar-flow animateMotion { display: none; }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const storiesSliderRef = useRef(null);
  const panelTypes = [

    {
      key: "SAATVIK",
      title: "SAATVIK",
      desc: "More affordable multi-crystal cells with slightly lower efficiency.",
      image: polyImage
    },
    {
      key: "ZAP91",
      title: "ZAP91",
      desc: "High-efficiency single-crystal cells, great for limited roof space.",
      image: monoImage,
    },
    {
      key: "thinfilm",
      title: "Thin-Film",
      desc: "Lightweight, flexible panels used for specialty installations and some commercial roofs.",
      image: polyImage
    },
  ];

  const panelLayers = [
    {
      name: "Tempered glass",
      note: "Protects front surface",
      image: temperedGlassImg,
    },
    {
      name: "EVA encapsulant",
      note: "Bonds cells to glass",
      image: evaImg,
    },

    {
      name: "EVA encapsulant",
      note: "Bonds cells to glass",
      image: temperedGlassImg,
    },

  ];

  const brands = ["SunPower", "LG", "Q CELLS", "REC", "Panasonic"];
  const testimonials = [
    { quote: "Switching to Solstice cut our bills in half — professional crew and great communication.", name: "Alex Perez", location: "Austin, TX" },
    { quote: "They handled permits, install, and the utility paperwork with no stress. Highly recommend.", name: "Maya Thompson", location: "San Antonio, TX" },
    { quote: "Beautiful install and the monitoring app makes it easy to track production every day.", name: "Samir K.", location: "Dallas, TX" },
  ];

  const customerStories = [
    { image: installImage1, testimonial: testimonials[0] },
    { image: installImage2, testimonial: testimonials[1] },
    { image: installImage3, testimonial: testimonials[2] },
    { image: installImage4, testimonial: null },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="solar-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="absolute -top-24 right-[-15%] h-80 w-80 rounded-full bg-[rgba(255,122,69,0.12)] blur-[90px]" />
        <div className="absolute left-[-8%] top-1/3 h-72 w-72 rounded-full bg-[rgba(79,209,197,0.12)] blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pb-16 md:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* =========================================================
                LEFT COLUMN — untouched
               ========================================================= */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow"
              >
                <Sun size={12} /> Residential &amp; commercial solar
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Bright ideas.
                <br />
                <span className="text-gradient">Smarter power.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]"
              >
                Solstice designs, permits, and installs premium solar systems that reduce bills,
                strengthen energy independence, and look beautiful on every roofline.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <NavLink to="/contact" className="btn-primary group">
                  Get your free quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/projects" className="btn-secondary">
                  See recent installs
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center -space-x-2">
                  {['SL', 'AR', 'MK'].map((label) => (
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

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3"
              >
                {[
                  { label: "Residential", to: "/residential", description: "Home solar" },
                  { label: "Commercial", to: "/commercial", description: "Business power" },
                  { label: "Storage", to: "/storage", description: "Backup + control" },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,183,77,0.3)] hover:bg-[rgba(255,183,77,0.04)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">{item.label}</div>
                    <div className="mt-2 text-sm text-[var(--muted)]">{item.description}</div>
                  </NavLink>
                ))}
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-10 grid max-w-md grid-cols-3 gap-3"
              >
                <StatCounter value={4200} suffix="+" label="Systems installed" />
                <StatCounter value={98} suffix="%" label="On-time rate" />
                <StatCounter value={25} suffix="yr" label="Warranty" />
              </motion.div> */}
            </div>

            {/* =========================================================
                RIGHT COLUMN — rebuilt: responsive + sun-to-solar animation
               ========================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full"
            >
              <div className="hero-card relative overflow-hidden p-4 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.18),_transparent_42%)]" />

                <div className="relative flex flex-col gap-4 sm:gap-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 px-1 sm:px-2">
                    <span className="floating-badge">
                      <Leaf size={12} className="text-[var(--secondary)]" /> Live performance
                    </span>
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      +24.6% YoY
                    </span>
                  </div>

                  <div className="rounded-[1.75rem] border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-3 sm:p-4">
                    <div className="mx-auto aspect-[3/2] w-full max-w-[380px]">
                      <SolarFlowAnimation />
                    </div>
                    <p className="mt-2 text-center text-xs text-[var(--muted)]">
                      Venus, Earth &amp; Jupiter orbit the sun that powers your panels
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    <div className="card-surface flex flex-col justify-between rounded-2xl p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Energy today</div>
                      <div className="mt-2 font-display text-3xl font-semibold text-[var(--text)]">68 kWh</div>
                      <div className="mt-2 text-sm text-[var(--muted)]">Up 17% vs. last week</div>
                    </div>
                    <div className="card-surface flex flex-col justify-between rounded-2xl p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Savings</div>
                      <div className="mt-2 font-display text-3xl font-semibold text-[var(--text)]">$214</div>
                      <div className="mt-2 text-sm text-[var(--muted)]">Projected monthly offset</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Solar panel types</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              Types, typical layers, and brands we work with.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {panelTypes.map((p) => (
              <motion.div key={p.key} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-6 text-center">
                <div className="mb-4 h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold">
              Common panel layers
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Modern crystalline modules commonly include the following stacked layers.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {panelLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="card-surface group overflow-hidden rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={layer.image}
                      alt={layer.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,25,0.5)] to-transparent" />

                    {/* Layer number */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-semibold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="font-display text-lg font-semibold text-[var(--text)]">
                      {layer.name}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {layer.note}
                    </p>

                    <div className="mt-4 h-px w-full bg-[var(--border)]" />

                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[var(--primary)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      Solar module layer
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* <div className="mt-8">
            <h3 className="font-display text-xl font-semibold">Brands we often install</h3>
            <div className="mt-3">
              <div className="flex overflow-x-auto flex-nowrap gap-3 py-2">
                {brands.map((b) => (
                  <span key={b} className="min-w-max rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm font-semibold">{b}</span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">Want your brand listed? We can source or install a wide range of OEM modules — tell us which you prefer.</p>
          </div> */}

        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Why Solstice</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              Solar, without the runaround.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-surface rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(255,183,77,0.35)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                  <h.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{h.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <span className="eyebrow">Customer stories</span>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">Recent installations, loved by homeowners.</h2>
            </Reveal>
            <div className="flex gap-2 sm:pb-1">
              <button type="button" aria-label="Previous customer stories" onClick={() => storiesSliderRef.current?.scrollBy({ left: -storiesSliderRef.current.clientWidth * 0.85, behavior: "smooth" })} className="theme-toggle">
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Next customer stories" onClick={() => storiesSliderRef.current?.scrollBy({ left: storiesSliderRef.current.clientWidth * 0.85, behavior: "smooth" })} className="theme-toggle">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div ref={storiesSliderRef} aria-label="Recent solar installations and customer reviews" className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {customerStories.map(({ image, testimonial }, index) => (
              <article key={image} className="card-surface w-[88%] flex-none snap-start overflow-hidden rounded-2xl sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]">
                <img src={image} alt={`Solar installation ${index + 1}`} className="h-56 w-full object-cover sm:h-64" loading="lazy" />
                <div className="p-5 md:p-6">
                  {testimonial ? (
                    <>
                      <p className="min-h-16 text-sm leading-relaxed text-[var(--muted)]">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] font-semibold text-[var(--text)]">{testimonial.name.split(" ")[0].charAt(0)}</div>
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
        </div>
      </section>


      <div className="section-divider" />

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Resources</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              Clear guidance for smarter solar decisions.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-surface rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(255,183,77,0.35)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                  <resource.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{resource.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{resource.body}</p>
              </motion.div>
            ))}
          </RevealStagger>

          <div className="mt-8 text-center">
            <NavLink to="/resources" className="btn-secondary">
              Explore all resources
            </NavLink>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Team</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
          
            </h2>
          </Reveal>
          <div className="card-surface grid overflow-hidden rounded-[2rem] md:grid-cols-2">
            <Reveal className="relative min-h-72 md:min-h-[420px]">
              <img
                src={teamImage}
                alt="The Solstice solar installation team"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
              <span className="eyebrow w-fit">Meet the team</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Good energy starts with good people.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                From the first conversation to the final walkthrough, our team helps make every solar project clear, carefully planned, and built around your property.
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

      <section className="bg-[var(--panel)] py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">The process</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              From roof scan to power-on in four steps.
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[rgba(255,183,77,0.25)] to-transparent md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="mb-4 font-mono text-sm font-semibold text-[var(--primary)]">{s.n}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Frequently asked</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              Helpful answers before your first call.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={item.q} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="card-surface overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setOpenFaq((current) => (current === index ? -1 : index))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-display text-lg font-semibold text-[var(--text)]">{item.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[var(--primary)] transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)] md:px-6">{item.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.15)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.15)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.75)]">
                    <BatteryCharging size={12} /> Clean energy, smarter living
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    See what your roof could be earning.
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-[rgba(10,18,26,0.75)]">
                    Free, no-obligation recommendations from a team that designs premium systems for real homes and businesses.
                  </p>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
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
