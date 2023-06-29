import InputError from "@/Components/InputError";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Dashboard({ auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name_organization: "",
    year_start: "",
    year_end: "",
    title: "",
    description_experience: "",
  });

  const submit = (e) => {
    e.preventDefault();

    // Cek jika inputan belum diisi
    if (!inputIsValid()) {
      toast.error("Data failed to save. Please fill in all the fields.");
      return;
    }

    post(route("organization.store"), {
      data: data,
      onSuccess: () => reset(),
    });
    toast.success("Data saved successfully!");
  };

  
  const inputIsValid = () => {

    if (
      !data.name_organization ||
      !data.year_start ||
      !data.year_end ||
      !data.title ||
      !data.description_experience 
      
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
          Organization Experience
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
            <form onSubmit={submit}>
              <div className="space-y-12">
                <div className="border-b pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Organization Experience
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="organization-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Organization Name
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.name_organization}
                          type="text"
                          name="organization-name"
                          id="organization-name"
                          onChange={(e) =>
                            setData("name_organization", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.name_organization}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
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
                    <div className="sm:col-span-2">
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
                        <InputError
                          message={errors.year_end}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.title}
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="title"
                          onChange={(e) => setData("title", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError message={errors.title} className="mt-2" />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="experience-description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Experience description
                      </label>
                      <div className="mt-2">
                        <textarea
                          value={data.description_experience}
                          id="experience-description"
                          name="experience-description"
                          rows={6}
                          onChange={(e) =>
                            setData("description_experience", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <InputError
                          message={errors.description_experience}
                          className="mt-2"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write About Your Organization Experience
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-end sm:col-span-full">
                      <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.1 }}
                      >
                      <Link
                        href={route("organization.index")}
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900 mr-4"
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </UserDashboardLayout>
  );
}
