import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState();
  const [category, setCatagory] = useState(service?.category);
  useEffect(() => {
    axios.get(`http://localhost:3000/services/${id}`).then((res) => {
      setService(res.data);
      setCatagory(res.data?.category);
    });
  }, [id]);
  console.log(service);

  const handleUpdate = (e) => {
    e.preventDefault();
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const category = from.category.value;
    const price = parseInt(from.price.value);
    const location = from.location.value;
    const description = from.description.value;
    const image = from.image.value;
    const date = from.date.value;
    const email = from.email.value;
    const fromData = {
      serviceName: name,
      category,
      price,
      location,
      description,
      image,
      date,
      providerName: email, // or something
      createdAT: service?.createdAT,
    };
    console.log(fromData);
    axios
      .put(`http://localhost:3000/update/${id}`, fromData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Listing</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            defaultValue={service?.name}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            value={category}
            name="category"
            onChange={(e) => setCatagory(e.target.validity)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Product">Care Product</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            defaultValue={service?.price}
            type="number"
            name="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            defaultValue={service?.location}
            type="text"
            name="location"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            defaultValue={service?.description}
            name="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows="4"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            defaultValue={service?.image}
            type="url"
            name="image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Pick Up Date */}
        <div>
          <label className="block font-semibold mb-1">Pick Up Date</label>
          <input
            defaultValue={service?.date}
            type="date"
            name="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
