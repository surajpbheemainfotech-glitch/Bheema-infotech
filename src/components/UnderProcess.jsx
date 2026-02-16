import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Hammer, Clock } from "lucide-react";
import logo from "../assets/logos/logo01.png"; // path check kar lena

const UnderProcess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-200 to-amber-50 px-6 text-slate-900">
      <div className="relative w-full max-w-3xl p-12 text-center rounded-2xl">
        {/* Floating background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Logo */}
          <Link to="/" className="inline-flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 md:h-20 w-auto rounded-xl shadow-md mb-6"
            />
          </Link>

          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 shadow-sm border border-orange-200">
            <Hammer className="h-7 w-7 text-orange-600" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 drop-shadow-sm">
            Project Under Process
          </h1>

          <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-800">
            We’re building something awesome 🚧
          </h2>

          <p className="mt-3 text-slate-700/80 max-w-xl mx-auto">
            This page/feature is currently under development. Please check back
            soon — we’re working on it actively.
          </p>

          {/* Status pill */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 border border-orange-200 shadow-sm">
            <Clock className="h-4 w-4 text-orange-600" />
            Status: In Progress
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-500"
            >
              <Hammer className="h-4 w-4" />
              Contact Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderProcess;
