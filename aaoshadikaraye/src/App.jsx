import "./CSS/App.css";
import { useContext, useEffect, useState } from "react";
import { NavBar, MainDiv, SideMenu } from "./Lander";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import SignUp from "./SignUp";

import Login from "./login";
import UserContext, { useAuth } from "./context/UserContext";
import MainPage from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Venues from "./Venues";
import SimpleBackdrop from "./Loader";
import Cart from "./Cart";
import Photo from "./Templates/Photo";
import Makeups from "./Templates/Makeup";
import Clothing from "./Templates/Clothing";
import Deco from "./Templates/Decoration";
import Food from "./Templates/Food";
import WeddingReg from "./WeddingReg";
import ContactForm from "./Components/Contactus";
function App() {
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");

  function SideMenuLoader() {
    setSMBDSIZE(SMBDSIZE === "0px" ? "200px" : "0px");
  }

  return (
    <Router>
      
      <SideMenu SIZEGETTER={SMBDSIZE} />
      <Routes>
        <Route path="/" element={<MainDiv />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/makeup" element={<Makeups />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/deco" element={<Deco />} />
        <Route path="/food" element={<Food />} />
        <Route path="/weddingReg" element={<WeddingReg />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;