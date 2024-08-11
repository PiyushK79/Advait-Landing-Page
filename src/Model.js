import React from "react";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

const Model = () => {
  const windowWidth = useRef(window.innerWidth);
  const width = 500;

  return (
    <div data-aos="fade-in" className="scene lazy" > 

      {windowWidth.current < width ? 
      (
        <Spline scene="https://prod.spline.design/m2IRMxLfNR4cALy0/scene.splinecode" />
      )
      :
      (
        <Spline scene="https://prod.spline.design/batJxXhElEkldjiw/scene.splinecode" />
      )}

      </div>
  );
};

export default Model;
