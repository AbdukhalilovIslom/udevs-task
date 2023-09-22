import appButton1 from "../../assets/icons/Store badge-1.svg";
import appButton2 from "../../assets/icons/Store badge.svg";
import mobileApp1 from "../../assets/icons/Phone Mockup 1.svg";
import mobileApp2 from "../../assets/icons/Phone Mockup 2.svg";

import "./style.scss";

export default function Mobile() {
  return (
    <div className="mobile container">
      <div className="mobile__info">
        <h2>Manage all projects from your mobile</h2>
        <p>
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procastinating. Stay on track and complete
          on time!
        </p>
        <div className="mobile__btns">
          <p>Get the App</p>
          <img src={appButton1} alt="mobile__btn" className="mobile__btn" />
          <img src={appButton2} alt="mobile__btn" className="mobile__btn" />
        </div>
      </div>
      <div className="mobile__image">
        <img className="mobile__image__1" src={mobileApp1} alt="mobile__app" />
        <img className="mobile__image__2" src={mobileApp2} alt="mobile__app" />
      </div>
    </div>
  );
}
