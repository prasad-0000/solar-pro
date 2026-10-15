import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const duration = 2000;
    let startTime;
    let frameId;

    const countUp = (time) => {
      if (startTime === undefined) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplay(progress === 1 ? value : Math.floor(value * easedProgress));

      if (progress < 1) frameId = requestAnimationFrame(countUp);
    };

    frameId = requestAnimationFrame(countUp);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <motion.div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-semibold text-gradient">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm text-ink-muted tracking-wide">{label}</div>
    </motion.div>
  );
}
