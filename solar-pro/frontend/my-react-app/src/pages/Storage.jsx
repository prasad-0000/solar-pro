import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Bolt,
  Check,
  CloudMoon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const features = [
  { icon: BatteryCharging, title: "Whole-home backup", body: "Keep essentials online through grid outages and keep your home running smoothly." },
  { icon: CloudMoon, title: "Smart energy control", body: "Charge off-peak and discharge when utility rates spike, without lifting a finger." },
  { icon: ShieldCheck, title: "Resilience by design", body: "Battery-ready architecture built to integrate cleanly with your solar production." },
];

const specs = [
  { label: "Usable output", value: "10–20 kWh" },
  { label: "Backup duration", value: "12–36 hrs" },
  { label: "Coverage", value: "Essential loads" },
  { label: "Warranty", value: "10-year coverage" },
];

export default function Storage() {
  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="eyebrow"><BatteryCharging size={12} /> Battery storage</span>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Store the sunlight you make, so your power keeps working after sunset.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Pair your solar array with a well-designed battery system to reduce blackout risk, optimize energy use, and gain peace of mind when the grid isn’t steady.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Explore backup options
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/products" className="btn-secondary">Browse storage systems</NavLink>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.16),_transparent_38%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Storage mode
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(79,209,197,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                      <Zap size={10} /> 24/7 backup
                    </span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Battery reserve</div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">86%</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">reserve charge</div>
                    </div>
                    <div className="mt-6 h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                      <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {specs.map((spec) => (
                      <div key={spec.label} className="card-surface rounded-2xl p-3 text-center">
                        <div className="font-display text-xl font-semibold text-[var(--text)]">{spec.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{spec.label}</div>
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
            <span className="eyebrow">Why storage matters</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              The systems that keep your home comfortable, even when conditions change.
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="eyebrow">How it works</span>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
                Charge during the day, discharge when it matters.
              </h2>
              <ul className="mt-7 space-y-4 text-sm text-[var(--muted)]">
                {[
                  "Solar produces during the day and powers your home first.",
                  "Extra generation fills the battery instead of feeding back to the grid unnecessarily.",
                  "When rates jump or outages hit, the battery takes over the critical load path.",
                ].map((item) => (
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                    <Bolt size={21} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)]">Smart discharge</div>
                    <div className="font-display text-xl font-semibold text-[var(--text)]">Load priority system</div>
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>Critical loads</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>HVAC / comfort</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>EV / other loads</span>
                      <span>48%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-strong)]" />
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
                    <BatteryCharging size={12} /> Better backup confidence
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    Power through the grid’s rough days with confidence.
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Talk to a specialist
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
