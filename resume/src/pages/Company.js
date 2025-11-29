import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchCompany } from '../store/slices/companySlice'
import styles from "./company.module.less";

import { Button, Input } from "antd";

function Company() {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch()
  const companyData = useSelector((state) => state?.companyData);

  const onChangeName = (e) => {
    setSearchName(e?.target?.value);
  }

  const onSearch = () => {
    dispatch(searchCompany(searchName));
  }

  const onReset = () => {
    setSearchName("");
    dispatch(searchCompany(""));
  }

  return (
    <>
      <div className={styles.companyWrapper}>
        <h1 className={styles.companyTitle}>Company List</h1>
        <div className={styles.searchWrapper}>
          <Input
            className={styles.searchInp}
            value={searchName}
            onInput={onChangeName}
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
          companyData?.companyList?.length === 0 &&
          <h2>No Search Data</h2>
        }
      </div>
    </>
  );
}

export default Company;
