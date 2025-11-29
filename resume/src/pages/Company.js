import React from "react";
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";

import { Button } from "antd";



function Company() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state => state?.counter?.value);

  return (
    <>
      Company
      <div>{count}</div>
    </>
  );
}

export default Company;
