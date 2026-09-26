import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Map,
  Home,
  Send,
  FolderPlus,
  FolderOpen,
} from "lucide-react";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    solarPlantType: "",
    state: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !form.fullName ||
      !form.email ||
      !form.whatsapp ||
      !form.solarPlantType ||
      !form.state ||
      !form.address
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://solar-pro-1eog.onrender.com/api/clients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Unable to submit client details.");
        return;
      }

      setSuccess("Client details submitted successfully!");

      setForm({
        fullName: "",
        email: "",
        whatsapp: "",
        solarPlantType: "",
        state: "",
        address: "",
      });
    } catch (error) {
      console.error("Client submission error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* HEADER */}
        <div className="mb-10">
          <span className="eyebrow">Admin Dashboard</span>

          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            {/* TITLE */}
            <div>
              <h1 className="font-display text-3xl font-semibold md:text-4xl">
                Add a new solar enquiry.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
                Enter client information and select the required solar plant
                type. The details will be securely saved to your database.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex shrink-0 flex-wrap gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => (window.location.href = "/admin/clients")}
                className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] bg-transparent px-4 py-2 text-xs font-semibold text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-glow"
              >
                View All Clients
              </button>
            </div>
          </div>
        </div>

        {/* CLIENT CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr]">
          {/* LEFT INFO */}
          <div className="card-surface rounded-2xl p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dawn-gradient">
              <Home size={22} className="text-[var(--bg)]" />
            </div>

            <h2 className="mt-6 font-display text-xl font-semibold">
              Client enquiry
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Add customer details for residential, commercial, industrial, or
              other solar requirements.
            </p>

            <div className="mt-8">
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Solar Plant Types
                </p>

                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Residential</li>
                  <li>• Commercial</li>
                  <li>• Industrial</li>
                  <li>• Other</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="card-surface rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="font-display text-xl font-semibold">
                Add client details
              </h2>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Fill in the information below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* FULL NAME */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Full Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] bg-[var(--bg)]"
                  />

                  <User
                    size={17}
                    className="absolute right-3 top-3 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* EMAIL + WHATSAPP */}
              <div className="grid gap-5 md:grid-cols-2">
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
                      placeholder="customer@gmail.com"
                      className="w-full rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] bg-[var(--bg)]"
                    />

                    <Mail
                      size={17}
                      className="absolute right-3 top-3 text-[var(--muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    WhatsApp
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] bg-[var(--bg)]"
                    />

                    <Phone
                      size={17}
                      className="absolute right-3 top-3 text-[var(--muted)]"
                    />
                  </div>
                </div>
              </div>

              {/* SOLAR PLANT TYPE */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Solar Plant Type
                </label>

                <select
                  name="solarPlantType"
                  value={form.solarPlantType}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm text-[var(--text)] bg-[var(--bg)]"
                >
                  <option value="">Select solar plant type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* STATE */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  State
                </label>

                <div className="relative">
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] bg-[var(--bg)]"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telengana">Telengana</option>
                  </select>

                  <Map
                    size={17}
                    className="pointer-events-none absolute right-3 top-3 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Address
                </label>

                <div className="relative">
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter complete address"
                    className="w-full resize-none rounded-xl border px-4 py-3 pr-10 text-sm text-[var(--text)] bg-[var(--bg)]"
                  />

                  <MapPin
                    size={17}
                    className="absolute right-3 top-3 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* SUCCESS */}
              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
                  <p className="text-sm text-green-400">{success}</p>
                </div>
              )}

              {/* SUBMIT */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dawn-gradient px-6 py-3.5 font-medium text-[var(--bg)] shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />

                {isSubmitting ? "Submitting..." : "Submit Client Details"}
              </motion.button>
            </form>
          </div>
        </div>

        {/* PROJECT SECTION */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            {/* PROJECT TITLE */}
            <div>
              <span className="eyebrow">Project Gallery</span>

              <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Add a new solar project.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
                Add completed solar projects to your gallery. Upload project
                images and manage your residential, commercial, and industrial
                solar installations.
              </p>
            </div>

            {/* PROJECT BUTTONS */}
            <div className="flex shrink-0 flex-wrap gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => (window.location.href = "/admin/add-project")}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-dawn-gradient px-4 py-2 text-xs font-semibold text-[var(--bg)] shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <FolderPlus size={15} />
                Add New Project
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = "/admin/admin-projects")}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--primary)] bg-transparent px-4 py-2 text-xs font-semibold text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-glow"
              >
                <FolderOpen size={15} />
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
