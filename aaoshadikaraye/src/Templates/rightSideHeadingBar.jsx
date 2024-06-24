import { IoSearch, IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import styles from "./rightside.module.css";
import { useService } from "../context/ServiceDataContext";
import React, { useState } from 'react';
const RightSide = ({ onFilterChange }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [serviceData, setServiceData] = useService();

  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow"];
  const prices = ["20000", "50000", "100000", "200000", "500000", "1000000"];

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
  };

  const handleFilter = () => {
    onFilterChange({ city: selectedCity, price: selectedPrice });
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <label htmlFor="cityFilter">Filter by City:</label>
        <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label htmlFor="priceFilter">Filter by Price:</label>
        <select id="priceFilter" value={selectedPrice} onChange={handlePriceChange}>
          <option value="">All Prices</option>
          {serviceData && serviceData.map((price) => (
            <option key={price.price?price.price:price.price_per_plate} value={price.price?price.price:price.price_per_plate}>{price.price?price.price:price.price_per_plate}</option>
))}
        </select>
      </div>

      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default RightSide;
