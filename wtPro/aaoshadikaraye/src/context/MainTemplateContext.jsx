import { useState, useContext, useEffect, createContext } from 'react';
import React from 'react';
import { useService } from './ServiceDataContext';
const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [bigTemp, setMain] = useState('');
    // useEffect(async () => {
        
    //     const data = JSON.parse(localStorage.getItem('wed'));
    //     if (data) { 
    //         setWedUser(data) }
    // }, [])
    return (
        <MainContext.Provider value={[bigTemp, setMain]}>
            {children}
        </MainContext.Provider>
    );
};

const useMain = () => useContext(MainContext);
export { useMain, MainProvider };
