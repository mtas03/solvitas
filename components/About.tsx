"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "48h", label: "MVP turnaround" },
  { value: "100%", label: "Custom-built, always" },
  { value: "NL", label: "Based in the Netherlands" },
  { value: "∞", label: "Scalable from day one" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-orange/30 transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-orange mb-1.5">{stat.value}</p>
                <p className="text-sm text-zinc-500 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-orange inline-block" />
              About Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
              Next-gen, driven,
              <br />
              trend-obsessed.
            </h2>

            <p className="text-lg text-zinc-500 leading-relaxed mb-5">
              Behind Solvitas.AI is a tight-knit team of builders obsessed with the latest tech trends. We combined our hands-on experience in e-commerce, finance, supply chain, and computer science to create a consultancy that actually understands your daily operations. We take your business problems personally, building fast, custom-coded digital products so you never have to settle for a generic template again.
            </p>

            <p className="text-lg text-zinc-500 leading-relaxed">
              We call it{" "}
              <span className="relative inline-block font-semibold text-zinc-900 mx-0.5">
                Vibe Coding
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-orange rounded-full" />
              </span>{" "}
              — the art of shipping clean, production-grade software that feels as
             good as it performs. Fast, intentional, and built to last.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
