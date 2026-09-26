import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Factory,
  Leaf,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const stats = [
  { value: "410 kW", label: "average commercial array" },
  { value: "31%", label: "lower utility spend" },
  { value: "7 yrs", label: "typical ROI" },
];

const options = [
  { icon: Building2, title: "Mixed-use roofs", body: "High-visibility commercial properties designed for dependable energy and lower operating costs." },
  { icon: Factory, title: "Industrial facilities", body: "Large loads, higher demand windows, and robust systems engineered for round-the-clock performance." },
  { icon: BarChart3, title: "Portfolio strategy", body: "Multiple sites, phased rollouts, and financing structures built around cash-flow planning." },
];

const benefits = [
  "Reduce peak demand charges and soften utility volatility.",
  "Create a cleaner brand image with measurable sustainability outcomes.",
  "Protect long-term operating budgets with predictable energy costs.",
  "Move faster with one team handling design, utility coordination, and installation.",
];

export default function Commercial() {
  return (
    <div className="page-shell pb-24">
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
                From office rooftops to industrial sites, we build systems that support resilience, sustainability, and lower energy spend without disrupting operations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Talk to a commercial advisor
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/projects" className="btn-secondary">View case studies</NavLink>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,209,197,0.14),_transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Portfolio performance
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,183,77,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                      <TrendingUp size={10} /> ROI track
                    </span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      <span>Utility cost</span>
                      <span>Projected offset</span>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">-31%</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">annual spend</div>
                    </div>
                    <div className="mt-6 grid grid-cols-6 items-end gap-2">
                      {[28, 32, 42, 58, 74, 88, 82, 96].map((bar, idx) => (
                        <div key={bar} className="rounded-t-xl bg-gradient-to-t from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" style={{ height: `${bar}%`, opacity: 0.2 + idx * 0.08 }} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {stats.map((stat) => (
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Built for operations</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              The right system for the right property profile.
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
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Load profile planning</span>
                      <span>96%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                      <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Utility coordination</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Installation readiness</span>
                      <span>94%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-10">
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
                    Build a stronger energy profile for your next operating cycle.
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Schedule a consult
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
