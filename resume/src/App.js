import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Work from "./pages/Work";
import Skill from "./pages/Skill"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.less";

import { Button } from "antd";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/company" element={<Company />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        
      </main>
      
    </>
  );
}

export default App;
