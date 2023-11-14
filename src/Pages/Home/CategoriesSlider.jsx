import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext, route } from "../../App";
const CategoriesSlider = () => {
  const { lang } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${route}/api/v1/categories`).then((res) => {
      setCategories(res.data.data);
    });
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-12 one">
      <h2 className="text-2xl my-8">
        {lang === "en" ? "Shop by Category" : "تسوق حسب الفئة"}
      </h2>
      <div className=" relative">
        {categories.length > 2 ? (
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category?._id} className="px-2">
                <Link
                  to={`/category/${category?._id}`}
                  className="relative w-full  min-h-32  skeleton"
                >
                  <img
                    src={category.imageCover}
                    className="aspect-square w-full h-full"
                    alt=""
                  />
                  <div className="font-semibold bg-white rounded-full py-2 text-center shadow-sm border border-slate-200 absolute bottom-5 left-[50%] min-w-1/2 px-3 translate-x-[-50%]">
                    {lang === "en" ? category.name_en : category.name_ar}
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <div key={category?._id} className="px-2">
                <Link
                  to={`/category/${category?._id}`}
                  className="relative w-full  min-h-32  skeleton"
                >
                  <img
                    src={category.imageCover}
                    className="aspect-square w-full h-full"
                    alt=""
                  />
                  <div className="font-semibold bg-white rounded-full py-2 text-center shadow-sm border border-slate-200 absolute bottom-5 left-[50%] min-w-1/2 px-3 translate-x-[-50%]">
                    {lang === "en" ? category.name_en : category.name_ar}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        {categories.length > 3 && (
          <div
            className={`flex justify-between w-full absolute bottom-8 px-8 ${
              lang === "ar" && "flex-row-reverse"
            }`}
          >
            <button
              className="w-8 flex items-center justify-center rounded-full h-8 bg-black bg-opacity-50"
              onClick={() => {
                document.querySelector(".one .slick-prev")?.click();
              }}
            >
              <MdNavigateBefore color="white" size={20} />
            </button>
            <button
              className="w-8 flex items-center justify-center rounded-full h-8 bg-black bg-opacity-50"
              onClick={() => {
                document.querySelector(".one .slick-next")?.click();
              }}
            >
              <MdNavigateNext color="white" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesSlider;
