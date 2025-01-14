import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
