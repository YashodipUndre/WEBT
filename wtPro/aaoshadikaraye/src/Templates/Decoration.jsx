import styles from "./photo.module.css";
import LowerSectionPohto from "./loweSectionofPhotoCard";
import { NavBar } from "../Lander";
import { SideMenu } from "../Lander";
import { useState } from "react";
import { useService } from "../context/ServiceDataContext";
import { useCart } from "../context/CartContext";
import SimpleBackdrop from "../Loader";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/UserContext";
import LowerSectionDeco from "./lowerSectionDecoration";
import RightSide from "./rightSideHeadingBar";
const Deco = () => {
  const [user, authUser] = useAuth();
  const [Cart,setCart] = useCart();
  async function TemplateInfo(item){
    if(user){
     setCart([...Cart,item]);
     toast.success("Added Succesfully");
     localStorage.setItem('cartData',JSON.stringify([...Cart,item]));
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
  }
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");
  function SideMenuLoader() {
    if (SMBDSIZE === "0px") {
      setSMBDSIZE("200px");
    } else if (SMBDSIZE === "200px") {
      setSMBDSIZE("0px");
    }
  }
  const [serviceData, setServiceData] = useService();
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
      <section className={styles.mainSection}>
      {serviceData ? serviceData.map((value) => (
          <a className={styles.card} href="#" onClick={(e)=>{e.stopPropagation();TemplateInfo(value)}}>
            <LowerSectionDeco
              key={value.id}
              venue={value.venue}
              rating={value.rating}
              decorationtype={value.decoration_type}
              price={value.price}
              img={value.image}
            />
          </a>
        )): <SimpleBackdrop></SimpleBackdrop>}
      </section>
    </>
  );
};
export default Deco;

