import feature1 from "../../assets/icons/features/Base feature icon-1.svg";
import feature2 from "../../assets/icons/features/Base feature icon-2.svg";
import feature3 from "../../assets/icons/features/Base feature icon-3.svg";
import feature4 from "../../assets/icons/features/Base feature icon-4.svg";
import feature5 from "../../assets/icons/features/Base feature icon.svg";
import feature6 from "../../assets/icons/features/Group.svg";

import "./style.scss";

export default function Features() {
  return (
    <div className="features container" id="features">
      <h2>Tailor-made features</h2>
      <p>
        Lorem ipsum is common placeholder text used to demonstrate the graphic
        elements of a document or visual presentation.
      </p>

      <div className="features__cards">
        <div className="features__card">
          <img src={feature1} alt="feature1" className="feature__image" />
          <h3>Robust workflow</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="features__card">
          <img src={feature2} alt="feature2" className="feature__image" />
          <h3>Flexibility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="features__card">
          <img src={feature3} alt="feature3" className="feature__image" />
          <h3>User friendly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="features__card">
          <img src={feature4} alt="feature4" className="feature__image" />
          <h3>Multiple layouts</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="features__card">
          <img src={feature5} alt="feature5" className="feature__image" />
          <h3>Better components</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="features__card">
          <img src={feature6} alt="feature6" className="feature__image" />
          <h3>Well organised</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
