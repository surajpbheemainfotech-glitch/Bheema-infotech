// ✅ CaseStudiesPreview.jsx (SLIDER + Left/Right buttons) — Framer Motion + your theme
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Wrench,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import caseStudies from "../data/caseStudy";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const floatMed = (delay = 0) => ({
  y: [0, -10, 0, 10, 0],
  x: [0, -8, 0, 8, 0],
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
});

const RowItem = ({ icon, label, text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-[#F6D76B]/35">
      <span className="text-orange-600">{icon}</span>
    </div>
    <div className="min-w-0">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  </div>
);

const CaseStudiesPreview = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // ✅ responsive visible cards (1/2/3)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 1; // mobile
      if (w < 1024) return 2; // tablet
      return 3; // desktop
    };
    const update = () => setVisibleCards(calc());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = useMemo(() => {
    return Math.max(0, (caseStudies?.length || 0) - visibleCards);
  }, [visibleCards]);

  // keep index in range on resize / data change
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((p) => Math.max(0, p - 1));
  const next = () => setIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section className="bg-[#fbfbfb] text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden ">

        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center">
 <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-7xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">
              Case Studies
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Industry-wise snapshots — problem, solution and outcome in a quick preview. 
            </h1>

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-700/80"
          >
            Industry-wise snapshots — problem, solution and outcome in a quick preview.
          </motion.p>
        </div>
      </div>

      {/* Slider */}
      <div className="mx-auto max-w-6xl px-6 py-14 relative">
        {/* controls */}
        <div className="absolute -top-6 right-6 flex gap-2 z-20">
          <button
            onClick={prev}
            disabled={index === 0}
            className="h-10 w-10 rounded-xl border border-orange-300 bg-white grid place-items-center
                       shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-orange-500 hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="h-10 w-10 rounded-xl border border-orange-300 bg-white grid place-items-center
                       shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-orange-500 hover:text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* window */}
        <div className="overflow-hidden">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            animate={{ x: `-${index * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="flex gap-6"
          >
            {caseStudies?.map((cs, i) => (
              <motion.article
                key={cs.id || i}
                variants={fadeUp}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.3333%]
                           group relative overflow-hidden rounded-3xl border border-orange-200
                           bg-white/80 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.07)]
                           backdrop-blur transition hover:-translate-y-1
                           hover:shadow-[0_22px_48px_rgba(0,0,0,0.12)]"
              >
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#F6D76B]/30 blur-2xl" />
                </div>

                {/* floating badge */}
                <motion.div
                  className="absolute right-5 top-5"
                  animate={floatMed(0.2 + i * 0.12)}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-orange-200 bg-white shadow-sm">
                    <span className="text-orange-600">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>

                <div className="pr-12">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Industry
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-800">
                    {cs.industry}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                    <BadgeCheck className="h-4 w-4 text-orange-600" />
                    {cs.tag}
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <RowItem icon={<Target className="h-4 w-4" />} label="Problem" text={cs.problem} />
                  <RowItem icon={<Wrench className="h-4 w-4" />} label="Solution" text={cs.solution} />
                  <RowItem icon={<BadgeCheck className="h-4 w-4" />} label="Result" text={cs.result} />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Sparkles className="h-4 w-4" />
                    Outcome-focused
                  </span>

                  {cs.href && cs.href !== "#" ? (
                    <a
                      href={cs.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-4 py-2
                                 text-sm font-semibold text-slate-900 shadow-sm transition
                                 hover:bg-orange-500 hover:text-white hover:shadow-md"
                    >
                      View <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
