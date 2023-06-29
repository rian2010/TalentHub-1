import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react"; // Import the Link component
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";
import { motion } from "framer-motion";

export default function Dashboard({ auth, props }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    mark: "",
    major: "",
    year_start: "",
    year_end: "",
    last_education: "",
  });

  const submit = (e) => {
    e.preventDefault();

    
    if (!inputIsValid()) {
      toast.error("Data failed to save. Please fill in all the fields.");
      return;
    }

    post(route("education.store"), {
      data: data,
      onSuccess: () => reset(),
    });
    toast.success("Data saved successfully!");
  };

  const inputIsValid = () => {

    if (
      !data.mark ||
      !data.major ||
      !data.year_start ||
      !data.year_end ||
      !data.last_education
      
    ) {
      return false;
    }

    return true;
  };

  console.log("props last:", props);

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
            <form className="rounded-lg" onSubmit={submit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Add Education
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mark
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          onChange={(e) => setData("mark", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError message={errors.mark} className="mt-2" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Major
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          onChange={(e) => setData("major", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError message={errors.major} className="mt-2" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="year-start"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Year Start
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          name="year-start"
                          id="year-start"
                          onChange={(e) =>
                            setData("year_start", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.year_start}
                          className="mt-2"
                        />
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
                          type="date"
                          name="year-end"
                          id="year-end"
                          onChange={(e) => setData("year_end", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <InputError message={errors.year_end} className="mt-2" />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="year-start"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last Education
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="year-start"
                          id="year-start"
                          onChange={(e) =>
                            setData("last_education", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <InputError
                        message={errors.last_education}
                        className="mt-2"
                      />
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
                  href={route("education.index")}
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
        </motion.div>
      </div>
    </UserDashboardLayout>
  );
}
