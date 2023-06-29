import React, { useState } from "react";
import Logo from "@/Images/640px-Logo_Politeknik_Negeri_Batam.png";
import { Head, Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { motion } from "framer-motion";
const Navbar = ({ user, header, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Head title="TalentHub" />
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed top-0 left-0 right-0 z-10">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/">
              <a className="flex items-center">
                <img src={Logo} className="mr-3 h-12 sm:h-10" alt="Poltek" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
                  TalentHub
                </span>
              </a>
            </Link>
            <div className="flex items-center lg:order-2">
              {!user && (
                <>
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.1 }}
                  >
                  <Link href={route("login")}>
                    <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Log in
                    </a>
                  </Link>
                  </motion.div>
                  <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  >
                  <Link href={route("register")}>
                    <a className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      Sign Up
                    </a>
                  </Link>
                  </motion.div>
                </>
              )}
              {user && (
                <>
                  <Link href={route("home")}>
                    <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Dashboard
                    </a>
                  </Link>
                  <Link href={route("profile.edit")}>
                    <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Settings
                    </a>
                  </Link>
                  <Link method="post" href={route("logout")}>
                    <button
                      type="logout"
                      className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      Logout
                    </button>
                  </Link>
                </>
              )}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink href={route("landingpage")}>
                    <a
                      className="block py-2 pl-3 pr-4 lg:p-0 hover:text-primary-700 dark:text-white"
                      active={
                        route().current("landingpage") ? "true" : undefined
                      }
                    >
                      Home
                    </a>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    href={route("vacancydetails")}
                    className="block py-2 pl-3 pr-4 lg:p-0 hover:text-primary-700 dark:text-white"
                    active={
                      route().current("vacancydetails") ? "true" : undefined
                    }
                  >
                    Vacancy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href={route("talentview")}
                    className="block py-2 pl-3 pr-4 lg:p-0 hover:text-primary-700 dark:text-white"
                    active={route().current("talentview") ? "true" : undefined}
                  >
                    Talent
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href={route("company")}
                    className="block py-2 pl-3 pr-4 lg:p-0 hover:text-primary-700 dark:text-white"
                    active={route().current("company") ? "true" : undefined}
                  >
                    Company
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            src="https://talent-hub.id/mhs/upload/profile_picture/logo_biru_sikomagabung2.png"
            className="h-20"
          />
          <p>
            Polibatam Talenthub <br />
            System Information Competency Student
          </p>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
