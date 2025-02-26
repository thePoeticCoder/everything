/** @format */
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormType = z.infer<typeof formSchema>;

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
    control,
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
    <div className="flex flex-col items-center justify-center w-[80%] h-full p-4">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-gray-950 font-bold text-center animate-typing overflow-hidden whitespace-nowrap">
        Let's create your account..
      </h1>

      <form
        className="shadow-lg rounded-lg p-6 w-full max-w-md bg-white"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="form-control mb-4">
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-gray-500 text-xs mt-1">{errors.name?.message}</p>
        </div>

        <div className="form-control mb-4">
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-gray-500 text-xs mt-1">{errors.email?.message}</p>
        </div>

        <div className="form-control mb-4">
          <label htmlFor="password" className="block text-lg mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-gray-500 text-xs mt-1">
            {errors.password?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="text-gray-600"
          >
            Reset
          </button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};
