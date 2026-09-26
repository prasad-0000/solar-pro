import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Signature element: the sun visibly rises along an arc that mirrors the
 * hero copy's promise ("every hour, the sun writes your energy bill to
 * zero"). As the user scrolls the hero into view, a sun disc travels along
 * an SVG arc from horizon to zenith, and the arc's stroke draws in behind it,
 * literally visualising "captured" energy.
 */
export default function SunArc() {
  const wrapRef = useRef(null);
  const sunRef = useRef(null);
  const pathRef = useRef(null);
  const arcDrawRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const path = pathRef.current;
    const sun = sunRef.current;
    const arcDraw = arcDrawRef.current;
    if (!path || !sun) return;

    const length = path.getTotalLength();
    arcDraw.style.strokeDasharray = `${length}`;
    arcDraw.style.strokeDashoffset = `${length}`;

    if (reduce) {
      const end = path.getPointAtLength(length);
      gsap.set(sun, { x: end.x, y: end.y });
      gsap.set(arcDraw, { strokeDashoffset: 0 });
      return;
    }

    const obj = { progress: 0 };
    const tween = gsap.to(obj, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.6,
      },
      onUpdate: () => {
        const point = path.getPointAtLength(obj.progress * length);
        gsap.set(sun, { x: point.x, y: point.y });
        arcDraw.style.strokeDashoffset = `${length - obj.progress * length}`;
      },
    });

    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full h-full">
      <svg
        viewBox="0 0 600 300"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A45" />
            <stop offset="100%" stopColor="#FFB74D" />
          </linearGradient>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE8B8" />
            <stop offset="55%" stopColor="#FFB74D" />
            <stop offset="100%" stopColor="#FF7A45" />
          </radialGradient>
          <filter id="sunGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* horizon line */}
        <line x1="0" y1="280" x2="600" y2="280" stroke="rgba(255,183,77,0.18)" strokeWidth="1" />

        {/* faint full arc guide */}
        <path
          ref={pathRef}
          d="M 40 280 A 260 260 0 0 1 560 280"
          fill="none"
          stroke="rgba(255,183,77,0.12)"
          strokeWidth="1.5"
        />

        {/* animated drawn arc (energy captured) */}
        <path
          ref={arcDrawRef}
          d="M 40 280 A 260 260 0 0 1 560 280"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* the sun disc, positioned by GSAP */}
        <g ref={sunRef} filter="url(#sunGlow)">
          <circle r="14" fill="url(#sunGradient)" />
        </g>
      </svg>
    </div>
  );
}
