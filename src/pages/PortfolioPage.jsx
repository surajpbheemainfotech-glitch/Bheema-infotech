import React, { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import projects from "../data/projectData";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.19, 1, 0.22, 1]
    } 
  },
};

const PER_PAGE = 6;

const ProjectCard = ({ project, index, start }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const imgSrc = project?.image?.path || project?.image;
  const imgAlt = project?.image?.alt || project?.title;
  const isExternal = !!project?.cta?.url;
  const href = isExternal ? project.cta.url : `/portfolio/${project.slug || project.id}`;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.article
      variants={fadeUp}
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-orange-50/30
                   shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(251,146,60,0.2)]
                   transition-all duration-500 border border-orange-100/50"
        style={{
          transform: isHovered
            ? `perspective(1200px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) translateZ(20px) scale(1.02)`
            : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated gradient border glow */}
        <div 
          className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(251,146,60,0.4), rgba(251,146,60,0), rgba(251,146,60,0.4))',
            backgroundSize: '200% 200%',
            animation: isHovered ? 'gradientShift 3s ease infinite' : 'none',
          }}
        />

        {/* Image Container - Now Full Card */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
          {/* Background Image */}
          {imgSrc ? (
            <>
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover
                           transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Noise texture overlay */}
              <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                }}
              />
            </>
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-orange-100 to-orange-50">
              <Sparkles className="h-20 w-20 text-orange-300 opacity-30" />
            </div>
          )}

          {/* Dynamic gradient overlay - stronger at bottom for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent
                       transition-all duration-700"
            style={{
              background: isHovered 
                ? 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.4) 60%, transparent 100%)'
                : 'linear-gradient(to top, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.3) 60%, transparent 100%)',
            }}
          />

          {/* Diagonal light sweep effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: isHovered ? 'diagonalSweep 1.5s ease-out' : 'none',
            }}
          />

          {/* Floating category tag */}
          {project.category && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="absolute left-4 top-4 group/tag"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-orange-500/40 blur-xl rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity duration-500" />
                
                <div className="relative inline-flex items-center gap-2 rounded-2xl
                              bg-white/10 backdrop-blur-xl border border-white/20 
                              px-4 py-2 text-xs font-bold text-white shadow-2xl
                              transform transition-transform group-hover/tag:scale-105">
                  <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                  {project.category}
                </div>
              </div>
            </motion.div>
          )}

          {/* Glowing number badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3 + index * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="absolute right-4 top-4"
          >
            <div className="relative">
              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-orange-500 blur-2xl rounded-full animate-pulse opacity-60" />
              
              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600
                            flex items-center justify-center text-white font-black text-lg
                            shadow-[0_0_30px_rgba(251,146,60,0.5)] border border-orange-400/50
                            transform transition-transform group-hover:rotate-12">
                {start + index + 1}
              </div>
            </div>
          </motion.div>

          {/* Floating particles effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-orange-400/60"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: '100%',
                    opacity: 0 
                  }}
                  animate={{ 
                    y: '-20%',
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Content Overlay - Now on image */}
          <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
            {/* Tagline with icon */}
            {project.tagline && (
              <div className="inline-flex items-center gap-2 rounded-xl 
                            bg-white/15 backdrop-blur-md border border-white/20
                            px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                <Sparkles className="h-3 w-3 text-orange-400" />
                {project.tagline}
              </div>
            )}

            {/* Title with better contrast */}
            <h3 className="text-2xl font-black text-white leading-tight
                          drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
                          group-hover:text-orange-300 transition-colors duration-500">
              {project.component || project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/90 line-clamp-2 leading-relaxed
                         drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {project.description || project.desc}
            </p>

            {/* CTA Button with morphing effect */}
            <div className="flex items-center justify-between pt-2">
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden
                             bg-gradient-to-r from-orange-500 to-orange-600
                             hover:from-orange-600 hover:to-orange-700
                             text-white font-bold px-6 py-3 rounded-xl
                             shadow-[0_4px_20px_rgba(251,146,60,0.4)]
                             hover:shadow-[0_8px_30px_rgba(251,146,60,0.6)]
                             transition-all duration-300 transform hover:scale-105"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative text-sm">{project?.cta?.label || "Visit Live Project"}</span>
                  <ExternalLink className="relative h-4 w-4 transition-transform group-hover/btn:rotate-45" />
                </a>
              ) : (
                <Link
                  to={href}
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden
                             bg-gradient-to-r from-orange-500 to-orange-600
                             hover:from-orange-600 hover:to-orange-700
                             text-white font-bold px-6 py-3 rounded-xl
                             shadow-[0_4px_20px_rgba(251,146,60,0.4)]
                             hover:shadow-[0_8px_30px_rgba(251,146,60,0.6)]
                             transition-all duration-300 transform hover:scale-105"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative text-sm">View Details</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              )}

              {/* Like/Favorite icon */}
              <button className="h-10 w-10 rounded-xl bg-white/15 hover:bg-white/25
                               backdrop-blur-md border border-white/20
                               flex items-center justify-center transition-all group/fav
                               shadow-lg">
                <svg className="h-5 w-5 text-white/80 group-hover/fav:text-orange-400 group-hover/fav:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Corner accent decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-bl-full blur-2xl" />
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes diagonalSweep {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </motion.article>
  );
};

