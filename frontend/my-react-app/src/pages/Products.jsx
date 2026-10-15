import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BatteryFull, Check, Cpu, Sun } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const tabs = [
  {
    key: "panels",
    label: "Panels",
    icon: Sun,
    items: [
      { name: "SAATVIK solar panels", specs: ["540–720 Wp options", "Cost-effective modules", "12-year manufacturing warranty"] },
      { name: "ZAP91 solar panels", specs: ["540–720 Wp options", "High efficiency for limited roof space", "12-year manufacturing warranty"] },
      { name: "SWELECT solar panels", specs: ["540–720 Wp options", "Residential and commercial systems", "12-year manufacturing warranty"] },
      { name: "APS panel packages", specs: ["Panels supplied with matching APS inverters", "Selected by system size", "12-year manufacturing warranty"] },
    ],
  },
  {
    key: "inverters",
    label: "Inverters",
    icon: Cpu,
    items: [
      { name: "APS inverters", specs: ["Grid-connected system options", "Selected for your system size", "Product warranty included in the quote"] },
      { name: "DEYE inverters", specs: ["Grid-connected system options", "Selected for your system size", "Product warranty included in the quote"] },
      { name: "SOLIS inverters", specs: ["Grid-connected system options", "Selected for your system size", "Product warranty included in the quote"] },
      { name: "DUROSAL inverters", specs: ["Grid-connected system options", "Selected for your system size", "Product warranty included in the quote"] },
    ],
  },
  {
    key: "battery",
    label: "Battery Storage",
    icon: BatteryFull,
    items: [
      { name: "10 kWh battery storage", specs: ["10 kWh usable output", "Whole-home backup options", "10-year coverage"] },
      { name: "20 kWh battery storage", specs: ["20 kWh usable output", "Sized to your backup needs", "10-year coverage"] },
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
              Solar equipment selected for dependable performance.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              We supply SAATVIK, ZAP91, SWELECT, and APS panels, with APS, DEYE, SOLIS, and DUROSAL inverters. System size, equipment, and warranty details are confirmed in your site-specific quote.
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

