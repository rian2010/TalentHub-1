import InputError from "@/Components/InputError";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import { TrophyIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Dashboard({ auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    description: "",
    position: "",
    achivement_date: "",
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
      !data.description ||
      !data.position ||
      !data.achivement_date
      
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

      <div className="py-12">
        <motion.div 
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1 }} 
         transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="flex items-center text-base font-semibold leading-7 text-gray-900">
                <TrophyIcon className="h-6 w-6 text-gray-500 mr-2" />
                Achievement Form
              </h2>

              <form
                onSubmit={submit}
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 "
              >
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
                      autoComplete="given-position"
                      onChange={(e) => setData("position", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.position} className="mt-2" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="achivement-date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Achivement Date
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.achivement_date}
                      id="achivement-date"
                      name="achivement-date"
                      type="date"
                      autoComplete="date"
                      onChange={(e) =>
                        setData("achivement_date", e.target.value)
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError
                      message={errors.achivement_date}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={data.description}
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="given-description"
                      onChange={(e) => setData("description", e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <InputError message={errors.description} className="mt-2" />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    >
                    <Link
                      
                      href={route("achivement.index")}
                      type="button"
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
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </UserDashboardLayout>
  );
}
