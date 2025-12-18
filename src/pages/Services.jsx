import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.json");
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Top Rated Indoor Animal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.map((serviceItem) => (
            <div
              key={serviceItem.serviceId}
              className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
            >
              <img
                src={serviceItem.image}
                alt={serviceItem.serviceName}
                className="w-full h-[450px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-3">
                {serviceItem.serviceName}
              </h3>
              <p className="text-green-600 font-medium">${serviceItem.price}</p>
              <p className="text-yellow-500">{serviceItem.rating}</p>
              <Link
                to={`/services/${serviceItem.serviceId}`}
                className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
