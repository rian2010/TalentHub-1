import { Head } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import UpdateProfile from "./Partials/UpdateProfile";
import { motion } from "framer-motion";

export default function Dashboard({ auth, mustVerifyEmail }) {
  return (
    <CompanyDashboardLayout
      user={auth.user}
      header={
        <motion.h2 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-semibold text-xl text-white leading-tight">
          Profile
        </motion.h2>
      }
    >
      <Head title="Dashboard" />

      <motion.div 
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <UpdateProfile mustVerifyEmail={mustVerifyEmail} />
          </div>
        </div>
      </motion.div>
    </CompanyDashboardLayout>
  );
}
