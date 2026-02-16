import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.06 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const params = new URLSearchParams(formData);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz5WOULCbps9jQBoZ-Ky6j0zymSjELwosbfBL1dDJV8-9WtHFMst3CPW2kqrpMhYQr-DQ/exec",
        {
          method: "POST",
          body: params,
        }
      );

      if (response.ok) {
        setSuccessMsg("Thank you! Your message has been submitted.");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setErrorMsg("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Error!", error);
      setErrorMsg("Server error! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-200 to-amber-50 text-slate-900">
      {/* HEADER */}
      <section className="relative overflow-hidden py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
          <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl px-6 text-center md:px-12 lg:px-24"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1 text-sm font-semibold text-orange-700 shadow-sm">
            Contact <span className="h-2 w-2 rounded-full bg-orange-500" />
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Get in <span className="text-orange-500">Touch</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
            Have a project or question? Fill out the form and we’ll get back to
            you shortly.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* LEFT: MAP */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h-full"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-lg h-full flex"
            >
              <iframe
                title="Bheema Infotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4017998496734!2d75.87205247508219!3d22.713302379391717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68ba25e128333e23%3A0x7545c88f9a3db7b7!2sBheema%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770279777505!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-orange-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm md:p-8"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl font-extrabold text-slate-900"
            >
              Send us a message
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-2 text-sm text-slate-600"
            >
              Tell us about your project. We’ll reply within 24 hours.
            </motion.p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* ✅ Name + Email */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="grid gap-4 sm:grid-cols-2"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </motion.div>

              {/* ✅ Mobile Number */}
              <motion.div variants={fadeUp} custom={3}>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  title="Enter 10 digit mobile number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={fadeUp} custom={4}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} custom={5}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </motion.div>

              {(successMsg || errorMsg) && (
                <div className="pt-1">
                  {successMsg && (
                    <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                      {successMsg}
                    </p>
                  )}
                  {errorMsg && (
                    <p className="mt-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMsg}
                    </p>
                  )}
                </div>
              )}

              <motion.button
                variants={fadeUp}
                custom={6}
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
