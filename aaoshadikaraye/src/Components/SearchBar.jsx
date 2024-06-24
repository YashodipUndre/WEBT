import React from 'react';
import '../CSS/SearchBar.css';
import LogoRingPink from "../Images/icons8-wedding-rings-64.png";
import cross from '../Images/icons8-cross-50.png'
import { NavBar } from '../Lander';
const SearchBar = () => {
  return (
    <>
    <div className='Main'>
    <div className='ScMain'><img src={cross} alt=""/></div>
    <div className="search-bar-container">
    
        <div className='frDiv'><img src={LogoRingPink} alt="" /></div>
    
      <input
        type="text"
        className="search-bar"
        placeholder="Search for vendors, ideas, real wedding stories and more!"
      />
      </div>
      </div>
      
</>
  );
};

export default SearchBar;