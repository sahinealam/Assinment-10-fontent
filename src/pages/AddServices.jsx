import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import axios from "axios";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handeeSubmit = async (e) => {
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
      providerName: user.displayName,
      email: user.email,
    };

    console.log(fromData);
    try {
      // await addDoc(collection(db, "services"), fromData);
      axios
        .post("http://localhost:3000/services", fromData)
        .then((response) => {
          toast.success("Product added successfully!");
          console.log("Service added:", response.data);
        })
        .catch((error) => {
          console.error("Error adding service:", error);
        });

      e.target.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add service");
    }
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product / Pet</h2>
      <form onSubmit={handeeSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
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
            type="number"
            name="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
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
            name="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows="4"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Pick Up Date */}
        <div>
          <label className="block font-semibold mb-1">Pick Up Date</label>
          <input
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddServices;
