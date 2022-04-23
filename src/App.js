import "./App.css";
import Navbar from "./containers/navbar/navbar";
import React from "react";
import Thejourney from "./containers/thejourney/thejourney";
import Team from "./containers/team/team";
import Store from "./containers/store/store";
import Contact from "./containers/contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/the-journey" element={<Thejourney />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<h1>PROFILE</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
