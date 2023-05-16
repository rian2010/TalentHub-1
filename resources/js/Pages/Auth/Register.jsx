import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Poltek from "@/Images/640px-Logo_Politeknik_Negeri_Batam.png";
import PrimaryButton from "@/Components/PrimaryButton";
import Kampus from "@/Images/Kampus.jpg";
import TextInput from "@/Components/TextInput";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nim: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div
            className="flex items-center justify-center h-screen"
            style={{
                backgroundImage: `url(${Kampus})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Head title="Register" />
            <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-boxdark rounded-md shadow-default border border-stroke dark:border-strokedark">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nim/No Telp" />

                        <TextInput
                            id="nim"
                            name="nim"
                            value={data.nim}
                            className="mt-1 block w-full"
                            autoComplete="nim"
                            isFocused={true}
                            onChange={(e) => setData("nim", e.target.value)}
                            required
                        />

                        <InputError message={errors.nim} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="role" className="block text-gray-700">
                            Role:
                        </label>
                        <select
                            id="role"
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                            className="mt-1 block w-full"
                        >
                            <option value="" disabled>
                                Select a role
                            </option>
                            <option value="talent">Talent</option>
                            <option value="company">Company</option>
                        </select>
                        {errors.role && (
                            <div className="text-red-500">{errors.role}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>{" "}
            </div>
        </div>
    );
}