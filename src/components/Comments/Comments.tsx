import company1 from "../../assets/icons/companies/_Client logo-1.svg";
import company4 from "../../assets/icons/companies/_Client logo-4.svg";
import company5 from "../../assets/icons/companies/_Client logo-5.svg";
import quote from "../../assets/icons/Quote mark.svg";

import "./style.scss";

export default function Comments() {
  return (
    <div className="comments container">
      <img src={quote} alt="quote" className="quote" />
      <div className="comment__left">
        <div className="comment__title">
          <h2>Real Stories from Real Customers</h2>
          <p>Get inspired by these stories.</p>
        </div>
        <div className="comment">
          <img src={company4} alt="comment__icon" className="comment__icon" />
          <img src={quote} alt="comment__quote" className="comment__quote" />
          <p>
            To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable.
          </p>
          <h3>Floyd Miles</h3>
          <h4>Vice President, GoPro</h4>
        </div>
      </div>
      <div className="comment__right">
        <div className="comment">
          <img src={company5} alt="comment__icon" className="comment__icon" />
          <img src={quote} alt="comment__quote" className="comment__quote" />
          <p>
            I used landify and created a landing page for my startup within a
            week. The Landify UI Kit is simple and highly intuitive, so anyone
            can use it.
          </p>
          <h3>Jane Cooper</h3>
          <h4>CEO, Airbnb</h4>
        </div>
        <div className="comment">
          <img src={company1} alt="comment__icon" className="comment__icon" />
          <img src={quote} alt="comment__quote" className="comment__quote" />
          <p>Landify saved our time in designing my company page.</p>
          <h3>Kristin Watson</h3>
          <h4>Co-Founder, Strapi</h4>
        </div>
      </div>
    </div>
  );
}
