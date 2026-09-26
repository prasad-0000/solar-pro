import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Check,
  CreditCard,
  Leaf,
  PiggyBank,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const plans = [
  { icon: Wallet, title: "Cash purchase", body: "Best long-term savings with fast payback and maximum lifetime value." },
  { icon: CreditCard, title: "Low-interest financing", body: "Monthly payment structures designed to keep your utility cost in check." },
  { icon: PiggyBank, title: "Lease & PPA options", body: "Flexible terms for businesses and homeowners focused on immediate affordability." },
];

const savings = [
  { label: "Average monthly utility bill", value: "$210" },
  { label: "Projected solar offset", value: "72%" },
  { label: "Estimated monthly payment", value: "$145" },
  { label: "payback window", value: "6–8 yrs" },
];

export default function Savings() {
  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="eyebrow"><BadgeDollarSign size={12} /> Savings & financing</span>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                A smarter energy decision should feel affordable from day one.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Choose the ownership model that fits your budget, then let the system start doing the heavy lifting on your monthly energy costs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NavLink to="/contact" className="btn-primary group">
                  Get financing options
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink to="/services" className="btn-secondary">Explore services</NavLink>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="hero-card p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.18),_transparent_38%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Energy wallet view
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(79,209,197,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                      <Leaf size={10} /> Lower spend
                    </span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      <span>Monthly trend</span>
                      <span>downward</span>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">-$115</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">average month</div>
                    </div>
                    <div className="mt-6 flex h-20 items-end gap-2">
                      {[28, 36, 54, 64, 72, 63, 86, 100].map((bar, idx) => (
                        <div key={bar} className="flex-1 rounded-t-xl bg-gradient-to-t from-[var(--primary-strong)] via-[var(--primary)] to-[var(--secondary)]" style={{ height: `${bar}%`, opacity: 0.18 + idx * 0.08 }} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {savings.slice(0, 2).map((item) => (
                      <div key={item.label} className="card-surface rounded-2xl p-3 text-center">
                        <div className="font-display text-xl font-semibold text-[var(--text)]">{item.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.label}</div>
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
            <span className="eyebrow">Choose your path</span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
              Flexible ownership options to fit your cash flow and goals.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <motion.div key={plan.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <plan.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{plan.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{plan.body}</p>
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
              <span className="eyebrow">What you can expect</span>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
                Transparent guidance without pressure or confusion.
              </h2>
              <ul className="mt-7 space-y-4 text-sm text-[var(--muted)]">
                {[
                  "Clear ROI estimates based on your existing utility usage and roof profile.",
                  "No surprise fees or add-ons—just straightforward project recommendations.",
                  "Financing support that compares monthly cost, savings, and long-term ownership value.",
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(79,209,197,0.2)] bg-[rgba(79,209,197,0.08)]">
                    <ShieldCheck size={22} className="text-[var(--secondary)]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)]">Financing summary</div>
                    <div className="font-display text-xl font-semibold text-[var(--text)]">Flexible payment models</div>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {savings.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center">
                      <div className="font-display text-xl font-semibold text-[var(--text)]">{item.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.label}</div>
                    </div>
                  ))}
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
              <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.78)]">
                    <PiggyBank size={12} /> Sustainable value
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    See which financing path keeps your project efficient from day one.
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Build your plan
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
