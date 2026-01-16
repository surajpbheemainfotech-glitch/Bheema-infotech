import React from "react";
import { Link } from "react-router-dom";
import jobportalimage from "../assets/job portal.png";

const JobPortal = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full order-2 md:order-1">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart Online Job Portal
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Find Jobs, Apply Instantly & Track Applications
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            JobPortal is an intelligent recruitment system where candidates can log in or register, 
            create their profiles, upload resumes, and apply directly to job listings. 
            With a personalized dashboard, users can easily track their application status 
            and stay updated on new opportunities.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🧾 <span className="font-semibold">Easy Login & Registration</span></p>
            <p>📄 <span className="font-semibold">Resume Upload & Profile Management</span></p>
            <p>💼 <span className="font-semibold">Direct Job Applications</span></p>
            <p>📊 <span className="font-semibold">Application Tracking & Notifications</span></p>
          </div>

          <Link
            to="https://jobportal.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-950 hover:bg-orange-400 hover:text-blue-950 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT: IMAGE (Professional Card Design) */}
        <div className="flex justify-center items-center w-full h-[400px] sm:h-[480px] md:h-[520px] order-1 md:order-2">
          <div
            className="bg-white rounded-2xl p-6 flex justify-center items-center border border-gray-100"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // consistent premium shadow
            }}
          >
            <img
              src={jobportalimage}
              alt="Job Portal"
              className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobPortal;
