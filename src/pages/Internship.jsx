import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import WebImg from "../assets/Images/intern1.png";
import GraphicImg from "../assets/Images/intern2.png";
import JavaImg from "../assets/Images/intern3.png";
import AndroidImg from "../assets/Images/intern4.png";
import Datascience from "../assets/Images/intern5.png";
import Python from "../assets/Images/intern6.png";

// Internship data (TEXT SAME)
const internships = [
  {
    title: "Web Development",
    img: WebImg,
    desc: `The Web Development internship offers practical work experience and an introduction to creating and improving web-based systems. This internship will involve challenging opportunities, real world projects. It’s a fantastic opportunity to gain hands-on experience in the web and/or app development field with an award-winning innovation team.`,
  },
  {
    title: "Graphic Design",
    img: GraphicImg,
    desc: `With a graphic design internship, you will be involved in projects that focus on nearly every aspect of a business’s visual design strategies. Your internship tasks may include creating graphic and video content, template design, web design work, and many more exciting tasks. Plus our graphic design internships range in industries, so we work with you to find one that best matches your career goals.`,
  },
  {
    title: "Java Programming",
    img: JavaImg,
    desc: `Master the Fundamentals of Programming in Java from the comfort of your home and get certified to apply for great job opportunities. A with 4-week comprehensive Internship program where you will learn right from development to deployment of web applications made using Java. Get first-hand exposure to working in the real world, build your professional network, integrate classroom knowledge and theory with practical application and skills developed in professional or community settings.`,
  },
  {
    title: "Android Development",
    img: AndroidImg,
    desc: `Android is an open source Operating for mobile application development.Now a days people continuously shifting to mobile devices to access internet application and other important tasks.which is more easy than to work on PC.It it best choice to getting started your first App with OASIS INFOBYTE.`,
  },
  {
    title: "Data Science",
    img: Datascience,
    desc: `Remote data science internships are a unique chance to gain experience in the midst of the virtual workforce while remaining immersed in one of the top organizations in the field. Data analysis internships are some of the most competitive and popular within the broader data science field.`,
  },
  {
    title: "Python Programming",
    img: Python,
    desc: `Enroll in our intensive 4-week internship program to become proficient in Python programming, all within the convenience of your home. Acquire the essential skills and expertise to pursue exciting job prospects in this field. Throughout the program, you'll delve into various aspects, spanning from web development to deploying Python-driven web applications. Achieve certification and elevate your career possibilities. Seize this chance to excel in Python programming – it's not to be missed!`,
  },
];

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Internship() {
  return (
    <div className=" text-white">
      {/* ===== HERO HEADER (apna wala) ===== */}
  <section className="relative overflow-hidden bg-gradient-to-t from-orange-300 to-amber-50 py-20 md:py-5">
  {/* tiny dots decor */}
  <div className="pointer-events-none absolute inset-0 opacity-30">
    <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-orange-600" />
    <div className="absolute left-20 top-16 h-2.5 w-2.5 rounded-full bg-orange-600" />
    <div className="absolute right-14 top-14 h-4 w-4 rounded-full bg-orange-600" />
    <div className="absolute right-24 top-24 h-2.5 w-2.5 rounded-full bg-orange-600" />
  </div>

  {/* soft blobs */}
  <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-400/30 blur-3xl" />
  <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-400/30 blur-3xl" />

  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative max-w-7xl mx-auto px-6 text-center"
  >
    {/* badge */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md  px-4 py-1 text-sm font-semibold text-orange-700 shadow-sm"
    >
      Career Programs
      <span className="h-2 w-2 rounded-full bg-orange-500" />
    </motion.div>

    {/* heading */}
    <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
      Our <span className="text-orange-500">Internships</span>
    </h1>

    {/* subtext */}
    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-700">
      Learn by working on real projects, build industry-ready skills, and kickstart
      your career with hands-on internship programs.
    </p>


  </motion.div>
</section>


      {/* ===== GRID SECTION ===== */}
      <section className="bg-white text-slate-900 rounded-t-[3rem] pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {internships.map((itemData, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  group relative overflow-hidden
                  bg-white rounded-3xl
                  border border-slate-200
                  shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                  transition-all
                "
              >
                {/* gradient shapes inside card */}
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-orange-400/15 blur-2xl" />
                <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-blue-600/10 blur-2xl" />

                <div className="relative p-7 flex flex-col h-full">
                  {/* Image */}
                  <motion.div
                    className="flex justify-center"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src={itemData.img}
                      alt={itemData.title}
                      className="w-44 h-28 object-contain drop-shadow-sm"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-extrabold text-center">
                    {itemData.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm text-center leading-relaxed">
                    {itemData.desc}
                  </p>

                  {/* Button */}
                  <div className="mt-6 text-center">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="
                          bg-orange-500 hover:bg-orange-600
                          text-white px-7 py-2.5 rounded-full
                          font-bold shadow-lg transition
                        "
                      >
                        Apply Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
