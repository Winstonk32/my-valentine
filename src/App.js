// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnvelopePage from "./pages/EnvelopePage";
import FeelingsPage from "./pages/FeelingsPage";
import ValentinePage from "./pages/ValentinePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/feelings" element={<FeelingsPage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
