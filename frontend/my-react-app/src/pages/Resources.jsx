import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Leaf,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

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

export default function Resources() {
  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow"><Leaf size={12} /> Resources</span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Clear guidance for smarter solar decisions.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Learn what matters most when comparing system types, financing options, battery planning, and long-term performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-surface rounded-2xl p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <resource.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{resource.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{resource.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="card-surface rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <span className="eyebrow">Need a custom answer?</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--text)]">
                    Speak with a solar advisor about your exact roof and goals.
                  </h2>
                  <p className="mt-3 text-[var(--muted)]">
                    We’ll help you compare financing, design scope, battery options, and expected savings before moving forward.
                  </p>
                </div>

                <div className="space-y-3">
                  <NavLink to="/contact" className="btn-primary w-full justify-center">
                    Book a consultation
                    <ArrowRight size={16} />
                  </NavLink>
                  <NavLink to="/faq" className="btn-secondary w-full justify-center">
                    Read the FAQ
                  </NavLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
