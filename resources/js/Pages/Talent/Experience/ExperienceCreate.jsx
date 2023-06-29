import { Head, Link, useForm } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";
import { motion } from "framer-motion";

export default function Dashboard({ auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    jobdesk: "",
    type: "",
    year_start: "",
    year_end: "",
    address: "",
    company: "",
    position: "",
  });

  const submit = (e) => {
    e.preventDefault();

    // Cek jika inputan belum diisi
    if (!inputIsValid()) {
      toast.error("Data failed to save. Please fill in all the fields.");
      return;
    }

    post(route("experience.store"), {
      data: data,
      onSuccess: () => reset(),
    });
    toast.success("Data saved successfully!");
  };

  const inputIsValid = () => {
  
    if (
      !data.jobdesk ||
      !data.type ||
      !data.year_start ||
      !data.year_end ||
      !data.address ||
      !data.company ||
      !data.position
    ) {
      return false;
    }

    return true;
  };

  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <ToastContainer />

      <div className="py-6">
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="flex items-center text-base font-semibold leading-7 text-gray-900">
                <BriefcaseIcon className="h-6 w-6 text-gray-500 mr-2" />
                Experience
              </h2>

              <form
                onSubmit={submit}
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 "
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="jobdesk"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    JobDesk
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.jobdesk}
                      type="text"
                      name="jobdesk"
                      id="jobdesk"
                      onChange={(e) => setData("jobdesk", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.jobdesk} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="jobdesk"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Type
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.type}
                      type="text"
                      name="type"
                      id="type"
                      onChange={(e) => setData("type", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.type} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="year-start"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year Start
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.year_start}
                      type="date"
                      name="year-start"
                      id="year-start"
                      onChange={(e) => setData("year_start", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.year_start} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="year-end"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year End
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.year_end}
                      type="date"
                      name="year-end"
                      id="year-end"
                      onChange={(e) => setData("year_end", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.year_end} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.company}
                      type="text"
                      name="company"
                      id="company"
                      onChange={(e) => setData("company", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.company} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-3">
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
                    <InputError message={errors.position} className="mt-2" />
                  </div>
                </div>
                <div className="sm:col-span-6 flex justify-center">
                  <div className="max-w-md w-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <textarea
                        value={data.address}
                        type="text"
                        name="address"
                        id="address"
                        onChange={(e) => setData("address", e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-20"
                      />
                      <InputError message={errors.address} className="mt-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-6">
                  <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  >
                  <Link
                    href={route("experience.index")}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Back
                  </Link>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </UserDashboardLayout>
  );
} 