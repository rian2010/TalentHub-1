import React from "react";
import hero from "@/Images/hero-img.png";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-14">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          className="mr-auto place-self-center lg:col-span-7"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            variants={itemVariants}
          >
            Welcome to TalentHub
          </motion.h1>
          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            variants={itemVariants}
          >
            Facilities for Entrepreneurship Development Programs and Skill Enhancement Training tailored to industry needs
          </motion.p>

          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <motion.a
              href={route("login")}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}

            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:block lg:col-span-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.img
            src={hero}
            alt="mockup"
            className="w-full rounded-lg"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}
