import Kampus from "@/Images/Kampus.jpg";
import Icon from "@/Images/wallpaper.jpg";
import { useForm, usePage } from "@inertiajs/react";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Poltek from "@/Images/rename.png";

export default function generate(auth) {
  const user = usePage().props.auth.user;
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
      <div
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
            {isPrinting ? null : (
              <div
                className="relative w-full h-16 rounded-t-lg mb-4"
                style={{
                  backgroundImage: `url(${Kampus})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center print:hidden"
              onClick={handlePrint}
            >
              <PrinterIcon className="h-5 w-5 mr-2" />
              Print
            </button>
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
      </div>
      <style>
        {`
          @media print {
            .print-mode .card {
              background-color: transparent;
              box-shadow: none;
            }
          }
        `}
      </style>
    </div>
  );
}