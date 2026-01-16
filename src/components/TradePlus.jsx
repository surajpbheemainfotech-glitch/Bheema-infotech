import React from "react";
import tradeimage from "../assets/trade plus.png";

const TradePlus = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Stock Trading & Analytics
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            TradePlus – Smart Stock Market Analysis Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            TradePlus is a modern stock market platform where traders can analyze
            live market data, advanced charts, analytics, and trading strategies
            in real-time. It’s designed to be useful for everyone — from beginners
            to professional traders.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>📈 <span className="font-semibold">Real-time Stock Market Data</span></p>
            <p>📊 <span className="font-semibold">Advanced Charting & Technical Tools</span></p>
            <p>💹 <span className="font-semibold">Trading Strategies & Analytics</span></p>
            <p>⚡ <span className="font-semibold">Fast & User-Friendly Dashboard</span></p>
          </div>

          <a
            href="https://trade-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-6
              px-8
              py-3
              bg-blue-950
              hover:bg-orange-400
              hover:text-blue-950
              text-white
              font-semibold
              rounded-xl
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Visit Live Project
          </a>
        </div>

        {/* RIGHT IMAGE (Border + Animation | Different Color Theme) */}
        <div className="flex justify-center">
          <div
            className="
              group
              w-full
              max-w-lg
              aspect-video
              rounded-2xl
              p-[2px]
              bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={tradeimage}
                alt="TradePlus Platform Preview"
                className="
                  w-full
                  h-full
                  object-contain
                  p-6
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradePlus;
