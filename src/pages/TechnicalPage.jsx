import React from "react";
import { motion } from "framer-motion";
// === ICON IMPORTS ===
import icon1 from "../assets/icons/amazon_web_services.png";
import icon2 from "../assets/icons/android.png";
import icon4 from "../assets/icons/angularjs.png";
import icon6 from "../assets/icons/artificial_intellifgence.png";
import icon7 from "../assets/icons/azure.png";
import icon8 from "../assets/icons/blockchain.png";
import icon9 from "../assets/icons/bootstape.png";
import icon10 from "../assets/icons/cloud_computing.png";
import icon11 from "../assets/icons/css3.png";
import icon12 from "../assets/icons/devops.png";
import icon13 from "../assets/icons/django.png";
import icon14 from "../assets/icons/drupal.png";
import icon15 from "../assets/icons/html5.png";
import icon16 from "../assets/icons/iot.png";
import icon17 from "../assets/icons/java.png";
import icon18 from "../assets/icons/joomla.png";
import icon19 from "../assets/icons/jquery.png";
import icon20 from "../assets/icons/lambda.png";
import icon21 from "../assets/icons/laravel.png";
import icon22 from "../assets/icons/mysql.png";
import icon23 from "../assets/icons/net.png";
import icon24 from "../assets/icons/nodejs.png";
import icon25 from "../assets/icons/php.png";
import icon26 from "../assets/icons/python.png";
import icon27 from "../assets/icons/react.png";
import icon28 from "../assets/icons/ror.png";
import icon29 from "../assets/icons/tailwindcss.png";
import icon30 from "../assets/icons/wordpress.png";
import icon31 from "../assets/icons/magento.png";
import { Link } from "react-router-dom";

// === ALL ICONS ARRAY ===
const allStacks = [
  icon24, icon25, icon26, icon21, icon2, icon4, icon8, icon27, icon28,
  icon16, icon17, icon18, icon31, icon23, icon1, icon6, icon7, icon9,
  icon10, icon11, icon12, icon13, icon14, icon15, icon19, icon20,
  icon22, icon30, icon29,
];

// Split icons into two different rows
const firstRow = allStacks.slice(0, Math.ceil(allStacks.length / 2));
const secondRow = allStacks.slice(Math.ceil(allStacks.length / 2));

const TechnicalStack = () => {
  return (
    <div className=" text-gray-800 py-16">
      {/* Heading */}
      <section className="text-center mb-12">
              <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="max-w-7xl"
                >
                  <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">
                    Our Technical Stacks
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  </p>
        
                  <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                    We leverage cutting-edge technologies to deliver high-quality, <span className="text-orange-500">scalable,and robust solutions for our clients.</span> 
                  </h1>

                </motion.div>
 
      </section>

  {/* Marquee Section (Fixed sizing + theme styling) */}
<section className="space-y-10">
  {/* Row 1 */}
  <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white/80 p-6 shadow-sm">
    {/* soft glow */}
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-orange-400/15 blur-2xl" />
    </div>

    {/* fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />

    <div className="relative z-10 flex animate-marquee-left whitespace-nowrap items-center gap-6">
      {firstRow.concat(firstRow).map((icon, index) => (
        <div
          key={`row1-${index}`}
          className="shrink-0 min-w-[140px] h-[86px] md:min-w-[160px] md:h-[96px]
                     rounded-2xl border border-orange-200/70 bg-white/70 backdrop-blur
                     shadow-[0_10px_22px_rgba(0,0,0,0.06)]
                     grid place-items-center transition
                     hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.12)]"
        >
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="!h-[56px] md:!h-[62px] !w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Row 2 */}
  <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white/80 p-6 shadow-sm">
    {/* soft glow */}
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#F6D76B]/25 blur-2xl" />
    </div>

    {/* fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />

    <div className="relative z-10 flex animate-marquee-right whitespace-nowrap items-center gap-6">
      {secondRow.concat(secondRow).map((icon, index) => (
        <div
          key={`row2-${index}`}
          className="shrink-0 min-w-[140px] h-[86px] md:min-w-[160px] md:h-[96px]
                     rounded-2xl border border-orange-200/70 bg-white/70 backdrop-blur
                     shadow-[0_10px_22px_rgba(0,0,0,0.06)]
                     grid place-items-center transition
                     hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.12)]"
        >
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="!h-[56px] md:!h-[62px] !w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default TechnicalStack;
