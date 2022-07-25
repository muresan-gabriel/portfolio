import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Navbar from "./components/Navbar";

import "./App.css";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [firstVisit, setFirstVisit] = useState(true);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  if (!loaded) {
    return (
      <div className="App">
        <LoadingScreen></LoadingScreen>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  firstVisit={firstVisit}
                  setFirstVisit={setFirstVisit}
                />
              }
              exact
            />
            <Route
              path="/portfolio"
              element={<Portfolio></Portfolio>}
              exact
            ></Route>
            <Route path="/about" element={<About></About>} exact></Route>
            <Route path="/contact" element={<Contact></Contact>} exact></Route>
            <Route
              path="/portfolio/:name"
              element={<ProjectPage></ProjectPage>}
              exact
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
