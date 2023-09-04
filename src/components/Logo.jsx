import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="h-full">
      <img
        src="https://cdn.shopify.com/s/files/1/0568/1682/8552/files/Jacob___Co_Black_RGB_L_dbdaa7c4-7338-4454-8574-95897359182d.jpg?v=1652801934"
        alt=""
        className="h-full"
      />
    </Link>
  );
};

export default Logo;
