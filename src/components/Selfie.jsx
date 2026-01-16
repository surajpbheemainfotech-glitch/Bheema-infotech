import React from "react";
import { Link } from "react-router-dom";
import selfieimage from "../assets/selfie.png";

const Selfie = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT: IMAGE (Simple & Professional Design) */}
        <div className="flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // subtle premium shadow
            }}
          >
            <img
              src={selfieimage}
              alt="Selfie App"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ✅ RIGHT: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            AI Powered Photo Generator
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Selfie – Create Stunning AI-generated Photos
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Selfie is an intelligent AI-based photo generator that allows users to
            upload their images and instantly create realistic, beautifully enhanced
            photos with filters, effects, and backgrounds — all in seconds.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🤳 <span className="font-semibold">AI Photo Transformation</span></p>
            <p>🎨 <span className="font-semibold">Multiple Filters & Design Styles</span></p>
            <p>⚡ <span className="font-semibold">Instant Image Results</span></p>
            <p>📱 <span className="font-semibold">Responsive & User-Friendly UI</span></p>
          </div>

          <a
            href="https://v0-selfie-website-rebuild.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Selfie;
