import './CSS/lander.css'
import LogoRing from './Images/icons8-wedding-rings-64.png'
import MenuLogo from './Images/icons8-menu-50.png'
import { useState } from 'react'
import backgroundImg from './Images/center-point-events-03.png'
import { Link } from 'react-router-dom'
function NavBar({onClick}){

    function Opening(){
        onClick();
    }
    const [wid ,setWid] = useState("50px");
    // window.addEventListener("load",()=>{
    //     setWid("50px")
    // })
    // window.addEventListener("focus",()=>{
    //     setWid("50px")
    // })
    return(
        <nav class="hor-navbar">
        <section class="left-side">
            <div class="logo-box">
                <img class="logo" src={LogoRing} style={{width:wid}}/>
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
            <button><Link id={'ll'}to={'/SignUp'}>Sign-Up</Link></button>
            <button id="MenuBarRes" onClick={Opening}><img src={MenuLogo} alt="" id="MenuBarResImg"/></button>
        </section>
    </nav>
    );
}
function SideMenu({SIZEGETTER}){
    return(<div class="MenuBar" id="SMB" style={{width:SIZEGETTER}}>
    <button>Home</button>
    <button>Services</button>
    <button>AboutUs</button>
    <button>Contact</button>
</div>);
}
function MainDiv(){
    return(<div class="Main"style={{backgroundImage:`url(${backgroundImg})`}}> 
    <div class="Text">
        <h1>Shadi Karni He</h1>
        <h2>Ajao Kara Denge</h2>
    </div>
    <button><Link to={'/MainPage'} style={{textDecoration:"None",color:"black"}}>Get Started</Link></button>
</div>);
}
export  {NavBar,MainDiv,SideMenu};