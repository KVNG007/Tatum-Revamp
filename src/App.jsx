import React, { useState } from "react";
import { Routes, Route } from "react-router";
import './App.scss'
import Cursor from "./cursor/components/DotRing/DotRing.jsx"
import Dropdown from "./Components/Dropdown/Dropdown.jsx";
import Landing from "./Pages/Landing";
import { ChangeCursor2 } from "./cursor/hooks/ChangeCursor";

function App() {

  const [ toggle, setToggle] = useState(false);

  const toggleShow = () => {
    setToggle(!toggle);
  }
  
  return (
    <div className="App">
      <Cursor />
      <Dropdown toggle={toggle} toggleShow={toggleShow} />

      <Routes>
        <Route exact path="/" element={<Landing toggle={toggle} toggleShow={toggleShow} />} />
        <Route exact path="/login" element={<p>login</p>} />
        <Route exact path="/support" element={<p className="item">Support</p>} />
      </Routes>

    </div>
  );
}

export default App
