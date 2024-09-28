import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Data"; // Import your JSON movie data

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Filter out the movie based on the ID from the JSON data
    const selectedMovie = products.find((movie) => movie.id.toString() === id);
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Handle case where movie is not found
  }

  return (
    <div className="flex items-center justify-center m-4">
      <div className="max-w-2xl p-4 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 max-h-60 max-w-60">
            <img
              className="h-full mt-10 w-full object-cover rounded-xl"
              src={movie.Images}
              alt={movie.Title}
            />
            <div className="flex items-center justify-between">
              <a
                href="/"
                className=" mt-6    px-6 py-2 bg-green-600 border border-green-600 rounded-md text-white hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
              >
                Back
              </a>

              <button className="mt-6 ml-2   px-6 py-2 bg-green-600 border border-green-600 rounded-md text-white hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200">
                Download
              </button>
            </div>
          </div>
          <div className="p-4 md:p-8">
            <div className="uppercase tracking-wide text-xl text-red-500 font-semibold">
              {movie.Title}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {movie.Genre}
            </a>
            <div className="mt-4">
              <span className="text-gray-400">Story: </span>
              <p className="text-gray-600">{movie.Plot}</p>
            </div>

            <div className="">
              <span className="text-gray-400">Language: </span>
              <span className="text-gray-600">{movie.Languages}</span>
            </div>
            <div className="">
              <span className="text-gray-400">Released: </span>
              <span className="text-gray-600">{movie.Released}</span>
            </div>

            <div className="">
              <span className="text-gray-400">IMDb Rating: </span>
              <span className="text-gray-600">{movie.imdbRating}</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">Actors: </span>
              <span className="text-gray-600">{movie.Actors}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
