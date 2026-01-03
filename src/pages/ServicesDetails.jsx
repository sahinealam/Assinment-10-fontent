import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaWarehouse } from "react-icons/fa";
import { data, useParams } from "react-router";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import Services from "./Services";
import axios from "axios";

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const [animal, setAnimals] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    fetch(`http://localhost:3000/services/${serviceId}`)
      .then((response) => response.json())
      .then((servicesData) => {
        // set the fetched data to state
        setAnimals(servicesData || null);
      })
      .catch((error) => {
        console.error("Error fetching animal:", error);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [serviceId]);
   
  const handleOrder = (e)=>{
    e.preventDefault();
    const from=e.target;
    const productName= from.productName.value;
    const buyerName= from.buyerName.value;
    const buyerEmail= from.buyerEmail.value;
    const quantity= parseInt(from.quantity.value);
    const price= parseInt(from.price.value);
    const address= from.address.value;
    const phone= from.phone.value;
    const additionalNote= from.additionalNote.value;
    const fromData={
      productId: serviceId,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phone,
      additionalNote,
      date: new Date()
    }
    axios.post('http://localhost:3000/orders', fromData)
    .then((response)=>{
      console.log(fromData)
      toast.success("Order placed successfully!")
      // console.log("Order placed:", response.data);
    })
    .catch((error)=>{
      console.error("Error placing order:", error);
    });
  } 

  if (!loaded) return <Loading />;

  if (!animal)
    return (
      <div className="text-center text-red-500 text-xl mt-10">
       Servise not found.
      </div>
    );

  // const handleBookConsultation = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   toast.success("Consultation booked successfully!");
  // };

  return (
    <section className="w-11/12 mx-auto my-10 space-y-5">
      <div>
        <div className="p-5 bg-gray-100">
          <div className="md:flex">
            <div>
              <img
                className="h-[350px] w-[350px] rounded-lg"
                src={animal.image}
                alt={animal.serviceName}
              />
            </div>
            <div className="ml-[50px]">
              <div className="md:ml-10">
                <h1 className="text-4xl font-bold"> {animal?.serviceName}</h1>
                <p className="mt-2 text-xl">
                  Price:{" "}
                  <span className="text-[#632EE3] text-2xl">
                    {animal.price}
                  </span>
                </p>
              </div>
              <div className="ml-10 mt-8">
                <div className="mt-5 md:mt-0">
                  <div>
                    <FaStar className="text-orange-500 h-[50px] w-[50px]" />
                  </div>
                  <p>Average Ratings</p>
                  <h1 className="font-bold text-5xl">{animal.rating}</h1>
                </div>
              </div>
              <div className="ml-10 mt-8">
                <div className="mt-5 md:mt-0">
                  <div>
                    <FaWarehouse className="text-green-500 h-[50px] w-[50px]" />
                  </div>
                  <p>Available Stock</p>
                  <h1 className="font-bold text-5xl">
                    {animal.availableSlots}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Description</h1>
          <p className="text-gray-400 mt-5">{animal.description}</p>
        </div>
      </div>
      {/* Model Stert */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Adapt/Oder
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* form copy */}
          <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend"> Order details</legend>

            <label className="label">Product Name</label>
            <input
              readOnly
              defaultValue={animal?.serviceName}
              name="productName"
              type="text"
              className="input"
              placeholder="Product Name"
            />

            <label className="label">Buyer Name</label>
            <input
              defaultValue={user?.displayName}
              name="buyerName"
              type="text"
              className="input"
              placeholder=" Buyer-Name"
            />

            <label className="label">Buyer Email</label>
            <input
            readOnly
              defaultValue={user?.email}
              name="buyerEmail"
              type="email"
              className="input"
              placeholder="Buyer-Email"
            />

            <label className="label">Quantity</label>
            <input required type="number" name="quantity" className="input" placeholder="Quantity" />

            <label className="label">Price</label>
            <input  readOnly defaultValue={animal?.price} name="price" type="number" className="input" placeholder="Price" />

            <label className="label">Address</label>
            <input type="text" required name="address" className="input" placeholder="Address" />

            <label className="label">Phone</label>
            <input name="phone" required type="text" className="input" placeholder="Phone" />

            <label className="label">Additional Note</label>
            <textarea
              type="text"
              className="input"
              name="additionalNote"
              placeholder="Additional Note"
            />
            <button type="submit" className="btn btn-primary">
              Order
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ServicesDetails;
