import React from "react";
import { Link } from "react-router-dom";

import Unicat from "../components/Unicat";
import OneSchool from "../components/OneSchool";
import KidKinder from "../components/KidKinder";
import Fanadesh from "../components/Fanadesh";
import Kider from "../components/Kider";

const OnePage = () => {
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
        <div className="max-w-[720px]">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-gray-100">
            Have A Look At
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight text-orange-400">
            Our Portfolio
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            We are committed to delivering the best customer experience with our
            remarkable services! Have a look at our previous work...
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
            Request A Free Quote!
          </Link>

        </div>
      </section>

      {/* ================= PORTFOLIO SECTIONS ================= */}
      <Unicat />
      <OneSchool />
      <KidKinder />
      <Kider />
      <Fanadesh />
    </>
  );
};

export default OnePage;
