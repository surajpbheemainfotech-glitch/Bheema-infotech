import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import logo from "../assets/logos/logo01.png"; // 👈 apna logo path check kar lena

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-200 to-amber-50 px-6  text-slate-900">
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
          {/* ✅ Logo */}
          <Link to="/" className="inline-flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 md:h-20 w-auto rounded-xl shadow-md mb-6"
            />
          </Link>

          {/* 404 Big Text */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-orange-500 drop-shadow-sm">
            404
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Oops! Page not found
          </h2>

          <p className="mt-3 text-slate-700/80 max-w-lg mx-auto">
            The page you're looking for doesn't exist or may have been moved.
            Let’s get you back on track.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-orange-500 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-500"
            >
              <Search className="h-4 w-4" />
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
