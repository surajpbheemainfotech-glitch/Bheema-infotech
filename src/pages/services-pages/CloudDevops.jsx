import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);
import { CircleCheckBig  } from "lucide-react";

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
            Build Reliable & Scalable Cloud Infrastructure
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
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
            Why Choose Our Cloud & DevOps Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> Faster Deployment Cycles</li>
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> High Availability & Reliability</li>
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> Scalable Infrastructure</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> Enhanced Security & Compliance</li>
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> Reduced Operational Costs</li>
              <li className="flex gap-2"><span className="text-orange-400 "><CircleCheckBig/></span> Automated Workflows & Monitoring</li>
            </ul>
          </div>
        </motion.div>
      </section>

 


    </div>
  );
};

export default CloudDevops;
