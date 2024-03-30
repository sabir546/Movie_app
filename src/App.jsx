import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import SearchFilter from "./components/Filters/SearchFilter";
import MovieDetails from "./components/CardSection/MovieDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<SearchFilter />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