const PortfolioPage = () => {
  const { page } = useParams();

  const currentPage = Number(page || 1);
  const totalItems = projects?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));

  if (!Number.isFinite(currentPage) || currentPage < 1 || currentPage > totalPages) {
    return <Navigate to="/portfolio" replace />;
  }

  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const pageItems = useMemo(() => (projects || []).slice(start, end), [start, end]);

  const pageNumbers = useMemo(() => {
    const max = 5;
    if (totalPages <= max) return Array.from({ length: totalPages }, (_, i) => i + 1);

    let left = Math.max(1, currentPage - 2);
    let right = Math.min(totalPages, left + (max - 1));
    if (right - left < max - 1) left = Math.max(1, right - (max - 1));

    const nums = [];
    for (let i = left; i <= right; i++) nums.push(i);
    return nums;
  }, [currentPage, totalPages]);

  const prevLink = currentPage === 2 ? "/portfolio" : `/portfolio/page/${currentPage - 1}`;
  const nextLink = `/portfolio/page/${currentPage + 1}`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-t from-orange-300 to-amber-50">
        {/* tiny dots decor */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
          <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
          <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl text-slate-800 font-extrabold tracking-tight"
            >
              Our <span className="text-orange-600">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-800/80"
            >
              Innovative solutions across education, healthcare, e-commerce, and more
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-6 px-6 py-3 rounded-2xl
                         bg-white/60 backdrop-blur-sm border border-orange-200/50
                         shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm text-slate-700">
                  <span className="font-bold text-slate-900">{totalItems}</span> Projects
                </span>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div className="text-sm text-slate-700">
                Page <span className="font-bold text-slate-900">{currentPage}</span> of{" "}
                <span className="font-bold text-slate-900">{totalPages}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Animated gradient background */}
      <div className="relative bg-gradient-to-br from-slate-50 via-orange-50/20 to-slate-50">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(251 146 60) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">

        {/* Cards Grid */}
        <div className="mx-auto max-w-6xl px-6 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pageItems.map((project, index) => (
                <ProjectCard
                  key={project.id || `${currentPage}-${index}`}
                  project={project}
                  index={index}
                  start={start}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Modern Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 p-2 rounded-2xl
                          bg-white/80 backdrop-blur-sm border border-orange-100/50
                          shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              {/* Previous */}
              {currentPage > 1 ? (
                <Link
                  to={prevLink}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             text-sm font-bold text-slate-700 hover:text-orange-600
                             hover:bg-orange-50 transition-all"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             text-sm font-bold text-slate-300 cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
              )}

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {pageNumbers[0] !== 1 && (
                  <>
                    <Link
                      to="/portfolio"
                      className="h-10 w-10 grid place-items-center rounded-xl text-sm font-bold
                                 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all"
                    >
                      1
                    </Link>
                    <span className="px-1 text-slate-300">...</span>
                  </>
                )}

                {pageNumbers.map((n) => {
                  const active = n === currentPage;
                  const to = n === 1 ? "/portfolio" : `/portfolio/page/${n}`;
                  return (
                    <Link
                      key={n}
                      to={to}
                      className={`h-10 w-10 grid place-items-center rounded-xl text-sm font-bold
                                  transition-all ${
                        active
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg scale-110"
                          : "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {n}
                    </Link>
                  );
                })}

                {pageNumbers[pageNumbers.length - 1] !== totalPages && (
                  <>
                    <span className="px-1 text-slate-300">...</span>
                    <Link
                      to={`/portfolio/page/${totalPages}`}
                      className="h-10 w-10 grid place-items-center rounded-xl text-sm font-bold
                                 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all"
                    >
                      {totalPages}
                    </Link>
                  </>
                )}
              </div>

              {/* Next */}
              {currentPage < totalPages ? (
                <Link
                  to={nextLink}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             text-sm font-bold text-slate-700 hover:text-orange-600
                             hover:bg-orange-50 transition-all"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             text-sm font-bold text-slate-300 cursor-not-allowed"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Add gradient animation */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioPage;