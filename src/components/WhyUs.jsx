// ✅ WhyChooseUs.jsx (Framer Motion + orange/amber theme)
// NOTE: Animations unchanged ✅

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Globe2,
  BadgeCheck,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const float = (delay = 0) => ({
  y: [0, -10, 0, 10, 0],
  x: [0, 8, 0, -8, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

const cards = [
  {
    title: "7+ Years Experience",
    desc: "Hands-on delivery experience across websites, apps, and scalable systems.",
    icon: <Briefcase className="h-5 w-5" />,
    badge: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "International Client Ready",
    desc: "Clear communication, professional process, and global delivery standards.",
    icon: <Globe2 className="h-5 w-5" />,
    badge: <BadgeCheck className="h-4 w-4" />,
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs — clear scope, milestones, and predictable billing.",
    icon: <BadgeCheck className="h-5 w-5" />,
    badge: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "Dedicated Team",
    desc: "Focused experts aligned to your goals — fast iterations and reliable support.",
    icon: <Users className="h-5 w-5" />,
    badge: <ArrowRight className="h-4 w-4" />,
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-100/60 via-amber-50 to-slate-50 text-slate-900">
      {/* soft decorative blobs (no animation change) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      {/* header */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-7xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur">
              Why choose us
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              We leverage cutting-edge technologies to deliver high-quality,{" "}
              <span className="text-orange-600">
                scalable, and robust solutions
              </span>{" "}
              for our clients.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-700/80"
          >
            We keep it simple: great work, clear communication, and results that
            help your business grow.
          </motion.p>

          {/* badge row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-2"
          >
            {["Fast Delivery", "Clean UI", "SEO Ready", "Scalable Code"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* cards */}
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="
                group relative overflow-hidden rounded-3xl
                border border-orange-200/80
                bg-white/70 backdrop-blur-xl
                p-6
                shadow-[0_14px_30px_rgba(0,0,0,0.07)]
                transition
                hover:-translate-y-1
                hover:border-orange-300
                hover:shadow-[0_22px_52px_rgba(0,0,0,0.12)]
              "
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />
                <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
              </div>

              {/* floating mini badge (animation unchanged) */}
              <motion.div
                className="absolute right-5 top-5"
                animate={float(0.2 + i * 0.15)}
              >
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-orange-200 bg-white/80 shadow-sm backdrop-blur">
                  <span className="text-orange-600">{c.badge}</span>
                </div>
              </motion.div>

              <div className="relative flex items-start gap-3 pr-12">
                {/* icon */}
                <div
                  className="
                    grid h-12 w-12 shrink-0 place-items-center rounded-2xl
                    bg-gradient-to-br from-orange-500 to-amber-400
                    text-white shadow-sm
                    ring-1 ring-orange-200/70
                    group-hover:from-orange-600 group-hover:to-amber-500
                    transition
                  "
                >
                  {c.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700/80">
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="relative mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700/80">
                  <Sparkles className="h-4 w-4 text-orange-600" />
                  Trusted delivery
                </span>

                {/* make it a real link (no animation change) */}
                <Link
                  to="/services"
                  className="
                    inline-flex items-center gap-2 rounded-2xl
                    border border-orange-200 bg-white/80 px-3 py-1
                    text-xs font-semibold text-slate-800
                    shadow-[0_1px_0_rgba(0,0,0,0.03)]
                    transition
                    group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500
                  "
                >
                  Learn More{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* subtle bottom fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-orange-200/25 to-transparent" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Link
            to="/contact"
            className="
              inline-flex items-center gap-2 rounded-2xl
              border border-orange-500 bg-white/80 backdrop-blur
              px-6 py-3
              text-sm font-semibold text-slate-900
              shadow-sm transition
              hover:bg-orange-500 hover:text-white hover:shadow-md
            "
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
