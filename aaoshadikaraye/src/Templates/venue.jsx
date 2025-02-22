import styles from "./template.module.css";
import LowerSection from "./loweSectionofCard";
import { useService } from "../context/ServiceDataContext";
import { NavBar } from "../Lander";
import { useState } from "react";
import { SideMenu } from "../Lander";
import SimpleBackdrop from "../Loader";
import { useCart } from "../context/CartContext";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "../context/UserContext";
import axios from "axios";
import RightSide from "./rightSideHeadingBar";
import { useMain } from "../context/MainTemplateContext";
import { useNavigate } from "react-router-dom";
import { useWedding } from "../context/weddingContext";
const Template = () => {
  const[user,authUser] = useAuth();
  const [Cart,setCart] = useCart();
  const [bigTemp, setMain] = useState('');
  const[weduser,setWedUser] = useWedding();
  const history = useNavigate();
  async function TemplateInfo(item){
   
    if(user){
    toast.success("Added Succesfully");
     setCart([...Cart,item]);
     localStorage.setItem('cartData',JSON.stringify([...Cart,item]));
    }
    const data = {
      'username':user.username,
      'product_code':item._id,
      'type':item.type
     }
     try {
        await axios.post('http://localhost:8080/AddToCart/item',data);

     } catch (error) {
      console.log(error)
     }
  }
  const [serviceData,setServiceData] = useService([]);
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");
  function SideMenuLoader() {
      if (SMBDSIZE === "0px") {
          setSMBDSIZE("200px");
      } else if (SMBDSIZE === "200px") {
          setSMBDSIZE("0px");
      }
  }
  function onFilterChange(items){
    if(items.city=='' && items.price==''){
      const Servicedata =  localStorage.getItem('ServiceData') 
 if(Servicedata){
  const parseData = JSON.parse(Servicedata);
  setServiceData(parseData);
 }
    }
    else{
      if(items.city==='' && items.price!==''){
        let Servicedata =  localStorage.getItem('ServiceData') 
        Servicedata = JSON.parse(Servicedata);
        console.log(items.city)
        const data = Servicedata?.filter((item)=>{
          return(
           item.price===items.price
          )
        })
        setServiceData(data)
      }
      else if(items.city!=='' && items.price===''){
        let Servicedata =  localStorage.getItem('ServiceData') 
        Servicedata = JSON.parse(Servicedata);
        console.log(items.city)
        const data = Servicedata?.filter((item)=>{
          return(
            item.location && item.location.toLowerCase().includes(items.city.toLowerCase())
          )
        })
        setServiceData(data)
      }
      else{
      let Servicedata =  localStorage.getItem('ServiceData') 
      Servicedata = JSON.parse(Servicedata);
      console.log(items.city)
      const data = Servicedata?.filter((item)=>{
        return(
          item.location && item.location.toLowerCase().includes(items.city.toLowerCase()) && item.price===items.price
        )
      })
      setServiceData(data)
    }
    }
    
}
  return (
    <>
       <div><Toaster></Toaster></div>
      <NavBar onClick={SideMenuLoader}></NavBar>
      <RightSide onFilterChange={onFilterChange}></RightSide>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
      <section className={styles.mainSection} >
       
        {Array.isArray(serviceData) ? serviceData.map((value) => (
          <a className={styles.card} href="#" >
            <LowerSection
              key={value._id}
              venue={value.venue}
              rating={value.rating}
              location={value.location}
              type={value.type}
              price = {value.price}
              img = {value.image}
              venuetype={value.venueType}
            />
            {user && weduser ?<button id={styles.AddToCart} onClick={(e)=>{e.stopPropagation();TemplateInfo(value)}}>AddToCart</button>:<></>}
            
          </a>
        )): <SimpleBackdrop></SimpleBackdrop>}
      </section>
    </>
  );
};
export default Template;