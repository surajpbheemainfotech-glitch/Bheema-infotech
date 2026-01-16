import React from "react";
import { Link } from "react-router-dom";
import snix from "../assets/Images/10sinixai.png";

const Snix = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1 w-full">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Snix • AI Social Media Content Creation
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Smart AI Content & Post Generator
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Snix is an AI-powered content creation tool that instantly generates
            creative social media posts, captions, hashtags, and layouts.
            It’s a perfect solution for influencers, marketers, and businesses
            looking to grow faster with intelligent automation.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🤖 <span className="font-semibold">AI Social Media Post Generator</span></p>
            <p>📝 <span className="font-semibold">Captions, Hashtags & Ad Copy</span></p>
            <p>⚡ <span className="font-semibold">Fast Auto Content Creation</span></p>
            <p>📱 <span className="font-semibold">Responsive & Easy-to-Use Dashboard</span></p>
          </div>

          <a
            href="https://snix-2.vercel.app/"
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

        {/* RIGHT IMAGE (Border + Animation) */}
        <div className="flex justify-center order-1 md:order-2">
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
                src={snix}
                alt="Snix App Preview"
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

export default Snix;
