import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import About from "../components/homePage/About";
import Services from "../components/homePage/service";
import TechnicalStack from "./TechnicalPage";
import Contact from "../components/homePage/Contact";

import homimg from "/logo.jpg";
import WhyUs from "../components/WhyUs";
import CaseStudiesPreview from "../components/CaseStudiesPreview";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const HomePage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">

          {/* Background logo (animated) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-12 opacity-70 "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.img
              src={homimg}
              alt="Hero"
              className="max-w-full max-h-full object-contain"
              // slow floating effect
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>

          {/* Optional soft overlay (keep if you want more contrast) */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* CONTENT */}
          <div
            className="
              absolute inset-0 z-10
              flex items-center
              w-full max-w-7xl
              px-6 sm:px-8 md:px-12 lg:px-24
              text-center md:text-left
            "
          >
            <motion.div
              className="max-w-3xl text-slate-800"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
                variants={fadeUp}
              >
                Helping Global Businesses Build Scalable{" "}
                <span className="text-orange-500">
                  Websites, Apps & Digital Systems
                </span>
              </motion.h1>

              <motion.p
                className="mb-8 text-base sm:text-lg md:text-xl font-medium text-gray-700"
                variants={fadeUp}
              >
                "We work with startups and growing companies in the{" "}
                <span className="font-bold">USA & UK</span> to deliver high-quality
                web, mobile & digital solutions."
              </motion.p>

              <motion.div variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/about"
                    className="
                      inline-block
                      bg-orange-500 hover:bg-orange-600
                      text-white px-7 py-3 rounded-full
                      text-base sm:text-lg font-semibold
                      shadow-lg transition-all duration-300
                    "
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        id="services"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Services />
      </motion.section>



      {/* ================= TECH STACK ================= */}
      <motion.section
        id="technical"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TechnicalStack />
      </motion.section>

      {/* ================= WHy us ================= */}
      <motion.section
        id="technical"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyUs />
      </motion.section>

      {/* ================= WHy us ================= */}
      <motion.section
        id="technical"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CaseStudiesPreview />
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.section>
    </>
  );
};

export default HomePage;
