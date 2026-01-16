import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-6">

        {/* Useful Links */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-blue-400 transition">Web Design</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Web Development</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Product Management</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Marketing</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Graphic Design</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">Contact Us</h4>

          {/* Map Link */}
          <p className="
          hover:text-blue-400 text-gray-300">
            <a
              href="https://maps.app.goo.gl/qkJq8S5hYUNYaCkg6"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              302 A, Rajat Complex, Kibe Compound, Indore, MP 452001
            </a>
          </p>

          <p className="mt-2">Phone: +91-8770775732, +91-9770362377</p>

          {/* Gmail Link */}
          <p className="mt-2">
            <a
              href="mailto:bheemainfotech@gmail.com"
              className="hover:text-blue-400 hover:underline"
            >
              bheemainfotech@gmail.com
            </a>
          </p>
        </div>

        {/* About */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">About Bheema Infotech</h4>
          <p className="text-gray-300">
            Bheema Infotech is an IT Firm located in Central India, providing complete IT solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">

            <a
              href="https://x.com/BheemaInfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="https://www.facebook.com/people/Bheema-Infotech/61568097399953/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.instagram.com/bheemainfotech2024/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/bheema-infotech/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn size={24} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        &copy; 2025 Bheema Infotech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
