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
  show: { transition: { staggerChildren: 0.15 } },
};

const DataAnalytics = () => {
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
            Data Analytics & Business Intelligence Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto"
          >
            Transform raw data into actionable insights with advanced dashboards,
            reporting systems, and business intelligence solutions.
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
            Data-Driven Decisions for Smarter Business Growth
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            In today’s digital landscape, data is one of your most valuable assets.
            Our Data Analytics and Business Intelligence services help organizations
            analyze performance, track KPIs, identify trends, and make informed decisions.
            We build custom dashboards and reporting systems that simplify complex data
            into clear, actionable insights.
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
            Our Data & BI Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Power BI Dashboard Development",
                desc: "Custom Power BI dashboards for visualizing sales, marketing, finance, and operational data in real-time.",
              },
              {
                title: "Business Intelligence Implementation",
                desc: "End-to-end BI implementation including data modeling, reporting systems, and decision-support frameworks.",
              },
              {
                title: "Performance & KPI Dashboards",
                desc: "Sales dashboards, marketing analytics dashboards, and KPI monitoring systems to track business growth efficiently.",
              },
              {
                title: "Customer & Financial Analytics",
                desc: "Customer behavior analytics, financial reporting systems, and predictive analysis for smarter planning.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
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
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Data Analytics Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Real-Time Data Visualization</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Accurate Performance Tracking</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Custom KPI Monitoring Systems</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Improved Strategic Decision-Making</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Automated Reporting & Insights</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Scalable BI Infrastructure</li>
            </ul>
          </div>
        </motion.div>
      </section>

   

  
    </div>
  );
};

export default DataAnalytics;
