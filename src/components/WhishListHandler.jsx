import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AppContext, route } from "../App";
import axios from "axios";
import { toast } from "react-hot-toast";
const WhishListHandler = ({ prodcutId }) => {
  const { setIsLoading, setUpdate, update, wishList } = useContext(AppContext);
  const token = localStorage.getItem("token");
  const [current, setCurrent] = useState({});
  useEffect(() => {
    setCurrent(wishList.filter((e) => e._id === prodcutId)[0]);
  }, [prodcutId, update, wishList]);
  const handelWish = function () {
    setIsLoading(true);

    if (current) {
      axios
        .delete(`${route}/api/v1/wishlist/${prodcutId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(() => {
          toast.success("product has been deleted");
          setUpdate((prev) => prev + 1);
        })
        .finally(() => setIsLoading(false));
    } else {
      axios
        .post(
          `${route}/api/v1/wishlist`,
          { productId: prodcutId },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          toast.success("the product in your wishList now");
          setUpdate((prev) => prev + 1);
        })
        .catch((err) => {
          if (err.response.status == 500 || err.response.status == 401) {
            toast.error("You must login before add items to wish list");
            localStorage.removeItem("token");
            localStorage.removeItem("data");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div
      className="w-8 h-8 bg-white bg-opacity-50 rounded-full flex items-center justify-center "
      onClick={handelWish}
    >
      <AiFillHeart color={`${current ? "#f43f5e" : "#17171799"}`} size={20} />
    </div>
  );
};

export default WhishListHandler;
