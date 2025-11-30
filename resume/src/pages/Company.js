import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onFetchSearch } from '../store/slices/companySlice'
import styles from "./company.module.less";

import { Button, Input, Image } from "antd";

function Company() {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch()
  const companyData = useSelector((state) => state?.companyData);

  const onChangeName = (e) => {
    setSearchName(e?.target?.value);
  }

  const onSearch = () => {
    dispatch(onFetchSearch(searchName));
  }

  const onReset = () => {
    setSearchName("");
    dispatch(onFetchSearch(""));
  }

  return (
    <>
      <div className={styles.companyWrapper}>
        <h1 className={styles.companyTitle}>Company List</h1>
        <div className={styles.searchWrapper}>
          <Input
            className={styles.searchInp}
            value={searchName}
            onChange={onChangeName}
            placeholder="Please enter the company name"
          />
          <Button type="primary" className={styles.searchBtn} onClick={onSearch}>
            Search Name
          </Button>
          <Button className={styles.searchBtn} onClick={onReset}>
            Reset
          </Button>
        </div>
        {companyData?.companyList?.map((item, index) => (
          <div className={styles.detailItem} key={index}>
            <div className={styles.detailTitle}>{item?.name}</div>
            <div className={styles.detailItemContent}>
              <img className={styles.companyImg} src={new URL(`../images/${item.imgUrl}`, import.meta.url).href} alt="company" />
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
          companyData?.companyList?.length === 0 &&
          <h2>No Search Data</h2>
        }
      </div>
    </>
  );
}

export default Company;
