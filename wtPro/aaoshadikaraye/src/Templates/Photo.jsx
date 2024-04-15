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
import LowerSectionPhoto from "./loweSectionofPhotoCard";
const Photo = () => {
  const [user, authUser] = useAuth();
  const [Cart,setCart] = useCart();
  async function TemplateInfo(item){
    if(user){
     setCart([...Cart,item]);
     toast.success("Added Succesfully");
     localStorage.setItem('cartData',JSON.stringify([...Cart,item]));
     const data = {
      'username':user.username,
      'product_id':item._id,
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
  return (
    <>
       <div><Toaster></Toaster></div>
      <NavBar onClick={SideMenuLoader}></NavBar>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
      <section className={styles.mainSection}>
      {serviceData ? serviceData.map((value) => (
          <a className={styles.card} href="#" onClick={(e)=>{e.stopPropagation();TemplateInfo(value)}}>
            <LowerSectionPhoto
              key={value.id}
              venue={value.venue}
              rating={value.rating}
              location={value.location}
              photoType={value.photoType}
              price={value.Price}
              img={value.image}
            />
          </a>
        )): <SimpleBackdrop></SimpleBackdrop>}
      </section>
    </>
  );
};
export default Photo;

