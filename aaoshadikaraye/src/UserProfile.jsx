import './CSS/lander.css'
import { Link, useNavigate } from 'react-router-dom';
import LogoRing from './Images/icons8-wedding-rings-64.png'
import MenuLogo from './Images/icons8-menu-50.png'
import { useState } from "react";
import { SideMenu } from "./Lander";
import ProfileLogo from './Images/icons8-person-100.png'
import { useAuth } from "./UserContext";
import axios from 'axios';
import Venues from './components';
function UserProfile() {
    const [user, authUser] = useAuth();
    const history = useNavigate();
    async function Logout() {
        const ans = await axios.post('https://aaoshadikaraye.onrender.com/logout');
        authUser(null);
        localStorage.setItem('auth', null);
        history('/login');
    }

    const [SMBDSIZE, setSMBDSIZE] = useState("0px");

    function SideMenuLoader() {
        if (SMBDSIZE === "0px") {
            setSMBDSIZE("200px");
        } else if (SMBDSIZE === "200px") {
            setSMBDSIZE("0px");
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [wid, setWid] = useState("50px");
    return (
        <>
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
                    <button id="MenuBarRes" onClick={SideMenuLoader}><img src={LogoRing} alt="" id="MenuBarResImg" /></button>
                </section>
            </nav>
            <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
            <Venues></Venues>
        </>
    );
}
export default UserProfile;