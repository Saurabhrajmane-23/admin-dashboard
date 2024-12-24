import React, { useState } from "react";

const ProductPage = () => {
  // State to store products
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      category: "mens_kurta",
      price: 1499,
      quantity: 100,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Balack Men Regular Mid Rise Black Kurta",
      category: "mens_kurta",
      price: 1999,
      quantity: 100,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      title: "Men Printed Pure Cotton Straight Kurta",
      category: "mens_kurta",
      price: 1499,
      quantity: 100,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50",
      title: "fsdfsdfsdf",
      category: "mens_kurta",
      price: 799,
      quantity: 15,
    },
  ]);

  // Function to handle product deletion
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    console.log("Deleted product with ID:", id);
    // Add backend delete logic here (e.g., API call)
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="py-3 px-4">{product.title}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.price}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(product.id)}
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

export default ProductPage;
