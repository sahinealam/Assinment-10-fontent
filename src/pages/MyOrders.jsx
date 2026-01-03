import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  //   console.log(myOrders);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Phone</th>
              <th>location</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order?.productName}</td>
                <td>{order?.price}</td>
                <td>{order?.phone}</td>
                <td>{order?.address}</td>
                <td>{order?.quantity}</td>
                <td>
                  {new Date(order?.date).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
