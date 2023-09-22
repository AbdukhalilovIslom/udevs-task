import company1 from "../../assets/icons/companies/_Client logo-1.svg";
import company2 from "../../assets/icons/companies/_Client logo-2.svg";
import company3 from "../../assets/icons/companies/_Client logo-3.svg";
import company4 from "../../assets/icons/companies/_Client logo-4.svg";
import company5 from "../../assets/icons/companies/_Client logo-5.svg";
import company6 from "../../assets/icons/companies/_Client logo.svg";

import "./style.scss";

export default function Companies() {
  return (
    <div className="companies container">
      <hr />
      <div className="companies__images">
        <img src={company1} alt="company" className="company" />
        <img src={company2} alt="company" className="company" />
        <img src={company3} alt="company" className="company" />
        <img src={company4} alt="company" className="company" />
        <img src={company5} alt="company" className="company" />
        <img src={company6} alt="company" className="company" />
      </div>
      <hr />
    </div>
  );
}
