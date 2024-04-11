import { useState, useContext, useEffect, createContext } from 'react';
import React from 'react';
import { useService } from './ServiceDataContext';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [Cart, setCart] = useState('');
    useEffect(async () => {
        const data = JSON.parse(localStorage.getItem('cartData'));
        if (data) { 
            setCart(data) }
    }, [])
    return (
        <CartContext.Provider value={[Cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
