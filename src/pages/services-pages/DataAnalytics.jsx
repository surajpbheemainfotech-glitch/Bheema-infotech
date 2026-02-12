import React from "react";
import { motion } from "framer-motion";

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
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition"
            >
              Request Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Talk to Our Expert
            </motion.button>
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
          <p className="mt-4 text-slate-600 leading-relaxed">
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
                className="p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg transition"
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
              <li>✔ Real-Time Data Visualization</li>
              <li>✔ Accurate Performance Tracking</li>
              <li>✔ Custom KPI Monitoring Systems</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li>✔ Improved Strategic Decision-Making</li>
              <li>✔ Automated Reporting & Insights</li>
              <li>✔ Scalable BI Infrastructure</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Industries We Support
          </h2>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Our analytics solutions serve Healthcare, E-commerce, Education, Real Estate,
            SaaS startups, Manufacturing, and Finance industries seeking better visibility
            into their business performance.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold">
            Ready to Unlock the Power of Your Data?
          </h2>
          <p className="mt-4">
            Let’s build intelligent dashboards and analytics systems tailored to your business.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              Request Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Talk to Our Expert
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataAnalytics;
