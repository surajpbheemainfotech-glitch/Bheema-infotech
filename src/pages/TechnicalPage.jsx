import React from "react";

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
    <div className="bg-[#f1f8ff] text-gray-800 py-16">
      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          Our <span className="text-orange-400">Technical Stacks</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to deliver high-quality, scalable, and robust solutions for our clients.
        </p>
      </section>

      {/* Marquee Section */}
      <section className="overflow-hidden space-y-12">
        {/* Row 1: Left → Right */}
        <div className="relative">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {firstRow.concat(firstRow).map((icon, index) => (
              <img
                key={`row1-${index}`}
                src={icon}
                alt=""
                className="w-40 h-30 object-contain mx-6"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Right → Left */}
        <div className="relative">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {secondRow.concat(secondRow).map((icon, index) => (
              <img
                key={`row2-${index}`}
                src={icon}
                alt=""
                className="w-40 h-30 object-contain mx-6"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Want to Work With These Technologies?
        </h2>
        <p className="text-gray-700 mb-8">
          Contact us today to learn how we can implement these technologies for your project.
        </p>
        <Link to="/contact"
          className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default TechnicalStack;
