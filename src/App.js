import { Routes, Route, HashRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./pages/index";
import Projects from "./pages/Projects";
import "./styles/globals.css";
import "./styles/style/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="project" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
