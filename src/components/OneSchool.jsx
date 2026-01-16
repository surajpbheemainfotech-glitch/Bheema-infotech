import React from "react";
import schoolimage from "../assets/Images/16oneschool.png";

const OneSchool = () => {
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
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={schoolimage}
                alt="OneSchool Platform Preview"
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

        {/* RIGHT TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-500 text-lg font-semibold uppercase tracking-wide">
            Learn. Grow. Achieve.
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            OneSchool – Complete School Management System
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            OneSchool is an all-in-one platform for managing school operations efficiently.
            It simplifies attendance tracking, results, fee management, and
            parent–teacher communication with an intuitive interface and smart analytics.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🏫 <span className="font-semibold">Student, Teacher & Admin Portals</span></p>
            <p>📊 <span className="font-semibold">Attendance, Fees & Exam Management</span></p>
            <p>📱 <span className="font-semibold">Responsive Dashboard with Analytics</span></p>
          </div>

          <a
            href="https://oneschool.bheemainfotech.in/"
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

export default OneSchool;
