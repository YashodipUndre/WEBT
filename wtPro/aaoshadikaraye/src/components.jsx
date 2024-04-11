import React from 'react';
import './CSS/lander.css'
const Venues= (props) => {
  return (
   <>
    <section className="venues">
      <div className="venue-card">
        <figure className="venue-img-wrap">
          <img width={'200px'}
            className="venue-img"
            src='https://content.jdmagicbox.com/comp/jabalpur/p1/9999px761.x761.171111173526.i3p1/catalogue/agrawal-marriage-hall-and-garden-tent-and-caterers-vijay-nagar-colony-jabalpur-jabalpur-banquet-halls-xscsc.jpg?clr=#392145?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A'
            alt="https://content.jdmagicbox.com/comp/jabalpur/p1/9999px761.x761.171111173526.i3p1/catalogue/agrawal-marriage-hall-and-garden-tent-and-caterers-vijay-nagar-colony-jabalpur-jabalpur-banquet-halls-xscsc.jpg?clr=#392145?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A"
          />
        </figure>
        <div className="venue-info">
          <div className="rating-wrap">
            <div className="rating">★★★★☆</div>
            <div className="review-count">(1 review)</div>
          </div>
          <h3 className="venue-name">Hotel Prince Viraj</h3>
          <div className="location">Jabalpur</div>
          <div className="hotel-info">
            <div className="star-rating">
              <span className="star-category">3 Star</span>
            </div>
            <div className="pricing">
              <span className="price-type">prize:</span> ₹ 1,600
            </div>
            <div className="rooms">
              <span>Rooms:</span> 25 Rooms
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};
export default Venues;