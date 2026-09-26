import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

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
