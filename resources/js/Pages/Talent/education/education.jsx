import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { motion } from 'framer-motion';
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import {
  AcademicCapIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import "react-datepicker/dist/react-datepicker.css";
import Paginator from "@/Components/Paginator";

export default function Dashboard({ auth, education }) {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (redirect) {
      router.visit(route("education.create"));
    }
  }, [redirect]);

  const handleAddClick = () => {
    setRedirect(true);
  };

  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold text-xl text-white leading-tight">
          Education
        </motion.h2>
      }
    >
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg font-semibold">Education Details</motion.h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  >
                <motion.button
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                  onClick={handleAddClick}
                  href={route("education.create")}
                  whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                >
                  Add
                </motion.button>
                </motion.div>
              </motion.div>
              <div className="overflow-x-auto">
                <motion.table
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-center">Mark</th>
                      <th className="py-2 text-center">Major</th>
                      <th className="py-2 text-center">Year Start</th>
                      <th className="py-2 text-center">Year End</th>
                      <th className="py-2 text-center">Last Education</th>
                      <th className="py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.data.map((item, index) => (
                      <motion.tr
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                        key={item.id}
                        className="bg-gray-200">
                        <td className="py-2 text-center">{item.mark}</td>
                        <td className="py-2 text-center">{item.major}</td>
                        <td className="py-2 text-center">{item.year_start}</td>
                        <td className="py-2 text-center">{item.year_end}</td>
                        <td className="py-2 text-center">
                          {item.last_education}
                        </td>
                        <td className="py-2 text-center">
                          <Link href={route("education.edit", { id: item.id })}>
                            <motion.button
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              className="mr-2">
                              <PencilIcon className="h-5 w-5 text-gray-500" />
                            </motion.button>
                          </Link>
                          <Link
                            href={route("education.destroy", { id: item.id })}
                            method="delete"
                          >
                            <motion.button
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                            >
                              <TrashIcon className="h-5 w-5 text-gray-500" />
                            </motion.button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </motion.table>
              </div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex justify-end mt-4">
                <Paginator links={education.links} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
