import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const info = [
  { icon: Phone, title: "Call us", body: "91 + 8500509554", note: "Mon–Sat, 8am–6pm" },
  { icon: Mail, title: "Email us", body: "vvkamal247@gmail.com", note: "We reply within 1 business day" },
  { icon: MapPin, title: "Visit us", body: "AP And Telangana", note: "Showroom open weekdays" },
];

const initialState = { name: "", email: "", phone: "", message: "" };
const quoteWhatsAppNumber = "919391323099";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Tell us a bit about your property or energy goals.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "A few more details help us quote your system accurately.";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const quoteMessage = [
      "New solar quote request",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `Property details: ${form.message.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${quoteWhatsAppNumber}?text=${encodeURIComponent(quoteMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-horizon-fade pb-12 pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl heading-blue">
              Let’s put your roof to work.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Share a few details and a specialist will follow up with a free, no-obligation quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <Reveal dir="left" className="space-y-5 mt-6 lg:mt-12">
              {info.map((i) => (
                <div key={i.title} className="card-surface flex items-start gap-4 rounded-2xl p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,183,77,0.2)] bg-[rgba(255,183,77,0.08)]">
                    <i.icon size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text)]">{i.title}</h3>
                    <p className="mt-1 text-[var(--text)]">{i.body}</p>
                    <p className="mt-0.5 text-xs text-[var(--muted)]">{i.note}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal dir="right">
              <div className="card-surface rounded-2xl p-7 md:p-9 mt-6 lg:mt-12">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dawn-gradient shadow-glow"
                    >
                      <CheckCircle2 size={30} className="text-[var(--bg)]" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-[var(--text)]">Request received</h3>
                    <p className="mt-2 text-[var(--muted)]">
                      A Solstice specialist will reach out within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Enter Your Name" />
                      <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="Enter Your Moblie number" />
                    </div>
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="EX: hello@email.com" />
                    <div>
                      <label className="mb-2 block text-sm text-[var(--muted)]">Tell us about your property</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Roof type, average monthly bill, timeline..."
                        className={`w-full resize-none rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(255,183,77,0.25)] ${errors.message ? "border-red-400/70" : "border-[var(--border)]"}`}
                      />
                      {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message}</p>}
                    </div>
                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dawn-gradient px-6 py-3.5 font-medium text-[var(--bg)] shadow-glow transition-all disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      {isSubmitting ? "Sending request..." : "Send request"}
                      {!isSubmitting && <Send size={16} />}
                    </motion.button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", error }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-[var(--muted)]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(255,183,77,0.25)] ${error ? "border-red-400/70" : "border-[var(--border)]"}`}
      />
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
