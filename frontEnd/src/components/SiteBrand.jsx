import Logo from "../assets/my-logo.png";
import { Link } from "react-router-dom";

const SiteBrand = (props) => {
  return (
    <div className="sitebrand-wrapper">
      <Link to="/">
        <img
          className={`sitebrand-img ${props.className || ""}`}
          src={Logo}
          alt="Logo with the letters E and D"
        />
      </Link>
    </div>
  );
};

export default SiteBrand;
