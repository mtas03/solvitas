"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShoppingBag, Layers, BarChart2, Bot, Plug } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Simple Websites",
    desc: "High-converting landing pages and brochure sites — pixel-perfect on every device, fast by default.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Custom Next.js stores with live inventory, payments, and performance baked into every interaction.",
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    desc: "End-to-end SaaS platforms and internal tools. Auth, database, API, and dashboard — all yours.",
  },
  {
    icon: BarChart2,
    title: "Live Data Integration",
    desc: "Real-time dashboards, WebSockets, and APIs that keep your data flowing and your users informed.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "GPT-powered automation, concierge bots, and intelligent agents that actually work in production.",
  },
  {
    icon: Plug,
    title: "API & Systems Integration",
    desc: "Seamlessly connect any tools, ERPs, or third-party services into one clean, unified pipeline.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange text-sm font-semibold tracking-widest uppercase mb-4 inline-flex items-center gap-2"
          >
            <span className="w-6 h-px bg-orange inline-block" />
            What We Build
            <span className="w-6 h-px bg-orange inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900"
          >
            The Spectrum of Solutions
          </motion.h2>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
                  transition: { duration: 0.25 },
                }}
                className="group relative bg-white rounded-2xl p-8 border border-zinc-100 overflow-hidden cursor-default"
              >
                {/* Orange left accent on hover */}
                <motion.div
                  className="absolute left-0 top-6 bottom-6 w-[3px] bg-orange rounded-full"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileHover={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ originY: 0.5 }}
                />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-orange/8 flex items-center justify-center mb-6 group-hover:bg-orange/15 transition-colors duration-300">
                  <Icon size={20} className="text-orange" />
                </div>

                <h3 className="text-[1.0625rem] font-semibold text-zinc-900 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
