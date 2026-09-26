import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CircleHelp, MessageSquareQuote } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const faqItems = [
  {
    q: "How long does a residential system take to install?",
    a: "Most rooftop solar projects move from signed agreement to final activation in about 4 to 8 weeks, depending on utility review, permitting, and the specific roof profile.",
  },
  {
    q: "Will I still get a bill from the utility?",
    a: "You may still receive a small utility bill, but it is usually much lower with solar, especially if your system is paired with smart consumption habits or battery storage.",
  },
  {
    q: "Do you handle permits and interconnection work?",
    a: "Yes. Our team manages design review, permit application, utility coordination, inspection scheduling, and final activation for a smoother project experience.",
  },
  {
    q: "Can battery storage work with my existing solar system?",
    a: "Often yes. We can review your current inverter setup and recommend a battery configuration that supports backup power, rate optimization, and future flexibility.",
  },
  {
    q: "What happens if my roof is shaded or older?",
    a: "Shading, roof age, and orientation all affect production. We review those factors before recommending a system design or considering alternative solutions.",
  },
  {
    q: "Do you offer financing or lease options?",
    a: "We offer a range of pathways, including direct ownership, low-interest financing, and performance-oriented alternatives depending on the project budget and goals.",
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="page-shell pb-24">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow"><CircleHelp size={12} /> FAQ</span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              The practical answers before you commit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Everything you need to know about solar design, timeline, ownership, backup power, and system performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="card-surface overflow-hidden rounded-2xl"
              >
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

      <section className="pb-8 md:pb-10">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.78)]">
                    <MessageSquareQuote size={12} /> Still have questions?
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    Let’s talk through your property, roof, and goals.
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Ask a specialist
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
