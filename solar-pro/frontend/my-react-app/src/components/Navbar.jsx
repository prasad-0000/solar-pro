import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, MoonStar, Sun, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/savings", label: "Savings" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/industrial", label: "Industrial" },
  { to: "/storage", label: "Storage" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)]/95 shadow-[0_4px_18px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_28px_rgba(0,0,0,0.2)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dawn-gradient shadow-glow">
            <Sun size={16} className="text-[var(--bg)]" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--text)]">Solstice</span>
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            if (l.label === "Services") {
              return (
                <li key={l.to} className="relative" onMouseLeave={() => setServicesOpen(false)}>
                  <div className="flex items-center">
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `nav-pill flex items-center gap-1.5 ${isActive ? "nav-pill-active" : ""}`
                      }
                      onMouseEnter={() => setServicesOpen(true)}
                      onFocus={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>{l.label}</span>
                      <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </NavLink>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full pt-3"
                      >
                        <div className="w-52 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] p-2 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                          {serviceLinks.map((item) => (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              onClick={() => setServicesOpen(false)}
                              className={({ isActive }) =>
                                `block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                                  isActive ? "bg-dawn-gradient text-[var(--bg)]" : "text-[var(--muted)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text)]"
                                }`
                              }
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `nav-pill ${isActive ? "nav-pill-active" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <MoonStar size={17} /> : <Sun size={17} />}
          </button>
          <NavLink to="/admin-login" className="btn-secondary">
            Admin Login
          </NavLink>
          <NavLink to="/contact" className="btn-primary">
            Get a Quote
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <MoonStar size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--nav-bg)]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-5 py-4">
              {links.map((l) => {
                if (l.label === "Services") {
                  return (
                    <li key={l.to}>
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-1">
                        <div className="flex items-center gap-1">
                          <NavLink
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `flex-1 rounded-xl px-3 py-3 text-left text-base font-medium ${
                                isActive ? "bg-dawn-gradient text-[var(--bg)]" : "text-[var(--muted)]"
                              }`
                            }
                          >
                            {l.label}
                          </NavLink>

                          <button
                            type="button"
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--muted)]"
                            aria-label="Toggle services menu"
                          >
                            <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 space-y-1 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-2">
                                {serviceLinks.map((item) => (
                                  <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setOpen(false);
                                    }}
                                    className={({ isActive }) =>
                                      `block rounded-xl px-3 py-2.5 text-sm font-medium ${
                                        isActive ? "bg-dawn-gradient text-[var(--bg)]" : "text-[var(--muted)]"
                                      }`
                                    }
                                  >
                                    {item.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-2xl px-3 py-3 text-base font-medium ${
                          isActive ? "bg-dawn-gradient text-[var(--bg)]" : "text-[var(--muted)]"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                );
              })}
              <li className="pt-2">
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get a Quote
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-login" onClick={() => setOpen(false)} className="btn-secondary w-full justify-center">
                  Admin Login
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
