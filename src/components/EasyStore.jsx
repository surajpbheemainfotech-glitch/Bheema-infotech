import React from "react";
import easyimage from "../assets/store-mart.png";

const EasyStore = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE: IMAGE (Professional Card Design) */}
        <div className="flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // premium soft shadow
            }}
          >
            <img
              src={easyimage}
              alt="EasyStore"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ✅ RIGHT SIDE: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart E-Commerce Store
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            EasyStore – Fast & Secure Online Shopping
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            EasyStore is a modern e-commerce platform where users can browse products, 
            add them to their cart, and place orders with secure online payments. 
            With order tracking, a user-friendly dashboard, and fast delivery, 
            EasyStore ensures a smooth and seamless shopping experience.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🛒 <span className="font-semibold">Product Browsing & Add to Cart</span></p>
            <p>💳 <span className="font-semibold">Secure Online Checkout</span></p>
            <p>📦 <span className="font-semibold">Order Tracking & History</span></p>
            <p>📱 <span className="font-semibold">Fully Responsive Clean UI</span></p>
          </div>

          <a
            href="https://easystore.bheemainfotech.in/"
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

export default EasyStore;
