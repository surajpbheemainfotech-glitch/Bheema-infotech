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
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AI = () => {
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
            AI & Automation Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto"
          >
            Automate operations, improve customer engagement, and make smarter
            decisions with AI-powered chatbots, workflows, and intelligent systems.
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
            AI-Powered Solutions Built for Business Growth
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At Bheema Infotech, we help businesses use AI to reduce manual work,
            respond faster to customers, and improve business outcomes.
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
            Our AI & Automation Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              "AI Chatbots",
              "AI Business Automation",
              "Intelligent AI Systems",
              "AI Integrations & Deployments",
            ].map((title, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600">
                  Practical AI-powered systems built to improve automation,
                  productivity, and business intelligence.
                </p>
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
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Our AI & Automation Solutions?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            <ul className="space-y-3 text-slate-700">
              <li>✔ Reduce Manual Tasks & Save Time</li>
              <li>✔ Faster Customer Support with AI</li>
              <li>✔ Better Lead Qualification & Sales Automation</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li>✔ Smarter Decision-Making with Analytics</li>
              <li>✔ Secure Integrations with Existing Tools</li>
              <li>✔ Scalable Solutions for Growth</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold">
            Want to Automate Your Business with AI?
          </h2>
          <p className="mt-4">
            Let’s build a smart automation strategy tailored to your goals.
          </p>

          <motion.div
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold"
            >
              Request Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-3 rounded-xl font-semibold"
            >
              Talk to Our Expert
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default AI;
