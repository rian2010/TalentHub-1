import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Paginator from "@/Components/Paginator";
import { motion } from "framer-motion";

function Vacancy() {
  const { vacancy } = usePage().props;
  const [showModal, setShowModal] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const handleSeeDetails = (vacancy) => {
    setSelectedVacancy(vacancy);
    setShowModal(true);
  };

  const modalStyle = {
    scrollbarWidth: "thin",
    scrollbarColor: "#999 #eee",
  };

  return (
    <LandingPageLayout>
      <div className="p-16">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center -mx-4"
        >
          {vacancy.data.map((item) => (
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
                <div className="text-xl font-bold mb-2">{item.user.name}</div>
                <p>{item.position}</p>
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    onClick={() => handleSeeDetails(item)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full"
                  >
                    See Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Paginator links={vacancy.links} />
        </div>
      </div>

      {showModal && selectedVacancy && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          style={modalStyle}
        >
          <div className="bg-white p-4 rounded-md w-8/12 h-4/5 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-center flex items-center justify-center">
              <BriefcaseIcon className="w-6 h-6 mr-2" />
              Vacancy Details
            </h2>

            <div className="flex flex-col items-center justify-center">
              <div className="px-4 sm:px-0">
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Details about the selected vacancy.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Position
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.position}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Salary
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.salary.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Registration Duration
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.registration_duration}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Contact
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <a
                        href={`mailto:${selectedVacancy.user.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedVacancy.user.email}
                      </a>
                      <span className="text-xs text-gray-500 ml-1">
                        (Click here to apply)
                      </span>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Job Offer
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.job_offer}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Experience Level
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.experience_level}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Placement Location
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.placement_location}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Requirement
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {selectedVacancy.requirement}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-primary btn-sm mr-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </LandingPageLayout>
  );
}

export default Vacancy;
