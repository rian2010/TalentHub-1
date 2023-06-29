import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

const product = {
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Cutting-edge Innovation, Unparalleled Quality.",
    "Customer-Centric Approach, Skilled Experts.",
    "Sustainable Practices, Global Reach.",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Landing() {
  const { company } = usePage().props;
  return (
    <div>
      <Head title="Company" />
      <LandingPageLayout>
        <div className="py-12">
          <div className="bg-white">
            <div className="pt-6">
              <nav aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                ></ol>
              </nav>

              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                  <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                </div>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <img
                    src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              </div>

              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <motion.h1 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {company.name}
                  </motion.h1>
                </div>

                {/* Options */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 lg:row-span-3 lg:mt-0">
                  <>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="px-4 sm:px-0">
                      <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-base font-semibold leading-7 text-gray-900">
                        {company.name} Information
                      </motion.h3>
                      <motion.p 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, delay: 0.8 }}
                      className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Company details.
                      </motion.p>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-6 border-t border-gray-100">
                      {company && (
                        <dl className="divide-y divide-gray-100">
                          <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <motion.dt 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="text-sm font-medium leading-6 text-gray-900">
                              Company Name
                            </motion.dt>
                            <motion.dd 
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.8, delay: 1.4 }}
                            className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {company.name}
                            </motion.dd>
                          </motion.div>
                          <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.8, delay: 1.6 }}
                          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <motion.dt 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="text-sm font-medium leading-6 text-gray-900">
                              Address
                            </motion.dt>
                            <motion.dd 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {company.address}
                            </motion.dd>
                          </motion.div>
                          <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 2 }}
                          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <motion.dt 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2 }}
                            className="text-sm font-medium leading-6 text-gray-900">
                              Email address
                            </motion.dt>
                            <motion.dd 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                            className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {company.email}
                            </motion.dd>
                          </motion.div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                        >
                          <Link href={route("vacancydetails")}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1.1 }}
                              type="submit"
                              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              See Vacancy
                            </motion.button>
                          </Link>
                          </motion.div>                          
                        </dl>
                      )}
                    </motion.div>
                  </>
                </motion.div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {company.name} is a leading innovator in
                        [industry/market], delivering exceptional
                        [products/services] to clients worldwide. With a
                        relentless commitment to quality, customer-centricity,
                        and cutting-edge technology, we continuously strive to
                        exceed expectations and revolutionize the way
                        [products/services] are experienced.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Details
                    </h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingPageLayout>
    </div>
  );
}
