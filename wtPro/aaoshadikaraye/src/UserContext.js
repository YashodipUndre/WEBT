import { useState,useContext,useEffect,createContext} from 'react';
import React from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, authUser] = useState('');
  useEffect(async()=>{
   const data =  localStorage.getItem('auth') 
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
