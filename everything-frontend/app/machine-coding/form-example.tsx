/** @format */
"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  channel: z.string().nonempty("Channel is required"),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  phoneNo: z.number(),
  social: z.object({
    twitter: z.string().optional(),
    facebook: z.string().optional(),
  }),
  phoneNumbers: z.array(z.string()),
  phNumbers: z.array(
    z.object({
      number: z.string(),
    })
  ),
});

type FormType = z.infer<typeof formSchema>;

export const CombinedForm = () => {
  const form = useForm<FormType>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "marvel",
      dob: new Date().toISOString().split("T")[0],
      phoneNo: 1234567890,
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },
    resolver: zodResolver(formSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,
    trigger,
    getValues,
    setValue,
    watch,
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const { errors, isDirty } = formState;

  const onSubmit = (data: FormType) => {
    console.log("Submitted data:", data);
  };

  const onError = (errors: any) => {
    console.log("Form errors:", errors);
  };

  const handleGetValues = () => {
    console.log("Form values:", getValues());
  };

  const handleSetValue = () => {
    setValue("channel", "Updated Channel Value");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md space-y-6"
      >
        {/* Username */}
        <div className="space-y-2">
          <label htmlFor="username" className="block font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              validate: {
                notAdmin: (fieldValue) =>
                  fieldValue !== "admin@example.com" ||
                  "Please use a different email",
                notBlackListed: (fieldValue) =>
                  !fieldValue.endsWith("abc.com") || "Domain not supported",
                emailAvailable: async (fieldValue) => {
                  const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await res.json();
                  return data.length === 0 || "Email already exists";
                },
              },
            })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Channel */}
        <div className="space-y-2">
          <label htmlFor="channel" className="block font-semibold">
            Channel
          </label>
          <input
            type="text"
            id="channel"
            {...register("channel")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.channel?.message}</p>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label htmlFor="dob" className="block font-semibold">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            {...register("dob")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>
        </div>

        {/* Phone No */}
        <div className="space-y-2">
          <label htmlFor="phoneNo" className="block font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNo"
            {...register("phoneNo", { valueAsNumber: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.phoneNo?.message}</p>
        </div>

        {/* Twitter */}
        <div className="space-y-2">
          <label htmlFor="twitter" className="block font-semibold">
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter")}
            disabled
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
          <p className="text-red-500 text-sm">
            {errors.social?.twitter?.message}
          </p>
        </div>

        {/* Facebook */}
        <div className="space-y-2">
          <label htmlFor="facebook" className="block font-semibold">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              disabled: watch("channel") === "",
            })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">
            {errors.social?.facebook?.message}
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="space-y-2">
          <label className="block font-semibold">Primary Phone</label>
          <input
            type="text"
            {...register("phoneNumbers.0")}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <label className="block font-semibold">Secondary Phone</label>
          <input
            type="text"
            {...register("phoneNumbers.1")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Dynamic Phone Numbers */}
        <div className="space-y-4">
          <label className="block font-semibold">
            List of Phone Numbers (Dynamic)
          </label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <input
                type="text"
                {...register(`phNumbers.${index}.number` as const)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-white bg-red-500 hover:bg-red-600 p-2 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ number: "" })}
            className="text-white bg-green-500 hover:bg-green-600 p-2 rounded w-full"
          >
            Add Phone Number
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <button
            type="submit"
            disabled={!isDirty}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => trigger()}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
          >
            Trigger Validation
          </button>
          <button
            type="button"
            onClick={handleGetValues}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
          >
            Get Values
          </button>
          <button
            type="button"
            onClick={handleSetValue}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded"
          >
            Set Channel Value
          </button>
        </div>
      </form>
    </div>
  );
};
