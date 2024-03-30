import React, { useState } from "react";
import { products } from "../data/Data";

const MovieFilter = ({ onFilterChange, onGenreChange }) => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  const handleGenreChange = (event) => {
    const { value } = event.target;
    setSelectedTitle(value);
    onGenreChange(value);
  };

  return (
    <div class=" shadow border flex flex-col md:flex-row items-center gap-2 py-3">
      <h4 class="px-2">Search:</h4>
      <input
        type="text"
        name="Title"
        class="form-control p-2 shadow border rounded-sm"
        onChange={handleFilterChange}
        placeholder="Search By Title"
      />

      <div class="md:ml-2">
        <select
          value={selectedTitle}
          onChange={handleGenreChange}
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
      <input
        type="number"
        name="Year"
        class="form-control p-2 shadow border rounded-sm"
        onChange={handleFilterChange}
        placeholder="Search By Year"
      />
    </div>
  );
};

export default MovieFilter;
