import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AppContext, route } from "../App";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItemCard from "./CartItemCard";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
const Cart = () => {
  const token = localStorage.getItem("token");
  const { lang, setCart, cart, setIsLoading, update } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [windowOpen, setWindowOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [timeValue, setTimeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const getFormattedDate = function (num) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + num);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // يبدأ الشهر من 0
    const day = currentDate.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  };

  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`${route}/api/v1/cart`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setCart(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("data");
        } else if (err?.response?.status === 404) {
          setCart([]);
        }
      });
  }, [update, refresh]);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/addresses`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setAddresses(res.data.data);
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
        console.log(err);
        if (err?.response?.data) {
          toast.error(err.response.data?.message);
          err.response.data.errors.map((e) => toast.error(e.msg));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const removeCoupon = function (e) {
    setIsLoading(true);
    e.preventDefault();
    axios
      .put(
        `${route}/api/v1/cart/removecoupon`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Coupon deleted from your cart");
        setCart(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.data) {
          toast.error(err.response.data?.message);
          err.response.data.errors.map((e) => toast.error(e.msg));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handelOrder = function (e) {
    e.preventDefault();
    if (timeValue !== "" && dateValue !== "") {
      setIsLoading(true);

      axios
        .post(
          `${route}/api/v1/orders/checkout-session/${cart._id}`,
          {
            metadataObject: {
              details: addresses[selectedAddress].details,
              phone: addresses[selectedAddress].phone,
              city: addresses[selectedAddress].city,
              postalCode: addresses[selectedAddress].postalCode,
              arrivalTime: dateValue + "T" + timeValue,
            },
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          window.location = res.data.session.url;
        })
        .finally(() => setIsLoading(false));
    } else {
      toast.error("You have to chose date");
    }
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
        <div className="bg-white p-6 overflow-y-auto  sm:min-w-[40%] min-w-[80%] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <LiaShoppingBagSolid size={30} />
                <h2 className="whitespace-nowrap font-semibold">
                  {lang === "en" ? "Shopping cart" : "سلة المشتريات"}
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
              <span>{lang === "en" ? "Cart price" : "سعر سلة المشتريات"}</span>
              <div>${cart?.totalCartprice}</div>
            </div>
            <div className="w-full my-4 flex items-center justify-between">
              <div>
                <span>{lang === "en" ? "Coupon discount" : "خصم الكوبون"}</span>
                {cart?.totalCartpriceAfterDiscount !== 0 && (
                  <button
                    className="block w-fit mt-1 text-xs text-rose-500"
                    onClick={removeCoupon}
                  >
                    {lang === "en" ? "remove discount" : "إزالة الخصم"}
                  </button>
                )}
              </div>
              <div>
                {cart?.totalCartpriceAfterDiscount ? (
                  <>
                    $
                    {(
                      cart?.totalCartprice - cart?.totalCartpriceAfterDiscount
                    ).toFixed(2)}
                  </>
                ) : (
                  <>$0</>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between">
              <span>
                {lang === "en"
                  ? "Cart total price"
                  : "اجمالي سعر سلة المشتريات"}
              </span>
              <div>
                $
                {cart?.totalCartpriceAfterDiscount
                  ? cart?.totalCartpriceAfterDiscount
                  : cart?.totalCartprice}
              </div>
            </div>

            <form className="relative flex my-4" onSubmit={(e) => addCoupon(e)}>
              <input
                onChange={(e) => setCoupon(e.target.value)}
                type="text"
                placeholder={
                  lang === "en" ? "Add Discount Coupon" : "اضف كوبون خصم"
                }
                className="block placeholder:text-sm w-full border border-slate-300 px-4 sm:px-12 placeholder:text-gray py-2 sm:py-3 uppercase "
              />

              <button className="px-2 sm:px-4 bg-blue text-white" type="submit">
                {lang === "en" ? "Add" : "اضف"}
              </button>
            </form>
            <button
              onClick={() => setWindowOpen(true)}
              className="rounded-xl block w-full my-4 sm:py-[12px] py-[8px] text-white sm:text-[19px] text-sm uppercase bg-blue text-center"
            >
              {lang === "en" ? "Check out" : "قم بالشراء"}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          windowOpen ? "flex" : "hidden"
        } bg-black items-center justify-center bg-opacity-75 fixed w-full z-10 h-full top-0 right-0 transition-all`}
      >
        <div className="p-4 max-h-[80vh] overflow-auto bg-white rounded-xl sm:min-w-[50%] min-w-[90%]">
          <button
            onClick={() => {
              setWindowOpen(false);
            }}
          >
            <IoIosCloseCircleOutline size={30} />
          </button>
          <h1 className="text-center text-xl font-semibold">
            {lang === "en" ? "Check out" : "اتمام الشراء"}
          </h1>
          <form onSubmit={(e) => handelOrder(e)}>
            <div className="my-2 formGroup">
              <label>
                {lang === "en" ? "Shipping info" : "معلومات التوصيل"} :
              </label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "new") {
                    nav("/profile");
                    setWindowOpen(false);
                    setIsOpen(false);
                    e.target.value = "";
                  } else {
                    setSelectedAddress(e.target.value);
                  }
                }}
              >
                <option disabled value="" selected>
                  {lang === "en" ? "select" : "اختر"}
                </option>
                {addresses.map((address, ind) => (
                  <option value={ind} key={address._id}>
                    {`${address.alias} - ${address.city}`}
                  </option>
                ))}
                <option value="new">
                  {lang === "en" ? "Add new" : "اضف تفاصيل جديدة"}
                </option>
              </select>
              <div className="my-4">
                <h2>
                  {lang === "en" ? "Shipping will done in:" : "سيتم الشحن في:"}
                  {dateValue}
                </h2>
                <h2 className="mt-4 font-semibold ">
                  {lang === "en" ? "Chose receipt day:" : "أختر يوم الإستلام:"}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 shipping-times">
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setDateValue(e.target.value)}
                      name="btn-2"
                      value={getFormattedDate(1)}
                    />
                    <label className="btn">{getFormattedDate(1)}</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setDateValue(e.target.value)}
                      name="btn-2"
                      value={getFormattedDate(2)}
                    />
                    <label className="btn">{getFormattedDate(2)}</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setDateValue(e.target.value)}
                      name="btn-2"
                      value={getFormattedDate(3)}
                    />
                    <label className="btn">{getFormattedDate(3)}</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setDateValue(e.target.value)}
                      name="btn-2"
                      value={getFormattedDate(4)}
                    />
                    <label className="btn">{getFormattedDate(4)}</label>
                  </div>
                </div>
                <h2 className="mt-4 font-semibold ">
                  {lang === "en"
                    ? "Chose receipt hour:"
                    : "أختر ساعة الإستلام:"}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 shipping-times">
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="12:00"
                    />
                    <label className="btn">12pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="13:00"
                    />
                    <label className="btn">1pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="14:00"
                    />
                    <label className="btn">2pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="15:00"
                    />
                    <label className="btn">3pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="16:00"
                    />
                    <label className="btn">4pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="17:00"
                    />
                    <label className="btn">5pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="18:00"
                    />
                    <label className="btn">6pm</label>
                  </div>
                  <div className="option relative">
                    <input
                      type="radio"
                      onChange={(e) => setTimeValue(e.target.value)}
                      name="btn"
                      value="19:00"
                    />
                    <label className="btn">7pm</label>
                  </div>
                </div>
              </div>
            </div>

            <button className="block w-full mt-4 rounded-xl py-[12px] text-white text-[19px] uppercase bg-blue text-center">
              {lang === "en" ? "Check out" : "قم بالشراء"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
