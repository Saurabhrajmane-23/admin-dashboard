import React, { useState } from "react";

const AllOrdersPage = () => {
  // State to store orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      price: 1499,
      status: "SHIPPED",
    },
    {
      id: 52,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      price: 7495,
      status: "DELIVERED",
    },
    {
      id: 102,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      price: 8994,
      status: "PLACED",
    },
    {
      id: 103,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      price: 10493,
      status: "CONFIRMED",
    },
  ]);

  // Function to handle deletion of an order
  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    console.log("Deleted order with ID:", id);
  };

  // Function to handle status updates
  const handleUpdateStatus = (id) => {
    console.log("Update status for order ID:", id);
    // Add backend API call logic here for updating the status
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Update</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 px-4">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="py-3 px-4">{order.title}</td>
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.price}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-4 py-2 rounded-full text-white ${
                      order.status === "SHIPPED"
                        ? "bg-blue-500"
                        : order.status === "DELIVERED"
                        ? "bg-green-600"
                        : order.status === "PLACED"
                        ? "bg-teal-500"
                        : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleUpdateStatus(order.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    STATUS
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrdersPage;
