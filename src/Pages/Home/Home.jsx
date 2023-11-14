import { useContext } from "react";
import CategoriesSlider from "./CategoriesSlider";
import SubCategoriesSlider from "./SubCategoriesSlider";
import { AppContext } from "../../App";

const Home = () => {
  const { lang } = useContext(AppContext);
  return (
    <>
      <div
        style={{
          backgroundPosition: "center bottom",
        }}
        className="min-h-[80vh] mainbg  bg-cover bg-no-repeat flex items-center justify-end  w-full"
      >
        <div className="container mx-auto w-full">
          <div className="w-[70%] ">
            <h2 className="text-2xl font-semibold">
              {lang === "en" ? "The First brand store" : "متجر The First Brand"}
            </h2>
            <p className="text-lg">
              {lang === "en"
                ? "Shop from our wide range and build your style with elegance. Get a unique look with our exceptional collection of clothing, footwear, and accessories."
                : "تسوق من تشكيلتنا الواسعة وابنِ أسلوبك بأناقة احصل على إطلالة مميزة مع مجموعتنا المميزة من الملابس والأحذية والاكسسوارات"}
              <br />
            </p>
          </div>
        </div>
      </div>
      <CategoriesSlider />
      <SubCategoriesSlider />
    </>
  );
};

export default Home;
