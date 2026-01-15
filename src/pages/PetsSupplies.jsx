import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PetsSupplies = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const url = category
      ? `http://localhost:3000/allservices?category=${(category)}`
      : `http://localhost:3000/allservices`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, [category]);

  return (
    <div className="space-y-12 p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Category Dropdown */}
      <div className="flex justify-center md:justify-start mb-6">
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="select w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Product">Care Product</option>
        </select>
      </div>

      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Top Rated Indoor Pets & Supplies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item._id}
              className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <img
                src={item.image}
                alt={item.serviceName}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover rounded-lg"
              />
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold mt-3">
                {item.serviceName}
              </h3>
              <p className="text-green-600 font-medium mt-1">
                {item.price > 0 ? `$${item.price}` : "Free for Adoption"}
              </p>
              <p className="text-yellow-500 mt-1">{item.category}</p>
              <p className="text-yellow-500 mt-1">{item?.location}</p>
              <Link
                to={`/services/${item._id}`}
                className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm sm:text-base"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PetsSupplies;
