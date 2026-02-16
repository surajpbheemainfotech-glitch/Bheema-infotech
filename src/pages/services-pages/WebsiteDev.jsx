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

const WebsiteDev = () => {
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
            className="text-4xl md:text-5xl font-extrabold text-gray-700"
          >
            Website & Platform Development Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto"
          >
            Custom-built websites, web applications, and scalable digital platforms
            designed to generate leads, enhance user experience, and drive business growth.
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
            Custom Website Development for Modern Businesses
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            At Bheema Infotech, we design and develop high-performance websites and
            digital platforms tailored to your business goals. Whether you need a
            corporate website, e-commerce platform, SaaS product, or custom web
            application, our solutions are built for scalability, speed, and security.
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
            Our Website Development Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Corporate & Business Websites",
                desc: "Professional websites designed to build brand credibility and establish a strong digital presence for enterprises and SMEs.",
              },
              {
                title: "E-commerce & Marketplaces",
                desc: "Shopify, WooCommerce, and custom e-commerce solutions built for seamless user experience and high conversions.",
              },
              {
                title: "Custom Web Applications",
                desc: "SaaS platforms, CRM systems, ERP solutions, booking systems, and client portals tailored to your workflow.",
              },
              {
                title: "Mobile App Development",
                desc: "Android, iOS, and Flutter cross-platform applications built for performance and scalability.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border  border-orange-300 shadow-sm hover:shadow-lg transition"
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
            Why Choose Our Development Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> SEO-Optimized Architecture</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Mobile-First & Responsive Design</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> High Performance & Fast Loading</li>
            </ul>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Secure & Scalable Codebase</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Conversion-Focused UI/UX</li>
              <li className="flex gap-2"><span className="text-orange-400"><CircleCheckBig/></span> Ongoing Support & Maintenance</li>
            </ul>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

export default WebsiteDev;
