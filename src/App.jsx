import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Cursor from "./components/Cursor";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".content"),
      smooth: true,
      multiplier: 1,
    });

    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Adjust this duration as needed

    // Cleanup on component unmount
    return () => {
      clearTimeout(timer);
      scroll.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-black text-white font-sans">
      <div
        id="preloader"
        className={`pointer-events-none fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <a
          className="text-9xl flex items-center justify-center text-center gap-4"
          href="#"
        >
          <span
            style={{ boxShadow: "0 0 4rem #00FF19" }}
            className="w-16 h-16 rounded-full mt-24 bg-green-500"
          ></span>
          <span className="text-[15rem] font-regular">work</span>
        </a>
      </div>
      <div
        id="content"
        className={`content opacity-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : ""
        }`}
        data-scroll-container
      ></div>
        <Cursor />
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    
  );
};

export default App;
