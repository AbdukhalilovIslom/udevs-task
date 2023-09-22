import feature1 from "../../assets/icons/features/Base feature icon-1.svg";
import feature2 from "../../assets/icons/features/Base feature icon-2.svg";
import feature4 from "../../assets/icons/features/Base feature icon-4.svg";
import feature6 from "../../assets/icons/features/Group.svg";

import "./style.scss";

export default function Achivments() {
  return (
    <div className="achievements container">
      <div className="achievements__left">
        <h2>
          Our 18 years of <br /> achievements
        </h2>
        <p>With our super powers we have reached this</p>
      </div>
      <div className="achievements__right">
        <div className="achievements__card">
          <img
            src={feature4}
            alt="achievements__card__img"
            className="achievements__card__img"
          />
          <div className="achievements__card__info">
            <h3>10,000+</h3>
            <p>Downloads per day</p>
          </div>
        </div>
        <div className="achievements__card">
          <img
            src={feature2}
            alt="achievements__card__img"
            className="achievements__card__img"
          />
          <div className="achievements__card__info">
            <h3>2 Million</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="achievements__card">
          <img
            src={feature1}
            alt="achievements__card__img"
            className="achievements__card__img"
          />
          <div className="achievements__card__info">
            <h3>500+</h3>
            <p>Clients</p>
          </div>
        </div>
        <div className="achievements__card">
          <img
            src={feature6}
            alt="achievements__card__img"
            className="achievements__card__img"
          />
          <div className="achievements__card__info">
            <h3>140</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
