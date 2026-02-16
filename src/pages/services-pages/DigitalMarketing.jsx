import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const DigitalMarketing = () => {
     const scheduleCallLink = "tel:8770775732";
  return (
    <div className="bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-t from-orange-200 to-amber-50 py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Digital Marketing & SEO Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto"
          >
            Performance-driven digital marketing strategies designed to
            increase visibility, generate qualified leads, and maximize ROI.
          </motion.p>

         <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-4 flex-wrap"
            custom={1}
            to="/contact"
          >
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/contact"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition "
            >
              Request Consultation
            </MotionLink>

            <motion.a
              href={scheduleCallLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Talk to Our Expert
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Data-Driven Marketing That Delivers Measurable Results
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            At Bheema Infotech, we combine strategy, analytics, and creativity
            to help businesses grow online. Our digital marketing services focus
            on increasing brand visibility, driving targeted traffic, and converting
            visitors into loyal customers.
          </p>
        </motion.div>
      </section>

      {/* SUB SERVICES */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-slate-900 text-center"
          >
            Our Digital Marketing Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                desc: "On-page, technical, and local SEO strategies designed to improve rankings, increase organic traffic, and drive long-term growth.",
              },
              {
                title: "Paid Advertising (PPC)",
                desc: "Google Ads, Facebook, Instagram, and LinkedIn campaigns optimized for high ROI and quality lead generation.",
              },
              {
                title: "Performance & Growth Marketing",
                desc: "Data-backed marketing strategies focused on scaling revenue and improving conversion rates.",
              },
              {
                title: "Content & Social Media Marketing",
                desc: "Strategic content creation, email campaigns, and social media management to build engagement and brand authority.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border border-orange-300 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Digital Marketing Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> ROI-Focused Campaign Strategies</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Data-Driven Performance Tracking</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Industry-Specific Marketing Plans</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Conversion Rate Optimization (CRO)</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Transparent Reporting & Analytics</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Continuous Campaign Optimization</li>
            </ul>
          </div>
        </motion.div>
      </section>





    </div>
  );
};

export default DigitalMarketing;
