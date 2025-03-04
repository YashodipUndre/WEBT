import "./CSS/App.css";
import { useContext, useEffect, useState } from "react";
import { NavBar, MainDiv, SideMenu } from "./Lander";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import SignUp from "./SignUp";

import Login from "./login";
import UserContext, { useAuth } from "./context/UserContext";
import MainPage from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue from "./Templates/venue";
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
  const [auth, userAuth] = useAuth();
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");

  function SideMenuLoader() {
    if (SMBDSIZE === "0px") {
      setSMBDSIZE("200px");
    } else if (SMBDSIZE === "200px") {
      setSMBDSIZE("0px");
    }
  }
  const [frData, setFormData] = useState("");
  function FormData(formData) {
    setFormData(formData);
  }

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <NavBar onClick={SideMenuLoader}></NavBar>
              <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
              <MainDiv></MainDiv>
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp></SignUp>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login></Login>
            </>
          }
        />
        <Route
          path="/MainPage"
          element={
            <>
              <MainPage></MainPage>
            </>
          }
        />
        <Route
          path="/Venues"
          element={
            <>
              <Venue></Venue>
            </>
          }
        />
        <Route
          path="/Photo"
          element={
            <>
              <Photo></Photo>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart></Cart>
            </>
          }
        />
         <Route
          path="/makeup"
          element={
            <>
              <Makeups></Makeups>
            </>
          }
        />
         <Route
          path="/clothing"
          element={
            <>
              <Clothing></Clothing>
            </>
          }
        />
         <Route
          path="/deco"
          element={
            <>
              <Deco></Deco>
            </>
          }
        />
        <Route
          path="/food"
          element={
            <>
              <Food></Food>
            </>
          }
        />
           <Route
          path="/weddingReg"
          element={
            <>
              <WeddingReg></WeddingReg>
            </>
          }
        />
        <Route
          path="/ContactForm"
          element={
            <>
              <ContactForm></ContactForm>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;