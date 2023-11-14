import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ProductCard from "../components/ProductCard";
import { AppContext, route } from "../App";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { lang, setIsLoading } = useContext(AppContext);
  const [pages, setPages] = useState(0);
  const [curentPage, setCurentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${route}/api/v1/products?page=${curentPage}&keyword=${keyword}&limit=10000`
      )
      .then((res) => {
        setProducts(res.data.data);
        setPages(res.data.paginationResult.numberOfPages);
        setResult(res.data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [curentPage, keyword]);
  return (
    <>
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

export default Search;
