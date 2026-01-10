import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "../components/Swiper";
import { FaDog } from "react-icons/fa";

const categories = [
  { name: "Pets", emoji: <FaDog /> },
  { name: "Food", emoji: "🍖" },
  { name: "Accessories", emoji: "🧸" },
  { name: "Care Product", emoji: "💊" },
];

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      {/* Swiper Section */}
      <Swiper services={services} />

      <div className="space-y-12 px-4 md:px-8 lg:px-16">
        {/* Categories */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category-filtered-product/${encodeURIComponent(
                  category.name
                )}`}
                className="rounded-2xl p-6 shadow hover:shadow-lg transition bg-white flex flex-col items-center justify-center"
              >
                <span className="text-4xl sm:text-5xl">{category.emoji}</span>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Listings */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Recent Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service._id}
                className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-80 object-cover rounded-lg"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3">
                  {service.serviceName}
                </h3>
                <p className="text-green-600 font-medium mt-1">
                  ${service?.price}
                </p>
                <p className="text-yellow-500">{service?.location}</p>
                <Link
                  to={`/services/${service?._id}`}
                  className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm sm:text-base"
                >
                  See Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Show All Button */}
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/services"
            className="bg-gradient-to-r from-green-600 to-green-800 py-3 px-6 text-base sm:text-lg text-white rounded-lg hover:from-green-700 hover:to-green-900 transition"
          >
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
