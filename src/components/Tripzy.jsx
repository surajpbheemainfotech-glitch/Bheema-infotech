import React from "react";
import { Link } from "react-router-dom";
import tripzyimage from "../assets/Tripzy.png";

const Tripzy = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE (Content) */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Tripzy • Smart Travel Booking System
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Book Trips, Hotels & Manage Travel Plans Easily
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Tripzy is an online travel booking platform where users can easily book flights, 
            hotels, holiday packages, and bus tickets. With a secure payment system, 
            user dashboard, and booking history, Tripzy makes travel management smooth and convenient.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✈️ <span className="font-semibold">Easy Travel & Hotel Booking</span></p>
            <p>📄 <span className="font-semibold">Booking History & Invoices</span></p>
            <p>💳 <span className="font-semibold">Secure Online Payments</span></p>
            <p>🖥️ <span className="font-semibold">User-Friendly Dashboard</span></p>
          </div>

          <Link
            to="https://tripzy.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE (Professional Image Card) */}
        <div className="flex justify-center items-center w-full h-[420px] sm:h-[500px] md:h-[540px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-200"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
          >
            <img
              src={tripzyimage}
              alt="Tripzy Logo"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tripzy;
