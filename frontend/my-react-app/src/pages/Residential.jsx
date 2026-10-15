import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BatteryCharging,
  Box,
  Check,
  Cpu,
  Gauge,
  Home,
  IndianRupee,
  Leaf,
  Network,
  PlugZap,
  ShieldCheck,
  SunMedium,
  TreePine,
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

const features = [
  { icon: Home, title: "Roof-first design", body: "Every array is engineered around your roofline, shade, angles, and lifestyle needs." },
  { icon: Gauge, title: "Smart production", body: "See solar generation, home usage, and savings in one clean mobile dashboard." },
  { icon: ShieldCheck, title: "Toughened tempered glass", body: "Strong 600 Wp panels that stand up to heat, rain, dust, and hail." },
  { icon: BatteryCharging, title: "Battery-ready", body: "Start with panels only and add backup storage whenever you need it." },
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

const steps = [
  { n: "01", title: "Site visit", body: "We check your roof, shade, and electricity bill, then size the right system." },
  { n: "02", title: "Registration and design approvals", body: "Engineering drawings and DISCOM paperwork handled start to finish." },
  { n: "03", title: "Installation and commissioning", body: "Neat installation, net meter setup, and a full walkthrough before signoff." },
  { n: "04", title: "Monitor and maintain", body: "Track every unit on your phone, with cleaning and service support after." },
];

const packages = [
  { size: "3 kW", price: "₹1.95 Lakh", area: "185 sq ft", note: "Home rooftop system" },
  { size: "5 kW", price: "₹3.15 Lakh", area: "330 sq ft", note: "Large home or small shop" },
  { size: "10 kW", price: "₹5.25 Lakh", area: "750 sq ft", note: "Commercial system" },
];

const inverterBrands = ["APS", "DEYE", "SOLIS", "DUROSAL"];

// Impact numbers. CO2 = energy saved x 0.71 kg per kWh
const impact = [
  { icon: Zap, value: "17,52,000", label: "kWh of energy saved" },
  { icon: IndianRupee, value: "₹1,05,12,000", label: "saved on electricity bills" },
  { icon: TreePine, value: "10,09,900", label: "trees saved" },
  { icon: Leaf, value: "12,43,920 kg", label: "CO₂ emissions reduced" },
];

// Panel grid lines for the animated panels
const panelGrid = {
  backgroundImage:
    "linear-gradient(rgba(210,242,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(210,242,255,0.18) 1px, transparent 1px)",
  backgroundSize: "33% 25%",
};

export default function Residential() {
  return (
    <div className="page-shell pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="solar-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-horizon-fade" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <span className="eyebrow"><SunMedium size={12} /> Residential solar</span>
                <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                  Your home, powered by a smarter roofline.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                  Cut your electricity bill with a premium rooftop system from a team that has completed 740+ projects across Andhra Pradesh, Telangana, Uttar Pradesh, and Tamil Nadu.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <NavLink to="/contact" className="btn-primary group">
                    Book a free site visit
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </NavLink>
                  <NavLink to="/projects" className="btn-secondary">See recent homes</NavLink>
                </div>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:translate-y-3"
            >
              <div className="hero-card overflow-hidden p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.18),_transparent_40%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Home solar system
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(79,209,197,0.1)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                      <motion.span
                        className="h-2 w-2 rounded-full bg-[var(--secondary)]"
                        animate={{ opacity: [1, 0.25, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                      Live
                    </span>
                  </div>

                  {/* Realtime panels animation */}
                  <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div className="font-display text-4xl font-semibold text-[var(--text)]">3 kW</div>
                      <div className="pb-1 text-sm text-[var(--muted)]">example rooftop system</div>
                    </div>
                    <div className="mt-5 grid grid-cols-6 gap-1.5">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div
                          key={i}
                          className="relative aspect-[3/4] overflow-hidden rounded-md border border-[rgba(170,225,255,0.38)] bg-gradient-to-br from-[#3479a2] via-[#205775] to-[#12364e] shadow-[inset_0_0_14px_rgba(94,211,255,0.14)]"
                          style={panelGrid}
                        >
                          <motion.div
                            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[rgba(255,214,125,0.9)] to-transparent mix-blend-screen"
                            initial={{ x: "-120%" }}
                            animate={{ x: "320%" }}
                            transition={{
                              duration: 1.5,
                              delay: (i % 6) * 0.22 + Math.floor(i / 6) * 0.12,
                              repeat: Infinity,
                              repeatDelay: 2.4,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "600 Wp", label: "panels" },
                      { value: "185 sq ft", label: "roof needed" },
                      { value: "12 yrs", label: "warranty" },
                    ].map((stat) => (
                      <div key={stat.label} className="card-surface rounded-2xl p-3 text-center">
                        <div className="font-display text-xl font-semibold text-[var(--text)]">{stat.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Home comfort, upgraded</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Premium design choices that make daily life better.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                  <feature.icon size={20} className="text-[var(--primary)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="section-divider" />

      {/* How it works */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              From sunlight on your roof to power in your home.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              A solar photovoltaic power system, protected by a lightning arrester and proper earthing.
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

            {/* Moving light shows power travelling to the grid */}
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

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our process</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              A smooth path from site visit to power-on.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.09} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <div className="mb-4 font-mono text-base font-semibold text-[var(--primary)]">{step.n}</div>
                <h3 className="font-display text-2xl font-semibold leading-snug text-[var(--text)]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Indicative pricing</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Pick a size that fits your roof and your bill.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Prices shown are before subsidy. Eligible homeowners may receive up to ₹78,000 from PM Surya Ghar after commissioning and inspection. Final pricing depends on your site, panel choice, and inverter brand.
            </p>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <motion.div key={p.size} variants={staggerItem} whileHover={{ y: -6 }} className="card-surface rounded-2xl p-8 text-center">
                <div className="font-display text-5xl font-semibold text-[var(--text)]">{p.size}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{p.note}</div>
                <div className="mt-6 font-display text-2xl font-semibold text-[var(--primary)]">{p.price}</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                  <Check size={14} className="text-[var(--secondary)]" /> About {p.area} of roof
                </div>
                <div className="mt-1 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                  <Check size={14} className="text-[var(--secondary)]" /> 600 Wp tempered glass panels
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Inverter brands */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Inverter brands</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Trusted inverters, matched to your system size.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {inverterBrands.map((brand) => (
              <div key={brand} className="card-surface rounded-2xl px-4 py-6 text-center font-display text-xl font-semibold text-[var(--text)]">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[var(--panel)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our residential impact</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              What our homeowners have saved so far.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <motion.div key={item.label} variants={staggerItem} className="card-surface rounded-2xl p-7 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(79,209,197,0.2)] bg-[rgba(79,209,197,0.08)]">
                  <item.icon size={20} className="text-[var(--secondary)]" />
                </div>
                <div className="font-display text-3xl font-semibold text-[var(--text)]">{item.value}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{item.label}</div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
              <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.14)] blur-2xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.06)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(10,18,26,0.78)]">
                    <BatteryCharging size={12} /> Made for modern homes
                  </div>
                  <h3 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
                    Ready to rethink your home energy bill?
                  </h3>
                </div>
                <NavLink to="/contact" className="btn-secondary border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.04)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.08)]">
                  Get a free estimate
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
