import React from "react";
import { Link } from "react-router-dom";
import kinder from "../assets/Images/17kidkiner.png";

const KidKinder = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Modern Preschool Management & Fun Learning
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            KidKinder – Smart Kids Learning Website
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            KidKinder is a creative and child-friendly platform built for preschools
            and kindergartens. Its colorful and interactive UI helps children learn
            through fun activities, while parents and teachers stay connected with
            digital communication, schedules, and class updates.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎨 <span className="font-semibold">Animated UI for Kids Engagement</span></p>
            <p>📚 <span className="font-semibold">Activity-Based Learning Tools</span></p>
            <p>📅 <span className="font-semibold">Event Calendar & Class Management</span></p>
            <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
          </div>

          <a
            href="https://kidkinder.bheemainfotech.in/"
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

        {/* RIGHT SIDE IMAGE (Border + Animation) */}
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
                src={kinder}
                alt="KidKinder Platform Preview"
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

      </div>
    </section>
  );
};

export default KidKinder;
