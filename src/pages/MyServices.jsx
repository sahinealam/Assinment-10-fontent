import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";

const MyServices = () => {
  const [myservice, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((servicesData) => {
        setMyServices(servicesData);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, [user?.email]);
  console.log(myservice);
  // delete myservice
  const hadleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)

      .then((res) => {
        console.log(res.data);
        const filterData = myservice.filter((service)=> service._id != id )
        console.log(filterData);
        setMyServices(filterData)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myservice?.map((service) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop</span>
                </td>
                <td>Purple</td>
                <th className="flex p-2 gap-2">
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => hadleDelete(service?._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/update-service/${service?._id}`}>
                    <button className="btn btn-primary btn-xs">Edit</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default MyServices;
