import React from "react";
import Header from "./Header";
import LegendPage from "./LegendPage";
import About from "./About";

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path="/legends" element={<LegendPage />}/>
      <Route path="/about" element={<About />}/>

      
      </Routes>
    </div>
  );
}

export default App;
