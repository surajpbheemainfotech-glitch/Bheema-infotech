import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo01.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services", hasDropdown: true },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/internship", label: "Internship" },
  { path: "/contact", label: "Contact" },
];

const serviceDropdown = [
  { path: "/services/website-development", label: "Website Development" },
  { path: "/services/digital-marketing", label: "Digital Marketing" },
  { path: "/services/ai-automation", label: "AI & Automation" },
  { path: "/services/data-analytics", label: "Data Analytics" },
  { path: "/services/cloud-devops", label: "Cloud & DevOps" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  // ✅ active should work for /services and all /services/*
  const isActive = (path) => {
    if (path === "/services") return location.pathname.startsWith("/services");
    return location.pathname === path;
  };

  // ✅ For animated underline (desktop)
  const containerRef = useRef(null);
  const linkRefs = useRef(new Map());
  const [underline, setUnderline] = useState({ left: 0, width: 0, visible: false });

  const activePath = useMemo(() => {
    // choose active item (services included)
    const activeItem = navLinks.find((l) => isActive(l.path));
    return activeItem?.path || "";
  }, [location.pathname]);

  const updateUnderlineTo = (path) => {
    const el = linkRefs.current.get(path);
    const wrap = containerRef.current;
    if (!el || !wrap) return setUnderline((p) => ({ ...p, visible: false }));

    const a = el.getBoundingClientRect();
    const b = wrap.getBoundingClientRect();
    setUnderline({
      left: a.left - b.left,
      width: a.width,
      visible: true,
    });
  };

  useEffect(() => {
    // move underline on route change
    updateUnderlineTo(activePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePath]);

  useEffect(() => {
    const onResize = () => updateUnderlineTo(activePath);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePath]);

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-gradient-to-b from-orange-200 to-slate-50 backdrop-blur-xl
        border-b border-white/30
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 w-auto rounded-xl" />
        </Link>

        {/* Desktop Menu */}
        <div
          ref={containerRef}
          className="hidden md:flex items-center gap-8 relative"
          onMouseLeave={() => {
            // return underline to active item
            updateUnderlineTo(activePath);
          }}
        >
          {/* ✅ Apple-style animated underline */}
          <span
            className="absolute -bottom-1 h-1 rounded-full bg-orange-400 transition-all duration-300"
            style={{
              left: underline.left,
              width: underline.width,
              opacity: underline.visible ? 1 : 0,
            }}
          />

          {navLinks.map((item) => {
            // Services dropdown item
            if (item.path === "/services") {
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => {
                    setServiceOpen(true);
                    updateUnderlineTo(item.path);
                  }}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <Link
                    to="/services"
                    ref={(el) => {
                      if (el) linkRefs.current.set(item.path, el);
                    }}
                    onMouseEnter={() => updateUnderlineTo(item.path)}
                    className={`
                      relative px-1 py-2 transition-all duration-300
                      ${isActive("/services")
                        ? "text-orange-600 font-semibold"
                        : "text-orange-400 hover:text-orange-600"}
                    `}
                  >
                    Services ▾
                  </Link>

                  {/* Dropdown */}
                  {serviceOpen && (
                    <div className="absolute top-12 left-0 w-64 rounded-2xl bg-white/95 backdrop-blur-xl
                                    border border-orange-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                                    py-2 overflow-hidden">
                      <Link
                        to="/services"
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-700
                                   hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        All Services
                      </Link>

                      <div className="h-px bg-orange-100 my-1" />

                      {serviceDropdown.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-4 py-2.5 text-sm text-slate-700
                                     hover:bg-orange-50 hover:text-orange-600 transition"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.path, el);
                }}
                onMouseEnter={() => updateUnderlineTo(item.path)}
                className={`
                  relative px-1 py-2 transition-all duration-300
                  ${isActive(item.path)
                    ? "text-orange-600 font-semibold"
                    : "text-orange-400 hover:text-orange-600"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden text-2xl
            bg-white/30 backdrop-blur-xl
            border border-white/40
            rounded-xl px-3 py-2
            text-orange-600
          "
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden mx-4 mb-4
            rounded-2xl
            bg-white/25 backdrop-blur-xl
            border border-white/30
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            px-6 py-4
            flex flex-col space-y-3
          "
        >
          {navLinks.map((item) => {
            // Mobile Services Accordion
            if (item.path === "/services") {
              return (
                <div key={item.path} className="flex flex-col">
                  <button
                    onClick={() => setServiceOpen((p) => !p)}
                    className={`
                      relative py-2 text-left transition-all duration-300
                      ${isActive("/services")
                        ? "text-orange-600 font-semibold"
                        : "text-orange-400 hover:text-orange-600"}
                    `}
                  >
                    Services {serviceOpen ? "▲" : "▼"}
                    {isActive("/services") && (
                      <span className="absolute left-0 -bottom-1 w-16 h-1 bg-orange-400 rounded-full" />
                    )}
                  </button>

                  {serviceOpen && (
                    <div className="ml-3 mt-2 flex flex-col space-y-2">
                      <Link
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-slate-700 hover:text-orange-600 transition"
                      >
                        All Services
                      </Link>
                      {serviceDropdown.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-slate-700 hover:text-orange-600 transition"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  relative py-2 transition-all duration-300
                  ${isActive(item.path)
                    ? "text-orange-600 font-semibold"
                    : "text-orange-400 hover:text-orange-600"}
                `}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute left-0 -bottom-1 w-16 h-1 bg-orange-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
