import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
