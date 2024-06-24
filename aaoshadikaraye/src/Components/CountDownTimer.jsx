import React, { useState, useEffect } from 'react';
import { useWedding } from '../context/weddingContext';
function CountdownTimer() {
    const[weduser,setWedUser] = useWedding();
  // Set the target date (year, month (0-based), day, hour, minute, second)
  let targetDate
  if(weduser.WedDate){
   targetDate= new Date(weduser.WedDate);
  }
  // State to hold the remaining time
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  // Function to calculate the remaining time
  function calculateRemainingTime() {
    const now = new Date();
    const timeDifference = now-targetDate;
    
    // Calculate remaining time
    const days = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
    
    return `${days} Day to Go`;
  }

  // Function to update the remaining time
  function updateRemainingTime() {
    setRemainingTime(calculateRemainingTime());
  }

  // Effect to update the remaining time every second
  useEffect(() => {
    const interval = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <div className='countDown'>{remainingTime}</div>
    </div>
  );
}

export default CountdownTimer;
