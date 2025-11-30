import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button } from "antd";
import styles from  "./home.module.less";

function Home() {
  // const [count, setCount] = useState(0)
  const homeData = useSelector((state) => state.homeData);
  console.log('homeData', homeData)

  return (
    <>
      {/* <div>{count}</div> */}
      <section className={styles.content}>
        <section className={styles.contentLeft}>
          <div className={styles.avatarWrapper}>
            <img src={new URL(`../images/${homeData.avatarUrl}`, import.meta.url).href} className={styles.avatar} />
          </div>
          <div className={styles.avatarInfo}>
            <div>{homeData.name}</div>
            <div>{homeData.position}</div>
            <div>{homeData.phone}</div>
          </div>
        </section>
        <section className={styles.contentRight}>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Skill Introduction</div>
            <div className={styles.detailItemContent}>
              {
                homeData?.skillDetailList?.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              }
              
            </div>
            <Link to="/skill" className={styles.detailMore}>More +</Link>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Company Introduction</div>
            <div className={styles.detailItemContent}>
              <span className={styles.detailItemTitle}>{homeData?.companyName}</span>
              {
                homeData?.companyDetailList?.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              }
            </div>
            <Link to="/company" className={styles.detailMore}>More +</Link>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailTitle}>Project Experience</div>
            <div className={styles.detailItemContent}>
              <span className={styles.detailItemTitle}>
                {homeData?.projectTitle}
              </span>
              {/* <br /> */}
              <span>{homeData.projectDate}</span>
              {/* <br /><br /> */}
              <span>
                {
                homeData?.projectDetailList?.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              }
              </span>
            </div>
            <Link to="/work" className={styles.detailMore}>More +</Link>
          </div>
        </section>
      </section>
      {/* <footer className={styles.footer}>
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
      </footer> */}
    </>
  );
}

export default Home;
