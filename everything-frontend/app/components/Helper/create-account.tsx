/** @format */
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Service, servicesList } from "@/constant/service-list";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  skills: z.string().min(1, "Please select a skill"),
  role: z.enum(["Hire a friend", "Get Hired"]),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormType = z.infer<typeof formSchema>;

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const onSubmit = (data: FormType) => {
    console.log("Form Data Submitted:", data);
    alert("Account created successfully!");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 rounded-xl shadow-2xl bg-white p-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          🚀 Create Your Account
        </h2>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Jane Doe"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.name?.message}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="example@email.com"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="9876543210"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.phone?.message}
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            </div>

            {/* Skills */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Skills
              </label>
              <select
                {...register("skills")}
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a skill</option>
                {servicesList.map((service: Service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs mt-1">
                {errors.skills?.message}
              </p>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <select
                {...register("role")}
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Hire a friend">Hire a friend</option>
                <option value="Get Hired">Get Hired</option>
              </select>
              <p className="text-red-500 text-xs mt-1">
                {errors.role?.message}
              </p>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="text-sm text-gray-500 hover:underline"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
