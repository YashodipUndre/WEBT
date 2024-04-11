import { useState,useContext,useEffect,createContext} from 'react';
import React from 'react';
const ServiceDataContext = createContext();

const ServiecDataProvider = ({ children }) => {
  const [serviceData, setServiceData] = useState('');
  return (
    <ServiceDataContext.Provider value={[serviceData,setServiceData]}>
      {children}
    </ServiceDataContext.Provider>
  );
};

const useService =()=> useContext(ServiceDataContext);
export {useService,ServiecDataProvider};
