import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aaoshadikaraye.onrender.com', // Replace with your server URL
  withCredentials: true, // Include credentials (cookies) with each request
});

export default instance;