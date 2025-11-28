import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

import { Button } from "antd";
import styles from  "./home.module.less";

function Home() {
  // const [count, setCount] = useState(0)
  // const count = useSelector((state) => state.counter.value);

  return (
    <>
      {/* <div>{count}</div> */}
      <section className={styles.content}>
        <section className={styles.contentLeft}>
          <div className={styles.avatarWrapper}>
            <img src={new URL(`../images/${"avatar.jpg"}`, import.meta.url).href} className={styles.avatar} />
          </div>
          <div className={styles.avatarInfo}>
            <div>Hongyang Wang</div>
            <div>Front-End Engineer </div>
            <div>+1-312-434-1065</div>
          </div>
        </section>
        <section className={styles.contentRight}>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Skill Introduction</div>
            <div className={styles.detailItemContent}>
              <span>
                Proficient in Modern front-end frameworks, including React,
                VueJs, AngularJs.
              </span>
              {/* <br /> */}
              <span>
                Proficient in front-end build automation tools, including
                Webpack and Vite.
              </span>
              {/* <br /> */}
              <span>Proficient in Node.js, Express, and MongoDB.</span>
              {/* <br /> */}
              <span>
                Proficient in CSS preprocessor technologies: SASS and LESS...
              </span>
            </div>
            <a className={styles.detailMore}>More +</a>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Company Introduction</div>
            <div className={styles.detailItemContent}>
              <span style={{ fontWeight: "bold" }}>JD.com</span>
              {/* <br /> */}
              <span>
                Led 4 front-end developers in completing the design,
                development, and deployment of various technical projects, such
                as form and table visualization and micro-frontend routing
                refactoring.
              </span>
              {/* <br /> */}
              <span>
                Responsible for maintaining and managing the company’s core
                component library, @dada/form.
              </span>
              {/* <br /> */}
              <span>Conducted the first round of interviews...</span>
            </div>
            <a className={styles.detailMore}>More +</a>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Project Experience</div>
            <div className={styles.detailItemContent}>
              <span style={{ fontWeight: "bold" }}>
                Form and Table Visualization
              </span>
              {/* <br /> */}
              <span>12/2020 - 12/2023</span>
              {/* <br /><br /> */}
              <span>
                Management System primarily consists of numerous lists and
                forms. To address this, my company provides a visual
                drag-and-drop editor and a configuration tool developed based on
                Formily framework. These tools help developers quickly build
                forms and list pages in the back-end management framework...
              </span>
            </div>
            <a className={styles.detailMore}>More +</a>
          </div>
        </section>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLeftTitle}>Contact Info</div>
            <div className={styles.footerLeftItem}>
              <span>Phone: +1-312-434-1065</span>
              <span>Email: hwang221@hawk.illinoistech.edu</span>
            </div>
          </div>
          <div className={styles.footerRight}>
            <img className={styles.footerCode} src={new URL(`../images/${"w_code.jpg"}`, import.meta.url).href} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
