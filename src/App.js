import "./App.css";
import Navbar from "./containers/navbar/navbar";
import React from "react";
import Thejourney from "./containers/thejourney/thejourney";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/the-journey" element={<Thejourney />} />
          <Route path="/contact" element={<h1>CONTACT</h1>} />
          <Route path="/team" element={<h1>TEAM</h1>} />
          <Route path="/store" element={<h1>STORE</h1>} />
          <Route path="/profile" element={<h1>PROFILE</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
