import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Search,
  Globe,
  Palette,
  Code2,
  LayoutDashboard,
} from "lucide-react";
import services from "../data/service";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const floatSlow = (delay = 0) => ({
  y: [0, -10, 0, 10, 0],
  x: [0, 8, 0, -8, 0],
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
});

const floatMed = (delay = 0) => ({
  y: [0, -12, 0, 12, 0],
  x: [0, -10, 0, 10, 0],
  transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay },
});

const floatFast = (delay = 0) => ({
  y: [0, -8, 0, 8, 0],
  x: [0, 12, 0, -12, 0],
  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
});

// ✅ positions tuned for cards section (surrounding)
const floatingPills = [
  { text: "SEO", icon: <Search className="h-4 w-4" />, className: "left-0 top-6", anim: floatSlow(0) },
  { text: "Web", icon: <Globe className="h-4 w-4" />, className: "right-0 top-5", anim: floatMed(0.6) },
  { text: "Design", icon: <Palette className="h-4 w-4" />, className: "left-0 bottom-10", anim: floatFast(0.9) },
  { text: "Code", icon: <Code2 className="h-4 w-4" />, className: "right-1 bottom-4", anim: floatSlow(1.2) },
  { text: "Dashboards", icon: <LayoutDashboard className="h-4 w-4" />, className: "left-1/2 top-1/2 -translate-x-1/2", anim: floatMed(1.4) },
];


const ServicePage = () => {
  return (
    <section className="bg-[#fbfbfb] text-slate-900">
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-gradient-to-t from-orange-300 to-amber-50">
        {/* decor dots */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
          <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl text-slate-800 font-extrabold tracking-tight"
            >
              Services built to grow your business
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-800/80"
            >
              Simple, outcome-focused services — clean work, fast delivery.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="relative mx-auto max-w-6xl px-6 py-14 overflow-hidden">
        {/* ✅ floating pills around cards (NOW HERE) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {floatingPills.map((p, idx) => (
            <motion.div
              key={idx}
              animate={p.anim}
              className={`absolute ${p.className}`}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full
                           border border-orange-400/60 bg-white/80
                           px-3 py-1 text-xs font-bold text-slate-800
                           shadow-sm backdrop-blur"
              >
                <span className="text-orange-600">{p.icon}</span>
                {p.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ grid stays above pills */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 grid gap-6 md:grid-cols-2"
        >
          {services?.map((s, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              custom={i}
              className="group relative overflow-hidden rounded-3xl border border-orange-400 bg-white p-6
                         shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition
                         hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.14)]"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#F6D76B]/35 blur-2xl" />
              </div>

              {/* ✅ header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F6D76B]/40 text-slate-900">
                    {s.icon || <Briefcase className="h-5 w-5" />}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-800 leading-snug">
                      {s.headline}
                    </h3>

                    <motion.p
                      className="mt-1 text-sm text-slate-600 leading-6"
                      initial={{ opacity: 0.95 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {s.outcome}
                    </motion.p>
                  </div>
                </div>

                {/* ✅ floating badge inside card */}
                <motion.div
                  animate={floatMed(0.2 + i * 0.15)}
                  className="shrink-0"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-orange-200 bg-white shadow-sm">
                    <span className="text-orange-600">
                      {s.icon || <Briefcase className="h-5 w-5" />}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-4 py-2
                             text-sm font-semibold text-slate-900 shadow-sm transition
                             hover:bg-orange-500 hover:text-white hover:shadow-md"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <Sparkles className="h-4 w-4" />
                  Result-first
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
