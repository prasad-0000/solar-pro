import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, Tag } from "lucide-react";

const API_URL = "https://solar-pro-1.onrender.com/api/projects";
const ITEMS_PER_PAGE = 6;

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to load projects");
      }

      setProjects(result.data || []);
    } catch (err) {
      console.error("Error loading projects:", err);
      setError(err.message || "Unable to load projects");
    } finally {
      setLoading(false);
    }
  };

  const filters = useMemo(() => {
    const categories = [
      ...new Set(projects.map((project) => project.category).filter(Boolean)),
    ];

    return ["All", ...categories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category?.toLowerCase() === filter.toLowerCase(),
    );
  }, [projects, filter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
  );

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage]);

  const getImageUrl = (photo) => {
    if (!photo) return "";

    if (photo.startsWith("http")) {
      return photo;
    }

    return `https://solar-pro-1.onrender.com${photo}`;
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <section className="min-h-[60vh] bg-[var(--bg)] py-16">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 md:px-8">
          <div className="text-sm text-[var(--muted)]">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <section className="bg-horizon-fade pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <span className="eyebrow">Projects</span>

          <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
            Our solar projects.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Explore our completed solar installations across residential,
            commercial, industrial, and other projects.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-16 pt-6 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <LayoutGroup>
            {/* Filters */}
            <div className="mb-10 flex flex-wrap gap-2">
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

            {/* Error */}
            {error && (
              <div className="mb-8 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Empty State */}
            {!error && filteredProjects.length === 0 && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-10 text-center">
                <ImageIcon size={42} className="mx-auto text-[var(--muted)]" />

                <h3 className="mt-4 font-display text-lg font-semibold">
                  No projects found
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  There are currently no projects in this category.
                </p>
              </div>
            )}

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((project) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] transition-colors hover:border-[rgba(255,183,77,0.3)]"
                  >
                    {/* Project Image */}
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

                      {/* Project Category */}
                      <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        {project.category || "Project"}
                      </span>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                        {project.title || "Untitled Project"}
                      </h3>

                      {project.description && (
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                          {project.description}
                        </p>
                      )}

                      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
                        <Tag size={15} className="text-[var(--primary)]" />

                        <span>{project.category || "Project"}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            {filteredProjects.length > ITEMS_PER_PAGE && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                {/* Previous */}
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`relative inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-dawn-gradient text-[var(--bg)] shadow-glow"
                        : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Project Count */}
            {/* {filteredProjects.length > 0 && (
              <p className="mt-5 text-center text-xs text-[var(--muted)]">
                Showing{" "}
                {Math.min(
                  (currentPage - 1) * ITEMS_PER_PAGE + 1,
                  filteredProjects.length
                )}
                -
                {Math.min(
                  currentPage * ITEMS_PER_PAGE,
                  filteredProjects.length
                )}{" "}
                of {filteredProjects.length} projects
              </p>
            )} */}
          </LayoutGroup>
        </div>
      </section>
    </div>
  );
}
