import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Home as HomeIcon,
  LineChart,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal.jsx";

const services = [
  { icon: HomeIcon, title: "Residential Solar", body: "Rooftop systems sized to your household's real usage, not a generic estimate." },
  { icon: Building2, title: "Commercial Solar", body: "Ground-mount and large-roof arrays engineered for fast ROI on your P&L." },
  { icon: BatteryCharging, title: "Battery Storage", body: "Whole-home backup that keeps the lights on through grid outages." },
  { icon: Wrench, title: "Installation & Permits", body: "Licensed crews handle mounting, wiring, inspection, and utility sign-off." },
  { icon: LineChart, title: "Energy Monitoring", body: "Real-time production and usage data from an app on your phone." },
  { icon: ShieldCheck, title: "Maintenance Plans", body: "Scheduled inspections and panel cleaning to protect long-term output." },
];

export default function Services() {
  return (
    <div>
      <section className="bg-horizon-fade pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Everything your roof needs to start generating.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              From the first site visit to years of monitored uptime, one team handles every step with a single point of contact and a single warranty to back it up.
            </p>
          </Reveal>
        </div>
      </section>

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
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Ask about this <ArrowRight size={14} />
                </NavLink>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-[var(--panel)] py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Not sure which service fits your property?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
              Tell us a bit about your roof and your energy bill and we’ll recommend the right starting point, free of charge.
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

