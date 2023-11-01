import React from 'react'
import { Link } from "react-router-dom";
import './TransactionPage.css'
export default function TransactionPage(props) {
    const {data}=props;
  return (
    <div className="transactionPage">
        <div className="heading1"><h2>Transaction Status</h2></div>
        <h2>Payment Successful:)</h2>
        <h3> Name : {data.fname}</h3>
        <h3>Order ID : {Math.random()}</h3>
        <h3>Address : {data.street}</h3>
        <h3>Credit Card Number : {data.credit}</h3>
        <h3>Mobile Number : {data.phone}</h3><br />
        <Link to="/" className="shop_btn2">Continue Ordering</Link>
    </div>
  )
}
