import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import { Button } from "antd";
import styles from "./footer.module.less";

function Footer() {
  

  return (
    <>
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
            <img
              className={styles.footerCode}
              src={new URL(`../images/${"w_code.jpg"}`, import.meta.url).href}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
