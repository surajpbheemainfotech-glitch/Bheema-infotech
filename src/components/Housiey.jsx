import React from "react";
import { Link } from "react-router-dom";
import housieyimage from "../assets/HOUSIEY.png";

const Housiey = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT SIDE: TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Verified Homes. Smart Buying.
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Housiey – Mumbai Real Estate Buying Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Housiey helps home buyers discover verified properties in Mumbai with
            transparent pricing, zero brokerage, expert assistance, and real-time updates.
            A trusted platform for buying homes with confidence.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🏠 <span className="font-semibold">Verified Real Estate Listings</span></p>
            <p>📍 <span className="font-semibold">Location-wise Property Comparisons</span></p>
            <p>💰 <span className="font-semibold">Zero Brokerage Buying Experience</span></p>
            <p>📊 <span className="font-semibold">Price Trends & Builder Reviews</span></p>
          </div>

          <Link
            to="https://housiey.com/mumbai-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950
                       text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE: IMAGE (Professional Card Design) */}
        <div className="flex-1 flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // consistent premium shadow
            }}
          >
            <img
              src={housieyimage}
              alt="Housiey"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Housiey;
