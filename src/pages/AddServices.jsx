import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handeeSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      serviceName: form.name.value,
      category: form.category.value,
      price: form.category.value === "Pets" ? 0 : parseInt(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: user.email,
      providerName: user.displayName,
    };

    try {
      const res = await axios.post(
        "https://backend-10-pink.vercel.app0/services",
        formData,
      );
      toast.success("Product added successfully!");
      // console.log(res.data);
      form.reset();
      setSelectedCategory("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product / Pet</h2>

      <form onSubmit={handeeSubmit} className="space-y-4">
        {/* Product / Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            required
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            min="0"
            value={selectedCategory === "Pets" ? 0 : undefined}
            required={selectedCategory !== "Pets"}
            disabled={selectedCategory === "Pets"}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg resize-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Pick Up Date */}
        <div>
          <label className="block font-semibold mb-1">Pick Up Date</label>
          <input
            type="date"
            name="date"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddServices;
