import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import { Button } from "antd";
import styles from "./nav.module.less";

function Nav() {
  const [navIndex, setNavIndex] = useState(1);

  const onSelectNav = (index) => {
    setNavIndex(index);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={new URL(`../images/${"resume-logo2.png"}`, import.meta.url).href} className={styles.logoImg} alt="logo" />
        </div>
        <div className={styles.headerRight}>
          <div
            className={`${styles.headerRightItem} ${
              navIndex === 1 ? styles.active : ""
            }`}
            onClick={onSelectNav.bind(this, 1)}
          >
            <Link to="/">Home</Link>
          </div>
          <div className={`${styles.headerRightItem} ${
              navIndex === 2 ? styles.active : ""
            }`}
            onClick={onSelectNav.bind(this, 2)}>
            <Link to="/company">Skill</Link>
          </div>
          <div className={`${styles.headerRightItem} ${
              navIndex === 3 ? styles.active : ""
            }`}
            onClick={onSelectNav.bind(this, 3)}>
            <Link to="/company">Company</Link>
          </div>
          <div className={`${styles.headerRightItem} ${
              navIndex === 4 ? styles.active : ""
            }`}
            onClick={onSelectNav.bind(this, 4)}>
            <Link to="/company">Work</Link>
          </div>
          <div className={`${styles.headerRightItem} ${
              navIndex === 5 ? styles.active : ""
            }`}
            onClick={onSelectNav.bind(this, 5)}>
            <Link to="/company">Contact</Link>
          </div>
          <div className={styles.animation}></div>
          <div className={styles.animationShadow}></div>
        </div>
      </header>
    </>
  );
}

export default Nav;
