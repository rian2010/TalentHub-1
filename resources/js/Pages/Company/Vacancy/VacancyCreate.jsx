import { Head, Link, useForm } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import InputError from "@/Components/InputError";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Dashboard({ auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    position: "",
    salary: "",
    registration_duration: "",
    job_offer: "",
    experience_level: "",
    placement_location: "",
    job_desk: "",
    requirement: "",
  });

  const submit = (e) => {
    e.preventDefault();

    // Cek jika inputan belum diisi
    if (!inputIsValid()) {
      toast.error("Data failed to save. Please fill in all the fields.");
      return;
    }

    post(route("vacancy.store"), {
      data: data,
      onSuccess: () => reset(),
    });
    toast.success("Data saved successfully!");
  };

  const inputIsValid = () => {
  
    if (
      !data.position ||
      !data.salary ||
      !data.registration_duration ||
      !data.job_offer ||
      !data.experience_level ||
      !data.placement_location ||
      !data.job_desk ||
      !data.requirement 
    ) {
      return false;
    }

    return true;
  };

  return (
    <CompanyDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <ToastContainer />

      <div className="py-12">
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-6">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={submit}>
              <div className="space-y-12">
                <div className="border-b pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Vacancy
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Position
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.position}
                          type="text"
                          name="position"
                          id="position"
                          onChange={(e) => setData("position", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.position}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="salary"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Salary
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.salary}
                          type="text"
                          name="salary"
                          id="salary"
                          onChange={(e) => setData("salary", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError message={errors.salary} className="mt-2" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="registration-duration"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Registration Duration
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.registration_duration}
                          type="date"
                          name="registration-duration"
                          id="registration-duration"
                          onChange={(e) =>
                            setData("registration_duration", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.registration_duration}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="job-offer"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Job Offer
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.job_offer}
                          type="text"
                          name="job-offer"
                          id="job-offer"
                          onChange={(e) => setData("job_offer", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.job_offer}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="experience-level"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Experience Level
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.experience_level}
                          type="text"
                          name="experience-level"
                          id="experience-level"
                          onChange={(e) =>
                            setData("experience_level", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.experience_level}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="placement-location"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Placement Location
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.placement_location}
                          type="text"
                          name="placement-location"
                          id="placement-location"
                          autoComplete="street-address"
                          onChange={(e) =>
                            setData("placement_location", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.placement_location}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="job-desk"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Job Desk
                      </label>
                      <div className="mt-2">
                        <textarea
                          value={data.job_desk}
                          id="job-desk"
                          name="job-desk"
                          rows={6}
                          onChange={(e) => setData("job_desk", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.job_desk}
                          className="mt-2"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write About the Job Desk for this Vacancy
                      </p>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="requirement"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Requirement
                      </label>
                      <div className="mt-2">
                        <textarea
                          value={data.requirement}
                          id="requirement"
                          name="requirement"
                          rows={6}
                          onChange={(e) =>
                            setData("requirement", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.requirement}
                          className="mt-2"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write About the Requirement for this Vacancy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
                >
                <Link
                  href={route("vacancy.index")}
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  disabled={processing}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </CompanyDashboardLayout>
  );
}
