import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import Kampus from "@/Images/Kampus.jpg";
import Icon from "@/Images/wallpaper.jpg";

export default function UpdateProfileTalent(auth, status, mustVerifyEmail) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      nim: "",
      prodi: "",
      address: "",
      phone_number: "",
      skill: "",
      image: "",
    });

  const submit = (e) => {
    e.preventDefault();

    patch(route("talentprofile.update"), data);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="p-7">
                  <form onSubmit={submit}>
                    <div className="space-y-10">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="full-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            value={data.name}
                            type="text"
                            name="full-name"
                            id="full-name"
                            onChange={(e) => setData("name", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="border-b pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.email}
                                type="text"
                                name="email"
                                id="email"
                                onChange={(e) =>
                                  setData("email", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="nim"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              NIM
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.nim}
                                type="text"
                                name="nim"
                                id="nim"
                                onChange={(e) => setData("nim", e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="phone-number"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Phone Number
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.phone_number}
                                type="text"
                                name="phone-number"
                                id="phone-number"
                                onChange={(e) =>
                                  setData("phone_number", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="experience-level"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Study Program
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.prodi}
                                type="text"
                                name="experience-level"
                                id="experience-level"
                                onChange={(e) =>
                                  setData("prodi", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Address
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.address}
                                type="text"
                                name="address"
                                id="address"
                                onChange={(e) =>
                                  setData("address", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          {/* <div className="col-span-full">
                            <label
                              htmlFor="skill"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Skill
                            </label>
                            <div className="mt-2">
                              <input
                                value={data.skill}
                                type="text"
                                name="skill"
                                id="skill"
                                autoComplete="skill"
                                onChange={(e) =>
                                  setData("skill", e.target.value)
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div> */}

                          <div className="col-span-full">
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Description
                            </label>
                            <div className="mt-2">
                              <textarea
                                // value={data.des}
                                id="description"
                                name="description"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                              />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              Write a few sentences about yourself.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {mustVerifyEmail && user.email_verified_at === null && (
                      <div>
                        <p className="text-sm mt-2 text-gray-800">
                          Your email address is unverified.
                          <Link
                            href={route("verification.send")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Click here to re-send the verification email.
                          </Link>
                        </p>

                        {status === "verification-link-sent" && (
                          <div className="mt-2 font-medium text-sm text-green-600">
                            A new verification link has been sent to your email
                            address.
                          </div>
                        )}
                      </div>
                    )}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <Link
                        href={route("home")}
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </Link>
                      <button
                        disabled={processing}
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-white w-full h-64 lg:w-full overflow-hidden shadow-sm sm:rounded-lg">
            <div className="relative">
              <div
                className="absolute top-0 left-0 right-0 h-16 rounded-t-lg"
                style={{
                  backgroundImage: `url(${Kampus})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profileImageInput"
            />
            <label htmlFor="profileImageInput" className="cursor-pointer">
              <img
                src={Icon}
                alt="Profile Picture"
                className="h-16 w-16 rounded-full bg-gray-200 mx-auto mt-7 relative z-10"
              />
            </label>
            <div className="p-4">
              {/* <h2 className="text-center text-xl mt-2">{auth.user.name}</h2> */}
              <h2 className="text-center text-base text-gray-400 mt-2">
                Teknologi Rekayasa Perangkat Lunak
              </h2>
              <div className="flex justify-center">
                <button className="bg-indigo-500 w-11/12 py-1.5 hover:bg-blue-700 text-white font-bold mt-4  rounded">
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
