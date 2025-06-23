/** @format */

"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { servicesList } from "@/constant/service-list";

const Services = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredServices = useMemo(() => {
    return servicesList.filter(
      (service) =>
        service.title.toLowerCase().includes(search.toLowerCase()) ||
        service.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen py-20 bg-gray-900 text-white"
          : "min-h-screen py-20 bg-gray-100 text-black"
      }
    >
      <div className="w-[90%] xl:w-[80%] mx-auto text-center">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">🛠️ Our Services</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded hover:shadow"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search services..."
          className="w-full mb-10 p-3 border rounded shadow-sm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => router.push(`/services/${service.id}`)}
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
