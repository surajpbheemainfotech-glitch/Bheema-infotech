import React from "react";
import { Link } from "react-router-dom";
import kiderimg from "../assets/Images/18kider.png";

const Kider = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE IMAGE (Border + Animation) */}
        <div className="flex justify-center">
          <div
            className="
              group
              w-full
              max-w-lg
              aspect-video
              rounded-2xl
              p-[2px]
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={kiderimg}
                alt="Kider Platform Preview"
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
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Smart & Fun Preschool Learning
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Kider – Modern Kindergarten & Childcare Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Kider is a modern platform designed to make preschool learning fun, smart,
            and engaging. With a colorful kid-friendly interface, it offers activity-based
            learning, class management, and digital communication between teachers and parents.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎨 <span className="font-semibold">Kid-Friendly Animated UI</span></p>
            <p>📅 <span className="font-semibold">Class & Event Management</span></p>
            <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
            <p>📚 <span className="font-semibold">Activity-Based Fun Learning</span></p>
          </div>

          <a
            href="https://kider.bheemainfotech.in/"
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

export default Kider;
