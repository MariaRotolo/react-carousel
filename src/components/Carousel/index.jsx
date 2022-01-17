
import { useRef } from "react";
import "./index.css";
import Img from "../Img";

const moveRef = (element, dir) => {
  if (dir === "left") element.current.scrollLeft += 300;
  if (dir === "right") element.current.scrollLeft -= 300;

  if (element.current.scrollLeft >= 300) element.current.scrollLeft = 0;
  if (element.current.scrollLeft === 0) element.current.scrollLeft = 314;
};

function Carousel() {
  
  const carouselref = useRef();

  return (
    <div className="body">
      <h1> Carosello </h1>
      

      <div className="carousel" ref={carouselref}>
        <div className="wrapper">
          <Img/>
          <Img/>
          <Img/>
          <Img/>
          <Img/>
          <Img/>
          <Img/>
          <Img/>
          <Img/>
        </div>
      </div>
      <div className="carousel__buttons">
        <button className="btn" onClick={() => moveRef(carouselref, "right")}>
          {"<"}
        </button>
        <button className="btn" onClick={() => moveRef(carouselref, "left")}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;