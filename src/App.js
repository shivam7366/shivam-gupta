import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/index";
import Projects from "./pages/Projects";
import "./styles/globals.css";
import "./styles/style/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
