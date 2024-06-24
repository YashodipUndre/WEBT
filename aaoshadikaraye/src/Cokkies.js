import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your server URL
  withCredentials: true, // Include credentials (cookies) with each request
});

export default instance;