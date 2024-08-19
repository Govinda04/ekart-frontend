import React from "react";
import Navbar from "../components/organisms/Navbar";
import "./styles/pagesStyle.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        {/* Navbar  */}
        <Navbar />
        {/* Carousal  */}
        {/* Product list : - grid 3x2  */}
        <div
          style={{ width: 300, height: 300, border: "1px solid pink" }}
        ></div>
        {/*  testimonials / Reviews grid/slideshow 1x3   */}
        {/* Footer  */}
      </div>
    </>
  );
};

export default HomePage;
