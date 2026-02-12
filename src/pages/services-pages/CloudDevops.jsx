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

const CloudDevops = () => {
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
            Cloud & DevOps Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto"
          >
            Secure, scalable, and optimized cloud infrastructure solutions designed
            to support modern digital businesses.
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
            Build Reliable & Scalable Cloud Infrastructure
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We help businesses migrate, optimize, and manage their cloud
            environments efficiently. Our Cloud & DevOps services ensure faster
            deployments, improved security, reduced downtime, and enhanced
            performance through automation and best practices.
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
            Our Cloud & DevOps Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Cloud Setup & Migration",
                desc: "AWS, Microsoft Azure, and Google Cloud setup, configuration, and seamless migration from on-premise or legacy systems.",
              },
              {
                title: "Server Optimization & Security",
                desc: "Server setup, performance optimization, cloud security implementation, and backup & disaster recovery planning.",
              },
              {
                title: "DevOps Implementation",
                desc: "CI/CD pipeline setup, infrastructure automation, monitoring systems, and deployment optimization for faster releases.",
              },
              {
                title: "Cloud Monitoring & Maintenance",
                desc: "Ongoing monitoring, scaling strategies, performance tracking, and proactive issue resolution for uninterrupted operations.",
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
            Why Choose Our Cloud & DevOps Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ul className="space-y-3 text-slate-700">
              <li>✔ Faster Deployment Cycles</li>
              <li>✔ High Availability & Reliability</li>
              <li>✔ Scalable Infrastructure</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li>✔ Enhanced Security & Compliance</li>
              <li>✔ Reduced Operational Costs</li>
              <li>✔ Automated Workflows & Monitoring</li>
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
            Our cloud and DevOps solutions are ideal for SaaS startups, E-commerce
            platforms, Healthcare systems, FinTech applications, Education
            platforms, and enterprise businesses seeking reliable infrastructure.
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
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="mt-4">
            Let’s design a secure, scalable, and automated cloud strategy for your
            business.
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

export default CloudDevops;
