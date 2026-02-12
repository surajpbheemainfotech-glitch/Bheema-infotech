import React from 'react';
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);


const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};


const Contact = () => {
  const scheduleCallLink = "tel:8770775732";
  return (
    <div className="bg-gray-50 text-gray-800  pt-8">
      {/* ✅ Banner Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-t from-orange-200 to-amber-50">
          {/* decor */}
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
            <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
            <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
            <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#F6D76B]/35 blur-3xl" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 p-7 md:p-10"
          >
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                Looking for a reliable technology partner?
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-700/80 max-w-2xl">
                Share your requirements — we’ll suggest the best approach and next steps.
              </p>
            </motion.div>
            <MotionLink
              variants={fadeUp}
              custom={1}
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-6 py-3
             text-sm font-semibold text-slate-900 shadow-sm transition
             hover:bg-orange-500 hover:text-white hover:shadow-md"
            >
              <PhoneCall className="h-4 w-4" />
              Contact us
              <ArrowRight className="h-4 w-4" />
            </MotionLink>

          </motion.div>
        </div>
      </section>

      {/* <section>
  <motion.div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4017998496734!2d75.87205247508219!3d22.713302379391717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68ba25e128333e23%3A0x7545c88f9a3db7b7!2sBheema%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770279777505!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}          // ✅ FIX
      allowFullScreen                // ✅ camelCase
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
      className="w-full rounded-xl shadow-lg"
    />
  </motion.div>
</section> */}

    </div>
  );
}

export default Contact
