import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import SearchFilter from "./components/Filters/SearchFilter";
import MovieDetails from "./components/CardSection/MovieDetails";
// import MovieCart from "./components/CardSection/MovieCard";
// import { ThemeProvider } from './components/Nav/DarkAndLightMode/ThemContext';


function App() {
  return (
    // <ThemeProvider>
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
    // </ThemeProvider>
  );
}

export default App;
