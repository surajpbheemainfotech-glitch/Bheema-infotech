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
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AI = () => {
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
            AI-Powered Solutions Built for Business Growth
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
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
                className="p-6 rounded-2xl border  border-orange-300 shadow-sm hover:shadow-lg transition"
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
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Reduce Manual Tasks & Save Time</li>
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Faster Customer Support with AI</li>
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Better Lead Qualification & Sales Automation</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Smarter Decision-Making with Analytics</li>
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Secure Integrations with Existing Tools</li>
              <li className="flex gap-2"> <span className="text-orange-400 "><CircleCheckBig /></span> Scalable Solutions for Growth</li>
            </ul>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

export default AI;
