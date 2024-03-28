// FETCHING DATA ASIOS API AND USING FILTER ON IT

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SearchFilter = () => {
//   const [data, setData] = useState([]);
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         setData(res.data);
//         setRecords(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const Filter = (filters) => {
//     setRecords(
//       data.filter((item) => {
//         for (const key in filters) {
//           if (!item[key].toLowerCase().includes(filters[key].toLowerCase())) {
//             return false;
//           }
//         }
//         return true;
//       })
//     );
//   };

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     Filter({ [name]: value });
//   };

//   return (
//     <div className="p-5 bg-light">
//       <div className="bg-white shadow border">
//         <input
//           type="text"
//           name="title"
//           className="form-control"
//           onChange={handleFilterChange}
//           placeholder="Search by title"
//         />

//       </div>
//       <div className=" bg-gray-100 flex justify-center items-center">
//         <div className="max-w-screen-l w-full">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
//             Movie List
//           </h2>

//           <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {records.map((movies) => (
//               <div
//                 key={movies.id}
//                 className="group relative overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105"
//               >
//                 <img
//                   src={movies.url}
//                   alt={movies.imageAlt}
//                   className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {movies.title}
//                   </h3>
//                   <p className="text-sm text-gray-700 mb-2">
//                     {movies.thumbnailUrl}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;
import { useState } from "react";
import { products } from "./data/Data";
import { Link } from "react-router-dom";

const SearchFilter = () => {
  const [records, setRecords] = useState(products);
  const [movie, setmovie] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(""); // Define selectedTitle state variable

  const Filter = (filters) => {
    setRecords(
      products.filter((item) => {
        for (const key in filters) {
          if (!item[key].toLowerCase().includes(filters[key].toLowerCase())) {
            return false;
          }
        }
        return true;
      })
    );
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    Filter({ [name]: value });
  };

  const Filters = (Genre) => {
    setRecords(
      products.filter((item) => {
        if (!Genre) return true; // if no title selected, show all
        return item.Genre === Genre;
      })
    );
  };

  const handleFilterChanges = (event) => {
    const { value } = event.target;
    setSelectedTitle(value);
    Filters(value);
  };

  const handleClickMovie = (movie) => {
    setmovie(movie);
  };

  return (
    <div className="p-5 bg-light">
      <div class="bg-white shadow border flex flex-col md:flex-row items-center gap-2 py-3">
        <h4 class="px-2">Search:</h4>
        {/* <!-- SEARCH BY TITLE INPUT SECTION --> */}
        <input
          type="text"
          name="Title"
          class="form-control p-2 shadow border rounded-sm"
          onChange={handleFilterChange}
          placeholder="Search By Title"
        />

        <div class="md:ml-2">
          {/* <!-- THIS IS GENRE SELECTION SECTION --> */}
          <select
            value={selectedTitle}
            onChange={handleFilterChanges}
            class="form-select bg-white shadow border flex items-center py-2"
          >
            <option value="">Select Genre </option>
            {products.map((item) => (
              <option key={item.id} value={item.Genre}>
                {item.Genre}
              </option>
            ))}
          </select>
        </div>

        <h4 class="px-2 md:ml-2">Search:</h4>
        {/* <!-- SEARCH BY YEAR INPUT SECTION --> */}
        <input
          type="number"
          name="Year"
          class="form-control p-2 shadow border rounded-sm"
          onChange={handleFilterChange}
          placeholder="Search By Year"
        />
      </div>

      <div className=" bg-gray-100 flex justify-center items-center">
        <div className="max-w-screen-l w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
            Movie List
          </h2>

          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {records.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
                <div
                  className="group relative overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105"
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
    </div>
  );
};

export default SearchFilter;
