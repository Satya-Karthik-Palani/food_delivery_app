import React from 'react';
import './CheckoutPage.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckoutPage(props) {
  const navigate = useNavigate()

  const initialFormState = {
    fname: "",
    street: "",
    phone: "",
    credit: 0
  }

  const [formData, setFormData] = useState(initialFormState)
  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onBuyCheckout(formData)
    navigate('/transaction')
  }

  return (

    <div className="checkout_body">
        <div className="checkout_title">
          <h2>Checkout Form</h2>
        </div>
        <div className="d-flex">
          <form action="" method="">
            <label>
              <span className="fname">First Name <span className="required">*</span></span>
              <input type="text" name="fname" onChange={inputChangeHandler} />
            </label>
            <label>
              <span className="lname">Last Name <span className="required">*</span></span>
              <input type="text" name="lname" />
            </label>
            <label>
              <span>Street Address <span className="required">*</span></span>
              <input type="text" name="street" onChange={inputChangeHandler} placeholder="House number and street name" required />
            </label>
            <label>
              <span>&nbsp;</span>
              <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)" />
            </label>
            <label>
              <span>Town / City <span className="required">*</span></span>
              <input type="text" name="city" />
            </label>
            <label>
              <span>State <span className="required">*</span></span>
              <input type="text" name="city" />
            </label>
            <label>
              <span>Postcode / ZIP <span className="required">*</span></span>
              <input type="text" name="city" />
            </label>
            <label>
              <span>Phone <span className="required">*</span></span>
              <input type="tel" name="phone" onChange={inputChangeHandler} />
            </label>
            <label>
              <span>Credit Card Number <span className="required">*</span></span>
              <input type="number" name="credit" onChange={inputChangeHandler} />
            </label>
          </form>
          <div className="Yorder">
            <div>
              <input type="radio" name="dbt" value="dbt" defaultChecked /> Direct Bank Transfer
            </div>
            <p>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            </p>
            <div>
              <input type="radio" name="dbt" value="cd" /> Cash on Delivery
            </div>
            <div>
              <input type="radio" name="dbt" value="cd" /> Paypal <span>
                <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
              </span>
            </div>
            <button type="button" className='checkout_button' onClick={submitHandler}>Place Order</button>
          </div>
        </div>
    </div>
  );
}

export default CheckoutPage;
