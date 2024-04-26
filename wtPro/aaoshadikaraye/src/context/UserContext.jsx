import { useState,useContext,useEffect,createContext} from 'react';
import React from 'react';
import { useService } from './ServiceDataContext';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, authUser] = useState('');
  const [serviceData,setServiceData] = useService();
  useEffect(async()=>{
   const data =  localStorage.getItem('auth') 
   const Servicedata =  localStorage.getItem('ServiceData') 
   if(Servicedata){
    const parseData = JSON.parse(Servicedata);
    setServiceData(parseData);
   }
   if(data){
    const parseData = JSON.parse(data);
    authUser(parseData);
    
   }
   
   //eslint-disable-next-line
    },[])
  return (
    <AuthContext.Provider value={[user,authUser]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth =()=> useContext(AuthContext);
export {useAuth,AuthProvider};
