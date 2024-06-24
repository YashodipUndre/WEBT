import {NavBar,SideMenu} from "./Lander";
import Corousel from "./Components/Corosel";
import VenueSection from "./Components/MainSectionVenuePart";
import MainSection2 from "./Components/MainSection2";
import Makeup from "./Components/MakeupSection";
import Makeupdata from "./store/makeupData";
import Gallery from "./Components/Gallery";

import PopularVenueSection from "./Components/PopularVenueSection";
import { useState } from "react";
import WeddingCategoriesSection from "./Components/WeddingCategoriesSection";
import OurPackages from "./Components/OurPackages";
import Footer from "./Templates/footer";
function MainPage() {

  const [SMBDSIZE, setSMBDSIZE] = useState("0px");
  function SideMenuLoader() {
      if (SMBDSIZE === "0px") {
          setSMBDSIZE("200px");
      } else if (SMBDSIZE === "200px") {
          setSMBDSIZE("0px");
      }
  }
  const popularVenueData = [
    {
      type: "4 Star and Above Wedding",
      img_link:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png",
    },
    {
      type: "banquet hall",
      img_link:
        "https://media.weddingz.in/images/b371f7d462bd846cc817f359c7b8c58f/top-banquet-halls-in-viman-nagar-pune-for-an-easy-breezy-wedding.jpg",
    },
    {
      type: "lawns",
      img_link:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/64/lawn-farm-house.jpg",
    },
    {
      type: "3 Star Hotels with Banquet",
      img_link:
        "https://content.r9cdn.net/rimg/himg/e7/5a/de/expediav2-505606-c3e7e0-087792.jpg",
    },
    {
      type: "farmhouse",
      img_link:
        "https://www.westwoodcountryclub.org/_filelib/ImageGallery/Public_Home/______18-10.1600x900.jpg",
    },
    {
      type: "weddingresort",
      img_link:
        "https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1630387551794-PFADBQ27VD6WFWOJLBMI/Temple%2Bbay%2BMahabalipuram%2B%2BTelugu%2BWedding10.jpeg",
    },
    {
      type: "lounge",
      img_link:
        "https://i.pinimg.com/736x/b1/c9/cc/b1c9cc84ae91aff799dd570821da74dd.jpg",
    },
  ];

  return (
    <>
      <NavBar onClick={SideMenuLoader}></NavBar>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
      <Corousel />
      <PopularVenueSection data={popularVenueData} />
      <WeddingCategoriesSection/>
      <OurPackages/>
      <VenueSection />
      <MainSection2 />
      <Footer></Footer>
    </>
  );
}

export default MainPage;
