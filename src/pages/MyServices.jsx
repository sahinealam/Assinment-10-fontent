import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaWarehouse } from "react-icons/fa";
import { useParams } from "react-router";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data || null);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [serviceId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      productId: serviceId,
      productName: form.productName.value,
      buyerName: form.buyerName.value,
      buyerEmail: form.buyerEmail.value,
      quantity: parseInt(form.quantity.value),
      price: parseInt(form.price.value),
      address: form.address.value,
      phone: form.phone.value,
      additionalNote: form.additionalNote.value,
      date: new Date(),
    };

    axios
      .post("http://localhost:3000/orders", orderData)
      .then(() => {
        toast.success("Order placed successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  if (!loaded) return <Loading />;

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Service not found.
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto my-10 space-y-5">
      <div className="p-5 bg-gray-100">
        <div className="md:flex">
          <img
            className="h-[350px] w-[350px] rounded-lg"
            src={service.image}
            alt={service.serviceName}
          />

          <div className="ml-[50px] md:ml-10">
            <h1 className="text-4xl font-bold">{service.serviceName}</h1>

            <p className="mt-2 text-xl">
              Price:
              <span className="text-[#632EE3] text-2xl ml-2">
                {service.price}
              </span>
            </p>

            <div className="flex gap-10 mt-8">
              <div>
                <FaStar className="text-orange-500 h-[50px] w-[50px]" />
                <p>Average Ratings</p>
                <h1 className="font-bold text-5xl">{service.rating}</h1>
              </div>

              <div>
                <FaWarehouse className="text-green-500 h-[50px] w-[50px]" />
                <p>Available Stock</p>
                <h1 className="font-bold text-5xl">{service.availableSlots}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold">Description</h1>
        <p className="text-gray-400 mt-5">{service.description}</p>
      </div>

      {/* Modal */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Adopt / Order
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form
            onSubmit={handleOrder}
            className="fieldset bg-base-200 rounded-box w-full border p-4"
          >
            <legend className="fieldset-legend">Order Details</legend>

            <label className="label">Product Name</label>
            <input
              readOnly
              defaultValue={service.serviceName}
              name="productName"
              className="input"
            />

            <label className="label">Buyer Name</label>
            <input
              defaultValue={user?.displayName}
              name="buyerName"
              className="input"
            />

            <label className="label">Buyer Email</label>
            <input
              readOnly
              defaultValue={user?.email}
              name="buyerEmail"
              className="input"
            />

            <label className="label">Quantity</label>
            <input required type="number" name="quantity" className="input" />

            <label className="label">Price</label>
            <input
              readOnly
              defaultValue={service?.price}
              name="price"
              className="input"
            />

            <label className="label">Address</label>
            <input required name="address" className="input" />

            <label className="label">Phone</label>
            <input required name="phone" className="input" />

            <label className="label">Additional Note</label>
            <textarea name="additionalNote" className="input" />

            <button type="submit" className="btn btn-primary mt-3">
              Order
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ServicesDetails;
