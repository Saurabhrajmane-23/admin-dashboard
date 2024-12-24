import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    brand: '',
    title: '',
    color: '',
    quantity: '',
    price: '',
    discountedPrice: '',
    discountPercentage: '',
    topLevelCategory: '',
    secondLevelCategory: '',
    thirdLevelCategory: '',
    description: '',
    sizes: {
      S: '',
      M: '',
      L: ''
    }
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSizeChange = (size, quantity) => {
    setFormData(prev => ({
      ...prev,
      sizes: {
        ...prev.sizes,
        [size]: quantity
      }
    }));
  };

  const calculateDiscountedPrice = () => {
    if (formData.price && formData.discountPercentage) {
      const discounted = formData.price - (formData.price * (formData.discountPercentage / 100));
      setFormData(prev => ({
        ...prev,
        discountedPrice: discounted.toFixed(2)
      }));
    }
  };

  const handleDiscountChange = (e) => {
    const { value } = e;
    setFormData(prev => ({
      ...prev,
      discountPercentage: value
    }));
    calculateDiscountedPrice();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.brand.trim()) newErrors.brand = 'Brand is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Add your API call here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-white px-4">
      <div className="w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Add New Product</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.brand && <p className="text-sm text-red-500 mt-1">{errors.brand}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discounted Price</label>
              <input
                type="number"
                name="discountedPrice"
                value={formData.discountedPrice}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Percentage</label>
              <input
                type="number"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleDiscountChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Top Level Category</label>
              <select
                name="topLevelCategory"
                value={formData.topLevelCategory}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Second Level Category</label>
              <select
                name="secondLevelCategory"
                value={formData.secondLevelCategory}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="shoes">Shoes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Third Level Category</label>
              <select
                name="thirdLevelCategory"
                value={formData.thirdLevelCategory}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="dresses">Dresses</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Size Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size S Quantity</label>
                <input
                  type="number"
                  value={formData.sizes.S}
                  onChange={(e) => handleSizeChange('S', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size M Quantity</label>
                <input
                  type="number"
                  value={formData.sizes.M}
                  onChange={(e) => handleSizeChange('M', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size L Quantity</label>
                <input
                  type="number"
                  value={formData.sizes.L}
                  onChange={(e) => handleSizeChange('L', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
