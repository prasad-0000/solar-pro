import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  Gauge,
  Home,
  Leaf,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const features = [
  { icon: Home, title: "Roof-first design", body: "Every array is engineered around your roofline, shade, angles, and lifestyle needs." },
  { icon: Gauge, title: "Smart production", body: "See solar generation, home usage, and savings in one clean mobile dashboard." },
  { icon: ShieldCheck, title: "Built for resilience", body: "Premium hardware and installation details selected for long-term reliability." },
];

const steps = [
  { n: "01", title: "Free consultation", body: "We review your usage, roof, and goals to size a system that makes sense." },
  { n: "02", title: "Design + permits", body: "Engineering packages and utility paperwork handled start to finish." },
  { n: "03", title: "Installation day", body: "Clean crews, careful finish work, and a thorough walkthrough before signoff." },
  { n: "04", title: "Monitor & optimize", body: "Your system keeps producing and your dashboard tracks every kilowatt." },
];

const stats = [
  { value: "~₹23,000", label: "illustrative annual bill saving" },
  { value: "3 kW", label: "example system size" },
  { value: "28 yrs", label: "projected life" },
];

export default function Residential() {
  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <span className="eyebrow"><SunMedium size={12} /> Residential solar</span>
                <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                  Your home, powered by a smarter roofline.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                  Make your property quieter, cleaner, and more efficient with a premium solar installation designed around how you actually live.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <NavLink to="/contact" className="btn-primary group">
                    Book a free roof quote
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </NavLink>
                  <NavLink to="/projects" className="btn-secondary">See recent homes</NavLink>
                </div>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="hero-card overflow-hidden p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.18),_transparent_40%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Home energy profile
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(79,209,197,0.1)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                      <Leaf size={10} /> Solar ready
                    </span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-4">
                    <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      <span>Production</span>
                      <span>Today</span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">~12</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">units today (example)</div>
                    </div>
                    <div className="mt-5 flex h-24 items-end gap-2">
                      {[36, 48, 58, 65, 70, 92, 88, 100].map((bar, idx) => (
                        <div key={bar} className="flex-1 rounded-t-xl bg-gradient-to-t from-[var(--primary-strong)] via-[var(--primary)] to-[var(--secondary)]" style={{ height: `${bar}%`, opacity: 0.22 + idx * 0.08 }} />
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
            <span className="eyebrow">Home comfort, upgraded</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
              Premium design choices that make daily life better.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <feature.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Our process</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              A smooth path from proposal to power-on.
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.09} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <div className="mb-4 font-mono text-sm font-semibold text-[var(--primary)]">{step.n}</div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="card-surface rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
                <div>
                  <span className="eyebrow">Why homeowners choose us</span>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-[var(--text)]">
                    Real savings, beautiful installation, and zero guesswork.
                  </h3>
                  <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                    {[
                      "No upsell packages—just the right system for your roof and usage.",
                      "Premium wiring, mounting, and finishes selected for aesthetics and longevity.",
                      "Annual monitoring and maintenance guidance after installation.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-[var(--secondary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)] p-6">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Estimated production</div>
                  <div className="mt-4 font-display text-4xl font-semibold text-[var(--text)]">9.1 MWh</div>
                  <div className="mt-2 text-sm text-[var(--muted)]">Per year from a typical 7.8 kW system</div>
                  <div className="mt-6 rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)] p-4 text-sm text-[var(--muted)]">
                    Battery-ready design means future backup is easy, even if you start with panels only.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 md:pb-10">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.14)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.78)]">
                    <BatteryCharging size={12} /> Made for modern homes
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    Ready to rethink your home energy bill?
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Get a free estimate
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
