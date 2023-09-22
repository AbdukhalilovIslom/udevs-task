import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./style.css";

export default function Burger() {
  const [burger, setBurger] = useState("burger__menu");

  const handleToggle = () => {
    setBurger((init) =>
      init === "burger__menu" ? "burger__menu open" : "burger__menu"
    );
  };

  return (
    <div className={burger}>
      <div className="burger__menu" onClick={handleToggle}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <div className="burger__contents">
        <ul className="burger_navs">
          <Link onClick={handleToggle} to="/#features" className="burger_nav">
            Features
          </Link>
          <Link onClick={handleToggle} to="/#features" className="burger_nav">
            Pricing
          </Link>
          <Link onClick={handleToggle} to="/#features" className="burger_nav">
            Careers
          </Link>
          <Link onClick={handleToggle} to="/#features" className="burger_nav">
            Help
          </Link>
        </ul>
      </div>
    </div>
  );
}
