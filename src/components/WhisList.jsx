import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext, route } from "../App";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

import WishCard from "./WishCard";
const WhisList = () => {
  const token = localStorage.getItem("token");
  const { wishList, setWishList, update } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${route}/api/v1/wishlist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setWishList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.status === 401) {
          localStorage.clear();
        } else if (err?.response?.status === 404) {
          setWishList([]);
        }
      });
  }, [update]);
  return (
    <div>
      <button className="relative" onClick={() => setIsOpen(true)}>
        <AiOutlineHeart size={30} />
        <span className="absolute w-5 h-5 -bottom-2 -right-1 bg-black text-sm font-semibold flex items-center justify-center rounded-full text-white">
          {wishList?.length ? wishList?.length : 0}
        </span>
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }  fixed w-full h-full top-0 right-0 transition-all`}
      >
        <div
          className={`bg-black w-full bg-opacity-50`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
        <div className="bg-white p-6 flex flex-col gap-4 min-w-[30%]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <AiOutlineHeart size={30} />
              <h2 className="whitespace-nowrap font-semibold">Shopping cart</h2>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <IoIosCloseCircleOutline size={30} />
            </button>
          </div>
          <div>
            {wishList?.map((item) => (
              <WishCard onClose={setIsOpen} item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhisList;
