import React, { useState, useEffect } from 'react';
import { Avatar, Badge } from 'antd';
import { useCart } from '../context/CartContext';
import cartImg from '../Images/icons8-cart-50.png'
function YourComponent() {
    const [Cart, setCart] = useCart();
    const [updateFlag, setUpdateFlag] = useState(true);
    useEffect(() => {
        if (updateFlag) {
            setCart(JSON.parse(localStorage.getItem('cartData')))   
            setUpdateFlag(false);
        }
    }, [Cart,updateFlag]); // Ensure re-render when Cart state changes

    return (
        <Badge count={Cart ? Cart.length : 0} offset={[10, 10]}><img src={cartImg} id="cart"></img></Badge>
    );
}
export default YourComponent;
