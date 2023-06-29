import Kampus from "@/Images/Kampus.jpg";
import Icon from "@/Images/wallpaper.jpg";
import { useForm, usePage } from "@inertiajs/react";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Poltek from "@/Images/rename.png";
import {
  AcademicCapIcon,
  ArrowUturnLeftIcon,
  BriefcaseIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function generate({}) {
  const user = usePage().props.auth.user;
  const { education } = usePage().props;
  const { achivement } = usePage().props;
  const { experience } = usePage().props;
  const { organization } = usePage().props;

  const handleGoBack = () => {
    window.history.back();
  };

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const handlePrint = () => {
    window.print();
  };

  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("print");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        document.body.classList.add("print-mode");
        setIsPrinting(true);
      } else {
        document.body.classList.remove("print-mode");
        setIsPrinting(false);
      }
    };

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
      document.body.classList.remove("print-mode");
    };
  }, []);

  return (
    <div className="py-12">
      <motion.div
         initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col items-center justify-center bg-white h-full ${
          isPrinting ? "print-mode" : ""
        }`}
        style={{
          backgroundImage: isPrinting ? `url(${Poltek})` : "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-white w-11/12 sm:w-10/12 md:w-8/12 overflow-hidden ${
            isPrinting ? "shadow-none" : "shadow-lg"
          } sm:rounded-lg p-6`}
        >
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center print:hidden"
              onClick={handleGoBack}
            >
              <ArrowUturnLeftIcon className="h-5 w-5 mr-2" />
              Back
            </motion.button>

            {isPrinting ? null : (
              <div
                className="relative w-full h-16 rounded-t-lg mb-4"
                style={{
                  backgroundImage: `url(${Kampus})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              ></div>
            )}
            <img
              src={Icon}
              alt="Profile Picture"
              className="h-16 w-16 rounded-full bg-gray-200 relative z-10"
            />
            <h2 className="text-center text-xl mt-2">{data.name}</h2>
            <h2 className="text-center text-base text-gray-900 mt-2">
              Teknologi Rekayasa Perangkat Lunak
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center print:hidden"
              onClick={handlePrint}
            >
              <PrinterIcon className="h-5 w-5 mr-2" />
              Print
            </motion.button>
          </div>
        </div>

        <div className="mt-8 md:ml-4 w-11/12 sm:w-10/12 md:w-8/12">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">
              Profile
            </h3>
            <p className="text-sm text-gray-500 mb-4">Personal details</p>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
                  {data.name}
                </dd>
              </div>

              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
                  -
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
                  -
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Major
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
                  -
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8 md:ml-4 w-11/12 sm:w-10/12 md:w-8/12">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 flex items-center">
              <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
              Education
            </h3>
            <div className="p-4">
              {/* Add padding classes here */}
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-center">Mark</th>
                    <th className="py-2 text-center">Major</th>
                    <th className="py-2 text-center">Year Start</th>
                    <th className="py-2 text-center">Year End</th>
                    <th className="py-2 text-center">Last Education</th>
                  </tr>
                </thead>
                <tbody className="w-full max-w-full">
                  {education.map((item) => (
                    <tr key={item.id} className="bg-gray-200">
                      <td className="py-2 text-center">{item.mark}</td>
                      <td className="py-2 text-center">{item.major}</td>
                      <td className="py-2 text-center">{item.year_start}</td>
                      <td className="py-2 text-center">{item.year_end}</td>
                      <td className="py-2 text-center">
                        {item.last_education}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 md:ml-4 w-11/12 sm:w-10/12 md:w-8/12">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 flex items-center">
              <TrophyIcon className="h-6 w-6 text-gray-500 mr-2" />
              Achievement
            </h3>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-center">Position</th>
                    <th className="py-2 text-center">Achivement Date</th>
                    <th className="py-2 text-center">Description</th>
                  </tr>
                </thead>
                <tbody className="w-full max-w-full">
                  {achivement.map((item) => (
                    <tr key={item.id} className="bg-gray-200">
                      <td className="py-2 text-center">{item.position}</td>
                      <td className="py-2 text-center">
                        {item.achivement_date}
                      </td>
                      <td className="py-2 text-center">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-8 md:ml-4 w-11/12 sm:w-10/12 md:w-8/12">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 flex items-center">
              <BriefcaseIcon className="h-6 w-6 text-gray-500 mr-2" />
              Experience
            </h3>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-center">JobDesk</th>
                    <th className="py-2 text-center">Type</th>
                    <th className="py-2 text-center">Year Start</th>
                    <th className="py-2 text-center">Year End</th>
                    <th className="py-2 text-center">Address</th>
                    <th className="py-2 text-center">Company</th>
                    <th className="py-2 text-center">Positions</th>
                  </tr>
                </thead>
                <tbody className="w-full max-w-full">
                  {experience.map((item) => (
                    <tr key={item.id} className="bg-gray-200">
                      <td className="py-2 text-center">{item.jobdesk}</td>
                      <td className="py-2 text-center">{item.type}</td>
                      <td className="py-2 text-center">{item.year_start}</td>
                      <td className="py-2 text-center">{item.year_end}</td>
                      <td className="py-2 text-center">{item.address}</td>
                      <td className="py-2 text-center">{item.company}</td>
                      <td className="py-2 text-center">{item.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-8 md:ml-4 w-11/12 sm:w-10/12 md:w-8/12">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 flex items-center">
              <UserGroupIcon className="h-6 w-6 text-gray-500 mr-2" />
              Organization
            </h3>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-center">Organization Name</th>
                    <th className="py-2 text-center">Year Start</th>
                    <th className="py-2 text-center">Year End</th>
                    <th className="py-2 text-center">Title</th>
                    <th className="py-2 text-center">Experience Description</th>
                  </tr>
                </thead>
                <tbody className="w-full max-w-full">
                  {organization.map((item) => (
                    <tr key={item.id} className="bg-gray-200">
                      <td className="py-2 text-center">
                        {item.name_organization}
                      </td>
                      <td className="py-2 text-center">{item.year_start}</td>
                      <td className="py-2 text-center">{item.year_end}</td>
                      <td className="py-2 text-center">{item.title}</td>
                      <td className="py-2 text-center">
                        {item.description_experience}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
           @media print {
            .print-mode .shadow-lg {
              box-shadow: none;
            }

          .print-mode-table th,
          .print-mode-table td {
            border: 1px solid #000;
          }
        `}
      </style>
    </div>
  );
}
