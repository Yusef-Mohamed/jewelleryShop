import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import axios from "axios";
import { AppContext, route } from "../App";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import applepay from "../assets/payment/applepay.png";
import mastercard from "../assets/payment/mastercard.png";
import paymentescure from "../assets/payment/paymentescure.png";
import paypal from "../assets/payment/paypal.png";
import visa from "../assets/payment/visa.png";

const Footer = () => {
  const { lang } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [opens, setOpens] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  useEffect(() => {
    axios.get(`${route}/api/v1/categories`).then((res) => {
      setCategories(res.data.data);
    });
    axios.get(`${route}/api/v1/subCategories`).then((res) => {
      setSubCategories(res.data.data);
    });
  }, []);

  return (
    <footer className="border-t border-t-slate-200 pt-8 ">
      <div className=" hidden gap-8 lg:grid lg:grid-cols-3 container mx-auto">
        <div className="col-span-2 sm:col-span-1">
          <div className="w-[90%] mx-auto">
            <Logo />
          </div>
        </div>
        <div>
          <h6 className="font-semibold text-lg">
            {lang === "en" ? "Categories" : "الاقسام"}
          </h6>
          <ul>
            {categories?.slice(0, 5)?.map((cate) => (
              <li
                className="text-gray/80 hover:text-gray/100 hover:underline"
                key={cate._id}
              >
                <Link to={`/category/${cate._id}`}>
                  {lang === "en" ? cate.name_en : cate.name_ar}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <h6 className="font-semibold text-lg">
            {lang === "en" ? "SubCategories" : "الاقسام الفرعية"}
          </h6>
          <ul>
            {subCategories?.slice(0, 5)?.map((cate) => (
              <li
                className="text-gray/80 hover:text-gray/100 hover:underline"
                key={cate._id}
              >
                <Link to={`/category/${cate._id}`}>
                  {lang === "en" ? cate.name_en : cate.name_ar}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div>
          <h6 className="font-semibold text-lg">
            {lang === "en" ? "Customer Service" : "خدمة العملاء"}
          </h6>
          <ul className=" flex flex-col gap-2">
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
      </div>
      <div className="lg:hidden">
        <div className="border-b border-b-slate-300 container mx-auto ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, one: !prev.one }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            {lang === "en" ? "Categories" : "الاقسام"}

            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.one ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.one ? "h-full" : "h-0"
            }`}
          >
            <ul>
              {categories?.slice(0, 5).map((cate) => (
                <li
                  className="text-gray/80 hover:text-gray/100 hover:underline"
                  key={cate._id}
                >
                  <Link to={`/category/${cate._id}`}>
                    {lang === "en" ? cate.name_en : cate.name_ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="border-b mt-3 border-b-slate-300 container mx-auto ">
          <button
            onClick={() => setOpens((prev) => ({ ...prev, two: !prev.two }))}
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            {lang === "en" ? "SubCategories" : "الاقسام الفرعية"}

            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.two ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.two ? "h-full" : "h-0"
            }`}
          >
            <ul>
              {subCategories?.slice(0, 5)?.map((cate) => (
                <li
                  className="text-gray/80 hover:text-gray/100 hover:underline"
                  key={cate._id}
                >
                  <Link to={`/subcategory/${cate._id}`}>
                    {lang === "en" ? cate.name_en : cate.name_ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="border-b mt-3 border-b-slate-300 container mx-auto ">
          <button
            onClick={() =>
              setOpens((prev) => ({ ...prev, three: !prev.three }))
            }
            className="flex py-2 text-lg focus:outline-none w-full justify-between items-center uppercase"
          >
            {lang === "en" ? "Customer Service" : "خدمة العملاء"}

            <IoIosArrowBack
              size={20}
              className={`transition-all ${
                opens.three ? "rotate-90" : "rotate-[270deg]"
              }`}
            />
          </button>
          <div
            className={`my-2 transition-all  overflow-hidden ${
              opens.three ? "h-full" : "h-0"
            }`}
          >
            <ul className=" flex flex-col gap-2">
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
        </div>
        <div className="container mt-4 mx-auto">
          <div className="max-w-[250px] mx-auto ">
            <Logo />
          </div>
        </div>
      </div>
      <div className="border-t border-t-slate-300 mt-4">
        <div className="mx-auto container lg:flex-row flex-col gap-4 flex items-center justify-center lg:justify-between py-2">
          <p className="text-slate-800 text-lg text-center lg:text-start ">
            {lang === "en"
              ? "All rights reserved by thefirstbrand 2023."
              : "جميع الحقوق محفوظة thefirstbrand 2023"}
          </p>
          <div className="flex gap-2 items-center flex-wrap">
            <img src={paypal} className="h-8 lg:h-12" alt="" />
            <img src={visa} className="h-6 lg:h-8" alt="" />
            <img src={mastercard} className="h-8 lg:h-12" alt="" />
            <img src={applepay} className="h-8 lg:h-12" alt="" />
            <img src={paymentescure} className="h-8 lg:h-12" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
