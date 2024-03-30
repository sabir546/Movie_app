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

import React, { useState } from "react";
import { products } from "../data/Data";
import MovieCart from "../CardSection/MovieCard";
import MovieFilter from "./MovieFilter";

const SearchFilter = () => {
  const [records, setRecords] = useState(products);

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

  const handleFilterChange = (filters) => {
    Filter(filters);
  };

  const Filters = (Genre) => {
    setRecords(
      products.filter((item) => {
        if (!Genre) return true;
        return item.Genre === Genre;
      })
    );
  };

  const handleGenreChange = (Genre) => {
    Filters(Genre);
  };

  const handleClickMovie = (movie) => {
    // handle movie click
    const selectedMovie = products.find((movie) => movie.id === id);
    setMovie(selectedMovie);
  };

  return (
    <div  style={{ backgroundColor: '#F3F4F6' }} className="p-5  ">
      <MovieFilter
        onFilterChange={handleFilterChange}
        onGenreChange={handleGenreChange}
      />
      <MovieCart records={records} handleClickMovie={handleClickMovie} />
    </div>
  );
};

export default SearchFilter;
