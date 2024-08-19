import React from "react";
import Button from "../atoms/Button";
import siteLogo from "../../assets/gold_cart.png";
import Image from "../atoms/Image";
import "./styles/organismStyle.css";

const Navbar = () => {
  return (
    <nav className="ekart-nav">
      <Image
        style={{
          height: 30,
          width: 30,
        }}
        containerClass="logo-container"
        src={siteLogo}
        alt="Logo"
        className="ekart"
        href="/"
      />
      <div className="ekart-nav-btn-list">
        <Button
          label="Home"
          btnClass="ekart-nav-btn"
          onClick={() => {
            alert("home");
          }}
        />
        <Button label="About" btnClass="ekart-nav-btn" />
        <Button label="Contact" btnClass="ekart-nav-btn" />
      </div>
      <div>Login</div>
    </nav>
  );
};

export default Navbar;
