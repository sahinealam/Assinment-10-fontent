import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);

    axios
      .get("https://backend-10-pink.vercel.app/my-services", {
        params: { email: user.email },
      })
      .then((res) => {
        // console.log("Fetched services:", res.data);
        setMyServices(res.data);
        setError("");
      })
      .catch((err) => {
        // console.error(err);
        setError("Failed to load services");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    axios
      .delete(`https://backend-10-pink.vercel.app/delete/${id}`)
      .then(() => {
        setMyServices(myServices.filter((service) => service._id !== id));
      })
      // .catch((err) => console.error(err));
  };

  if (loading) return <p className="text-center mt-10">Loading services...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Services</h2>

      {myServices.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myServices.map((service, index) => (
                <tr key={service._id}>
                  <th>{index + 1}</th>
                  <td>{service.serviceName}</td>
                  <td>{service.category}</td>
                  <td>{service.price}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </button>

                    <Link to={`/update-service/${service._id}`}>
                      <button className="btn btn-primary btn-xs">Edit</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyServices;
