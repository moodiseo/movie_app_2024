import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie-detail" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
