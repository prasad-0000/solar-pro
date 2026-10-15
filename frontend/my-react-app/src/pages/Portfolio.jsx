import { useState } from "react";
import { motion } from "framer-motion";
import { Film } from "lucide-react";

const portfolioGroups = [
  {
    key: "EPC Installation",
    blurb: "Watch our crews design, install and commission solar plants.",
    sections: [
      { title: "Installation videos", vertical: false, videos: ["/videos/epc-background-1.mp4", "/videos/epc-background-2.mp4"] },
      { title: "Shorts", vertical: true, videos: ["/videos/epc-short-1.mp4", "/videos/epc-short-2.mp4"] },
    ],
  },
  {
    key: "AMC",
    blurb: "Annual maintenance: robo cleaning and site surveys.",
    sections: [
      { title: "Robo cleaning", vertical: false, videos: ["/videos/amc-robo-cleaning-1.mp4", "/videos/amc-robo-cleaning-2.mp4"] },
      { title: "Site surveys", vertical: false, videos: ["/videos/amc-survey-1.mp4", "/videos/amc-survey-2.mp4"] },
    ],
  },
];

function VideoCard({ src, vertical, label }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="card-surface group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,183,77,0.4)]">
      <div className={`relative w-full bg-black ${vertical ? "aspect-[9/16]" : "aspect-video"}`}>
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(255,183,77,0.22),transparent_28%),linear-gradient(145deg,#122330,#07131d)] text-center">
            <span className="absolute right-[18%] top-[15%] h-14 w-14 animate-pulse rounded-full bg-[rgba(255,183,77,0.75)] shadow-[0_0_55px_rgba(255,183,77,0.45)]" />
            <div className="relative mt-12 grid w-[68%] grid-cols-3 gap-1.5 -skew-y-6 rounded-lg border border-[rgba(79,209,197,0.55)] bg-[rgba(79,209,197,0.12)] p-2 shadow-[0_16px_55px_rgba(0,0,0,0.35)]">
              {Array.from({ length: 9 }, (_, index) => <span key={index} className="h-7 rounded-sm border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.2)]" />)}
            </div>
            <span className="mt-8 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <Film size={16} className="text-[var(--primary)]" /> Demo {label.toLowerCase()}
            </span>
          </div>
        ) : (
          <video
            src={src}
            controls
            muted
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 text-xs font-semibold text-[var(--muted-strong)]">
        <Film size={14} className="text-[var(--primary)]" /> {label}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [groupKey, setGroupKey] = useState("EPC Installation");
  const group = portfolioGroups.find((item) => item.key === groupKey);

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <section className="relative overflow-hidden bg-horizon-fade pb-12 pt-14 text-center md:pb-16 md:pt-20">
        <div className="solar-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-dawn-gradient" />Portfolio videos</span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Watch our <span className="text-gradient">work</span>
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Project videos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)]">{group.blurb}</p>
          </div>

          <div role="tablist" aria-label="Portfolio video type" className="mx-auto mt-8 flex w-fit max-w-full gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] p-1.5">
            {portfolioGroups.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={groupKey === item.key}
                onClick={() => setGroupKey(item.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all sm:px-7 ${groupKey === item.key ? "bg-dawn-gradient text-[var(--bg)] shadow-glow" : "text-[var(--muted-strong)] hover:text-[var(--text)]"}`}
              >
                {item.key}
              </button>
            ))}
          </div>

          <motion.div key={groupKey} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-12 space-y-14">
            {group.sections.map((section) => (
              <div key={section.title}>
                <div className="mb-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[rgba(255,183,77,0.6)]" />
                  <h3 className="font-display text-xl font-semibold md:text-2xl">{section.title}</h3>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[rgba(255,183,77,0.6)]" />
                </div>
                <div className={`grid gap-6 ${section.vertical ? "mx-auto max-w-md grid-cols-2" : "mx-auto max-w-5xl sm:grid-cols-2"}`}>
                  {section.videos.map((src, index) => (
                    <VideoCard key={src} src={src} vertical={section.vertical} label={`${section.title} ${index + 1}`} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
