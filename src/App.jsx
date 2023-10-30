import React from "react";
import { Routes, Route } from "react-router";
import './App.scss'
import Cursor from "./cursor/components/DotRing/DotRing.jsx"
import Landing from "./Pages/Landing";
import { ChangeCursor2 } from "./cursor/hooks/ChangeCursor";

function App() {
  
  return (
    <div className="App">
      <Cursor />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<p>login</p>} />
        <Route exact path="/support" element={<p className="item">Support</p>} />
      </Routes>
    </div>
  );
}

export default App
