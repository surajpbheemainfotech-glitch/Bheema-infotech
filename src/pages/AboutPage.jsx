import React from "react";
import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { RiUserCommunityLine, RiTeamFill } from "react-icons/ri";
import { Globe, Target, BadgeCheck, MousePointerClick } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const About = () => {


  const whyCards = [
    {
      icon: <GrUserExpert className="text-2xl" />,
      title: "7+ Years Experience",
      desc: "Hands-on industry experience with scalable delivery.",
    },
    {
      icon: <TbTruckDelivery className="text-2xl" />,
      title: "International Ready",
      desc: "Process-driven execution for global clients & standards.",
    },
    {
      icon: <RiUserCommunityLine className="text-2xl" />,
      title: "Transparent Work",
      desc: "Clear timelines, updates, and predictable outcomes.",
    },
    {
      icon: <RiTeamFill className="text-2xl" />,
      title: "Expert Team",
      desc: "In-house team for design, dev, QA & support.",
    },
  ];

  const stats = [
    {
      icon: <MousePointerClick className="h-5 w-5" />,
      title: "Visit site",
      sub: "Professional team",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Target Oriented",
      sub: "Goal-based execution",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Success Guarantee",
      sub: "Quality + support",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Trust",
      sub: "International clients",
    },
  ];

  return (
    <div className="bg-[#fbfbfb] text-slate-900">
      {/* ================= TOP HERO (YELLOW) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-t from-orange-300 to-amber-50">
        {/* tiny dots decor */}
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
            animate="show"
            className="text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-4xl text-slate-800 font-extrabold tracking-tight"
            >
              About <span className="text-orange-600">us</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-800/80"
            >
              We build scalable, secure and high-performing digital products to
              help businesses grow faster — with a team that delivers globally.
            </motion.p>
            
          </motion.div>
        </div>
      </section>



      {/* ================= SECTION 2 (VIDEO/IMAGE CARD + TEXT) ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-14 my-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left media card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                alt="team"
                className="h-[260px] w-full object-cover sm:h-[320px]"
              />
            </div>

            {/* quote strip like screenshot */}
            <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
              <p className="text-sm font-semibold text-slate-800">
                “Making an impact, together”
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Bheema Infotech — Team Culture
              </p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl md:text-3xl text-slate-700 font-extrabold"
            >
              We empower small business owners
            </motion.h3>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-sm md:text-base leading-7 text-slate-600"
            >
              With <span className="font-semibold text-slate-900">7+ years</span>{" "}
              of experience, our team of experts helps brands build websites,
              dashboards and applications that scale. From design to deployment,
              we deliver end-to-end solutions with clarity and speed.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {whyCards.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-orange-500 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F6D76B]/35 text-slate-900">
                      {c.icon}
                    </div>
                    <p className="font-semibold">{c.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {c.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* ================= SECTION 3 (CENTER HEADLINE) ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold">
            We help business to grow <br className="hidden sm:block" />
            faster and bigger
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-7 text-slate-600">
            International clients trust us because we maintain consistent
            quality, transparent communication, and predictable delivery —
            along with reliable post-launch support.
          </p>
        </motion.div>
      </section>

      {/* ================= BOTTOM STATS ROW ================= */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="rounded-3xl border border-orange-400 bg-white p-6 text-center shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#F6D76B]/40">
                  {s.icon}
                </div>
                <p className="mt-3 text-lg font-extrabold">{s.title}</p>
                <p className="mt-1 text-sm text-slate-600">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
