import React, { useState,useEffect} from "react";
import './ShoppingCart.css'
import {
  FaRegStar,
  FaBuildingColumns,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";
import { useCart } from "../context/CartContext";
import OurPackages from "./OurPackages";
import WeddingCategoriesSection from "./WeddingCategoriesSection";
import axios from "axios";
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
  let total = 0;
  let finalTotal=()=>{
    try {
      
      Cart?.map(pr=>{
         total=total + parseInt(pr.price?pr.price:pr.price_per_plate);
      })
      return total;
    } catch (error) {
      console.log(error)
    }
   
  }
  function PaymentGateWay(){
    if(total!==0){
      toast('Your Order Has Been Placed Succesfully', {
        icon: '👏',
      });
    }
    else{
      toast.error('Add Some Items In The Cart First')
    }
     

  }
  const handleRemove = async(id) => {
    const upDated = Cart.filter((p)=>p._id!==id);
    setCart(upDated);
    toast.success(`Removed Succesfully`);
    const item=JSON.parse(localStorage.getItem('cartData'))
    localStorage.setItem('cartData',JSON.stringify(item.filter((p)=>p._id!=id)))
    console.log(id);
    await axios.delete(`http://localhost:8080/AddToCart/deleteItem/${id}`)
  };

  return (
    <>
    <div><Toaster></Toaster></div>
    <div className="Main-Cart">
    {Cart ?
    <div className="shopping-cart">
      { Cart && Cart?.map((product) => (
        <Product
          key={product._id}
          pr={product.type}
          image={product.image}
          rating={product.rating}
          price={product.price?product.price:product.price_per_plate}
          venue={product.venue}
          // onSaveForLater={() => handleSaveForLater(product)}
          onRemove={() => handleRemove(product._id)}
        />
      ))}
      <div className="sub-total">
        Sub-Total: {finalTotal()}
      </div>
      <button className="checkout" onClick={PaymentGateWay}>Checkout</button >
    </div>
    :<h5>Noting here</h5>}
    </div>
    <WeddingCategoriesSection></WeddingCategoriesSection>
    <OurPackages></OurPackages>

    </>
  );
};

export default ShoppingCart;