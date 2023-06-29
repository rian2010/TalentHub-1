import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { Link, usePage } from "@inertiajs/react";
import Paginator from "@/Components/Paginator";
import { motion } from "framer-motion";
 
export default function Talent() {
  const { talent } = usePage().props;

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <LandingPageLayout>
      <div className="p-16">
        <motion.div
          className="flex flex-wrap justify-center -mx-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>
          {talent.data.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4"
            >
              <motion.img
                variants={itemVariants}
                className="w-full bg-cover"
                src="https://placeimg.com/640/480/any"
                alt="Sunset in the mountains"
              />
              <motion.div 
              variants={itemVariants}
              className="px-6 py-4">
                <motion.div 
                variants={itemVariants}
                className="text-sm mb-2 ">{item.name}</motion.div>
                <motion.div 
                variants={itemVariants}
                className="flex justify-end">
                  <Link href={route("talent.details", { id: item.id })}>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full">
                      See Details
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
        variants={itemVariants}
        className="flex justify-center">
          <Paginator links={talent.links} />
        </motion.div>
      </div>
    </LandingPageLayout>
  );
}
