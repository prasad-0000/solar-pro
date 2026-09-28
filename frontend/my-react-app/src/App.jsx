import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Residential = lazy(() => import("./pages/Residential.jsx"));
const Commercial = lazy(() => import("./pages/Commercial.jsx"));
const Industrial = lazy(() => import("./pages/Industrial.jsx"));
const Storage = lazy(() => import("./pages/Storage.jsx"));
const Savings = lazy(() => import("./pages/Savings.jsx"));
const Faq = lazy(() => import("./pages/Faq.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));
const AllClients = lazy(() => import("./pages/AllClients.jsx"));
const AddProject = lazy(() => import("./pages/AddProject.jsx"));
const AdminProjects = lazy(() => import("./pages/AdminProjects.jsx"));

const THEME_KEY = "solstice-theme";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } },
};

function PageWrap({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function resolveTheme() {
  const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return fallback;
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(resolveTheme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div data-theme={theme} className="min-h-screen flex flex-col overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </Suspense>
      <main className="flex-1">
        <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-sm text-[var(--muted)]">Loading page…</div>}>
          <AnimatePresence mode="wait">
            <ErrorBoundary>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrap><Home /></PageWrap>} />
                <Route path="/about" element={<PageWrap><About /></PageWrap>} />
                <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
                <Route path="/residential" element={<PageWrap><Residential /></PageWrap>} />
                <Route path="/commercial" element={<PageWrap><Commercial /></PageWrap>} />
                <Route path="/industrial" element={<PageWrap><Industrial /></PageWrap>} />
                <Route path="/storage" element={<PageWrap><Storage /></PageWrap>} />
                <Route path="/savings" element={<PageWrap><Savings /></PageWrap>} />
                <Route path="/faq" element={<PageWrap><Faq /></PageWrap>} />
                <Route path="/resources" element={<PageWrap><Resources /></PageWrap>} />
                <Route path="/products" element={<PageWrap><Products /></PageWrap>} />
                <Route path="/projects" element={<PageWrap><Projects /></PageWrap>} />
                <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
                <Route path="/admin-login" element={<PageWrap><AdminLogin /></PageWrap>} />
                <Route path="/admin-dashboard" element={<PageWrap><AdminDashboard /></PageWrap>} />
                <Route path="/admin/clients" element={<PageWrap> <AllClients /> </PageWrap> }/>
                <Route path="/admin/add-project" element={<PageWrap> <AddProject /> </PageWrap> }/>
                <Route path="/admin/admin-projects" element={<PageWrap> <AdminProjects /> </PageWrap> }/>
              </Routes>
            </ErrorBoundary>
          </AnimatePresence>
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
