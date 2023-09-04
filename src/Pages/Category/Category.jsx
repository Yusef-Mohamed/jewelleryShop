import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { route } from "../../App";

const Category = () => {
  const cateId = useParams().cateId;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/categories/${cateId}/subCategories`)
      .then((res) => {
        setCategories(res.data.data);
        console.log(res);
        console.log(cateId);
      })
      .catch((err) => console.log(err));
  }, [cateId]);
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-y-4 my-4 md:grid-cols-3 lg:grid-cols-4  container mx-auto">
        {categories.map((category) => (
          <div key={category._id} className="px-2">
            <Link
              to={`/category/${category.category._id}/${category._id}`}
              className="relative w-full min-h-32 skeleton"
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
      </div>
    </>
  );
};

export default Category;
