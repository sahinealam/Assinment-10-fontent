import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../provider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get("http://localhost:3000/orders", { params: { email: user.email } })
      .then((res) => {
        console.log("Fetched orders:", res.data);
        setOrders(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load orders.");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  const downloadPDF = () => {
    if (!orders.length) return alert("No orders to export.");

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("My Orders Report", 14, 22);

    const tableColumn = [
      "#",
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Phone",
      "Date",
    ];

    const tableRows = orders.map((order, index) => [
      index + 1,
      order.productName,
      order.buyerName,
      order.price || "-",
      order.quantity || "-",
      order.address || "-",
      order.phone || "-",
      new Date(order.date).toLocaleDateString(),
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.save("my_orders_report.pdf");
  };

  if (!user?.email)
    return <p className="text-center mt-10">Please log in to view orders.</p>;
  if (loading) return <p className="text-center mt-10">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Serial",
                  "Product Name",
                  "Buyer Name",
                  "Price",
                  "Quantity",
                  "Address",
                  "Phone",
                  "Date",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-2 py-1 text-left text-sm font-medium text-gray-700"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {orders.map((order, index) => (
                <tr key={order._id || index}>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.productName}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.buyerName}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.price || "-"}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.quantity || "-"}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.address || "-"}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {order.phone || "-"}
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-700">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <button onClick={downloadPDF} className="btn btn-primary btn-sm">
              Download Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
