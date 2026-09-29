import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Compass, Heart, Target } from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";
import CeoImg from "../assets/ceo.png";
import StatCounter from "../components/StatCounter.jsx";

const values = [
  { icon: Target, title: "Precision design", body: "Every system is engineered per site and per roof, not pulled off a generic template." },
  { icon: Compass, title: "Straight answers", body: "Real numbers on units, savings and payback time — no inflated claims or vague promises." },
  { icon: Heart, title: "Built to last", body: "We stay available for AMC and service calls long after the installation is complete." },
];

const timeline = [
  { year: "2014", title: "Founded in Kakinada", body: "Two electricians, one van, and a belief that solar shouldn't be complicated." },
  { year: "2017", title: "1,000th installation", body: "Expanded from homes into commercial rooftops and larger ground-mount systems." },
  { year: "2021", title: "Industrial-scale EPC", body: "Began delivering large rooftop and ground-mount plants for factories and campuses." },
  { year: "2025", title: "4,200+ systems live", body: "Operating across Andhra Pradesh and Telangana with a dedicated AMC and service team." },
];

const certifications = ["MNRE registered", "ALMM listed panels", "DISCOM empanelled", "Licensed electrical contractor"];

export default function About() {
  return (
    <div>
      {/* ============================ HERO ============================ */}
      <section className="bg-horizon-fade pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">About Solstice</span>
                <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  We got tired of watching good roofs go to waste.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  Solstice started as a two-person crew rewriting the idea that solar had to mean confusing paperwork,
                  inflated promises and clumsy installations. A decade later, the mission is the same: smarter design,
                  honest numbers and stronger savings for homes and businesses across Andhra Pradesh and Telangana.
                </p>
              </Reveal>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 sm:gap-6">
                <StatCounter value={4200} suffix="+" label="Installs" />
                <StatCounter value={11} label="Years running" />
                <StatCounter value={2} label="States served" />
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="card-surface rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">What we do</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  From home rooftops to industrial plants, we handle full-service solar: EPC, sales and AMC — design,
                  DISCOM approval and commissioning included.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Custom system design and shading analysis</li>
                  <li>• DISCOM approval, net-metering and subsidy paperwork</li>
                  <li>• Installation, commissioning and yearly AMC</li>
                </ul>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-[var(--muted)]">Certifications &amp; empanelments</div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                    {certifications.map((c) => (
                      <span key={c} className="rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs font-semibold sm:text-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <NavLink to="/projects" className="btn-primary w-full justify-center sm:w-auto">
                    See recent installs
                  </NavLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== LEADERSHIP =========================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="card-surface overflow-hidden rounded-2xl p-5 sm:p-7 md:p-8">
            <div className="grid items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] sm:max-w-sm">
                <img src={CeoImg} alt="VV Kamal, Founder and CEO of Solstice" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="py-1 text-center md:py-4 md:text-left">
                <span className="eyebrow">Leadership</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--text)] md:text-3xl">VV Kamal</h3>
                <div className="accent-green mt-1 text-sm font-semibold">Founder &amp; CEO</div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  Kamal started Solstice after a decade in electrical contracting and a conviction that renewable
                  energy should be simple to access. He leads system design and quality, and stays hands-on with
                  customer projects.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Under his leadership the company has grown while keeping a small-team's responsiveness, focused on
                  durable systems, honest estimates and measurable customer savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================= VALUES ============================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold md:text-4xl">
              Three things that don't change as we grow.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <motion.div key={v.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7 transition-colors">
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

      {/* ============================ TIMELINE ============================ */}
      <section className="bg-[var(--panel)] py-16 md:py-24">
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
                  <h3 className="mt-1 font-display text-lg font-semibold text-[var(--text)] sm:text-xl">{t.title}</h3>
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