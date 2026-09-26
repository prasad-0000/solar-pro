import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BatteryFull, Check, Cpu, Sun } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const tabs = [
  {
    key: "panels",
    label: "Panels",
    icon: Sun,
    items: [
      { name: "Solstice Core 440W", specs: ["440W output", "21.8% efficiency", "25yr warranty"] },
      { name: "Solstice Core Pro 550W", specs: ["550W output", "22.6% efficiency", "25yr warranty"] },
      { name: "Solstice Slate (all-black)", specs: ["425W output", "21.2% efficiency", "Low-glare finish"] },
    ],
  },
  {
    key: "inverters",
    label: "Inverters",
    icon: Cpu,
    items: [
      { name: "String Inverter X1", specs: ["97.5% efficiency", "Wi-Fi monitoring", "10yr warranty"] },
      { name: "Microinverter M-Series", specs: ["Panel-level tracking", "99% uptime design", "25yr warranty"] },
      { name: "Hybrid Inverter H2", specs: ["Battery-ready", "Backup-capable", "12yr warranty"] },
    ],
  },
  {
    key: "battery",
    label: "Battery Storage",
    icon: BatteryFull,
    items: [
      { name: "PowerVault 10", specs: ["10 kWh capacity", "Whole-home backup", "10yr warranty"] },
      { name: "PowerVault 20 Stack", specs: ["20 kWh capacity", "Expandable modules", "10yr warranty"] },
      { name: "PowerVault Compact", specs: ["5 kWh capacity", "Apartment-friendly", "10yr warranty"] },
    ],
  },
];

export default function Products() {
  const [active, setActive] = useState("panels");
  const current = tabs.find((t) => t.key === active);

  return (
    <div>
      <section className="bg-horizon-fade pb-12 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Products</span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Hardware built to run for 25 years, quietly.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              We only install equipment we’d put on our own roofs: tier-1 panels, marine-grade mounting, and inverters with real track records.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === t.key ? "text-[var(--bg)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="productTabBg"
                    className="absolute inset-0 rounded-full bg-dawn-gradient"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <t.icon size={15} className="relative z-10" />
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {current.items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -6 }}
                  className="card-surface rounded-2xl p-7 transition-colors"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.18)] bg-[rgba(255,183,77,0.08)]">
                    <current.icon size={20} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--text)]">{item.name}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {item.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <Check size={14} className="shrink-0 text-[var(--secondary)]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

