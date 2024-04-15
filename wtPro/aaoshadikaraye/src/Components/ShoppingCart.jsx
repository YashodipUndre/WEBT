import React, { useState,useEffect} from "react";
import './ShoppingCart.css'
import {
  FaRegStar,
  FaBuildingColumns,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import Alerts from "./Alert";
import { useCart } from "../context/CartContext";
const Product = ({ pr, image, price, onRemove,rating,venue }) => {
  return (
    <div className="item">
      <div className="product-image">
        <img src={image} alt={pr} />
      </div>
      <div className="product-info">
        <span className="product-name">{venue}</span>
        <div className="rating">
        <div className={'ratingOG'}>
          <h5>
            <FaRegStar className={'icon'}  />
            {rating}
          </h5>
        </div>
        </div>
      </div>
      <div className="price">{price} INR</div>
      {/* <button className="save-for-later" onClick={onSaveForLater}>
        Save for later
      </button> */}
      <button className="remove" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

const ShoppingCart = () => {
  const[Cart,setCart] = useCart();
  const[tt,sett]  =useState(0);
  
  let finalTotal=()=>{
    try {
      let total = 0;
      Cart?.map(pr=>{
         total=total +pr.price;
      })
      return total;
    } catch (error) {
      console.log(error)
    }
   
  }
  const handleRemove = (id) => {
    const upDated = Cart.filter((p)=>p._id!==id);
    setCart(upDated);
    alert(`${id} Removed`);
    const item=JSON.parse(localStorage.getItem('cartData'))
    localStorage.setItem('cartData',JSON.stringify(item.filter((p)=>p._id!=id)))
  };

  return (
    <>
    <div className="Main-Cart">
    {Cart ?
    <div className="shopping-cart">
      { Cart.map((product) => (
        <Product
          key={product._id}
          pr={product.type}
          image={product.image}
          rating={product.rating}
          price={product.price}
          venue={product.venue}
          // onSaveForLater={() => handleSaveForLater(product)}
          onRemove={() => handleRemove(product._id)}
        />
      ))}
      <div className="sub-total">
        Sub-Total: {finalTotal()}
      </div>
      <button className="checkout">Checkout</button>
    </div>
    :<h5>Noting here</h5>}
    </div></>
  );
};

export default ShoppingCart;