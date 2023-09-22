import appButton1 from "../../assets/icons/Store badge-1.svg";
import appButton2 from "../../assets/icons/Store badge.svg";
import footer_logo from "../../assets/icons/footer_logo.svg";

import "./style.scss";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer__left">
        <img
          className="footer__left__logo"
          src={footer_logo}
          alt="footer__logo"
        />
        <div className="footer__left__navs">
          <span className="footer__left__nav">Download Now</span>
          <span className="footer__left__nav">License</span>
        </div>
        <div className="footer__left__navs">
          <span className="footer__left__nav">About</span>
          <span className="footer__left__nav">Features</span>
          <span className="footer__left__nav">Pricing</span>
          <span className="footer__left__nav">News</span>
          <span className="footer__left__nav">Help</span>
          <span className="footer__left__nav">Contact</span>
        </div>
        <div className="footer__left__text">
          © 2021 Landify UI Kit. All rights reserved
        </div>
      </div>
      <div className="footer__right">
        <p>Get the App</p>
        <img src={appButton1} alt="app__button" />
        <img src={appButton2} alt="app__button" />
      </div>
    </div>
  );
}
