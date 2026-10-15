import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BatteryCharging,
  Box,
  Building2,
  ClipboardCheck,
  Cpu,
  Factory,
  Gauge,
  Home as HomeIcon,
  LineChart,
  Network,
  PlugZap,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

// Company numbers
const companyStats = [
  { value: "740+", label: "projects completed" },
  { value: "3.5 yrs", label: "of experience" },
  { value: "4 states", label: "AP, TS, UP and TN" },
  { value: "12 yrs", label: "piece-to-piece warranty" },
];

const services = [
  { icon: HomeIcon, title: "Residential Solar", body: "Rooftop systems sized to your household's real usage, not a generic estimate.", to: "/residential" },
  { icon: Building2, title: "Commercial Solar", body: "Large-roof arrays engineered for fast ROI on your P&L.", to: "/commercial" },
  { icon: Factory, title: "Industrial and Power Plants", body: "Factory rooftops and MW-scale solar power plants, built around uptime.", to: "/industrial" },
  { icon: ClipboardCheck, title: "Site Survey and Design", body: "Site visit, shade and structure checks, and a design made for your roof." },
  { icon: Wrench, title: "EPC Installation and Approvals", body: "Registration, design approvals, installation, and commissioning by one team." },
  { icon: BatteryCharging, title: "Battery Storage", body: "Backup that keeps the lights on through grid outages." },
  { icon: LineChart, title: "Energy Monitoring", body: "Real-time production and usage data from an app on your phone." },
  { icon: Sparkles, title: "AMC and Robo Cleaning", body: "Annual maintenance with robotic panel cleaning and inspection videos." },
  { icon: ShieldCheck, title: "12-Year Warranty", body: "Piece-to-piece manufacturing warranty on toughened tempered glass panels." },
];

// Solar PV system flow
const flow = [
  { icon: SunMedium, name: "Solar panels" },
  { icon: Box, name: "DC junction box" },
  { icon: Cpu, name: "Inverter" },
  { icon: PlugZap, name: "AC box and cables" },
  { icon: Gauge, name: "Net meter" },
  { icon: Network, name: "Grid" },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-horizon-fade pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Everything your roof needs to start generating.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              From the first site visit to years of monitored uptime, one team handles every step across Andhra Pradesh, Telangana, Uttar Pradesh, and Tamil Nadu.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company numbers */}
      <section className="py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-8">
          {companyStats.map((stat) => (
            <div key={stat.label} className="card-surface rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-semibold text-[var(--text)] md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8 transition-all duration-300 hover:border-[rgba(255,183,77,0.32)] hover:shadow-[0_22px_60px_rgba(9,16,24,0.12)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.18)] bg-[rgba(255,183,77,0.08)] transition-colors group-hover:bg-dawn-gradient group-hover:border-transparent">
                  <s.icon size={22} className="text-[var(--primary)] transition-colors group-hover:text-[var(--bg)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
                <NavLink
                  to={s.to || "/contact"}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {s.to ? "Learn more" : "Ask about this"} <ArrowRight size={14} />
                </NavLink>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What we build</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              A complete solar photovoltaic power system.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Residential, industrial, and power plant projects all follow the same safe, grid-connected design.
            </p>
          </Reveal>

          <div className="card-surface mt-12 rounded-[2rem] p-7 md:p-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {flow.map((step, i) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                    <step.icon size={24} className="text-[var(--primary)]" />
                  </div>
                  <div className="mt-3 text-sm font-medium text-[var(--text)]">{step.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
              <motion.div
                className="absolute inset-y-0 w-1/4 rounded-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2">
                <Zap size={14} className="text-[var(--primary)]" /> Lightning arrester
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2">
                <ArrowDownToLine size={14} className="text-[var(--secondary)]" /> Earthing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Not sure which service fits your property?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
              Tell us a bit about your roof and your energy bill and we'll recommend the right starting point, free of charge.
            </p>
            <NavLink to="/contact" className="btn-primary mt-8">
              Talk to a specialist <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
