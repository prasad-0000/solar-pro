import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, MoonStar, Sun, X } from "lucide-react";
import logoHeader from "../assets/logoheader.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/savings", label: "Savings" },
  { to: "/portfolio", label: "Portfolio" },
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
  const servicesCloseTimer = useRef(null);

  const openServices = () => {
    window.clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };

  const closeServicesSoon = () => {
    window.clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = window.setTimeout(() => setServicesOpen(false), 160);
  };

  const toggleServices = () => {
    window.clearTimeout(servicesCloseTimer.current);
    setServicesOpen((prev) => !prev);
  };

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

  useEffect(() => () => window.clearTimeout(servicesCloseTimer.current), []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)]/95 shadow-[0_4px_18px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_28px_rgba(0,0,0,0.2)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
        <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoHeader} alt="Solstice" className="h-12 w-auto object-contain lg:h-14" />
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            if (l.label === "Services") {
              return (
                <li key={l.to} className="relative" onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
                  <div className="flex items-center">
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `nav-pill flex items-center gap-1.5 ${isActive ? "nav-pill-active" : ""}`
                      }
                      onFocus={openServices}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>{l.label}</span>
                    </NavLink>
                    <button
                      type="button"
                      onClick={toggleServices}
                      aria-label={`${servicesOpen ? "Close" : "Open"} services menu`}
                      aria-expanded={servicesOpen}
                      aria-controls="desktop-services-menu"
                      className="-ml-2 flex h-9 w-7 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                    >
                      <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        id="desktop-services-menu"
                        onMouseEnter={openServices}
                        onMouseLeave={closeServicesSoon}
                        className="absolute left-0 top-full z-50 pt-3"
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

        <div className="hidden items-center gap-3 lg:flex">
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

        <div className="flex items-center gap-2 lg:hidden">
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
            onClick={() => {
              setOpen((o) => !o);
              setServicesOpen(false);
            }}
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
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--nav-bg)]/95 backdrop-blur-xl lg:hidden"
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
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
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
                            aria-expanded={servicesOpen}
                            aria-controls="mobile-services-menu"
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
                              id="mobile-services-menu"
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
