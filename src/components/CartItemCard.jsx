import axios from "axios";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AppContext, route } from "../App";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
const CartItemCard = ({ item, onClose }) => {
  const { setIsLoading, lang, setUpdate } = useContext(AppContext);
  const token = localStorage.getItem("token");
  const updateQuantity = function (q) {
    setIsLoading(true);
    axios
      .put(
        `https://node-api-v1.onrender.com/api/v1/cart/${item._id}`,
        {
          quantity: q,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        toast.success("Prodcut quantity has been updated");
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          toast.error("You must login before add items to Shoping Cart");
          localStorage.removeItem("token");
          localStorage.removeItem("data");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const deleteFromCart = function () {
    setIsLoading(true);
    axios
      .delete(`${route}/api/v1/cart/${item._id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Product deleted");
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          toast.error("You must login before add items to Shoping Cart");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <div className="flex sm:flex-row flex-col my-4 gap-4 border-b justify-between border-b-slate-300 pb-4">
        <img src={item?.product?.imageCover} className="w-32" alt="" />
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Link
              to={`/product/${item?.product?._id}`}
              onClick={() => onClose(false)}
              className="font-semibold underline hover:text-sky-600 transition-colors text-sm line-clamp-1"
            >
              {lang === "en"
                ? item?.product?.title_en
                : item?.product?.title_ar}
            </Link>
            <span className="text-sm whitespace-nowrap font-semibold">
              $
              {item?.product?.priceAfterDiscount
                ? item?.product?.priceAfterDiscount
                : item?.product?.price}
            </span>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div
              className={`flex items-center gap-2 ${
                lang === "ar" && "flex-row-reverse"
              }`}
            >
              {item?.quantity > 1 && (
                <button
                  className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-[#d9d9d9]"
                  onClick={() => updateQuantity(item?.quantity - 1)}
                >
                  -
                </button>
              )}
              <div className="w-6 rounded-md h-6 flex items-center justify-center border border-[#d1d5db] text-gray text-opacity-50">
                {item?.quantity}
              </div>
              <button
                className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-[#d9d9d9]"
                onClick={() => updateQuantity(item?.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={deleteFromCart}
              className="bg-rose-500 w-8 h-8 justify-center items-center flex rounded-full"
            >
              <BsTrash3Fill color="white" size={20} />
            </button>
          </div>
          <div className="text-xs">
            {item?.size && (
              <>
                <span className="whitespace-nowrap">
                  {lang === "en" ? "Size" : "مقاس"} : {item?.size}
                </span>
              </>
            )}
          </div>
          <div className="text-xs">
            {item?.color && (
              <>
                <span className="whitespace-nowrap">
                  {lang === "en" ? "Color" : "لون"} : {item?.color}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
