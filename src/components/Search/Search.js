import React, { useState } from 'react'
import './Search.css'
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Search(props) {
    const { countCartItems,onAdd, data } = props;
    const [flag, setFlag] = useState(null);
    const [SearchInput, setSearchInput] = useState('');
    const handleChange = event => {
        setSearchInput(event.target.value);
    };
    const [requireditem, setrequireditem] = useState(null);
    const clicked = () => {
        console.log(SearchInput.toLowerCase);
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() === SearchInput.toLowerCase()) {
                setrequireditem(data[i]);
                setFlag(true);
                break;
            }
            else{
                setFlag(false);
            }
        }
    };
    const rating = {
        size: 20,
        count: 5,
        color: "grey",
        activeColor: "orange",
        value: 4.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <FontAwesomeIcon icon={faStar} />,
        halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        filledIcon: <FontAwesomeIcon icon={faStar} />
    }
    return (
        <div className="search-bar">
            <div className="search-container">
                <input type="text" id="search" name="search" placeholder="Search for yummy items(Ex:Dosa,khan biriyani..etc)" className="search-input" onChange={handleChange} />
                <button className="search-btn" for="search" onClick={clicked}>Search</button>
                <Link to="/viewcart" className="searchpage-cart">
                    View Cart ....{'  '}
                    {countCartItems?(
                        <button className="cartitemscount">{countCartItems}</button>
                    ):""}
                </Link>
            </div>
            {flag && <div className="requiredfooditemblock">
                <div className="fooditem-required"><div className="fooditemblock">
                    <div className="fooditemimagepart">
                        <img src={requireditem.img} alt="" />
                        <span className="discount-part" style={{ fontSize: "14px" }}>
                            {(((requireditem.mrp - requireditem.price) / requireditem.mrp) * 100).toFixed(1)}<br />Off
                        </span>
                    </div>
                    <div className="description">
                        <p>{requireditem.description}</p>
                    </div>
                    <div className="fooditemdetailspart">
                        <h3>{requireditem.name}</h3>
                        <div style={{ display: "none" }}>
                            {rating.value = requireditem.rating}
                        </div>
                        <div className="stars"><ReactStars {...rating} /></div>
                        <div className="price"> Rs {requireditem.price}/- <span> Rs {requireditem.mrp}/- </span> </div>
                        <Link to="/checkoutpage" className="buynow_btn">Order Now</Link><br />
                        <button className="addToCart_btn" onClick={(e) => onAdd(e, requireditem)}>Add To Cart</button>
                    </div>
                </div></div>
            </div>}
            {flag===false && <div><center><h3>No Results</h3></center></div>}
        </div>
    )
}
