import React from "react";
import Chart from "../Componants/Chart";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats Section */}
      <div className="flex justify-between bg-transparent">
        {/* Box 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg w-[29%] ">
          <h2 className="text-xl font-bold">Shop With Us</h2>
          <p className="text-gray-500">Congratulations</p>
          <h3 className="text-3xl font-bold mt-4">420.8k</h3>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            VIEW SALES
          </button>
        </div>
       
        {/* Box 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg w-[68%] ">
          <h2 className="text-xl font-bold">Monthly Overview</h2>
          <p className="text-gray-500">Total 48.5% growth this month</p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <p className="text-yellow-500 font-bold">Sales</p>
              <p className="font-semibold">245K</p>
            </div>
            <div className="text-center">
              <p className="text-green-500 font-bold">Customers</p>
              <p className="font-semibold">12.5K</p>
            </div>
            <div className="text-center">
              <p className="text-red-500 font-bold">Products</p>
              <p className="font-semibold">1.54K</p>
            </div>
            <div className="text-center">
              <p className="text-blue-500 font-bold">Revenue</p>
              <p className="font-semibold">88K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Sales Analytics</h2>
        <div className="w-full h-[400px]">
          <Chart />
        </div>
      </div>

      {/* Recent Orders and Products Section */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* Recent Orders */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Image</th>
                <th className="py-2">Title</th>
                <th className="py-2">Id</th>
                <th className="py-2">Price</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2"><img src="#" alt="Product" className="w-10 h-10 rounded" /></td>
                <td className="py-2">Men Printed Pure Cotton Straight Kurta</td>
                <td className="py-2">1</td>
                <td className="py-2">1499</td>
                <td className="py-2"><span className="text-green-500">Completed</span></td>
              </tr>
              {/* Repeat rows for dummy data */}
            </tbody>
          </table>
        </div>
        {/* Recent Products */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Products</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Image</th>
                <th className="py-2">Title</th>
                <th className="py-2">Category</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2"><img src="#" alt="Product" className="w-10 h-10 rounded" /></td>
                <td className="py-2">Men Printed Pure Cotton Straight Kurta</td>
                <td className="py-2">mens_kurta</td>
                <td className="py-2">1499</td>
              </tr>
              {/* Repeat rows for dummy data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;