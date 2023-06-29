import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import "react-datepicker/dist/react-datepicker.css";
import { BriefcaseIcon, TrashIcon } from "@heroicons/react/24/solid";
import Paginator from "@/Components/Paginator";
import { motion } from "framer-motion";

export default function Dashboard({ auth, vacancy, ...props }) {
  const [redirect, setRedirect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    if (redirect) {
      router.visit(route("vacancy.create"));
    }
  }, [redirect]);

  const handleAddClick = () => {
    setRedirect(true);
  };

  const handleSeeDetails = (vacancy) => {
    setSelectedVacancy(vacancy);
    setShowModal(true);
  };
 
  const handleDelete = () => {
    // Perform the deletion logic here
    // After successful deletion, close the modal
    setShowModal(false);
  };

  return (
    <CompanyDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Vacancy
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="flex items-end justify-end ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
          onClick={handleAddClick}
          href={route("vacancy.create")}
        >
          Add
        </motion.button>
      </div>

      <div className="flex justify-end py-12 pr-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {vacancy.data.map((item) => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="card bg-base-100 shadow-md rounded-md p-4 w-96"
            >
              <figure className="px-4 pt-4">
                <img
                  src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
              </figure>
              <div className="card-body flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-lg font-semibold">
                    {item.position}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    {item.registration_duration}
                  </p>
                </div>
                <div className="card-actions mt-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    className="btn btn-primary btn-sm focus:outline-none"
                    onClick={() => handleSeeDetails(item)}
                  >
                    See Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Paginator links={vacancy.links} />
      </div>

      {showModal && selectedVacancy && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-8/12">
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
    </CompanyDashboardLayout>
  );
}