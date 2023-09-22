import { HashLink as Link } from "react-router-hash-link";
import heroBg from "../../assets/images/Hero 03.png";
import heroPhone from "../../assets/images/Mobile.png";
import watch from "../../assets/icons/Essential icon.svg";
import logo from "../../assets/icons/Logo.svg";
import appButton1 from "../../assets/icons/Store badge-1.svg";
import appButton2 from "../../assets/icons/Store badge.svg";

import "./style.scss";
import Burger from "../Burger/Burger";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroBg} alt="heroBg" className="hero__bg" />
      <div className="header container">
        <div className="header__left">
          <img src={logo} alt="logo" className="logo" />
          <ul className="header__navigations">
            <Link to="/#features" className="navigations">
              Features
            </Link>
            <Link to="/" className="navigations">
              Pricing
            </Link>
            <Link to="/" className="navigations">
              Careers
            </Link>
            <Link to="/" className="navigations">
              Help
            </Link>
          </ul>
        </div>
        <div className="header__right">
          <img src={appButton1} alt="app__button" className="app__button" />
          <img src={appButton2} alt="app__button" className="app__button" />
          <div className="header__burger">
            <Burger />
          </div>
        </div>
      </div>
      <div className="hero__content container">
        <div className="hero__content__left">
          <h1>The easiest way to manage projects</h1>
          <p>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
          <div className="hero__content__left__btns">
            <div className="hero__content__left__btn1">Get Started</div>
            <div className="hero__content__left__btn2">
              <img src={watch} alt="watch" />
              Watch Video
            </div>
          </div>
        </div>
        <img className="hero__content__right" src={heroPhone} alt="mobile" />
      </div>
    </div>
  );
}
