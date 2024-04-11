import React, { useState } from 'react';
import  "./CSS/SignUp.css"
import { NavBar, SideMenu } from './Lander';
import LogoRingPink from './Images/icons8-wedding-ring-64-pink.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
function SignUp(){
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");
  function SideMenuLoader() {
      if (SMBDSIZE === "0px") {
          setSMBDSIZE("200px");
      } else if (SMBDSIZE === "200px") {
          setSMBDSIZE("0px");
      }
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobilenumber: '',
    username: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };
  const [constent,setContest] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., sending data to server
    try{
     const ans = await axios.post('http://localhost:8080/registration',formData);
     if(ans.data._id){
      setContest('Registratioin Sussecfully')
     }
     else{
      setContest("Enter valid credential or user already exist");
     }
    }
    catch (error) {
      setContest("Enter valid credential or user already exist");
      }
  };

  return (
    <div>
   <NavBar onClick={SideMenuLoader}></NavBar>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
    <div className="popup">
        <div className="popupInner">
          <div className="popSt"><p>{constent}</p></div>
        <img className="log" alt={LogoRingPink}src={LogoRingPink} style={{width:'50px'}}/>
      <h2 className="h2tag">AaoShaadiKaraye</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" >Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="mobile" >Mobile Number:</label>
          <input type="tel" id="mobile" name="mobilenumber" pattern="[0-9]{10}" value={formData.mobilenumber} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className='termsAndcon'>
          <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <div id='LastDiv'>
          <button type="submit">Register</button>
          <Link id={'login'} className="login" to={'/login'}>Already have an account ?</Link>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}
export default SignUp;