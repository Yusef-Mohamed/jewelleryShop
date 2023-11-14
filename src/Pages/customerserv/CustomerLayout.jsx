import { useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const CustomerLayout = () => {
  const { lang } = useContext(AppContext);
  return (
    <div className="mx-auto lg:flex container">
      <div>
        <ul className=" flex flex-col gap-2 whitespace-nowrap px-8 my-8">
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/contactus`}>
              {lang === "en" ? "Contact Us" : "تواصل معنا"}
            </Link>
          </li>
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/faqs`}>
              {lang === "en" ? "FAQS" : "الاسئلة الشائعة"}
            </Link>
          </li>
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/orderShipping`}>
              {lang === "en" ? "Orders and delivery" : "الطلب والتوصيل"}
            </Link>
          </li>
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/return`}>
              {lang === "en" ? "Returns and refunds" : "الارجاع والاسترداد"}
            </Link>
          </li>
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/payment`}>
              {lang === "en" ? "Payment and pricing" : "الدفع والاسعار"}
            </Link>
          </li>
          <li className="text-gray/80 hover:text-gray/100 hover:underline">
            <Link to={`/aboutus`}>
              {lang === "en" ? "About us" : "نبذة عنا"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="customer">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;
