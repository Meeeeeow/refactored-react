/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductSingle = ({ item }) => {
  const role = localStorage.getItem("role");
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden w-72 h-96 flex flex-col relative">
      <div
        className="w-full h-4/5 bg-cover bg-center mb-2"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-2">${item.price}</p>
        <Link
          to={`/dashboard/products/${item.id}`}
          className="text-blue-400 hover:text-blue-900 mb-3"
        >
          View Details
        </Link>
        {role === "admin" && (
          <div className="my-2">
            <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
              Add
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mr-2">
              Update
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSingle;
