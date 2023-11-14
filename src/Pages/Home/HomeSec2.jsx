import { useContext } from "react";
import { AppContext } from "../../App";

const HomeSec2 = () => {
  const { lang } = useContext(AppContext);
  return (
    <div className="my-4 container items-center mx-auto flex flex-col-reverse sm:flex-row-reverse">
      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold my-4">
          {lang === "en" ? "La Maison" : "لاميزون"}
        </h2>
        <p className="text-lg">
          {lang === "en"
            ? "Discover our jewelry first hand in one of our boutiques. We will be more than happy to assist you with your inquiries at any one of our flagships."
            : "اكتشف مجوهراتنا بنفسك في أحد متاجرنا الفاخرة. سنكون سعداء لمساعدتك في استفساراتك في أي من فروعنا الرئيسية."}
        </p>
        <button className="bg-[#e1e1e1] px-12 rounded-full text-lg text-gray my-4 mx-3 font-semibold py-3">
          {lang === "en" ? "LEARN MORE" : "اعلم المزيد"}
        </button>
      </div>
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/jacobandcocom_404511098-1648153373201.jpeg?v=1648153376"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeSec2;
