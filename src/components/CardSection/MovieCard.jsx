import React from "react";
import { Link } from "react-router-dom";

const MovieCart = ({ records, handleClickMovie }) => {
  return (
    <div className=" bg-gray-100 flex justify-center items-center">
      <div className="max-w-screen-l w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Movie List
        </h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
          {records.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
              <div
                className="group relative object-cover rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105"
                onClick={() => handleClickMovie(movie)}
              >
                <img
                  src={movie.Images}
                  alt={movie.imageAlt}
                  className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg text-center  font-semibold text-red-500 mb-2">
                    {movie.Title}
                  </h3>
                  <p className="text-sm text-gray-800 mb-1 flex ">
                    <h2 className="font-bold text-center text-x">
                      Release Date:
                    </h2>
                    {movie.Year}
                  </p>
                  <p className="text-sm font-medium text-gray-800 flex ">
                    <h2 className="font-bold text-center  text-x">
                      Category:
                    </h2>
                    {movie.Genre}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
