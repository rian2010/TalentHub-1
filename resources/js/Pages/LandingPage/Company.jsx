import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { Link, usePage } from "@inertiajs/react";
import Paginator from "@/Components/Paginator";
import { motion } from "framer-motion";

function Company() {
  const { company } = usePage().props;

  return (
    <LandingPageLayout>
      <div className="p-16">
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center -mx-4">
          {company.data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4"
            >
              <img
                className="w-full bg-cover"
                src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-sm mb-2 ">{item.name}</div>
                <div className="flex justify-end">
                  <Link href={route("company.details", { id: item.id })}>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full">
                      See Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <Paginator links={company.links} />
        </div>
      </div>
    </LandingPageLayout>
  );
}

export default Company;
