import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Factory,
  Gauge,
  Grid2X2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const applications = [
  { icon: Factory, title: "Manufacturing plants", body: "High-load systems planned around production shifts, critical machinery, and available roof or land area." },
  { icon: Grid2X2, title: "Warehouses and logistics", body: "Turn broad, unobstructed rooftops into a dependable energy asset for round-the-clock operations." },
  { icon: Gauge, title: "Demand-charge control", body: "Pair solar with load analysis and storage planning to reduce exposure during costly peak periods." },
];

const deliverySteps = [
  "Site survey, structural review, and interval-load analysis.",
  "Engineering designed around production schedules and safety zones.",
  "Utility approvals, installation, commissioning, and monitoring support.",
];

export default function Industrial() {
  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="eyebrow"><Factory size={12} /> Industrial solar</span>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build energy resilience into every production day.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Solar systems engineered for factories, warehouses, and high-consumption sites to reduce operating costs, manage peak demand, and support long-term growth.
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
              className="relative"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,209,197,0.15),_transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Plant energy model</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,183,77,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"><Zap size={10} /> Live offset</span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Daytime grid draw</div>
                        <div className="mt-2 font-display text-4xl font-semibold text-[var(--text)]">-38%</div>
                      </div>
                      <div className="mb-1 text-sm text-[var(--muted)]">projected reduction</div>
                    </div>
                    <div className="mt-6 grid h-28 grid-cols-8 items-end gap-2">
                      {[24, 35, 48, 66, 82, 92, 76, 58].map((height, index) => (
                        <div key={height} className="rounded-t-lg bg-gradient-to-t from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" style={{ height: `${height}%`, opacity: 0.35 + index * 0.07 }} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[{ value: "1 MW+", label: "scalable design" }, { value: "25 yrs", label: "panel warranty" }, { value: "24/7", label: "monitoring" }].map((item) => (
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Designed for heavy use</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">Solar infrastructure that works around your operations.</h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
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

      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Project delivery</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">From load profile to live production, one accountable team.</h2>
            <ul className="mt-7 space-y-4 text-sm text-[var(--muted)]">
              {deliverySteps.map((step) => (
                <li key={step} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" />
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
                {[{ label: "System engineering", value: "98%" }, { label: "Installation planning", value: "94%" }, { label: "Performance monitoring", value: "100%" }].map((metric) => (
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
    </div>
  );
}
