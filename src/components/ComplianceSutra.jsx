import React from "react";
import { Link } from "react-router-dom";
import complianceimage from "../assets/COMPLIANCE.png";

const ComplianceSutra = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT IMAGE (Border + Animation) */}
        <div className="flex justify-center">
          <div
            className="
              group
              w-full
              max-w-lg
              aspect-video
              rounded-2xl
              p-[2px]
              bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={complianceimage}
                alt="ComplianceSutra Platform Preview"
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-cyan-600 text-lg font-semibold uppercase tracking-wide">
            ComplianceSutra • GST & Tax Compliance
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Simple, Automated & Smart GST Compliance
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            ComplianceSutra is a user-friendly platform that simplifies GST filing, invoicing,
            e-way bills, and tax management through automation. It provides a secure, fast,
            and accurate solution for businesses of all sizes.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🧾 <span className="font-semibold">Automated GST Filing & Billing</span></p>
            <p>📊 <span className="font-semibold">Real-time Tax Reports</span></p>
            <p>☁️ <span className="font-semibold">Secure Cloud Storage</span></p>
            <p>📈 <span className="font-semibold">Business-friendly Dashboard</span></p>
          </div>

          <a
            href="https://compliancesutra.vercel.app/"
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

      </div>
    </section>
  );
};

export default ComplianceSutra;
