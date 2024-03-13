
import { useState } from 'react';
import './CSS/App.css';
import { NavBar, MainDiv, SideMenu } from './Lander';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import TT from './MainPage';
function App() {
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");

  function SideMenuLoader() {
    if (SMBDSIZE === "0px") {
      setSMBDSIZE("200px");
    } else if (SMBDSIZE === "200px") {
      setSMBDSIZE("0px");
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <NavBar onClick={SideMenuLoader}></NavBar>
          <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
          <MainDiv></MainDiv>
        </>} />
        <Route exact path="/MainPage" element={<>
        <TT></TT>
        </>} />
      </Routes>
    </Router>


  );
}

export default App;
