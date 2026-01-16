import React from "react";
import { Link } from "react-router-dom";

import Selfie from "../components/Selfie";
import Rooyah from "../components/Rooyah";
import ApnaIndoriShop from "../components/ApnaIndoriShop";
import Housiey from "../components/Housiey";
import Tripzy from "../components/Tripzy";
import EasyStore from "../components/EasyStore";
import JobPortal from "../components/JobPortal";

const TwoPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          w-full
          bg-[#03303B]
          text-white
          px-6 md:px-10 lg:px-16
          py-10 md:py-12
          min-h-[260px] md:min-h-[300px]
          flex
          items-center
          justify-center
          text-center
        "
      >
        <div className="max-w-[760px]">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-gray-100">
            We Build Modern Websites
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight text-orange-400">
            Smart Designs, Great Results
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            From powerful UI to smooth performance — we create websites that
            boost conversions and help your business grow faster.
          </p>

          <Link
            to="/contact"
            className="
              inline-block
              mt-6
            bg-orange-600
            hover:bg-yellow-500
              active:scale-95
              transition-all
              duration-200
              text-white
              font-semibold
              px-7
              py-2.5
              rounded-lg
              text-sm sm:text-base
              shadow-md
              hover:shadow-lg
            "
          >
            Explore Our Services
          </Link>

        </div>
      </section>

      {/* ================= PORTFOLIO SECTIONS ================= */}
      <Tripzy />
      <Selfie />
      <ApnaIndoriShop />
      <Rooyah />
      <Housiey />
      <EasyStore />
      <JobPortal />
    </>
  );
};

export default TwoPage;
