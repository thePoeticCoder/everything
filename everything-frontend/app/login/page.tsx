"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../components/context/auth-context";

const brandIcon = "/images/brand-icon.webp";

type FormValues = {
  email: string;
  password: string;
  token: string;
};

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password, token } = data;

    if ((!email || !password) && !token) {
      setError("token", {
        type: "manual",
        message: "Enter Email & Password OR a Token",
      });
      return;
    }

    if (
      /^\d{5}$/.test(token) ||
      (email === "test@example.com" && password === "password")
    ) {
      login(token || "12345");
    } else {
      setError("token", {
        type: "manual",
        message: "Invalid credentials or token.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={brandIcon}
            alt="Brand Icon"
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Login to Everything
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: !watch("token") && "Email is required",
            })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: !watch("token") && "Password is required",
            })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <p className="text-center text-gray-500 text-sm">OR</p>

          <input
            type="text"
            placeholder="Enter your favorite five-digit number"
            {...register("token")}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.token && (
            <p className="text-red-500 text-sm">{errors.token.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-white-500 text-black p-2 rounded-lg border-2 border-gray-900 hover:bg-black-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
