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
        {/* <header className="header">
          <div className="logo">Logo</div>
          <div className="header-right">
            <div className="header-right-item active">Home</div>
            <div className="header-right-item">Skill</div>
            <div className="header-right-item">
              <Link to="/company">Company</Link>
            </div>
            <div className="header-right-item">Work</div>
            <div className="header-right-item">Contact</div>
          </div>
        </header> */}
        
      </main>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
