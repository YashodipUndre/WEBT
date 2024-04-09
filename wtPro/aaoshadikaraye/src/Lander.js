import "./CSS/lander.css";
import LogoRing from "./Images/icons8-wedding-rings-64.png";
import MenuLogo from "./Images/icons8-menu-50.png";
import { useState } from "react";
import backgroundImg from "./Images/center-point-events-03.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfileLogo from "./Images/icons8-person-100.png";
import { useAuth } from "./UserContext";
import axios from "axios";
import SrImage from './Images/icons8-search-24.png'
import SearchBar from "./Components/SearchBar";
import './CSS/SearchBar.css';
import LogoRingPink from "./Images/icons8-wedding-rings-64.png";
import cross from './Images/icons8-cross-50.png'
function NavBar({ onClick }) {
  const [SearchData, setSearchData] = useState();
  async function TextChanged(e) {
    try {
      const ans = await axios.get('http://localhost:8080/Search/All');
      const FinalData = ans.data.filter((a) => {
        return (
          e.target.value && a && a.venue.toLowerCase().includes(e.target.value))
      })
      setSearchData(FinalData);
    }
    catch (error) {
      console.log(error);
    }
    //  console.log(e.target.value);
  }
  const [srbar, setsrbar] = useState(false);
  function ch(st) {
    setsrbar(st);
  }
  function searchBar() {
    if (srbar) {
      setsrbar(false);
    }
    else {
      setsrbar(true);
    }
  }
  const [user, authUser] = useAuth();

  function Opening() {
    onClick();
  }
  const [wid, setWid] = useState("50px");

  const history = useNavigate();
  async function Logout() {
    const ans = await axios.post("http://localhost:8080/logout");
    authUser(null);
    localStorage.setItem("auth", null);
    //history('/MainPage');
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // window.addEventListener("load",()=>{
  //     setWid("50px")
  // })
  function closed(e) {
    e.stopPropagation();
    setsrbar(false)
  }
  return (
    <>
      <nav className="hor-navbar">
        <section className="left-side">
          <div className="logo-box">
            <img className="logo" src={LogoRing} style={{ width: wid }} />
            <h1>
              <span>A</span>ao<span>S</span>haadi<span>K</span>araye
            </h1>
          </div>
        </section>

        <section className="right-side">
          <a href="/MainPage">Home</a>
          <a href="">Stories</a>
          <a href="">AboutUs</a>
          <a href="">Contact</a>
        </section>
        <section className="end-side">
          <div className="search-br">
            <button id="sr" onClick={searchBar}>Search <img src={SrImage}></img></button>
          </div>

          {!user && (
            <>
              <Link id={"ll"} to={"/SignUp"}>
                <button>Sign-Up</button>
              </Link>
              <button id="MenuBarRes" onClick={Opening}>
                <img src={MenuLogo} alt="" id="MenuBarResImg" />
              </button>
            </>
          )}
          {user && (
            <>

              <div className="profile" onClick={toggleDropdown}>
                <img src={ProfileLogo} alt="Profile" />
                {isOpen && (
                  <ul className="dr">
                    <li>Hi,{user.username}</li>
                    <li>Current Status</li>
                    <li>Bookings</li>
                    <li>
                      <button onClick={Logout} id="LogOutBt">
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <button id="MenuBarRes" onClick={Opening}>
                <img src={MenuLogo} alt="" id="MenuBarResImg" />
              </button>
            </>
          )}
        </section>
      </nav>
      {
        srbar && (<>
          <div className='Main'>
            <div className='ScMain'><img src={cross} alt="" onClick={closed} /></div>
            <div className="search-bar-container">
              <div className="SrAndic">

              <div className='frDiv'><img src={LogoRingPink} alt="" /></div>

              <input
                type="text"
                className="search-bar"
                placeholder="Search for vendors, ideas, real wedding stories and more!"
                onChange={TextChanged}
              />
              </div>
              <div className="FrResult">
              <div className="results-list">
              {SearchData && SearchData.map((data)=>{
                return(
                  <div
                className="search-result"
              > 
                 <img src={data.image}></img>
                {data.venue}
              </div>
                )
              })
              }
            </div>
            </div>
            </div>
            
          </div>

        </>)
      }
    </>
  );
}
function SideMenu({ SIZEGETTER }) {
  return (
    <div className="MenuBar SideMeny" id="SMB" style={{ width: SIZEGETTER }}>
      <a href="/MainPage">
        <button>Home</button>
      </a>
      <a>
        <button>Stroies</button>
      </a>
      <a>
        <button>ConstactUs</button>
      </a>
      <a>
        <button>AboutUs</button>
      </a>
    </div>
  );
}
function MainDiv() {
  return (
    <div className="MainD" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="Text">
        <h1>Shadi Karni He</h1>
        <h2>Ajao Kara Denge</h2>
      </div>
      <button>
        <Link
          to={"/MainPage"}
          style={{ textDecoration: "None", color: "black" }}
        >
          Get Started
        </Link>
      </button>
    </div>
  );
}
export { NavBar, MainDiv, SideMenu };
