import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AppContext, route } from "../App";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItemCard from "./CartItemCard";
import { toast } from "react-hot-toast";
import { BiSolidDiscount } from "react-icons/bi";
const Cart = () => {
  const token = localStorage.getItem("token");
  const { setCart, cart, setIsLoading, update } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  useEffect(() => {
    axios
      .get(`${route}/api/v1/cart`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res);
        setCart(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.status === 401) {
          localStorage.clear();
        } else if (err?.response?.status === 404) {
          setCart([]);
        }
      });
  }, [update]);
  const addCoupon = function (e) {
    setIsLoading(true);
    e.preventDefault();
    axios
      .put(
        `${route}/api/v1/cart/applaycoupon`,
        { coupon: coupon },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Coupon added to your cart");
        setCart(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data) {
          err.response.data.errors.map((e) => toast.error(e.msg));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <button className="relative" onClick={() => setIsOpen(true)}>
        <LiaShoppingBagSolid size={30} />
        <span className="absolute w-5 h-5 -bottom-2 -right-1 bg-black text-sm font-semibold flex items-center justify-center rounded-full text-white">
          {cart?.cartItems?.length ? cart?.cartItems?.length : 0}
        </span>
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }  fixed w-full z-10 h-full top-0 right-0 transition-all`}
      >
        <div
          className={`bg-black w-full bg-opacity-50`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
        <div className="bg-white p-6  min-w-[30%] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <LiaShoppingBagSolid size={30} />
                <h2 className="whitespace-nowrap font-semibold">
                  Shopping cart
                </h2>
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
              {cart?.cartItems?.map((cartItem) => (
                <CartItemCard
                  onClose={setIsOpen}
                  item={cartItem}
                  key={cartItem._id}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="w-full flex justify-between">
              <span>Cart total price</span>
              <div>
                {cart?.totalCartpriceAfterDiscount ? (
                  <>
                    <del className="text-rose-500 mx-2">
                      ${cart?.totalCartprice}
                    </del>
                    ${cart?.totalCartpriceAfterDiscount}
                  </>
                ) : (
                  cart?.totalCartprice
                )}
              </div>
            </div>
            <form className="relative flex my-4" onSubmit={(e) => addCoupon(e)}>
              <input
                onChange={(e) => setCoupon(e.target.value)}
                type="text"
                placeholder="Add Coupon"
                className="block w-full  py-[8px] border border-slate-300 pl-12 placeholder:text-gray  text-[19px] uppercase "
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-4">
                <BiSolidDiscount size={22} />
              </div>
              <button className="px-4 bg-blue text-white" type="submit">
                Add
              </button>
            </form>
            <button className="block w-full my-4 py-[12px] text-white text-[19px] uppercase bg-blue text-center">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
