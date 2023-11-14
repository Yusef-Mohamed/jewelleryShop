import { useContext } from "react";
import { AppContext } from "../../App";

const HomeSec1 = () => {
  const { lang } = useContext(AppContext);
  return (
    <div className="container items-center mx-auto flex flex-col-reverse sm:flex-row">
      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold my-4">
          {lang === "en" ? "Our Heritage" : "تراثنا"}
        </h2>
        <p className="text-lg ">
          {lang === "en"
            ? "Jacob Arabo's novel and unique approach to jewelry making and design,one that is focused on creativity and innovation, has made Jacob & Co.a brand that is positioned to lead the way for generations to come."
            : "نهج جاكوب عربو الجديد والفريد في صناعة المجوهرات والتصميم، والذي يركز على الإبداع والابتكار، جعل من Jacob & Co. علامة تجارية موجودة لتقود الطريق للأجيال القادمة."}
        </p>
        <h2 className="text-2xl font-semibold my-4">
          {lang === "en"
            ? "Celebrating 40 years of Jacob"
            : "احتفالاً بمرور 40 عامًا من جاكوب."}
        </h2>
        <p className="text-lg">
          {lang === "en"
            ? "With his passion for unique designs and his talent for business, Jacob Arabo has designed iconic jewelry and watches for the world's biggest stars, cultural icons, royalty and presidents all around the globe."
            : "بفضل شغفه بالتصاميم الفريدة وموهبته في مجال الأعمال، قام جاكوب عربو بتصميم مجوهرات وساعات أيقونية لأكبر نجوم العالم، والشخصيات الثقافية البارزة، والعائلات الحاكمة، ورؤساء الدول في جميع أنحاء العالم."}
        </p>
        <button className="bg-[#e1e1e1] px-12 rounded-full text-lg text-gray my-4 mx-3 font-semibold py-3">
          {lang === "en" ? "LEARN MORE" : "اعلم المزيد"}
        </button>
      </div>
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/mask-group-902x-1646927739990.png?v=1646927745"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeSec1;
