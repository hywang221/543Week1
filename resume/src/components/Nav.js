import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { useSelector } from "react-redux";

import { Button } from "antd";
import styles from './nav.module.less';



function Nav() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.headerRight}>
          <div className={`${styles.headerRightItem} active`}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.headerRightItem}>Skill</div>
          <div className={styles.headerRightItem}>
            <Link to="/company">Company</Link>
          </div>
          <div className={styles.headerRightItem}>Work</div>
          <div className={styles.headerRightItem}>Contact</div>
        </div>
      </header>
    </>
  );
}

export default Nav;
