import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/project/:name" element={<ProjectPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
