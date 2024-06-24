// import { useEffect, useState } from "react";
// import { useAuth } from "../UserContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function PrivateRouter(){
//     const history = useNavigate();
//    // const[ok,setOk] = useState(false);
//     const[user,authUser] = useAuth();
//     useEffect(()=>{
//          const data = axios.get('http://localhost:8080/UserProfile');
//          if(data._id){
//             history('/UserProfile');
//          }
//          else{
//             history('/login')
//          }
//     },[user])
// }