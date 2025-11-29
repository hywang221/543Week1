import React from "react";
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import styles from  "./skill.module.less";

import { Button, Tag } from "antd";



function Skill() {
  // const [count, setCount] = useState(0)
  const skillData = useSelector(state => state.skillData);
  const homeData = useSelector(state => state.homeData);
  console.log('skillData', skillData, homeData)

  return (
    <div className={styles.skillWrapper}>
      <h1 className={styles.skillTitle}>Skill List</h1>
      <div className={styles.tagWrapper}>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-react.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="#108ee9" className={styles.tagName}>React</Tag>
        </div>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-vue.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="rgba(82, 196, 26, 0.8)" className={styles.tagName}>Vue</Tag>
        </div>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-angular.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="geekblue" className={styles.tagName}>Angular</Tag>
        </div>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-vite.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="purple" className={styles.tagName}>Vite</Tag>
        </div>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-webpack.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="blue" className={styles.tagName}>Webpack</Tag>
        </div>
        <div className={styles.tagItem}>
          <img className={styles.tagImg} src={new URL(`../images/${"tag-node1.png"}`, import.meta.url).href} alt="skill tag" />
          <Tag color="#87d068" className={styles.tagName}>Node</Tag>
        </div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailItemContent}>
          {
            skillData ? skillData?.skillList?.map((item, index) => (
              <span key={index}>{item.content}</span>
            )) : <div></div>
          }
        </div>
        
        
      </div>
    </div>
  );
}

export default Skill;
