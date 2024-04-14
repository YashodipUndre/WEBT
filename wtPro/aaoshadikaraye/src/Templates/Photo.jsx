import styles from "./photo.module.css";
import LowerSection from "./loweSectionofPhotoCard";
import { NavBar } from "../Lander";
import { SideMenu } from "../Lander";
import { useState } from "react";
const Photo = ({ data }) => {
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
      <section className={styles.mainSection}>
        {data.map((value) => (
          <a className={styles.card} href="#">
            <LowerSection
              key={value.id}
              venue={value.venue}
              rating={value.rating}
              location={value.location}
              type={value.type}
              price={value.Price}
              img={value.image}
            />
          </a>
        ))}
      </section>
    </>
  );
};
export default Photo;
