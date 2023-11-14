import { Link } from "react-router-dom";
import WhishListHandler from "./WhishListHandler";
import { useContext } from "react";
import { AppContext } from "../App";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { lang } = useContext(AppContext);
  return (
    <div className="p-2 overflow-hidden relative">
      <Link to={`/product/${product._id}`} className="w-full skeleton  block">
        <img
          loading="lazy"
          className="aspect-square w-full h-full"
          src={product.imageCover}
          alt=""
        />
      </Link>
      <Link
        className="text-center my-1 block font-semibold text-lg"
        to={`/product/${product._id}`}
      >
        {lang === "en" ? product?.title_en : product?.title_ar}
      </Link>
      <div className="flex text-xs items-center justify-center gap-2 my-2">
        {product?.ratingsQuantity === 0 && <></>}
        {product?.ratingsAverage && (
          <>
            {[...Array(Math.floor(product?.ratingsAverage))].map((_, index) => (
              <BsStarFill color="gold" key={index} />
            ))}
            {product?.ratingsAverage % 1 !== 0 && <BsStarHalf color="gold" />}
            {[...Array(5 - Math.ceil(product?.ratingsAverage))].map(
              (_, index) => (
                <BsStarFill color="black" key={index} />
              )
            )}
            ({product?.ratingsQuantity})
          </>
        )}
      </div>
      <div className="text-center">
        {product?.priceAfterDiscount ? (
          <>
            <del className="text-red-500">{product?.price}$</del>{" "}
            {product?.priceAfterDiscount}$
          </>
        ) : (
          <>{product?.price}$</>
        )}
      </div>
      <p className="text-sm my-1 text-center">
        {lang === "en"
          ? product?.shortDescription_en
          : product?.shortDescription_ar}
      </p>
      <div className="absolute top-4 right-4">
        <WhishListHandler prodcutId={product._id} />
      </div>
    </div>
  );
};

export default ProductCard;
