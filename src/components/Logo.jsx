import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Logo = () => {
  return (
    <Link to={"/"} className="h-full">
      <img src={logo} alt="" className="h-full" />
    </Link>
  );
};

export default Logo;
