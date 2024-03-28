import React from "react";

import { products } from "./data/Data";
const ProductList = () => {
  return (
    <div className=" bg-gray-100 flex justify-center items-center ">
      <div className="max-w-screen-l w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
          Movie List
        </h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((movies) => (
            <div
              key={movies.id}
              className="group relative overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <img
                src={movies.Images}
                alt={movies.imageAlt}
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {movies.Title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{movies.Year}</p>
                <p className="text-sm font-medium text-gray-800">
                  {movies.Genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
