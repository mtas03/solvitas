"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const headline = [
  { text: "We don't", highlight: false },
  { text: "promise,", highlight: false },
  { text: "we", highlight: false },
  { text: "deliver.", highlight: true },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
};

const wordVariant = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const glowX = useSpring(rawX, { stiffness: 60, damping: 22 });
  const glowY = useSpring(rawY, { stiffness: 60, damping: 22 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      rawX.set(e.clientX - rect.left - 250);
      rawY.set(e.clientY - rect.top - 250);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Cursor glow blob */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(255,95,31,0.10) 0%, rgba(255,95,31,0.03) 50%, transparent 70%)",
        }}
      />

      {/* Decorative orange ring — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-orange/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[340px] h-[340px] rounded-full border border-orange/8"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="max-w-5xl">
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-6 h-px bg-orange inline-block" />
            AI Consultancy Based In The Netherlands
          </motion.p>

          {/* Animated headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-[clamp(3rem,7.5vw,5.75rem)] font-bold leading-[1.04] tracking-tighter text-zinc-900 mb-8"
            style={{ perspective: "800px" }}
          >
            {headline.map((part, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mr-[0.2em] ${
                  part.highlight ? "text-orange" : ""
                }`}
              >
                {part.text}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.05 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed"
          >
            Rapid bespoke development — from simple websites to complex
            full-stack apps with live data integration. No templates. No
            shortcuts. Just clean, production-grade code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.25 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-orange hover:bg-orange-dark text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-orange/20 transition-all duration-200"
            >
              <a href="#contact">Start a Project</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base font-semibold border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-200"
            >
              <a href="#services">See Our Services</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
