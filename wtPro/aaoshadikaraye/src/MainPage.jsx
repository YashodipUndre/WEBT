import {NavBar} from "./Lander";
import Corousel from "./Components/Corosel";
import VenueSection from "./Components/MainSectionVenuePart";
import MainSection2 from "./Components/MainSection2";
import Makeup from "./Components/MakeupSection";
import Makeupdata from "./store/makeupData";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import PopularVenueSection from "./Components/PopularVenueSection";

function MainPage() {
  const popularVenueData = [
    {
      type: "4 Star and Above Wedding",
      img_link:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png",
    },
    {
      type: "Banquet Halls",
      img_link:
        "https://media.weddingz.in/images/b371f7d462bd846cc817f359c7b8c58f/top-banquet-halls-in-viman-nagar-pune-for-an-easy-breezy-wedding.jpg",
    },
    {
      type: "Lawns / Farmhouses",
      img_link:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/64/lawn-farm-house.jpg",
    },
    {
      type: "3 Star Hotels with Banquet",
      img_link:
        "https://content.r9cdn.net/rimg/himg/e7/5a/de/expediav2-505606-c3e7e0-087792.jpg",
    },
    {
      type: "Country / Farmhouses",
      img_link:
        "https://www.westwoodcountryclub.org/_filelib/ImageGallery/Public_Home/______18-10.1600x900.jpg",
    },
    {
      type: "Wedding Resort",
      img_link:
        "https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1630387551794-PFADBQ27VD6WFWOJLBMI/Temple%2Bbay%2BMahabalipuram%2B%2BTelugu%2BWedding10.jpeg",
    },
    {
      type: "Lounge",
      img_link:
        "https://i.pinimg.com/736x/b1/c9/cc/b1c9cc84ae91aff799dd570821da74dd.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <Corousel />
      <PopularVenueSection data={popularVenueData} />
      <VenueSection />
      <MainSection2 />
      
    </>
  );
}

export default MainPage;
