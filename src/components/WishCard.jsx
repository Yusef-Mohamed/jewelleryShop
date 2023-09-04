import axios from "axios";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AppContext, route } from "../App";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
const WishCard = ({ onClose, item }) => {
  const { setIsLoading, setUpdate } = useContext(AppContext);
  const token = localStorage.getItem("token");

  const deleteFromCart = function () {
    setIsLoading(true);
    axios
      .delete(`${route}/api/v1/wishlist/${item._id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Product deleted");
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          toast.error("You must login before add items to Shoping Cart");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <div className="flex my-4 border-b border-b-slate-300 pb-4">
        <img src={item?.imageCover} alt="" />
        <div className="flex flex-col w-full">
          <div className="flex gap-2 justify-between">
            <Link
              to={`/product/${item?._id}`}
              onClick={() => onClose(false)}
              className="font-semibold underline hover:text-sky-600 transition-colors text-sm line-clamp-1"
            >
              {item?.title}
            </Link>
            <span className="text-sm whitespace-nowrap font-semibold">
              $
              {item?.priceAfterDiscount
                ? item?.priceAfterDiscount
                : item?.price}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span></span>
            <button
              onClick={deleteFromCart}
              className="bg-rose-500 w-8 h-8 justify-center items-center flex rounded-full"
            >
              <BsTrash3Fill color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishCard;
