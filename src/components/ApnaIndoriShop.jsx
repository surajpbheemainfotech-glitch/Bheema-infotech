import React from "react";
import { Link } from "react-router-dom";
import indoriimage from "../assets/apnaindori.png";

const ApnaIndoriShop = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE (Content) */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            E-Commerce Platform
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Local Online Shopping Made Easy
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Apna Indori Shop is a local online shopping platform where users can 
            conveniently order groceries, fruits, vegetables, household items, 
            and daily essentials from the comfort of their homes. With fast delivery 
            and cashless payment options, shopping becomes simple, convenient, 
            and hassle-free.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Grocery & Daily Essentials</p>
            <p>✅ Fast Home Delivery</p>
            <p>✅ Secure Online Payments</p>
            <p>✅ Easy Add-to-Cart & Checkout</p>
          </div>

          <Link
            to="https://apnaindorishop.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE (Professional Image Card) */}
        <div className="flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // subtle premium shadow
            }}
          >
            <img
              src={indoriimage}
              alt="Apna Indori Shop"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApnaIndoriShop;
