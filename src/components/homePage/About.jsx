import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

const heroImg = new URL("../../assets/logos/about.avif", import.meta.url).href;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

const About = () => {
  const scheduleCallLink = "tel:8770775732";

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background curve at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 rounded-t-[3rem] bg-white shadow-[0_-40px_80px_rgba(0,0,0,0.04)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* ================= LEFT: IMAGE BLOB ================= */}
          <div className="relative">
            {/* decorative triangles */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pointer-events-none absolute -right-2 top-3 hidden lg:block"
            >
              <div className="h-8 w-8 rotate-180 border-4 border-cyan-400/80 clip-triangle" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full max-w-[640px]">
                <div className="relative overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                  <motion.img
                    src={heroImg}
                    alt="About"
                    className="h-[280px] w-full object-cover sm:h-[360px] md:h-[440px]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/15" />
                </div>

                {/* little orange triangle (bottom-left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="pointer-events-none absolute -bottom-2 left-16 hidden sm:block"
                >
                  <div className="h-7 w-7 rotate-45 border-4 border-orange-400/80" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT: CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            <div className="mb-4 flex items-center gap-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
                About us
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Trusted Website <br />
              Development <br />
              Company In <span className="text-orange-500">India</span>
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              We are a results-driven web development company with a strong focus on
              building scalable, secure, and user-friendly digital solutions. Our goal
              is to help businesses establish a powerful online presence that converts
              visitors into long-term customers.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              With over{" "}
              <span className="font-semibold text-slate-900">
                7+ years of industry experience
              </span>
              , our mission is to deliver high-quality websites and applications that
              solve real business problems.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Our expert team of designers, developers, and strategists follows global
              development standards, clear communication, and reliable delivery
              practices.
            </p>



            {/* decorative cyan triangle */}
            <div className="pointer-events-none absolute right-2 top-4 hidden xl:block">
              <div className="h-10 w-10 rotate-180 border-4 border-cyan-400/70 clip-triangle" />
            </div>
          </motion.div>
        </div>

        {/* ✅ Banner Section moved OUTSIDE the call row and grid */}
        <section className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-t from-orange-200 to-amber-50">
            {/* decor */}
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
              <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
              <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
              <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#F6D76B]/35 blur-3xl" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative z-10 flex flex-col items-center justify-between gap-5 p-7 md:flex-row md:p-10"
            >
              <motion.div variants={fadeUp} className="text-center md:text-left">
                <h2 className="text-2xl font-extrabold text-slate-800 md:text-3xl">
                  Looking for a reliable technology partner?
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-700/80 md:text-base">
                  Share your requirements — we’ll suggest the best approach and next steps.
                </p>
              </motion.div>

              <motion.a
                variants={fadeUp}
                custom={1}
                href={scheduleCallLink}
                className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-orange-500 hover:text-white hover:shadow-md"
              >
                <PhoneCall className="h-4 w-4" />
                Schedule a Free Call
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* custom utility: triangle clip */}
      <style>{`
        .clip-triangle{
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          background: transparent;
        }
      `}</style>
    </section>
  );
};

export default About;
