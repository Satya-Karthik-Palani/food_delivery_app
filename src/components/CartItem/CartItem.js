import React from 'react'
import './CartItem.css'
import ReactStars from "react-rating-stars-component";
import {  faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CartItem(props) {
    const { item, onAdd, onRemove } = props;
    const rating ={
        size:20,
        count:5,
        color:"grey",
        activeColor:"orange",
        value:3.5,
        a11y:true,
        isHalf:true,
        emptyIcon:<FontAwesomeIcon icon={faStar}/>,
        halfIcon:<FontAwesomeIcon icon={faStarHalfStroke}/>,
        filledIcon:<FontAwesomeIcon icon={faStar}/>
    }
    return (
        <div>
            <center>
                <div className="cart-item">
                    <div className="cartitemimagepart">
                        <img src={item.img} alt="" />
                    </div>
                    <span className="discount" style={{ fontSize: "14px" }}>
                            {(((item.mrp - item.price) / item.mrp) * 100).toFixed(1)}<br />Off
                    </span>
                    <div className="cartitemdescription">
                        <p>{item.description}</p>
                    </div>
                    <div className="cartitemdetailspart">
                        <h3>{item.name}</h3>
                        <div className="stars"><ReactStars {...rating} /></div>
                        <div className="price"> Rs {item.price}/- <span> Rs {item.mrp}/- </span> </div>
                        <div className="Buttons">
                            QTY : 
                            <button className="remove" onClick={() =>onRemove(item)}>-</button>
                            {item.qty}
                            <button className="add" onClick={(e) =>onAdd(e,item)}>+</button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}
