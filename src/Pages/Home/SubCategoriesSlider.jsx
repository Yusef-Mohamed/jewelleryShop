import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { route } from "../../App";
const SubCategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/subCategories`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => console.log(err));
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
    <div className="container mx-auto my-12 two">
      <h2 className="text-2xl my-8">Shop By Category</h2>
      <div className=" relative">
        <Slider {...settings}>
          {categories.length === 0 &&
            [...Array(4)].map((_, ind) => (
              <div className="px-2" key={ind}>
                <div className="relative w-full p-4 h-full aspect-[1/1.5]  skeleton">
                  <div className="font-semibold bg-white rounded-full py-2 text-center shadow-sm absolute bottom-5 left-[50%] min-w-1/2 px-3 translate-x-[-50%]"></div>
                </div>
              </div>
            ))}
          {categories.map((category) => (
            <div key={category._id} className="px-2">
              <Link
                to={`/category/${category.category._id}/${category._id}`}
                className="relative w-full  min-h-32  skeleton"
              >
                <img
                  src="https://jacobandco.shop/cdn/shop/collections/91945199_f6336e1d-fdd9-444c-ba06-4b778d2b64c6.webp?v=1648650376"
                  alt=""
                />
                <div className="font-semibold bg-white rounded-full py-2 text-center shadow-sm border border-slate-200 absolute bottom-5 left-[50%] min-w-1/2 px-3 translate-x-[-50%]">
                  {category.name}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="flex justify-between w-full absolute bottom-8 px-8">
          <button
            className="w-8 flex items-center justify-center rounded-full h-8 bg-black bg-opacity-50"
            onClick={() => {
              document.querySelector(".two .slick-prev")?.click();
            }}
          >
            <MdNavigateBefore color="white" size={20} />
          </button>
          <button
            className="w-8 flex items-center justify-center rounded-full h-8 bg-black bg-opacity-50"
            onClick={() => {
              document.querySelector(".two .slick-next")?.click();
            }}
          >
            <MdNavigateNext color="white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoriesSlider;
