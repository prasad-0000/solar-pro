import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Compass,
  Download,
  FileText,
  Heart,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";
import CeoImg from "../assets/ceo.png";
import StatCounter from "../components/StatCounter.jsx";
import GskProfileImg from "../assets/gsk-profile.jpg";
/* GSK profile PDF: put the file in /public as gsk-profile.pdf */

const values = [
  { icon: Target, title: "Precision design", body: "Every system is engineered per site and per roof, not pulled off a generic template." },
  { icon: Compass, title: "Straight answers", body: "Real numbers on units, savings and payback time. No inflated claims or vague promises." },
  { icon: Heart, title: "Built to last", body: "We stay available for AMC and service calls long after the installation is complete." },
];

const whatWeDo = [
  { icon: Zap, title: "Custom design", body: "System design and shading analysis for every site." },
  { icon: ShieldCheck, title: "Approvals", body: "DISCOM approval, net-metering and subsidy paperwork." },
  { icon: Wrench, title: "Install & AMC", body: "Installation, commissioning and yearly maintenance." },
];

const timeline = [
  { year: "2023", title: "Helios begins", body: "Founded by V. Venkat Kamal with a belief that solar shouldn't be complicated." },
  { year: "2026", title: "740+ systems live", body: "Operating across Andhra Pradesh, Telangana, Uttar Pradesh and Tamil Nadu with a dedicated AMC and service team." },
];

const certifications = ["MNRE registered", "ALMM listed panels", "DISCOM empanelled", "Licensed electrical contractor"];

function Head({ eyebrow, title, body }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-dawn-gradient" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-dawn-gradient" />
      {body && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{body}</p>}
    </Reveal>
  );
}

