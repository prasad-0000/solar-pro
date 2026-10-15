import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  Box,
  Building2,
  Check,
  Cpu,
  Factory,
  Gauge,
  Leaf,
  Network,
  PlugZap,
  ShieldCheck,
  SunMedium,
  TrendingUp,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

// Company numbers
const companyStats = [
  { value: "740+", label: "projects completed" },
  { value: "3.5 yrs", label: "of experience" },
  { value: "4 states", label: "AP, TS, UP and TN" },
  { value: "12 yrs", label: "piece-to-piece warranty" },
];

const options = [
  { icon: Building2, title: "Offices and mixed-use roofs", body: "High-visibility commercial properties designed for dependable energy and lower operating costs." },
  { icon: Factory, title: "Shops, schools, and hospitals", body: "Daytime-heavy loads are a natural fit for solar, with fast payback on the bill." },
  { icon: BarChart3, title: "Multi-site portfolios", body: "Phased rollouts and financing structures built around cash-flow planning." },
];

const benefits = [
  "Reduce peak demand charges and soften utility volatility.",
  "Create a cleaner brand image with measurable sustainability outcomes.",
  "Protect long-term operating budgets with predictable energy costs.",
  "Move faster with one team handling design, approvals, and installation.",
];

const assurance = [
  { label: "Load profile planning", value: "96%" },
  { label: "Utility coordination", value: "92%" },
  { label: "Installation readiness", value: "94%" },
];

// Solar PV system flow
const flow = [
  { icon: SunMedium, name: "Solar panels" },
  { icon: Box, name: "DC junction box" },
  { icon: Cpu, name: "Inverter" },
  { icon: PlugZap, name: "AC box and cables" },
  { icon: Gauge, name: "Net meter" },
  { icon: Network, name: "Grid" },
];

const packages = [
  { size: "10 kW", price: "₹5.25 Lakh", area: "750 sq ft", note: "Commercial system" },
  { size: "20 kW", price: "₹10 Lakh", area: "1,500 sq ft", note: "Large business rooftop system" },
];

const panelOptions = ["540 Wp", "550 Wp", "580 Wp", "600 Wp", "625 Wp", "720 Wp"];

const inverterBrands = ["APS", "DEYE", "SOLIS", "DUROSAL"];

// Panel grid lines for the animated panels
const panelGrid = {
  backgroundImage:
    "linear-gradient(rgba(210,242,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(210,242,255,0.18) 1px, transparent 1px)",
  backgroundSize: "33% 25%",
};

export default function Commercial() {
  return (
    <div className="page-shell pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="eyebrow"><Building2 size={12} /> Commercial solar</span>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Power your business with a cleaner balance sheet.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                From shop rooftops to large commercial buildings, we build systems that lower your energy spend without disrupting operations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Talk to a commercial advisor
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/portfolio" className="btn-secondary">View our portfolio</NavLink>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:translate-y-3"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,209,197,0.14),_transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Commercial rooftop
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,183,77,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                      <TrendingUp size={10} /> Lower utility spend
                    </span>
                  </div>

                  {/* Realtime panels animation */}
                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">10 kW+</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">from 750 sq ft of roof</div>
                    </div>
                    <div className="mt-5 grid grid-cols-8 gap-1.5">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className="relative aspect-[3/4] overflow-hidden rounded-md border border-[rgba(170,225,255,0.38)] bg-gradient-to-br from-[#3479a2] via-[#205775] to-[#12364e] shadow-[inset_0_0_14px_rgba(94,211,255,0.14)]"
                          style={panelGrid}
                        >
                          <motion.div
                            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[rgba(255,214,125,0.9)] to-transparent mix-blend-screen"
                            initial={{ x: "-120%" }}
                            animate={{ x: "320%" }}
                            transition={{
                              duration: 1.5,
                              delay: (i % 8) * 0.18 + Math.floor(i / 8) * 0.12,
                              repeat: Infinity,
                              repeatDelay: 2.4,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "740+", label: "projects" },
                      { value: "600 Wp", label: "panels" },
                      { value: "12 yrs", label: "warranty" },
                    ].map((stat) => (
                      <div key={stat.label} className="card-surface rounded-2xl p-3 text-center">
                        <div className="font-display text-xl font-semibold text-[var(--text)]">{stat.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company numbers */}
      <section className="py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-8">
          {companyStats.map((stat) => (
            <div key={stat.label} className="card-surface rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-semibold text-[var(--text)] md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Property types */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Built for operations</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              The right system for the right property.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {options.map((option) => (
              <motion.div key={option.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <option.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{option.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="section-divider" />

      {/* Benefits */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="eyebrow">Why it matters</span>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
                Efficiency that supports your bottom line and your ESG goals.
              </h2>
              <ul className="mt-7 space-y-4 text-sm text-[var(--muted)]">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal dir="right">
              <div className="card-surface rounded-[2rem] p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(79,209,197,0.2)] bg-[rgba(79,209,197,0.08)]">
                    <ShieldCheck size={22} className="text-[var(--secondary)]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)]">Commercial assurance</div>
                    <div className="font-display text-xl font-semibold text-[var(--text)]">Design-build support</div>
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {assurance.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                        <div className="h-full rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              A complete solar PV system, safely connected to the grid.
            </h2>
          </Reveal>

          <div className="card-surface mt-12 rounded-[2rem] p-7 md:p-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {flow.map((step, i) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                    <step.icon size={24} className="text-[var(--primary)]" />
                  </div>
                  <div className="mt-3 text-sm font-medium text-[var(--text)]">{step.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
              <motion.div
                className="absolute inset-y-0 w-1/4 rounded-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2">
                <Zap size={14} className="text-[var(--primary)]" /> Lightning arrester
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2">
                <ArrowDownToLine size={14} className="text-[var(--secondary)]" /> Earthing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing, panels, inverters */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Indicative pricing</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Commercial systems from 10 kW to 50 kW and beyond.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">Larger systems are quoted after a site visit.</p>
          </Reveal>

          <RevealStagger className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {packages.map((p) => (
              <motion.div key={p.size} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-8 text-center">
                <div className="font-display text-5xl font-semibold text-[var(--text)]">{p.size}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{p.note}</div>
                <div className="mt-6 font-display text-2xl font-semibold text-[var(--primary)]">{p.price}</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                  <Check size={14} className="text-[var(--secondary)]" /> About {p.area} of roof
                </div>
                <div className="mt-1 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                  <Check size={14} className="text-[var(--secondary)]" /> 600 Wp tempered glass panels
                </div>
              </motion.div>
            ))}
          </RevealStagger>

          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <span className="eyebrow">Panel options</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Choose the panel wattage that fits your roof.
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {panelOptions.map((watt) => (
              <span key={watt} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 font-display text-lg font-semibold text-[var(--text)]">
                {watt}
              </span>
            ))}
          </div>

          <Reveal className="mx-auto mt-20 max-w-3xl text-center">
            <span className="eyebrow">Inverter brands</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Reliable inverters for every load.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {inverterBrands.map((brand) => (
              <div key={brand} className="card-surface rounded-2xl px-4 py-6 text-center font-display text-xl font-semibold text-[var(--text)]">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8 pt-20 md:pb-10 md:pt-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.78)]">
                    <Leaf size={12} /> Commercial energy strategy
                  </div>
                  <h3 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
                    Build a stronger energy profile for your business.
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Schedule a site visit
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
