import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext, route } from "../App";
import { Link } from "react-router-dom";
const CategorySideCard = ({ type, setIsOpen }) => {
  const [showMore, setShowMore] = useState(false);

  const { lang } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${route}/api/v1/categories?type=${type}`).then((res) => {
      setCategories(res.data.data);
    });
  }, []);
  return (
    <div className="text-black whitespace-nowrap">
      <div className="border-b py-3 border-b-slate-300  flex whitespace-nowrap gap-2 mb-2 justify-between w-full items-center text-lg font-semibold">
        {lang === "en" ? type : type === "men" ? "رجال" : "نساء"}
        <button
          className="w-6 h-6 bg-gray items-center justify-center flex text-[white]"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <IoIosArrowUp
            className={`${
              showMore ? "rotate-180" : "rotate-90"
            } transition-all`}
          />
        </button>
      </div>

      <div className={`${showMore ? "block" : "hidden"}`}>
        {categories.map((cate, ind) => (
          <CategoryCard
            setIsOpen={setIsOpen}
            data={cate}
            isLast={ind === categories.length - 1}
            key={cate._id}
          />
        ))}
      </div>
    </div>
  );
};
const CategoryCard = ({ data, isLast, setIsOpen }) => {
  const { lang } = useContext(AppContext);
  const [showMore, setShowMore] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/categories/${data._id}/subCategories`)
      .then((res) => {
        setCategories(res.data.data);
      });
  }, []);
  return (
    <div className={`p-2 my-3 ${!isLast && "border-b border-b-slate-300"}`}>
      <div className="flex whitespace-nowrap gap-2 mb-2 justify-between w-full items-center text-lg font-semibold">
        <Link
          className="w-full"
          onClick={() => setIsOpen(false)}
          to={`/category/${data._id}`}
        >
          {lang === "en" ? data.name_en : data.name_ar}
        </Link>
        {categories?.length !== 0 && (
          <button
            className="w-6 h-6 bg-gray items-center justify-center flex text-[white]"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <IoIosArrowUp
              className={`${
                showMore ? "rotate-180" : "rotate-90"
              } transition-all`}
            />
          </button>
        )}
      </div>
      {showMore && (
        <ul className="pl-1">
          {categories.map((e) => (
            <Link
              key={e._id}
              to={`/subCategory/${e._id}`}
              className="flex items-center  hover:font-semibold cursor-pointer"
            >
              <span className="mt-2 mx-2">*</span>
              {lang === "en" ? e.name_en : e.name_ar}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CategorySideCard;
