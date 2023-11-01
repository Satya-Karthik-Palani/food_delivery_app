import React from 'react'
import './ViewCart.css'
import {Link} from "react-router-dom";
import CartItem from '../CartItem/CartItem'
export default function ViewCart(props) {
  const { onEmptyCart,onRemove, onAdd, cartItems } = props;
  var total=0;
  return (
    <div>
      <div className="navbar">
                <div className="heading"><h2>Cart Items : </h2></div>
                <button className="empty-btn" onClick={onEmptyCart}>Empty Cart items</button>
            </div>
      <div>
        {cartItems.length === 0 && <div><center><h3>The cart is empty</h3></center></div>}
      </div>
      <div className="CartItems">
        {cartItems.map((item) => (
          <CartItem item={item} onAdd={onAdd} onRemove={onRemove} />
        ))}
        {cartItems.length !== 0 && <div><center><h2>Bill : </h2></center></div>}
        {cartItems.map((item) => (
            <div className="bill">
              {item.qty} x Rs.{item.price.toFixed(2)} = Rs.{(item.qty)*(item.price)}
              <div style={{ display: "none" }}>
                {total=total+(item.qty)*(item.price)}
              </div>
            </div>
        ))}
        {cartItems.length !== 0 && <div><center>{"Grand Total"} = {total}</center><center><Link to="/checkoutpage" className="buynow_btn2">Order Now</Link><br/></center></div>}
      </div>
    </div>
  )
}
