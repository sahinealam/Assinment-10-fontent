import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to  backend server .");
        setLoading(false);
      });
  }, []);

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
      order.price,
      order.quantity,
      order.address,
      order.phone,
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

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
     

      {/* Responsive table wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Product Name</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Buyer Name</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Quantity</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Address</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Phone</th>
              <th className="px-2 py-1 text-left text-sm font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-2 py-1 text-sm text-gray-700">{index + 1}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.productName}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.buyerName}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.price}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.quantity}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.address}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{order.phone}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{new Date(order.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Download button add*/}
         <br />
      <div className="flex justify-end mb-2">
        <button
          onClick={downloadPDF}
          className="btn btn-primary btn-sm"
        >
          Download Report
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default MyOrders;



