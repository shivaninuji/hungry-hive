import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Login } from "./components/Auth/Login";

import { Register } from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/add-recipes" element={<AddRecipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
