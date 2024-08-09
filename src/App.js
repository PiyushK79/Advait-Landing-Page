import React from "react";
import { useState, useEffect } from "react";
import Model from "./Model";
import "./App.css";
import Card from "./Card";
import Loader from "./Loader";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init({
//   duration: 1300,
//   easing: "ease-in-out",
//   once: true,
//   offset: 40,
// });

const App = () => {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <Model />
          <Card />
        </>
      )}
    </>
  );
};

export default App;
