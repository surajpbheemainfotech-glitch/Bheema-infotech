import React from "react";
import { Link } from "react-router-dom";
import eng1 from "../assets/icons/eng1.svg";
import eng2 from "../assets/icons/eng2.svg";
import eng3 from "../assets/icons/eng3.svg";

const Engagement = () => {
  const engagementModels = [
    {
      title: "On Hire",
      icon: eng1,
      description:
        "We provide a resource to clients on a hire basis. Today the concept of virtual employees has increased tremendously. The term virtual employees represent project team members in different geographical locations.",
    },
    {
      title: "Fixed Cost Model",
      icon: eng2,
      description:
        "Here we develop a set of project development models. The process starts with understanding the client’s requirement to ensure alignment. Then a fixed price is decided based on estimated time and effort.",
    },
    {
      title: "Bucket Hour",
      icon: eng3,
      description:
        "We also work on a unique Bucket Hour Model suitable for clients with flexible needs. For development, we follow Agile, Prototyping, Waterfall, and Spiral methodologies.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-[#03303B] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            ENGAGEMENT MODELS FOR CUSTOM MADE SOLUTIONS{" "}
            <span className="text-orange-400">TO EASE YOUR WORK</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl italic text-gray-100">
            We provide resources to clients on hire basis. Today the concept of
            virtual employees has increased tremendously. The term virtual
            employees represent project team members in different geographical
            locations.
          </p>
        </div>
      </section>

      {/* Engagement Cards */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid gap-10 sm:gap-8 sm:grid-cols-1 md:grid-cols-3 justify-items-center">
          {engagementModels.map((model, index) => (
      <div
  key={index}
  className="relative group rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 transform p-8 sm:p-10 flex flex-col items-center text-center min-h-[320px] w-full sm:w-[18rem] md:w-[22rem] overflow-hidden border border-gray-200"
>
  {/* Sliding Overlay for top-to-bottom effect */}
  <div className="absolute inset-0 bg-blue-950 -translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

  {/* Card Content */}
  <div className="relative z-10 flex flex-col items-center text-center">
    {/* Icon Box */}
    <div className="w-24 h-8 mb-6 flex items-center justify-center rounded-2xl shadow-md bg-[#f0f7ff] group-hover:bg-blue-950 transition-all duration-300">
      <img
        src={model.icon}
        alt={model.title}
        className="w-12 h-12 sm:w-20 sm:h-20 md:w-20 md:h-20 object-contain"
      />
    </div>

    {/* Title */}
    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-all duration-500">
      {model.title}
    </h3>

    {/* Description */}
    <p className="text-gray-700 text-sm sm:text-base group-hover:text-white transition-all duration-500 leading-relaxed">
      {model.description}
    </p>

    {/* Link */}
    <Link
      to="#contact"
      className="mt-4 inline-block text-blue-950 font-semibold group-hover:text-orange-400 transition duration-300"
    >
      Learn More →
    </Link>
  </div>
</div>

          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 sm:py-20 text-center bg-[#e3efed] text-gray-900 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            Need Custom Engagement?
          </h2>
          <p className="text-gray-700 mb-10 text-base sm:text-lg leading-relaxed">
            Contact us today and let our experts help you choose the best
            engagement model for your project.
          </p>
          <Link to="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 transition duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Engagement;
