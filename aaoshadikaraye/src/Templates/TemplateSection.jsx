import styles from "./template.module.css";
import LowerSection from "./loweSectionofCard";
import { useService } from "../context/ServiceDataContext";
import { NavBar } from "../Lander";
import { useState } from "react";
import { SideMenu } from "../Lander";
import SimpleBackdrop from "../Loader";
import { useCart } from "../context/CartContext";
const Template = () => {
  const [Cart,setCart] = useCart();
  function TemplateInfo(item){
     setCart([...Cart,item]);
     localStorage.setItem('cartData',JSON.stringify([...Cart,item]));
     
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
  return (
    <>
      <NavBar onClick={SideMenuLoader}></NavBar>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
      <section className={styles.mainSection} >
       
        {serviceData ? serviceData.map((value) => (
          <a className={styles.card} href="#" onClick={(e)=>{e.stopPropagation();TemplateInfo(value)}}>
            <LowerSection
              key={value._id}
              venue={value.venue}
              rating={value.rating}
              location={value.location}
              type={value.type}
              veg={value.vegPrice}
              nonVeg={value.nonVegPrice}
              img = {value.image}
            />
          </a>
        )): <SimpleBackdrop></SimpleBackdrop>}
      </section>
    </>
  );
};
export default Template;
