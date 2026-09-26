import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone, Sun } from "lucide-react";

const socialIcons = [
  { label: "Facebook", path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9v2H9v2.5h1.5V19H13v-5.5h1.8L15.3 11H13V9.4c0-.3.1-.4.5-.4Z" },
  { label: "Instagram", path: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm4 4.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm0 1.8a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM16.3 7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" },
  { label: "Twitter", path: "M19 7.3c-.5.2-1 .4-1.6.5.6-.4 1-.9 1.2-1.6-.5.3-1.2.6-1.8.7a2.8 2.8 0 0 0-4.8 2.6A8 8 0 0 1 6.1 6.6a2.8 2.8 0 0 0 .9 3.8c-.4 0-.9-.1-1.2-.3v.1c0 1.4 1 2.5 2.3 2.8-.4.1-.8.1-1.2 0 .3 1.1 1.3 1.9 2.5 2A5.6 5.6 0 0 1 5 16.2 7.9 7.9 0 0 0 9.3 17.5c5.1 0 7.9-4.3 7.9-8v-.4c.5-.4 1-.9 1.3-1.5Z" },
  { label: "LinkedIn", path: "M6.9 8.5H4.3V19h2.6V8.5ZM5.6 4.8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM19.5 19v-5.9c0-3.1-1.7-4.6-3.9-4.6a3.4 3.4 0 0 0-3 1.7V8.5H10v10.5h2.6v-5.9c0-1.6.9-2.5 2.1-2.5s1.9.9 1.9 2.5V19h2.9Z" },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Careers", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Residential", to: "/residential" },
      { label: "Commercial", to: "/commercial" },
      { label: "Battery Storage", to: "/storage" },
      { label: "Savings & Financing", to: "/savings" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Products", to: "/products" },
      { label: "Services", to: "/services" },
      { label: "Resources", to: "/resources" },
      { label: "FAQs", to: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="section-divider" />
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dawn-gradient shadow-glow">
                <Sun size={16} className="text-[var(--bg)]" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold text-[var(--text)]">Solstice</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Solar energy systems engineered around one goal: turning daylight into a lower bill, every single day.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--muted)] transition-colors hover:border-[rgba(255,183,77,0.4)] hover:bg-[rgba(255,183,77,0.08)] hover:text-[var(--bg)]"
                  aria-label={s.label}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm font-semibold text-[var(--text)]">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <NavLink to={l.to} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]">
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 text-sm text-[var(--muted)] sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Phone size={15} className="shrink-0 text-[var(--primary)]" /> 91 + 8500509554
          </div>
          <div className="flex items-center gap-2">
            <Mail size={15} className="shrink-0 text-[var(--primary)]" /> vvkamal247@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} className="shrink-0 text-[var(--primary)]" /> AP And Telangana
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} Solstice Solar. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[var(--primary)]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[var(--primary)]">Terms</a>
            <a href="#" className="transition-colors hover:text-[var(--primary)]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
