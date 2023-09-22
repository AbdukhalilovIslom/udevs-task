import tools from "../../assets/icons/Logos.svg";

import "./style.scss";

export default function Tools() {
  return (
    <div className="tools container">
      <hr className="tools__hr" />
      <div className="tools__content">
        <div className="tools__info">
          <h2>
            Easy integrations <br /> with 170+ tools
          </h2>
          <p>
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <img className="tools__img" src={tools} alt="tools" />
      </div>
    </div>
  );
}
