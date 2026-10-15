import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ImageIcon, MapPin, Tag } from "lucide-react";

const BASE_URL = "https://solar-pro-digf.onrender.com";
// const BASE_URL = "http://localhost:5000";
const API_URL = `${BASE_URL}/api/projects`;

const ITEMS_PER_PAGE = 6;

const heroStats = [
  ["740+", "Installations"],
  ["4", "States"],
  ["3.5 yrs", "Of experience"],
];

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)]">
      <div className="h-56 bg-[rgba(255,255,255,0.04)]" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-2/3 rounded bg-[rgba(255,255,255,0.06)]" />
        <div className="h-3 w-full rounded bg-[rgba(255,255,255,0.04)]" />
        <div className="h-3 w-4/5 rounded bg-[rgba(255,255,255,0.04)]" />
      </div>
    </div>
  );
}

function Head({ eyebrow, title, body }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-dawn-gradient" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-dawn-gradient" />
      {body && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{body}</p>}
    </div>
  );
}

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = useCallback(async () => {
    try {
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
  }, []);

  useEffect(() => {
    // The request updates state after its fetch/JSON promises resolve; the rule cannot see that async boundary.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProjects();
  }, [fetchProjects]);

  const filters = useMemo(() => {
    const categories = [...new Set(projects.map((project) => project.category).filter(Boolean))];
    return ["All", ...categories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category?.toLowerCase() === filter.toLowerCase());
  }, [projects, filter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const getImageUrl = (photo) => {
    if (!photo) return "";
    if (photo.startsWith("http")) return photo;
    const photoPath = photo.startsWith("/") ? photo : `/${photo}`;
    return `${BASE_URL}${photoPath}`;
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-horizon-fade pb-14 pt-16 text-center md:pb-20 md:pt-24">
        <div className="solar-grid absolute inset-0 opacity-40" />
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[rgba(255,122,69,0.14)] blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[rgba(79,209,197,0.14)] blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-dawn-gradient" />
            Projects
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-gradient">Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Browse completed residential, commercial, industrial and power plant installations.
          </p>

          <div className="mx-auto mt-9 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map(([v, l]) => (
              <div key={l} className="card-surface rounded-2xl px-3 py-4">
                <div className="text-gradient font-display text-2xl font-bold md:text-3xl">{v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECT GALLERY ===================== */}
      <section className="bg-[var(--panel)] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Head eyebrow="Completed work" title="Our projects" body="Browse installations by category." />

          <LayoutGroup>
            <div className="mx-auto mt-8 flex max-w-full flex-wrap justify-center gap-1.5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-1.5 sm:w-fit sm:rounded-full">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleFilterChange(item)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    filter === item ? "text-[var(--bg)]" : "text-[var(--muted-strong)] hover:text-[var(--text)]"
                  }`}
                >
                  {filter === item && (
                    <motion.span
                      layoutId="projectFilterBg"
                      className="absolute inset-0 rounded-full bg-dawn-gradient shadow-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>

            {error && (
              <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-center text-sm text-red-400">
                {error}
                <button type="button" onClick={fetchProjects} className="ml-3 font-semibold underline">Retry</button>
              </div>
            )}

            {loading && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            )}

            {!loading && !error && filteredProjects.length === 0 && (
              <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10 text-center">
                <ImageIcon size={42} className="mx-auto text-[var(--muted)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">No projects found</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">There are currently no projects in this category.</p>
              </div>
            )}

            {!loading && (
              <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {paginatedProjects.map((project) => (
                    <motion.article
                      key={project._id}
                      layout
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6 }}
                      className="group card-surface flex flex-col overflow-hidden rounded-3xl transition-colors hover:border-[rgba(255,183,77,0.4)]"
                    >
                      <div className="relative h-56 overflow-hidden bg-black/20">
                        {project.photo ? (
                          <img
                            src={getImageUrl(project.photo)}
                            alt={project.title || "Solar project"}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <ImageIcon size={40} className="text-[var(--muted)]" />
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(7,19,29,0.7)] via-transparent to-transparent" />
                        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                          <Tag size={12} /> {project.category || "Project"}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-xl font-semibold leading-snug text-[var(--text)]">
                          {project.title || "Untitled Project"}
                        </h3>
                        {project.description && (
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                        )}
                        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[var(--primary)]" /> Helios Solar
                          </span>
                          <span className="font-semibold text-[var(--primary)]">{project.category || "Project"}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {filteredProjects.length > ITEMS_PER_PAGE && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-dawn-gradient text-[var(--bg)] shadow-glow"
                        : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

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
          </LayoutGroup>
        </div>
      </section>

      {/* =============================== CTA ============================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-dawn-gradient p-8 text-[var(--bg)] md:p-12">
            <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="max-w-md font-display text-2xl font-bold md:text-3xl">Want a project like these on your roof?</h3>
                <p className="mt-2 max-w-md text-sm text-[rgba(10,18,26,0.75)]">
                  Free site visit and a clear quote in ₹, including your subsidy.
                </p>
              </div>
              <NavLink to="/contact" className="btn-secondary shrink-0 border-[rgba(10,18,26,0.14)] bg-[rgba(10,18,26,0.05)] text-[var(--bg)] hover:bg-[rgba(10,18,26,0.1)]">
                Get your free quote <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
