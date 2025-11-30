import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onFetchSearch } from '../store/slices/workSlice'
import styles from "./work.module.less";

import { Button, Select } from "antd";

const frameworkOptions = [
  {value: '', label: 'All'},
  {value: 'react', label: 'React'},
  {value: 'vue', label: 'Vue'},
  {value: 'angular', label: 'Angular'},
]

function Work() {
  const [framework, setFramework] = useState("");
  const dispatch = useDispatch()
  const workData = useSelector((state) => state?.workData);

  const onChangeFramework = (value) => {
    console.log('value', value)
    setFramework(value);
    dispatch(onFetchSearch(value));
  }

  const onReset = () => {
    setFramework("");
    dispatch(onFetchSearch(""));
  }

  return (
    <>
      <div className={styles.companyWrapper}>
        <h1 className={styles.companyTitle}>Work List</h1>
        <div className={styles.searchWrapper}>
          <Select
            className={styles.selectItem}
            value={framework}
            onChange={onChangeFramework}
            options={frameworkOptions}
            placeholder="Please select the framework"
          />
          <Button className={styles.searchBtn} onClick={onReset}>
            Reset
          </Button>
        </div>
        {workData?.workList?.map((item, index) => (
          <div className={styles.detailItem} key={index}>
            <div className={styles.detailTitle}>{item?.name}</div>
            <div className={styles.detailItemContent}>
              <img className={styles.companyImg} src={new URL(`../images/${"company1.jpeg"}`, import.meta.url).href} alt="company" />
              <span className={styles.detailItemTitle}>
                {item?.position}
              </span>
              {item?.describeList?.map((describeItem, describeIndex) => (
                <span key={describeIndex}>{describeItem}</span>
              ))}
            </div>
          </div>
        ))}
        {
          workData?.workList?.length === 0 &&
          <h2>No Search Data</h2>
        }
      </div>
    </>
  );
}

export default Work;
