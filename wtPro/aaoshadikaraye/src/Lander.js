import './CSS/lander.css'
import LogoRing from './Images/icons8-wedding-rings-64.png'
import MenuLogo from './Images/icons8-menu-50.png'
import { useState } from 'react'
import backgroundImg from './Images/center-point-events-03.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ProfileLogo from './Images/icons8-person-100.png'
import { useAuth } from "./UserContext";
import axios from 'axios';
function NavBar({ onClick}) {
    const [user, authUser] = useAuth();
   
    function Opening() {
        onClick();
    }
    const [wid, setWid] = useState("50px");

    const history = useNavigate();
    async function Logout() {
        const ans = await axios.post('http://localhost:8080/logout');
        authUser(null);
        localStorage.setItem('auth', null);
        history('/MainPage');
    }

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // window.addEventListener("load",()=>{
    //     setWid("50px")
    // })
    // window.addEventListener("focus",()=>{
    //     setWid("50px")
    // })
    return (
        <nav class="hor-navbar">
            <section class="left-side">
                <div class="logo-box">
                    <img class="logo" src={LogoRing} style={{ width: wid }} />
                    <h1><span>A</span>ao<span>S</span>haadi<span>K</span>araaye</h1>
                </div>

            </section>

            <section class="right-side">
                <a href="">Home</a>
                <a href="">Stories</a>
                <a href="">AboutUs</a>
                <a href="">Contact</a>
            </section>
            <section class="end-side">
                {
                    !user && (
                        <>
                            <button><Link id={'ll'} to={'/SignUp'}>Sign-Up</Link></button>
                            <button id="MenuBarRes" onClick={Opening}><img src={MenuLogo} alt="" id="MenuBarResImg" /></button>
                        </>
                    )
                }
                {user && (
                    <>
                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                            <button id="sr">Search</button>
                        </div>
                        <div className="profile" onClick={toggleDropdown}>
                            <img src={ProfileLogo} alt="Profile" />
                            {isOpen && (
                                <ul className="dr">
                                    <li>Hi,{user.username}</li>
                                    <li>Current Status</li>
                                    <li>Bookings</li>
                                    <li><button onClick={Logout}>Logout</button></li>
                                </ul>
                            )}
                        </div>
                        <button id="MenuBarRes" onClick={Opening}><img src={MenuLogo} alt="" id="MenuBarResImg" /></button>
                    </>
                )
                }

            </section>
        </nav>
    );
}
function SideMenu({ SIZEGETTER }) {
    return (<div class="MenuBar SideMeny" id="SMB" style={{ width: SIZEGETTER }}>
        <button>Home</button>
        <button>Services</button>
        <button>AboutUs</button>
        <button>Contact</button>
    </div>);
}
function MainDiv() {
    return (<div class="Main" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div class="Text">
            <h1>Shadi Karni He</h1>
            <h2>Ajao Kara Denge</h2>
        </div>
        <button><Link to={'/MainPage'} style={{ textDecoration: "None", color: "black" }}>Get Started</Link></button>
    </div>);
}
export { NavBar, MainDiv, SideMenu };