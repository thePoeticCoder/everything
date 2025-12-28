export const progressBarCode = `
import React from "react";

type Props = {
  total: number;
  start: number;
  middle: number;
};

const ProgressBar = ({ total, start, middle }: Props) => {
  const startPercentage = (start / total) * 100;
  const middlePercentage = (middle / total) * 100;
  const endPercentage = 100 - startPercentage - middlePercentage;

  return (
    <div className="w-[360px] bg-gray-300 rounded-full h-6 overflow-hidden">
      <div className="flex h-full w-full">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: \`\${startPercentage}%\` }}
        />
        <div
          className="bg-yellow-500 h-full transition-all duration-500"
          style={{ width: \`\${middlePercentage}%\` }}
        />
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: \`\${endPercentage}%\` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
`;

export const reactHookFormCode = `
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const ReactHookFormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[360px] space-y-4 border p-4 rounded"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="border w-full px-2 py-1 rounded"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          className="border w-full px-2 py-1 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          className="border w-full px-2 py-1 rounded"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ReactHookFormExample;
`;
