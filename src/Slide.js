import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const Slideshow = ({ data, FaQuoteRight }) => {
  const slideImages = data;
  return (
    <div className="slide-container">
      <Slide>
          {slideImages.map((item) => {
            return (
              <div className="items_centre">
                <img src={item.image} alt="" className="person-img" />
                <h4>{item.name}</h4>
                <p className="title">{item.title}</p>
                <p className="text">{item.quote}</p>
                <FaQuoteRight className="icon" />
              </div>
            );
          })}
        </Slide>
    </div>
  );
};
  
export default Slideshow;