export default function About() {
  return (
    <div>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-horizon-fade pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="solar-grid absolute inset-0 opacity-40" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(255,122,69,0.14)] blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[rgba(79,209,197,0.14)] blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-dawn-gradient" />
                  About Helios
                </span>
                <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  We got tired of watching <span className="text-gradient">good roofs go to waste.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  Helios Electrical and Energy Solutions started with a simple goal: rewrite the idea that solar had to
                  mean confusing paperwork, inflated promises and clumsy installations. Since 2023 the mission has been
                  the same: smarter design, honest numbers and stronger savings for homes and businesses across
                  Andhra Pradesh, Telangana, Uttar Pradesh and Tamil Nadu.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <NavLink to="/portfolio" className="btn-primary group">
                    See our portfolio
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </NavLink>
                  <NavLink to="/contact" className="btn-secondary">Talk to our team</NavLink>
                </div>
              </Reveal>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
                {[
                  <StatCounter key="a" value={740} suffix="+" label="Projects" />,
                  <StatCounter key="b" value={3} suffix=".5" label="Years running" />,
                  <StatCounter key="c" value={4} label="States served" />,
                ].map((node, i) => (
                  <div key={i} className="card-surface rounded-2xl p-4 text-center sm:p-5">
                    {node}
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="card-surface relative overflow-hidden rounded-3xl p-6 md:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(255,183,77,0.16)] blur-3xl" />
                <h3 className="relative font-display text-xl font-semibold text-[var(--text)]">What we do</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  From home rooftops to industrial plants and power plants, full-service solar: EPC, sales and AMC.
                </p>

                <ul className="relative mt-5 space-y-3">
                  {whatWeDo.map((w) => (
                    <li key={w.title} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,183,77,0.1)]">
                        <w.icon size={18} className="text-[var(--primary)]" />
                      </span>
                      <div>
                        <div className="font-display text-sm font-semibold text-[var(--text)]">{w.title}</div>
                        <div className="text-xs leading-relaxed text-[var(--muted)]">{w.body}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    <Award size={14} className="text-[var(--primary)]" /> Certifications &amp; empanelments
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certifications.map((c) => (
                      <span key={c} className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== LEADERSHIP =========================== */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Head eyebrow="Leadership" title="The person behind Helios" />

          <Reveal delay={0.1}>
            <div className="card-surface relative mt-12 overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[rgba(79,209,197,0.14)] blur-[80px]" />
              <div className="relative grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <div className="mx-auto w-full max-w-xs sm:max-w-sm">
                  <div className="rounded-[1.6rem] bg-dawn-gradient p-1 shadow-glow">
                    <div className="overflow-hidden rounded-[1.4rem] bg-[var(--panel-strong)]">
                      <img src={CeoImg} alt="V. Venkat Kamal, Founder and CEO of Helios" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <Quote size={34} className="mx-auto text-[var(--primary)] opacity-80 md:mx-0" />
                  <p className="mt-3 font-display text-xl font-medium leading-snug text-[var(--text)] md:text-2xl">
                    Renewable energy should be simple to access, and honest from the first conversation.
                  </p>
                  <div className="mt-6">
                    <h3 className="font-display text-2xl font-semibold text-[var(--text)] md:text-3xl">V. Venkat Kamal</h3>
                    <div className="accent-green mt-1 text-sm font-semibold">Founder &amp; CEO</div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    Kamal started Helios after a decade in electrical contracting. He leads system design and quality,
                    and stays hands-on with customer projects, keeping a small team's responsiveness while growing
                    across four states.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                    {["Durable systems", "Honest estimates", "Measurable savings"].map((t) => (
                      <span key={t} className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ GSK PROFILE ========================= */}
      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="card-surface grid overflow-hidden rounded-[2rem] md:grid-cols-2">
              <div className="relative h-64 md:h-full md:min-h-[320px]">
                <img src={GskProfileImg} alt="GSK profile" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,19,29,0.6)] to-transparent md:bg-gradient-to-r" />
                <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <FileText size={14} /> GSK Profile
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 text-center md:p-10 md:text-left">
                <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Our company profile</h2>
                <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-dawn-gradient md:mx-0" />
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  See our work, team and credentials in one document.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    ["740+", "Projects"],
                    ["3.5", "Years"],
                    ["4", "States"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] py-3">
                      <div className="text-gradient font-display text-xl font-bold">{v}</div>
                      <div className="text-[11px] uppercase tracking-wider text-[var(--muted)]">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="/gsk-profile.pdf" download className="btn-primary">
                    <Download size={16} /> Download profile
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================= VALUES ============================= */}
      <section className="bg-[var(--panel)] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Head eyebrow="What we stand for" title="Three things that don't change as we grow." />

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-surface group relative overflow-hidden rounded-3xl p-7 transition-colors hover:border-[rgba(255,183,77,0.4)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-dawn-gradient opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-6 top-4 font-mono text-5xl font-bold text-[rgba(255,183,77,0.1)]">0{i + 1}</span>
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(255,183,77,0.25)] bg-[rgba(255,183,77,0.08)]">
                  <v.icon size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="relative font-display text-xl font-semibold text-[var(--text)]">{v.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[var(--muted)]">{v.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ============================ TIMELINE ============================ */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Head eyebrow="Our journey" title="2023 → 2026" />

          <div className="relative mt-14 grid gap-8 md:grid-cols-2">
            <div className="absolute left-[25%] right-[25%] top-5 hidden h-px bg-gradient-to-r from-[rgba(255,183,77,0.7)] to-[rgba(79,209,197,0.7)] md:block" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.12}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-dawn-gradient shadow-glow">
                    <span className="h-3 w-3 rounded-full bg-[var(--bg)]" />
                  </span>
                  <div className="card-surface mt-5 w-full rounded-3xl p-7">
                    <div className="text-gradient font-display text-4xl font-bold">{t.year}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[var(--text)]">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== CTA ============================== */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="max-w-md font-display text-2xl font-bold md:text-3xl">Ready to see what solar can save you?</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[rgba(10,18,26,0.75)]">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> AP, TS, UP &amp; TN</span>
                    <span className="flex items-center gap-1.5"><Phone size={14} /> +91 8500509554</span>
                  </p>
                </div>
                <NavLink to="/contact" className="btn-secondary shrink-0 border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.05)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.1)]">
                  Get your free quote <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
