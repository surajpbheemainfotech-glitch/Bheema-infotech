import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import Internship from "./pages/Internship";
import WebsiteDev from "./pages/services-pages/WebsiteDev"
import DigitalMarketing from "./pages/services-pages/DigitalMarketing"
import AI from "./pages/services-pages/Al"
import DataAnalytics from "./pages/services-pages/DataAnalytics"
import CloudDevops from "./pages/services-pages/CloudDevops"
import NotFound from "./components/NotFound";
import UnderProcess from "./components/UnderProcess";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/internship" element={<Internship />} />

         //services

        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/website-development" element={<WebsiteDev />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ai-automation" element={<AI />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/cloud-devops" element={<CloudDevops />} />

       //portfolio

        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/page/:page" element={<PortfolioPage />} />

        // not found
        <Route path="/work-in-process" element={<UnderProcess/>} />
        <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
