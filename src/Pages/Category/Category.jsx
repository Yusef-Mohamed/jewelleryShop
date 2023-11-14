import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { AppContext, route } from "../../App";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
const Category = () => {
  const { lang, setIsLoading } = useContext(AppContext);
  const cateId = useParams().cateId;
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [result, setResult] = useState(0);
  const [curentPage, setCurentPage] = useState(1);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/categories/${cateId}/subCategories`)
      .then((res) => {
        setCategories(res.data.data);
      });
    axios.get(`${route}/api/v1/categories/${cateId}`).then((res) => {
      setCategory(res.data.data);
    });
  }, [cateId]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${route}/api/v1/products?category=${cateId}&limit=1000`)
      .then((res) => {
        setProducts(res.data.data);
        setPages(res.data.paginationResult.numberOfPages);
        setResult(res.data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [cateId, curentPage]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            category?.images?.length ? category?.images[0] : ""
          })`,
          backgroundPosition: "center bottom",
        }}
        className="min-h-[70vh] relative bg-cover bg-no-repeat flex items-center justify-end  w-full"
      >
        <div className="bg-black absolute w-full h-full z-1 bg-opacity-25" />

        <div className="container mx-auto w-full relative  text-white">
          <div className="w-fit  px-8">
            <h1 className="text-2xl font-semibold">
              {lang === "en" ? category.name_en : category.name_ar}
            </h1>
            <p className="my-3 sm:w-1/2  text-lg text-opacity-70">
              {lang === "en"
                ? category.description_en
                : category.description_ar}
            </p>
          </div>
        </div>
      </div>
      {categories.length !== 0 && (
        <div>
          <h2 className="container mx-auto my-6 text-2xl font-semibold">
            {lang === "en" ? "SubCategories" : "الاقسام الفرعية"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-y-4 my-4 md:grid-cols-3 lg:grid-cols-4  container mx-auto">
            {categories.map((category) => (
              <div key={category._id} className="px-2">
                <Link
                  to={`/subCategory/${category._id}`}
                  className="relative w-full min-h-32 skeleton"
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
        </div>
      )}
      {products.length !== 0 && (
        <div>
          <h2 className="container mx-auto my-6 text-2xl font-semibold">
            {lang === "en" ? "Products" : "المنتجات"}
          </h2>
          <div className="grid grid-cols-2 gap-y-4 my-4 md:grid-cols-3 lg:grid-cols-4  container mx-auto">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {/* <div
            style={{ direction: "rtl" }}
            className="flex  w-fit gap-4 mx-auto my-12"
          >
            <button
              disabled={curentPage === pages || result !== 50}
              className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-blue disabled:bg-[#d9d9d9]"
              onClick={() => setCurentPage((prev) => prev + 1)}
            >
              <BiChevronRight />
            </button>
            <div className="w-6 rounded-md h-6 flex items-center justify-center border border-[#d1d5db] text-gray text-opacity-50">
              {curentPage}
            </div>
            <button
              disabled={curentPage === 1}
              className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-blue disabled:bg-[#d9d9d9]"
              onClick={() => setCurentPage((prev) => prev - 1)}
            >
              <BiChevronLeft />
            </button>
          </div> */}
        </div>
      )}
      {products.length === 0 && (
        <div>
          <h2 className="container mx-auto my-6 text-2xl font-semibold">
            {lang === "en" ? "Products" : "المنتجات"}
          </h2>
          <h2 className="text-2xl mx-auto font-semibold text-center container">
            {lang === "en"
              ? "Can not find Products"
              : "لا يمكن العثور علي المنتجات"}
          </h2>
          {/* <div
            style={{ direction: "rtl" }}
            className="flex  w-fit gap-4 mx-auto my-12"
          >
            <button
              disabled={curentPage === pages || result !== 50}
              className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-blue disabled:bg-[#d9d9d9]"
              onClick={() => setCurentPage((prev) => prev + 1)}
            >
              <BiChevronRight />
            </button>
            <div className="w-6 rounded-md h-6 flex items-center justify-center border border-[#d1d5db] text-gray text-opacity-50">
              {curentPage}
            </div>
            <button
              disabled={curentPage === 1}
              className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-blue disabled:bg-[#d9d9d9]"
              onClick={() => setCurentPage((prev) => prev - 1)}
            >
              <BiChevronLeft />
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Category;
