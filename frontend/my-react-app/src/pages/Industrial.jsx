import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Box,
  Check,
  Cpu,
  Factory,
  Gauge,
  Grid2X2,
  Network,
  PlugZap,
  ShieldCheck,
  Sun,
  SunMedium,
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

const applications = [
  { icon: Sun, title: "Solar power plants", body: "MW-scale ground-mount plants planned around land area, grid evacuation, and approvals." },
  { icon: Factory, title: "Manufacturing plants", body: "High-load systems planned around production shifts and critical machinery." },
  { icon: Grid2X2, title: "Warehouses and logistics", body: "Turn broad, unobstructed rooftops into a dependable energy asset for round-the-clock operations." },
  { icon: Gauge, title: "Demand-charge control", body: "Pair solar with load analysis and storage planning to reduce costly peak charges." },
];

const deliverySteps = [
  "Site visit, structural review, and load analysis.",
  "Registration and design approvals with the utility.",
  "Installation, commissioning, and 24/7 monitoring support.",
];

const readiness = [
  { label: "System engineering", value: "98%" },
  { label: "Installation planning", value: "94%" },
  { label: "Performance monitoring", value: "100%" },
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

const panelOptions = ["540 Wp", "550 Wp", "580 Wp", "600 Wp", "625 Wp", "720 Wp"];

const inverterBrands = ["APS", "DEYE", "SOLIS", "DUROSAL"];

// Panel grid lines for the animated panels
const panelGrid = {
  backgroundImage:
    "linear-gradient(rgba(210,242,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(210,242,255,0.18) 1px, transparent 1px)",
  backgroundSize: "33% 25%",
};

export default function Industrial() {
  return (
    <div className="page-shell pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="eyebrow"><Factory size={12} /> Industrial solar and power plants</span>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build energy resilience into every production day.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Solar systems and power plants engineered for factories, warehouses, and high-consumption sites to reduce operating costs, manage peak demand, and support long-term growth.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Plan an industrial system
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/projects" className="btn-secondary">View completed projects</NavLink>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:translate-y-3"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,209,197,0.15),_transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Power plant array</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,183,77,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"><Zap size={10} /> Live offset</span>
                  </div>

                  {/* Realtime panels animation */}
                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Daytime grid draw</div>
                        <div className="mt-2 font-display text-4xl font-semibold text-[var(--text)]">-38%</div>
                      </div>
                      <div className="mb-1 text-sm text-[var(--muted)]">projected reduction</div>
                    </div>
                    <div className="mt-5 grid grid-cols-9 gap-1.5">
                      {Array.from({ length: 36 }).map((_, i) => (
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
                              delay: (i % 9) * 0.16 + Math.floor(i / 9) * 0.12,
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
                      { value: "1 MW+", label: "scalable design" },
                      { value: "12 yrs", label: "piece-to-piece warranty" },
                      { value: "24/7", label: "monitoring" },
                    ].map((item) => (
                      <div key={item.label} className="card-surface rounded-2xl p-3 text-center">
                        <div className="font-display text-lg font-semibold text-[var(--text)]">{item.value}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">{item.label}</div>
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

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Designed for heavy use</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Solar infrastructure that works around your operations.
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <motion.div key={application.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <application.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{application.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{application.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Solar photovoltaic power system, from panel to grid.
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

      {/* Project delivery */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Project delivery</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">From site visit to live production, one accountable team.</h2>
            <ul className="mt-7 space-y-4 text-base text-[var(--muted)]">
              {deliverySteps.map((step) => (
                <li key={step} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <Check size={18} className="mt-0.5 shrink-0 text-[var(--secondary)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal dir="right">
            <div className="card-surface rounded-[2rem] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(79,209,197,0.2)] bg-[rgba(79,209,197,0.08)]"><ShieldCheck size={22} className="text-[var(--secondary)]" /></div>
                <div><div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)]">Industrial readiness</div><div className="font-display text-xl font-semibold text-[var(--text)]">Built around uptime</div></div>
              </div>
              <div className="mt-7 space-y-5">
                {readiness.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]"><span>{metric.label}</span><span>{metric.value}</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" style={{ width: metric.value }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Panels and inverters */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Panel options</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              High-wattage toughened tempered glass panels.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Fewer panels, less structure, and faster installation on large roofs.
            </p>
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
              Industrial-grade inverters you can rely on.
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
      <section className="pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <h3 className="font-display text-3xl font-semibold md:text-4xl">Planning a factory roof or a solar power plant?</h3>
            <NavLink to="/contact" className="btn-primary group mt-8">
              Talk to our engineers
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
