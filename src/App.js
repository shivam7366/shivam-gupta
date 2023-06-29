import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/index";
import Projects from "./pages/Projects";
import "./styles/globals.css";
import "./styles/style/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
