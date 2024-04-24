import { useState, useContext, useEffect, createContext } from 'react';
import React from 'react';
import { useService } from './ServiceDataContext';
const WeddingContext = createContext();

const WeddingProvider = ({ children }) => {
    const [weduser, setWedUser] = useState('');
    useEffect(async () => {
        
        const data = JSON.parse(localStorage.getItem('wed'));
        if (data) { 
            setWedUser(data) }
    }, [])
    return (
        <WeddingContext.Provider value={[weduser, setWedUser]}>
            {children}
        </WeddingContext.Provider>
    );
};

const useWedding = () => useContext(WeddingContext);
export { useWedding, WeddingProvider };
