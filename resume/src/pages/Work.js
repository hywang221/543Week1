import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onFetchSearch } from '../store/slices/workSlice'
import styles from "./work.module.less";

import { Button, Select, Image, Tag } from "antd";

const frameworkOptions = [
  {value: '', label: 'All'},
  {value: 'React', label: 'React'},
  {value: 'Vue', label: 'Vue'},
  {value: 'Angular', label: 'Angular'},
]

const frameworkColors = {
  React: "#108ee9",
  Vue: "rgba(82, 196, 26, 0.8)",
  Angular: "geekblue",
}

function Work() {
  const [framework, setFramework] = useState("");
  const dispatch = useDispatch()
  const workData = useSelector((state) => state?.workData);

  const onChangeFramework = (value) => {
    setFramework(value);
    dispatch(onFetchSearch(value));
  }

  const onReset = () => {
    setFramework("");
    dispatch(onFetchSearch(""));
  }

  return (
    <>
      <div className={styles.workWrapper}>
        <h1 className={styles.workTitle}>Project List</h1>
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
            <div className={styles.detailTitle}>
              <span>{item?.name}</span>
              <Tag color={frameworkColors[item?.framework]} className={styles.workTag}>{item?.framework}</Tag>
            </div>
            <div className={styles.detailItemContent}>
              <div className={styles.workImg}>
                <Image className={styles.workImg} src={new URL(`../images/${item.imgUrl}`, import.meta.url).href} alt="work image" />
              </div>
              <span className={styles.detailItemTitle}>
                {item?.position}
              </span>
              {item?.describeList?.map((describeItem, describeIndex) => (
                <span key={describeIndex}>{describeItem}</span>
              ))}
              <span className={styles.detailItemTitle}>Technical Highlights</span>
              {item?.technicalList?.map((tnItem, tnIndex) => (
                <span key={tnIndex}>{tnIndex+1}. {tnItem}</span>
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
