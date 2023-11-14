import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { AppContext, route } from "../../App";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const SubCategory = () => {
  const { lang, setIsLoading } = useContext(AppContext);
  const cateId = useParams().cateId;
  const [category, setCategory] = useState({});
  const [pages, setPages] = useState(0);
  const [curentPage, setCurentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    axios.get(`${route}/api/v1/subCategories/${cateId}`).then((res) => {
      setCategory(res.data.data);
    });
  }, [cateId]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${route}/api/v1/products?subCategories=${cateId}&limit=1000`)
      .then((res) => {
        setProducts(res.data.data);
        setResult(res.data.results);
        setPages(res.data.paginationResult.numberOfPages);
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
        className="min-h-[70vh] relative   bg-cover bg-no-repeat flex items-center justify-end  w-full"
      >
        <div className="bg-black absolute w-full h-full z-1 bg-opacity-25" />

        <div className="container mx-auto w-full relative  text-white">
          <div className="w-fit px-8">
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
      )}{" "}
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

export default SubCategory;
