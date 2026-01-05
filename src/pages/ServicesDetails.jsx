// import React, { useContext, useEffect, useState } from "react";
// import { FaStar, FaWarehouse } from "react-icons/fa";
// import { data, useParams } from "react-router";
// import Loading from "./Loading";
// import { toast } from "react-toastify";
// import { AuthContext } from "../provider/AuthProvider";
// import Services from "./Services";
// import axios from "axios";

// const ServicesDetails = () => {
//   const { serviceId } = useParams();
//   const [animal, setAnimals] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch(`http://localhost:3000/services/${serviceId}`)
//       .then((response) => response.json())
//       .then((servicesData) => {
//         // set the fetched data to state
//         setAnimals(servicesData || null);
//       })
//       .catch((error) => {
//         console.error("Error fetching animal:", error);
//       })
//       .finally(() => {
//         setLoaded(true);
//       });
//   }, [serviceId]);

//   const handleOrder = (e) => {
//     e.preventDefault();
//     const from = e.target;
//     const productName = from.productName.value;
//     const buyerName = from.buyerName.value;
//     const buyerEmail = from.buyerEmail.value;
//     const quantity = parseInt(from.quantity.value);
//     const price = parseInt(from.price.value);
//     const address = from.address.value;
//     const phone = from.phone.value;
//     const additionalNote = from.additionalNote.value;
//     const fromData = {
//       productId: serviceId,
//       productName,
//       buyerName,
//       buyerEmail,
//       quantity,
//       price,
//       address,
//       phone,
//       additionalNote,
//       date: new Date(),
//     };
//     axios
//       .post("http://localhost:3000/orders", fromData)
//       .then((response) => {
//         console.log(fromData);
//         toast.success("Order placed successfully!");
//         // console.log("Order placed:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error placing order:", error);
//       });
//   };

//   if (!loaded) return <Loading />;

//   if (!animal)
//     return (
//       <div className="text-center text-red-500 text-xl mt-10">
//         Servise not found.
//       </div>
//     );

//   // const handleBookConsultation = (e) => {
//   //   e.preventDefault();
//   //   e.target.reset();
//   //   toast.success("Consultation booked successfully!");
//   // };

//   return (
//     <section className="w-11/12 mx-auto my-10 space-y-5">
//       <div>
//         <div className="p-5 bg-gray-100">
//           <div className="md:flex">
//             <div>
//               <img
//                 className="h-[350px] w-[350px] rounded-lg"
//                 src={animal.image}
//                 alt={animal.serviceName}
//               />
//             </div>
//             <div className="ml-[50px]">
//               <div className="md:ml-10">
//                 <h1 className="text-4xl font-bold"> {animal?.serviceName}</h1>
//                 <p className="mt-2 text-xl">
//                   Price:{" "}
//                   <span className="text-[#632EE3] text-2xl">
//                     {animal.price}
//                   </span>
//                 </p>
//               </div>
//               <div className="ml-10 mt-8">
//                 <div className="mt-5 md:mt-0">
//                   {/* <div>
//                     <FaStar className="text-orange-500 h-[50px] w-[50px]" />
//                   </div> */}
                  
//                   <h1 className="font-bold text-5xl"> category:{animal.category}</h1>
//                 </div>
//               </div>
//               <div className="ml-10 mt-8">
//                 <div className="mt-5 md:mt-0">
//                   {/* <div>
//                     <FaWarehouse className="text-green-500 h-[50px] w-[50px]" />
//                   </div> */}
//                   <p>location</p>
//                   <h1 className="font-bold text-5xl">{animal.location}</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold">Description</h1>
//           <p className="text-gray-400 mt-5">{animal.description}</p>
//         </div>
//       </div>
//       {/* Model Stert */}
//       {/* You can open the modal using document.getElementById('ID').showModal() method */}
//       <button
//         className="btn"
//         onClick={() => document.getElementById("my_modal_3").showModal()}
//       >
//         Adapt/Oder
//       </button>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           {/* form copy */}
//           <form
//             onSubmit={handleOrder}
//             className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
//           >
//             <legend className="fieldset-legend"> Order details</legend>

//             <label className="label">Product Name</label>
//             <input
//               readOnly
//               defaultValue={animal?.serviceName}
//               name="productName"
//               type="text"
//               className="input"
//               placeholder="Product Name"
//             />

//             <label className="label">Buyer Name</label>
//             <input
//               defaultValue={user?.displayName}
//               name="buyerName"
//               type="text"
//               className="input"
//               placeholder=" Buyer-Name"
//             />

//             <label className="label">Buyer Email</label>
//             <input
//               readOnly
//               defaultValue={user?.email}
//               name="buyerEmail"
//               type="email"
//               className="input"
//               placeholder="Buyer-Email"
//             />

//             <label className="label">Quantity</label>
//             <input
//               required
//               type="number"
//               name="quantity"
//               className="input"
//               placeholder="Quantity"
//             />

//             <label className="label">Price</label>
//             <input
//               readOnly
//               defaultValue={animal?.price}
//               name="price"
//               type="number"
//               className="input"
//               placeholder="Price"
//             />

//             <label className="label">Address</label>
//             <input
//               type="text"
//               required
//               name="address"
//               className="input"
//               placeholder="Address"
//             />

//             <label className="label">Phone</label>
//             <input
//               name="phone"
//               required
//               type="text"
//               className="input"
//               placeholder="Phone"
//             />

//             <label className="label">Additional Note</label>
//             <textarea
//               type="text"
//               className="input"
//               name="additionalNote"
//               placeholder="Additional Note"
//             />
//             <button type="submit" className="btn btn-primary">
//               Order
//             </button>
//           </form>
//         </div>
//       </dialog>
//     </section>
//   );
// };

// export default ServicesDetails;

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
    fetch(`http://localhost:3000/services/${serviceId}`)
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
      .post("http://localhost:3000/orders", formData)
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
            <h1 className="text-3xl md:text-4xl font-bold">{animal?.serviceName}</h1>
            <p className="mt-2 text-lg md:text-xl">
              Price: <span className="text-[#632EE3] text-xl md:text-2xl">{animal.price}</span>
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
        <p className="text-gray-400 mt-3 md:mt-5 text-sm md:text-base">{animal.description}</p>
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
            <input
              required
              type="text"
              name="phone"
              className="input w-full"
            />

            <label className="label">Additional Note</label>
            <textarea
              name="additionalNote"
              className="input w-full"
            />

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

