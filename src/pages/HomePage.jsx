import React from "react";
import { Link } from "react-router-dom";

import About from "./AboutPage";
import Services from "./ServicePage";
import Engagement from "./EngagementPage";
import TechnicalStack from "./TechnicalPage";
import Portfolio from "./PortfolioPage";
import Contact from "./ContactPage";

import homimg from "../assets/Images/homeimg.jpg";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden">
        {/* HEIGHT CONTROL (same as slider idea) */}
        <div className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">

          {/* IMAGE */}
          <img
            src={homimg}
            alt="Hero"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-center
              lg:object-cover
             
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 "></div>

          {/* CONTENT */}
          <div
            className="
              absolute inset-0
              z-10
              flex items-center
              w-full
              max-w-7xl
              px-6 sm:px-8 md:px-12 lg:px-24
              text-center md:text-left
            "
          >
            <div className="max-w-3xl text-white">
              <h1 className="text-xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Helping Global Businesses Build Scalable {" "}
                <span className="text-orange-400">
                  Websites, Apps & Digital Systems
                </span>
              </h1>

              <p className="mb-8 text-base sm:text-lg md:text-xl font-medium text-gray-100">
                "We work with startups and growing companies in the  <span className="font-bold">USA & UK </span> to deliver high-quality web, mobile & digital solutions."
              </p>

              <Link
                to="/about"
                className="
                  inline-block
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-7 py-3
                  rounded-full
                  text-base sm:text-lg
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <CTA/> */}
      {/* ================= ABOUT ================= */}
      <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <About />
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Services />
      </section>

      {/* ================= ENGAGEMENT ================= */}
      <section id="engagement" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Engagement />
      </section>

      {/* ================= TECH STACK ================= */}
      <section id="technical" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <TechnicalStack />
      </section>

      {/* ================= PORTFOLIO ================= */}
      {/* <section id="portfolio" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Portfolio />
      </section> */}

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;