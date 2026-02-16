import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, TrendingUp, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Fast, secure websites that convert visitors into customers.",
      icon: <Globe className="h-6 w-6" />,
      to: "/services/website-development",
      accent: "from-orange-500/25 to-amber-400/10",
    },
    {
      title: "Mobile App Development",
      desc: "Smooth apps that keep users engaged and coming back.",
      icon: <Smartphone className="h-6 w-6" />,
      to: "/services/website-development",
      accent: "from-orange-600/20 to-rose-400/10",
    },
    {
      title: "Digital Marketing",
      desc: "Campaigns that drive leads and boost brand visibility.",
      icon: <Megaphone className="h-6 w-6" />,
      to: "/services/digital-marketing",
      accent: "from-amber-500/25 to-orange-400/10",
    },
    {
      title: "SEO & Growth",
      desc: "Rank higher, get more traffic, and scale sustainably.",
      icon: <TrendingUp className="h-6 w-6" />,
      to: "/services",
      accent: "from-orange-500/20 to-yellow-400/10",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-orange-100/60 to-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-14 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-orange-700 shadow-sm border border-orange-200">
            Our Services
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Everything you need to build, launch, and grow
          </h1>

          <p className="mt-4 text-orange-700/90 text-base md:text-lg">
            Choose a service to explore details, deliverables, and how we can help your business.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardAnim}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-orange-200 bg-white/75 backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                hover:border-orange-400
                hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)]
                transition
              "
            >
              {/* Soft gradient blobs */}
              <div
                className={`absolute -top-24 -right-24 h-52 w-52 rounded-full bg-gradient-to-br ${s.accent} blur-3xl`}
              />
              <div className="absolute -bottom-28 -left-24 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />

              <div className="relative p-6 flex flex-col h-full">
                {/* Icon */}
                <div
                  className="
                    inline-flex items-center justify-center
                    h-12 w-12 rounded-2xl
                    bg-orange-600 text-white
                    ring-1 ring-orange-200
                    shadow-sm
                    group-hover:bg-orange-500
                    transition
                  "
                >
                  {s.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700/80 flex-1">
                  {s.desc}
                </p>

                <Link
                  to={s.to}
                  className="
                    mt-5 inline-flex items-center gap-2 text-sm font-semibold
                    text-orange-700 hover:text-orange-600
                    transition
                  "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* bottom fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-orange-200/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
