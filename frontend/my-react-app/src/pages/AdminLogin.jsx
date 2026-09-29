import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        // "https://solar-pro-1eog.onrender.com/api/admin/login",
        // "https://10.70.9.31:5000/api/admin/login",
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        },
      );

      // First get API response
      const data = await response.json();

      // Check login response
      if (!response.ok || !data.success) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      // Save admin information
      localStorage.setItem("admin", JSON.stringify(data.admin));

      // Navigate after successful login
      window.location.href = "/admin-dashboard";
    } catch (error) {
      console.error("Login Error:", error);

      setError("Unable to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Admin</span>

            <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Administrator login
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">
              Secure sign in for site administrators.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="card-surface rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">
                Quick site stats
              </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Overview, pending requests, and recent installs are available
                here once the dashboard is connected.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="text-sm">
                  • Pending requests: <strong>12</strong>
                </li>

                <li className="text-sm">
                  • Active bids: <strong>3</strong>
                </li>

                <li className="text-sm">
                  • Systems installed this month: <strong>27</strong>
                </li>
              </ul>
            </div>

            {/* LOGIN FORM */}
            <div className="card-surface rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 bg-[var(--bg)]"
                      placeholder="admin@company.com"
                    />

                    <Mail
                      size={16}
                      className="absolute right-3 top-3 text-[var(--muted)]"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 bg-[var(--bg)]"
                      placeholder="••••••••"
                    />

                    <Lock
                      size={16}
                      className="absolute right-3 top-3 text-[var(--muted)]"
                    />
                  </div>
                </div>

                {/* ERROR */}
                {error && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                {/* LOGIN BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dawn-gradient px-6 py-3.5 font-medium text-[var(--bg)] shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
