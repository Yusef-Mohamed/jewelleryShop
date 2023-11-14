import shippingIcon from "../../assets/complimentary.svg";
import returnIcon from "../../assets/return.svg";
import dimIcon from "../../assets/dim.svg";
import { useContext } from "react";
import { AppContext } from "../../App";
const HomeSec3 = () => {
  const { lang } = useContext(AppContext);
  return (
    <div className="my-4 container items-center mx-auto flex flex-col sm:flex-row-reverse">
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/921483723-1654094614663.jpg?v=1654094617"
          alt=""
        />
      </div>
      <div className="w-full px-3 mx-3 sm:border-r sm:border-r-slate-300">
        <div className=" border-b border-b-slate-300 py-2">
          <img src={shippingIcon} className="w-12" alt="" />
          <h2 className="text-lg font-semibold ">
            {lang === "en"
              ? "Complimentary Shipping & Returns"
              : "الشحن والإرجاع المجانيين"}
          </h2>
          <p>
            {lang === "en"
              ? "We offer complimentary shipping & returns on all orders."
              : "نحن نقدم الشحن والإرجاع المجاني على جميع الطلبات."}
          </p>
        </div>
        <div className=" border-b border-b-slate-300 py-2">
          <img src={dimIcon} className="w-12" alt="" />
          <h2 className="text-lg font-semibold ">
            {lang === "en"
              ? "Jacob & Co. At Your Service"
              : "جايكوب آند كو. في خدمتك"}
          </h2>
          <p>
            {lang === "en"
              ? "Our client care experts are always here to help."
              : "خبراء رعاية العملاء لدينا دائماً متواجدين هنا للمساعدة."}
          </p>
        </div>
        <div className=" border-b border-b-slate-300 py-2">
          <img src={returnIcon} className="w-12" />
          <h2 className="text-lg font-semibold ">
            {lang === "en" ? "Ethically Sourced" : "مصدرها بشكل أخلاقي"}
          </h2>
          <p>
            {lang === "en"
              ? " We proudly trace 100% of our rough diamonds to known mines and sources."
              : "نحن بفخر نتتبع 100% من الماس الخام لدينا إلى مناجم ومصادر معروفة."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
