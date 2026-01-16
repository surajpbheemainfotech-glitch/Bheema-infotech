import React from "react";
import { Link } from "react-router-dom";

import { FaCode, FaUsersCog } from "react-icons/fa";
import {
  MdOutlineBusinessCenter,
  MdOutlineCampaign,
  MdOutlinePhoneIphone,
  MdOutlineVerified,
} from "react-icons/md";
import service from "../assets/Images/serimg.avif";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode />,
      description:
        "Conversion-focused, scalable websites built with modern technologies, optimized for speed, security, and growth.",
    },
    {
      title: "Mobile App Development",
      icon: <MdOutlinePhoneIphone />,
      description:
        "Robust mobile applications for iOS and Android, designed for performance, usability, and long-term scalability.",
    },
    {
      title: "Digital Marketing",
      icon: <MdOutlineCampaign />,
      description:
        "Result-driven digital marketing strategies focused on lead generation, visibility, and measurable ROI.",
    },
    {
      title: "SEO & Growth",
      icon: <FaUsersCog />,
      description:
        "Search optimization solutions that help your business rank higher, attract qualified traffic, and convert users into customers.",
    },
   
  ];

  return (
    <div className="bg-[#03303B] text-white">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Delivering end-to-end IT solutions that empower your business to thrive in
            the digital world.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 pb-16 bg-white text-gray-900 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
<div
  key={index}
  className="relative group bg-white p-8 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
>
  {/* ✅ Overlay for TOP to BOTTOM effect */}
  <div className="absolute inset-0 bg-blue-950 -translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

  <div className="relative z-10 flex flex-col items-center text-center min-h-[300px]">
    <div className="mb-6 text-6xl text-yellow-500 group-hover:text-white transition-all duration-500">
      {service.icon}
    </div>
    <h3 className="text-gray-900 text-2xl font-bold mb-3 group-hover:text-white transition-all duration-500">
      {service.title}
    </h3>
    <p className="text-lg leading-relaxed text-gray-900 group-hover:text-white transition-all duration-500">
      {service.description}
    </p>
    <div className="w-16 h-1 bg-yellow-400 mt-6 rounded-full group-hover:bg-white transition-all duration-500"></div>
  </div>
</div>



          ))}
        </div>
      </section>
   

      {/* CTA Section */}
      {/* <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Partner with Bheema Infotech to build dynamic, scalable, and future-ready
            digital solutions for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-12 py-4 rounded-xl font-bold  hover:bg-orange-600 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
