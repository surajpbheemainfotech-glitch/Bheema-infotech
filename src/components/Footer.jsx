import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import qrImg from "../assets/QR.png"; // ✅ NEW (path change as per your file)

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-orange-200 to-slate-50 text-slate-700">
      {/* soft blobs */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Useful Links */}
        <div className="md:col-span-2">
          <h4 className="font-extrabold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-600 hover:underline transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600 hover:underline transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 hover:underline transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600 hover:underline transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="md:col-span-2">
          <h4 className="font-extrabold mb-4 ">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Web Design",
              "Web Development",
              "Product Management",
              "Marketing",
              "Graphic Design",
            ].map((service, i) => (
              <li key={i}>
                <a href="#services" className="hover:text-orange-600 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-3">
          <h4 className="font-extrabold mb-4 ">Contact Us</h4>

          <p className="text-slate-900 text-sm hover:text-orange-400 transition">
            <a
              href="https://maps.app.goo.gl/qkJq8S5hYUNYaCkg6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              302 A, Rajat Complex, Kibe Compound, Indore, MP 452001
            </a>
          </p>

          <p className="mt-2 text-slate-900 text-sm">
            Phone:{" "}
            <span className="text-orange-400 text-bold">
              +91-8770775732, +91-9770362377
            </span>
          </p>

          <p className="mt-2 text-sm">
            <a
              href="mailto:bheemainfotech@gmail.com"
              className="text-slate-900 hover:text-orange-500 hover:underline transition"
            >
              bheemainfotech@gmail.com
            </a>
          </p>
        </div>

        {/* About + Social */}
        <div className="md:col-span-3">
          <h4 className="font-extrabold mb-4">About Bheema Infotech</h4>
          <p className="text-slate-900 text-sm leading-relaxed">
            Bheema Infotech is an IT firm located in Central India, delivering
            complete IT solutions with a focus on quality, innovation, and
            long-term growth.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[
              { icon: <FaTwitter size={20} />, link: "https://x.com/BheemaInfotech" },
              {
                icon: <FaFacebookF size={20} />,
                link: "https://www.facebook.com/people/Bheema-Infotech/61568097399953/",
              },
              {
                icon: <FaInstagram size={20} />,
                link: "https://www.instagram.com/bheemainfotech2024/?hl=en",
              },
              {
                icon: <FaLinkedinIn size={20} />,
                link: "https://www.linkedin.com/company/bheema-infotech/posts/?feedView=all",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-full
                  bg-white/10 backdrop-blur-md
                  border border-slate-900
                  text-slate-900
                  hover:text-orange-600
                  hover:border-orange-400
                  transition
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>


        {/* ✅ QR Section (FIXED) */}
        {/* ✅ QR Section (CLEAN + SCANNABLE) */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div
            className="
      w-full max-w-[220px]
      rounded-2xl bg-white/30 backdrop-blur-xl
      border border-white/40
      shadow-[0_10px_30px_rgba(0,0,0,0.10)]
      p-4
      flex flex-col items-center
    "
          >
            <p className="text-sm font-extrabold text-slate-800 mb-2">Scan QR</p>

            <a
              href="https://bheemainfotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
        w-[150px] h-[150px]
        rounded-2xl
        border border-orange-200
        bg-white
        p-3
        flex items-center justify-center
        overflow-hidden
      "
              title="Open Website"
            >
              <img
                src={qrImg}
                alt="Bheema Infotech QR Code"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </a>

            <p className="mt-2 text-xs text-slate-600 text-center">Open Website</p>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="relative text-center border-t border-white/10 py-4 font-bold text-lg text-slate-900">
        © {new Date().getFullYear()} Bheema Infotech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
