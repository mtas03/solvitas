"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Instagram, ArrowRight } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "hello@solvitas.ai", href: "mailto:hello@solvitas.ai" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/solvitas.ai" },
];

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const brief = (form.elements.namedItem("brief") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Brief:\n${brief}`);
    window.location.href = `mailto:hello@solvitas.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-orange inline-block" />
              Start a Project
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to build
              <br />
              something real?
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Tell us about your project. We'll get back within 24 hours —
              no fluff, no NDA before the first call.
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-orange/15 group-hover:border-orange/20 transition-all duration-200">
                    <Icon size={16} className="text-zinc-500 group-hover:text-orange transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] rounded-2xl p-8 border border-white/8 flex flex-col gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-zinc-400 text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jan de Vries"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-orange focus-visible:border-orange/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-zinc-400 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jan@company.nl"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-orange focus-visible:border-orange/40 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="brief" className="text-zinc-400 text-sm font-medium">
                  Project Brief
                </Label>
                <Textarea
                  id="brief"
                  name="brief"
                  placeholder="Tell us what you're building — vision, timeline, and any tech preferences..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-orange focus-visible:border-orange/40 resize-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange hover:bg-orange-dark text-white rounded-full h-12 font-semibold text-base group transition-colors duration-200 shadow-lg shadow-orange/20"
              >
                Send Message
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </Button>

              <p className="text-center text-xs text-zinc-600">
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
