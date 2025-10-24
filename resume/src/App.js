import React from "react";
import "./App.less";

import { Button } from "antd";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="container">
        <header className="header">
          <div className="logo">Logo</div>
          <div className="header-right">
            <div className="header-right-item active">Home</div>
            <div className="header-right-item">Skill</div>
            <div className="header-right-item">Company</div>
            <div className="header-right-item">Work</div>
            <div className="header-right-item">Contact</div>
          </div>
        </header>
        <section className="content">
          <section className="content-left">
            <div className="avatar-wrapper">
              <img src="" className="avatar" />
            </div>
            <div className="avatar-info">
              <div>Hongyang Wang</div>
              <div>Front-End Engineer </div>
              <div>+1-312-434-1065</div>
            </div>
          </section>
          <section className="content-right">
            <div className="detail-item">
              <div className="detail-title">Skill Introduction</div>
              <div className="detail-item-content">
                <span>Proficient in Modern front-end frameworks, including React,
                VueJs, AngularJs.
                </span>
                {/* <br /> */}
                <span>
                Proficient in front-end build automation tools, including
                Webpack and Vite.
                </span>
                {/* <br /> */}
                <span>
                Proficient in Node.js, Express, and MongoDB.
                </span>
                {/* <br /> */}
                <span>
                Proficient in CSS preprocessor technologies: SASS and LESS...
                </span>
              </div>
              <a className="detail-more">More +</a>
            </div>
            <div className="detail-item">
              <div className="detail-title">Company Introduction</div>
              <div className="detail-item-content">
                <span style={{fontWeight: "bold"}}>JD.com</span>
                {/* <br /> */}
                <span>
                  Led 4 front-end developers in completing the design,
                  development, and deployment of various technical projects,
                  such as form and table visualization and micro-frontend
                  routing refactoring.
                  </span>
                  {/* <br /> */}
                  <span>
                  Responsible for maintaining and managing the company’s core
                  component library, @dada/form.
                  </span>
                  {/* <br /> */}
                  <span>
                  Conducted the first round of interviews...
                </span>
              </div>
              <a className="detail-more">More +</a>
            </div>
            <div className="detail-item">
              <div className="detail-title">Project Experience</div>
              <div className="detail-item-content">
                <span style={{fontWeight: "bold"}}>Form and Table Visualization</span>
                {/* <br /> */}
                <span>12/2020 - 12/2023</span>
                {/* <br /><br /> */}
                <span>
                  Management System primarily consists of numerous lists and
                  forms. To address this, my company provides a visual
                  drag-and-drop editor and a configuration tool developed based
                  on Formily framework. These tools help developers quickly
                  build forms and list pages in the back-end management
                  framework...
                </span>
              </div>
              <a className="detail-more">More +</a>
            </div>
          </section>
        </section>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-left-title">Contact Info</div>
              <div className="footer-left-item">
                <span>Phone: +1-312-434-1065</span>
                <span>Email: hwang221@hawk.illinoistech.edu</span>
              </div>
            </div>
            <div className="footer-right">
              <img className="footer-code" src="../img/w_code.jpg" />
            </div>
          </div>
        </footer>
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
