import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  if (!loaded) {
    return (
      <div className="App">
        <LoadingScreen />
        {setTimeout(() => {
          document.getElementById("loadingScreen").classList.add("fadeOut");
        }, 1300)}
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/projects" element={<Portfolio />} exact />
            <Route path="/services" element={<Services />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/project/:name" element={<ProjectPage />} exact />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
