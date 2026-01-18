import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthProvider";

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const [animal, setAnimals] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://backend-10-pink.vercel.app0/services/${serviceId}`)
      .then((response) => response.json())
      .then((servicesData) => {
        setAnimals(servicesData || null);
      })
      .catch((error) => {
        console.error("Error fetching animal:", error);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [serviceId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const additionalNote = form.additionalNote.value;

    const formData = {
      productId: serviceId,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phone,
      additionalNote,
      date: new Date(),
    };

    axios
      .post("https://backend-10-pink.vercel.app0/orders", formData)
      .then(() => {
        toast.success("Order placed successfully!");
        form.reset();
        document.getElementById("my_modal_3").close();
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        toast.error("Failed to place order!");
      });
  };

  if (!loaded) return <Loading />;

  if (!animal)
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Service not found.
      </div>
    );

  return (
    <section className="w-11/12 mx-auto my-10 space-y-5">
      {/* Service Details */}
      <div className="p-5 bg-gray-100 rounded-lg">
        <div className="flex flex-col md:flex-row md:gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            <img
              className="h-64 w-full max-w-xs md:h-80 md:w-80 rounded-lg object-cover"
              src={animal.image}
              alt={animal.serviceName}
            />
          </div>

          <div className="mt-5 md:mt-0 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              {animal?.serviceName}
            </h1>
            <p className="mt-2 text-lg md:text-xl">
              Price:{" "}
              <span className="text-[#632EE3] text-xl md:text-2xl">
                {animal.price}
              </span>
            </p>

            <div className="mt-5">
              <h2 className="text-lg md:text-2xl font-semibold">Category:</h2>
              <p className="text-xl md:text-3xl font-bold">{animal.category}</p>
            </div>

            <div className="mt-5">
              <h2 className="text-lg md:text-2xl font-semibold">Location:</h2>
              <p className="text-xl md:text-3xl font-bold">{animal.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-5">
        <h1 className="text-2xl md:text-4xl font-bold">Description</h1>
        <p className="text-gray-400 mt-3 md:mt-5 text-sm md:text-base">
          {animal.description}
        </p>
      </div>

      {/* Order Button */}
      <button
        className="btn mt-5 w-full md:w-auto"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Adapt/Order
      </button>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-md max-h-[90vh] overflow-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleOrder} className="space-y-3 p-2">
            <h2 className="text-lg font-bold mb-2">Order Details</h2>

            <label className="label">Product Name</label>
            <input
              readOnly
              defaultValue={animal?.serviceName}
              name="productName"
              type="text"
              className="input w-full"
            />

            <label className="label">Buyer Name</label>
            <input
              defaultValue={user?.displayName || ""}
              name="buyerName"
              type="text"
              className="input w-full"
              required
            />

            <label className="label">Buyer Email</label>
            <input
              readOnly
              defaultValue={user?.email || ""}
              name="buyerEmail"
              type="email"
              className="input w-full"
            />

            <label className="label">Quantity</label>
            <input
              required
              type="number"
              name="quantity"
              className="input w-full"
              min="1"
            />

            <label className="label">Price</label>
            <input
              readOnly
              defaultValue={animal?.price}
              name="price"
              type="number"
              className="input w-full"
            />

            <label className="label">Address</label>
            <input
              required
              type="text"
              name="address"
              className="input w-full"
            />

            <label className="label">Phone</label>
            <input required type="text" name="phone" className="input w-full" />

            <label className="label">Additional Note</label>
            <textarea name="additionalNote" className="input w-full" />

            <button type="submit" className="btn btn-primary w-full">
              Order
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ServicesDetails;
