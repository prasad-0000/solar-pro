import React, { useEffect, useState } from "react";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AllClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 6;

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://solar-pro-1eog.onrender.com/api/clients",
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Unable to fetch clients");
        return;
      }

      setClients(data.data || []);
      setCurrentPage(1);
    } catch (error) {
      console.error("Fetch Clients Error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(clients.length / clientsPerPage);

  const startIndex = (currentPage - 1) * clientsPerPage;

  const currentClients = clients.slice(startIndex, startIndex + clientsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="eyebrow">Admin Dashboard</span>

            <h1 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
              All solar enquiries
            </h1>

            <p className="mt-3 text-sm text-[var(--muted)]">
              View all customer enquiries submitted through your website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => (window.location.href = "/admin-dashboard")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/5"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </button>
        </div>

        {/* STATS */}
        <div className="mt-10">
          <div className="card-surface inline-flex items-center gap-4 rounded-2xl px-6 py-5">
            <div className="rounded-xl bg-orange-500/10 p-3">
              <Users size={24} className="text-orange-400" />
            </div>

            <div>
              <p className="text-sm text-[var(--muted)]">Total Enquiries</p>

              <p className="text-2xl font-semibold">
                {loading ? "..." : clients.length}
              </p>
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-16 text-center text-[var(--muted)]">
            Loading client details...
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && clients.length === 0 && (
          <div className="mt-8 card-surface rounded-2xl p-10 text-center">
            <Users size={36} className="mx-auto mb-4 text-[var(--muted)]" />

            <h3 className="text-lg font-semibold">No enquiries found</h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Customer enquiries will appear here.
            </p>
          </div>
        )}

        {/* CLIENT CARDS */}
        {!loading && !error && clients.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {currentClients.map((client) => (
              <div
                key={client._id}
                className="card-surface rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                {/* NAME */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold">
                      {client.fullName}
                    </h2>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      New solar enquiry
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
                    {client.solarPlantType || "Solar"}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* EMAIL */}
                  <div className="flex items-center gap-3">
                    <Mail size={17} className="text-orange-400" />

                    <div>
                      <p className="text-xs text-[var(--muted)]">Email</p>

                      <p className="text-sm">{client.email}</p>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-center gap-3">
                    <Phone size={17} className="text-orange-400" />

                    <div>
                      <p className="text-xs text-[var(--muted)]">WhatsApp</p>

                      <p className="text-sm">{client.whatsapp}</p>
                    </div>
                  </div>

                  {/* STATE */}
                  <div className="flex items-center gap-3">
                    <MapPin size={17} className="text-orange-400" />

                    <div>
                      <p className="text-xs text-[var(--muted)]">State</p>

                      <p className="text-sm">{client.state}</p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="rounded-xl border border-white/10 bg-black/5 p-4">
                    <p className="text-xs text-[var(--muted)]">Address</p>

                    <p className="mt-1 text-sm">{client.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {!loading && !error && clients.length > clientsPerPage && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {/* PREVIOUS */}
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>

            {/* PAGE NUMBERS */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-dawn-gradient text-[var(--bg)] shadow-glow"
                      : "border border-white/10 hover:bg-white/5"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            {/* NEXT */}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
