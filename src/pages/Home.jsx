import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "../components/Swiper";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <>
      <Swiper animals={services}></Swiper>
      <div className="space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Top Rated animals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((animal) => (
              <div
                key={animal.serviceId}
                className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={animal.image}
                  alt={animal.serviceName}
                  className="w-full h-[450px] object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-3">
                  {animal.serviceName}
                </h3>
                <p className="text-green-600 font-medium">${animal.price}</p>
                <p className="text-yellow-500">{animal?.date}</p>
                {/* error */}
                <Link
                  to={`/services/${animal?._id}`}
                  className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/services"
            className="btn bg-linear-to-r from-green-600 to-green-800 py-3 px-4 text-[16px] text-white"
          >
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
