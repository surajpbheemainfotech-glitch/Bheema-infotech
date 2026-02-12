import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import posts from "../data/blogData";

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const BlogPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gradient-to-t from-orange-200 to-amber-50">
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] md:min-h-[72vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={posts[0].img}
          alt="Blog Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Shapes */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative text-center text-white px-6 max-w-4xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1 text-sm font-semibold text-slate-100">
            Welcome to Our Blog <span className="h-2 w-2 rounded-full bg-orange-400" />
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Explore Knowledge & Insights
          </h1>

          <p className="mt-4 text-lg md:text-xl text-orange-200">
            Stay updated with latest strategies, tech trends, and growth playbooks.
          </p>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16 flex-grow">
        <div className="bg-orange-100 rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm border border-orange-200">
          <motion.div
            variants={wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.article
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  group bg-white rounded-3xl overflow-hidden
                  border border-slate-200
                  shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                  transition-all
                "
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white backdrop-blur-md border border-orange-400 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-6">
                    {post.desc}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-orange-500 transition">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-red-300" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
