import { useContext, useEffect, useState } from "react";
import handcraftedIcon from "../../assets/Handcrafted.svg";
import returnIcon from "../../assets/return.svg";
import shipIcon from "../../assets/ship.svg";
import warrantyIcon from "../../assets/warranty.svg";
import shippingIcon from "../../assets/complimentary.svg";
import freeIcon from "../../assets/free.svg";
import dimIcon from "../../assets/dim.svg";
import payIcon from "../../assets/pay.svg";
import axios from "axios";
import { AppContext, route } from "../../App";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";
import { IoIosArrowUp } from "react-icons/io";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const { setIsLoading, cart, update, setUpdate } = useContext(AppContext);
  const token = localStorage.getItem("token");
  const productId = useParams().productId;
  const [product, setProduct] = useState({});
  const [productInCart, setProductInCart] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${route}/api/v1/products/${productId}`)
      .then((res) => {
        setProduct(res?.data?.data);
      })
      .finally(() => setIsLoading(false));
  }, [productId]);

  // get current product from cart
  useEffect(() => {
    setProductInCart(
      cart?.cartItems?.filter((item) => item?.product?._id === productId)[0]
    );
    console.log(productInCart);
    if (productInCart?.quantity) {
      setQuantity(productInCart?.quantity);
    }
  }, [cart, update]);
  const addToCart = function () {
    setIsLoading(true);
    if (productInCart?._id) {
      axios
        .put(
          `${route}/api/v1/cart/${productInCart._id}`,
          {
            quantity: quantity,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          toast.success("Prodcut quantity has been updated");
          setUpdate((prev) => prev + 1);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            toast.error("You must login before add items to Shoping Cart");
            localStorage.clear();
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      axios
        .post(
          `${route}/api/v1/cart`,
          {
            productId: productId,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Product in you cart now");
          setUpdate((prev) => prev + 1);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            toast.error("You must login before add items to Shoping Cart");
            localStorage.clear();
          }
        })
        .finally(() => setIsLoading(false));
    }
  };
  const removeFromCart = function () {
    setIsLoading(true);
    axios
      .delete(`${route}/api/v1/cart/${productInCart._id}`, {
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
      <div className="flex  container mx-auto mix-blend-saturation">
        <div className="p-4">
          <img
            src="https://jacobandco.shop/cdn/shop/t/2/assets/9214962843381x2254-1648758084998.jpg?v=1648758087"
            alt=""
          />
        </div>
        <div className="grid-cols-1 w-[350px] p-4">
          <div>
            <h1 className="text-[25px] font-medium mb-2">{product?.title}</h1>
            <h3 className="text-gray font-light  ">Short des here</h3>
            <h2 className="text-[20px] font-medium">
              {product?.priceAfterDiscount ? (
                <>
                  <del className="text-rose-500">
                    ${product?.priceAfterDiscount}
                  </del>
                  <span className="mx-2">${product?.price}</span>
                </>
              ) : (
                <>{product?.price}</>
              )}
            </h2>
          </div>
          <div>
            <div className="my-4 flex gap-4 items-center">
              Quantitiy
              <div className="flex items-center gap-2">
                {quantity > 1 && (
                  <button
                    className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-[#d9d9d9]"
                    onClick={() => setQuantity((prev) => prev - 1)}
                  >
                    -
                  </button>
                )}
                <div className="w-6 rounded-md h-6 flex items-center justify-center border border-[#d1d5db] text-gray text-opacity-50">
                  {quantity}
                </div>
                <button
                  className="w-6 rounded-md h-6 flex items-center justify-center text-white bg-[#d9d9d9]"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {productInCart && (
              <button
                onClick={removeFromCart}
                className="block w-[300px] py-[12px] text-white text-[19px] uppercase bg-rose-500 text-center"
              >
                Remove item from cart
              </button>
            )}
            <button className="block w-[300px] my-4 py-[12px] text-white text-[19px] uppercase bg-blue text-center">
              buy now
            </button>
            <button
              onClick={addToCart}
              className="block w-[300px] py-[12px] text-[19px] text-gray my-4 border border-[#d9d9d9] uppercase text-center"
            >
              {productInCart ? "Update product quantity" : "add to cart"}
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <img src={handcraftedIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">
                Handcrafted with excellence
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={returnIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">14 days return window </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={shipIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">Ships globally</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={warrantyIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">1 year warranty</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg">SIZE & MATERIAL</h2>
            <ul>
              <li className="text-gray text-opacity-50 my-2">Ref: 92253318</li>
              <li className="text-gray text-opacity-50 my-2">
                Metal: 18k Yellow Gold
              </li>
              <li className="text-gray text-opacity-50 my-2">Weight: 4.1g</li>
              <li className="text-gray text-opacity-50 my-2">
                Chain Length: 4.25
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg">DESCRIPTION & DETAILS</h2>
            <p
              className={`transition-all text-gray text-opacity-50 my-2 ${
                showMore ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              {product?.description}
            </p>
            <div
              className="flex gap-2 items-center"
              onClick={() => setShowMore((prev) => !prev)}
            >
              Show {showMore ? "less" : "more"}
              <span
                className={`transition-all ${
                  showMore ? "rotate-0" : "rotate-180"
                }`}
              >
                <IoIosArrowUp />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fdfbf6] py-8">
        <div className="container mx-auto sm:grid sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <img src={shippingIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">Complimentary Shipping</h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              We offer complimentary shipping & returns on all orders.
            </p>
          </div>
          <div className="text-center">
            <img src={freeIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">Free Returns & Exchanges</h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              Our client care experts are always here to help.
            </p>
          </div>
          <div className="text-center">
            <img src={dimIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">Ethically Sourced</h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              We proudly trace 100% of our rough diamonds to known mines and
              sources.
            </p>
          </div>
          <div className="text-center">
            <img src={payIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">Pay With Affirm</h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              Shop now and pay in interest free installments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
