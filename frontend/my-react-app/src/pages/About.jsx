import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Compass, Heart, Target } from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";
import CeoImg from "../assets/ceo.png";
import StatCounter from "../components/StatCounter.jsx";

const values = [
  { icon: Target, title: "Precision design", body: "Every system is engineered per roof, not pulled off a generic template." },
  { icon: Compass, title: "Straight answers", body: "Real numbers on payback time, no inflated savings claims or vague promises." },
  { icon: Heart, title: "Built to last", body: "We stay available for service calls long after the install is complete." },
];

const timeline = [
  { year: "2014", title: "Founded in Austin", body: "Two electricians, one van, and a belief that solar shouldn’t be complicated." },
  { year: "2017", title: "1,000th install", body: "Expanded into commercial rooftops and larger utility-scale ground-mount systems." },
  { year: "2021", title: "Battery storage launch", body: "Added whole-home backup as panel and storage costs converged." },
  { year: "2025", title: "4,200+ systems live", body: "Operating across five states with a 24/7 monitoring and service team." },
];

export default function About() {
  return (
    <div>
      <section className="bg-horizon-fade pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
            <div>
              <Reveal>
                <span className="eyebrow">About Solstice</span>
                <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                  We got tired of watching good roofs go to waste.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                  Solstice started as a two-person crew rewriting the idea that solar had to mean confusing contracts,
                  inflated promises, and clumsy installations. A decade later, the mission is still the same: smarter design, better service, stronger savings.
                </p>
              </Reveal>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-6">
                <StatCounter value={4200} suffix="+" label="Installs" />
                <StatCounter value={11} label="Years running" />
                <StatCounter value={5} label="States served" />
              </div>
            </div>

            <div>
              <div className="card-surface rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">What we do</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">From residential rooftops to commercial systems, we handle full-service solar projects including design, permitting, and commissioning.</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Custom system design and shade analysis</li>
                  <li>• Permitting and utility coordination</li>
                  <li>• Professional installation and commissioning</li>
                </ul>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-[var(--muted)]">Certifications & partners</div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm font-semibold">NABCEP</span>
                    <span className="rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm font-semibold">UL Listed</span>
                    <span className="rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm font-semibold">SunPower Partner</span>
                  </div>
                </div>

                <div className="mt-6">
                  <NavLink to="/projects" className="btn-primary">
                    See recent installs
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="card-surface overflow-hidden rounded-2xl p-5 sm:p-7 md:p-8">
            <div className="grid items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)]">
                <img src={CeoImg} alt="Solstice CEO" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="py-1 md:py-4">
                <span className="eyebrow">Leadership</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--text)] md:text-3xl">VV Kamal</h3>
                <div className="mt-1 text-sm font-semibold accent-green">Founder & CEO</div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">Jordan started Solstice after a decade in residential electrical work and a passion for accessible renewable energy. He leads design and quality efforts and remains hands-on with customer projects.</p>
                <p className="mt-3 text-sm text-[var(--muted)]">Under Jordan’s leadership the company has grown while keeping small-team responsiveness. He focuses on durable systems, honest estimates, and measurable customer savings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
              Three things that don't change as we grow.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-surface rounded-2xl p-7 transition-colors"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <v.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{v.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Timeline</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">A decade, roughly.</h2>
          </Reveal>

          <div className="relative mt-14 pl-8">
            <div className="absolute bottom-1 left-[7px] top-1 w-px bg-gradient-to-b from-[rgba(255,183,77,0.6)] via-[rgba(255,183,77,0.2)] to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} dir="left" delay={i * 0.08} className="relative">
                  <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-dawn-gradient shadow-glow" />
                  <div className="font-mono text-sm font-semibold text-[var(--primary)]">{t.year}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-[var(--text)]">{t.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">{t.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
