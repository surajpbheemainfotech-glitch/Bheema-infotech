import React from "react";
import { Link } from "react-router-dom";
import rooyahimage from "../assets/Rooyah.png";

const Rooyah = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE: IMAGE (Professional Card Design) */}
        <div className="flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px]">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // subtle premium shadow
            }}
          >
            <img
              src={rooyahimage}
              alt="Rooyah App"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ✅ RIGHT SIDE: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Secure Crypto Transactions
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Cryptocurrency is pseudonymous, not anonymous
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Rooyah is a crypto-secured platform where every transaction is
            transparently recorded on blockchain. Identities remain protected,
            activity stays trackable, and users trade with complete trust.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Transparent blockchain-based transactions</p>
            <p>✅ Secure wallet with identity protection</p>
            <p>✅ Safe & trusted crypto environment</p>
            <p>✅ No anonymous misuse — only verified users</p>
          </div>

          <Link
            to="https://rooyah.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Rooyah;
