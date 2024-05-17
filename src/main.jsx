import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import MoonLight from "./moonLight/MoonLight.jsx";
import Dracula from "./dracula/Dracula.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/moonlight" element={<MoonLight />}></Route>
        <Route path="/dracula" element={<Dracula />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
