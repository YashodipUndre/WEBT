import React, { useState } from "react";

function useCardSliderLogic() {
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollStep = 400;

  const scrollContainer = (scrollAmount) => {
    const newScrollLeft = scrollLeft + scrollAmount;
    setScrollLeft(newScrollLeft);
    document.getElementById("card-container").scrollLeft = newScrollLeft;
  };

  const scrollLeftHandler = () => {
    scrollContainer(-scrollStep);
  };

  const scrollRightHandler = () => {
    scrollContainer(scrollStep);
  };

  return { scrollLeftHandler, scrollRightHandler };
}

export default useCardSliderLogic;
