import { Link } from "react-router-dom";
import WhishListHandler from "./WhishListHandler";

const ProductCard = ({ product }) => {
  return (
    <div className="p-2 overflow-hidden relative">
      <Link
        to={`/product/${product._id}`}
        className="w-full skeleton aspect-square block"
      ></Link>
      <Link className="block" to={`/product/${product._id}`}>
        {product?.title}
      </Link>
      <div>
        {product?.priceAfterDiscount ? (
          <>
            <del className="text-red-500">{product?.price}$</del>{" "}
            {product?.priceAfterDiscount}$
          </>
        ) : (
          <>{product?.price}$</>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <WhishListHandler prodcutId={product._id} />
      </div>
    </div>
  );
};

export default ProductCard;
