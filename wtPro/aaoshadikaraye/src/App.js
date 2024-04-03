import "./CSS/App.css"
import { useContext, useEffect, useState } from 'react';
import { NavBar, MainDiv, SideMenu } from './Lander';
import { BrowserRouter as Router, Route, Routes, Switch, } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './login';
import UserContext, { useAuth } from './UserContext';
import instance from './Cokkies';
import axios from 'axios';
import Home from './Home';
import MainPage from './MainPage';
import "bootstrap/dist/css/bootstrap.min.css";
import Venues from "./Venues";
function App() {
  const [auth,userAuth] = useAuth();
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");

  function SideMenuLoader() {
    if (SMBDSIZE === "0px") {
      setSMBDSIZE("200px");
    } else if (SMBDSIZE === "200px") {
      setSMBDSIZE("0px");
    }
  }
  const [frData ,setFormData] = useState('');
function FormData(formData){
       setFormData(formData);
}

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <NavBar onClick={SideMenuLoader}></NavBar>
          <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
          <MainDiv></MainDiv>
        </>} />
        <Route  path="/SignUp" element={<>
        <SignUp></SignUp>
        </>} />
        <Route path="/login" element={<>
        <Login ></Login>
        </>} />
        <Route  path="/MainPage" element={<>
        <MainPage></MainPage>
        </>} />
        <Route  path="/Venues" element={<>
        <Venues></Venues>
        </>} />
      </Routes>
    </Router>
  );
        }

export default App;
