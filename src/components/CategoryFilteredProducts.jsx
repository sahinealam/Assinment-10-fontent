import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Encode the category name to handle spaces
        const encodedCategory = encodeURIComponent(categoryName);
        const res = await fetch(
          `http://localhost:3000/services?category=${encodedCategory}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // Optional frontend case-insensitive filter (in case backend is strict)
        const filteredData = data.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() === categoryName.toLowerCase()
        );

        console.log("Fetched products:", filteredData);
        setProducts(filteredData);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        {categoryName} Listings
      </h2>

      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={product.image}
                  alt={product.serviceName}
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-3">
                  {product.serviceName}
                </h3>
                <p className="text-green-600 font-medium">${product.price}</p>
                <p className="text-yellow-500">{product.location}</p>
                <Link
                  to={`/services/${product._id}`}
                  className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  See Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">
              No products found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilteredProducts;
