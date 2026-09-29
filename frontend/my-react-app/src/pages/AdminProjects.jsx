import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import {
  Image as ImageIcon,
  FolderKanban,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const filters = ["All", "Residential", "Commercial", "Industrial", "Others"];

const API_BASE_URL = "https://solar-pro-1.onrender.com";

export default function AllProjects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    fetchProjects();
  }, []);

  // FETCH PROJECTS
  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/projects`);

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Unable to fetch projects");
        return;
      }

      setProjects(data.data || []);
      setCurrentPage(1);
    } catch (err) {
      console.error("Fetch Projects Error:", err);

      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  // FILTER PROJECTS
  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category?.toLowerCase() === filter.toLowerCase(),
        );

  // TOTAL PAGES
  const totalPages = Math.ceil(visibleProjects.length / projectsPerPage);

  // CURRENT PAGE START INDEX
  const startIndex = (currentPage - 1) * projectsPerPage;

  // SHOW ONLY 6 PROJECTS
  const currentProjects = visibleProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  // CHANGE PAGE
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // CHANGE FILTER
  const handleFilterChange = (item) => {
    setFilter(item);
    setCurrentPage(1);
  };

  // PROJECT IMAGE URL
  const getImageUrl = (photo) => {
    if (!photo) return "";

    if (photo.startsWith("http")) {
      return photo;
    }

    return `${API_BASE_URL}${photo}`;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="eyebrow">Admin Dashboard</span>

            <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              All Solar Projects
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              View and manage all solar projects added to your project gallery.
            </p>
          </div>

          {/* TOTAL PROJECTS */}
          <div className="card-surface inline-flex items-center gap-4 rounded-2xl px-5 py-4">
            <div className="rounded-xl bg-orange-500/10 p-3">
              <FolderKanban size={22} className="text-orange-400" />
            </div>

            <div>
              <p className="text-sm text-[var(--muted)]">Total Projects</p>

              <p className="text-2xl font-semibold">
                {loading ? "..." : projects.length}
              </p>
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-20 text-center text-sm text-[var(--muted)]">
            Loading projects...
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && projects.length === 0 && (
          <div className="card-surface mt-10 rounded-2xl p-10 text-center">
            <FolderKanban
              size={40}
              className="mx-auto mb-4 text-[var(--muted)]"
            />

            <h3 className="text-lg font-semibold">No projects found</h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Add your first solar project to display it here.
            </p>

            <button
              type="button"
              onClick={() => (window.location.href = "/admin/add-project")}
              className="mt-5 rounded-full bg-dawn-gradient px-5 py-2.5 text-sm font-medium text-[var(--bg)] shadow-glow transition hover:scale-[1.02]"
            >
              Add New Project
            </button>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <LayoutGroup>
            {/* FILTERS */}
            <div className="mb-10 mt-10 flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleFilterChange(item)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    filter === item
                      ? "text-[var(--bg)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {filter === item && (
                    <motion.span
                      layoutId="projectFilterBg"
                      className="absolute inset-0 rounded-full bg-dawn-gradient"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>

            {/* NO FILTER RESULTS */}
            {visibleProjects.length === 0 && (
              <div className="card-surface rounded-2xl p-10 text-center">
                <FolderKanban
                  size={40}
                  className="mx-auto mb-4 text-[var(--muted)]"
                />

                <h3 className="text-lg font-semibold">
                  No {filter.toLowerCase()} projects found
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Try selecting another project category.
                </p>
              </div>
            )}

            {/* PROJECT GRID */}
            {currentProjects.length > 0 && (
              <motion.div
                layout
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {currentProjects.map((project) => (
                    <motion.div
                      key={project._id}
                      layout
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="card-surface group overflow-hidden rounded-2xl transition duration-300"
                    >
                      {/* IMAGE */}
                      <div className="relative h-52 overflow-hidden bg-black/10">
                        {project.photo ? (
                          <img
                            src={getImageUrl(project.photo)}
                            alt={project.title || "Solar project"}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <ImageIcon
                              size={40}
                              className="text-[var(--muted)]"
                            />
                          </div>
                        )}

                        {/* PROJECT CATEGORY */}
                        <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                          {project.category || "Solar"}
                        </span>
                      </div>

                      {/* PROJECT CONTENT */}
                      <div className="p-5">
                        {/* TITLE */}
                        <h2 className="font-display text-xl font-semibold">
                          {project.title || "Untitled Project"}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                          {project.description ||
                            "No project description available."}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* PAGINATION */}
            {visibleProjects.length > projectsPerPage && (
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
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
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
                ))}

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
          </LayoutGroup>
        )}
      </div>
    </section>
  );
}
