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
import { IoIosArrowUp } from "react-icons/io";
import HandelCart from "./HandelCart";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductPage = () => {
  const [showMore, setShowMore] = useState(false);
  const { lang, setIsLoading, cart, update } = useContext(AppContext);
  const productId = useParams().productId;
  const [product, setProduct] = useState({});
  const [productInCart, setProductInCart] = useState({});
  console.log(product);
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
  }, [cart, update]);

  return (
    <>
      <div className="flex  flex-col lg:flex-row h-full lg:items-start">
        <div className="w-full ">
          {product.images ? (
            <>
              {[product.imageCover, ...product.images].map((e) => (
                <img key={e} src={e} className="w-full" alt="" />
              ))}
            </>
          ) : (
            <>
              {[product.imageCover].map((e) => (
                <img key={e} src={e} className="w-full" alt="" />
              ))}
            </>
          )}
        </div>
        <div className="lg:sticky lg:top-20 pr-20 pl-8 py-4 ">
          <div>
            <h1 className="text-[25px] font-medium mb-2">
              {lang === "en" ? product?.title_en : product?.title_ar}
            </h1>
            <div className="flex gap-2 items-center ">
              {product?.ratingsQuantity === 0 && <></>}
              {product?.ratingsAverage && (
                <>
                  {[...Array(Math.floor(product?.ratingsAverage))].map(
                    (_, index) => (
                      <BsStarFill color="gold" key={index} />
                    )
                  )}
                  {product?.ratingsAverage % 1 !== 0 && (
                    <BsStarHalf color="gold" />
                  )}
                  {[...Array(5 - Math.ceil(product?.ratingsAverage))].map(
                    (_, index) => (
                      <BsStarFill color="black" key={index} />
                    )
                  )}
                  ({product?.ratingsQuantity})
                </>
              )}
            </div>
            <h3 className="text-gray font-light">
              {" "}
              {lang === "en"
                ? product?.shortDescription_en
                : product?.shortDescription_ar}
            </h3>
            <h2 className="text-[20px] font-medium">
              {product?.priceAfterDiscount ? (
                <>
                  <del className="text-rose-500">${product?.price}</del>
                  <span className="mx-2">${product?.priceAfterDiscount}</span>
                </>
              ) : (
                <>${product?.price}</>
              )}
            </h2>
          </div>
          <HandelCart productInCart={productInCart} product={product} />
          <div>
            <div className="flex items-center gap-2 my-4">
              <img src={handcraftedIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">
                {lang === "en"
                  ? "Handcrafted with excellence"
                  : "مصنوعة بإتقان يدويًا"}
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={returnIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">
                {lang === "en"
                  ? "14 days return window"
                  : "نافذة إرجاع لمدة 14 يومًا"}
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={shipIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">
                {lang === "en"
                  ? "Ships globally"
                  : "يتم شحن المنتجات إلى جميع أنحاء العالم."}
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <img src={warrantyIcon} className="w-[30px]" alt="" />
              <p className="text-gray font-light ">
                {lang === "en" ? "1 year warranty" : "الضمان لمدة سنة"}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg">
              {lang === "en" ? "Highlights" : "نقاط بارزة"}
            </h2>
            <ul>
              {lang === "en"
                ? product?.highlights_en?.map((e) => (
                    <li key={e} className="text-gray text-opacity-50 my-2">
                      {e}
                    </li>
                  ))
                : product?.highlights_ar?.map((e) => (
                    <li key={e} className="text-gray text-opacity-50 my-2">
                      {e}
                    </li>
                  ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg">
              {lang === "en" ? "DESCRIPTION & DETAILS" : "الوصف والتفاصيل"}
            </h2>
            <p
              className={`transition-all text-gray text-opacity-50 my-2 ${
                showMore ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              {lang === "en"
                ? product?.description_en
                : product?.description_ar}
            </p>
            <div
              className="flex gap-2 items-center"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {lang === "en" ? (
                <>Show {showMore ? "less" : "more"}</>
              ) : (
                <>اعرض {showMore ? "اقل" : "اكثر"}</>
              )}
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
            <h4 className="font-semibold my-2">
              {lang === "en" ? "Complimentary Shipping" : "شحن مجاني"}
            </h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              {lang === "en"
                ? "We offer complimentary shipping & returns on all orders."
                : "نحن نقدم شحن مجاني وإمكانية الإرجاع على جميع الطلبات."}
            </p>
          </div>
          <div className="text-center">
            <img src={freeIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">
              {lang === "en"
                ? "Free Returns & Exchanges"
                : "إرجاع وتبادل مجاني"}
            </h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              {lang === "en"
                ? "Our client care experts are always here to help."
                : "خبراؤنا في خدمة العملاء دائمًا متاحون هنا للمساعدة."}
            </p>
          </div>
          <div className="text-center">
            <img src={dimIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">
              {lang === "en" ? "Ethically Sourced" : "مصدرة بأخلاق"}
            </h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              {lang === "en"
                ? "We proudly trace 100% of our rough diamonds to known mines and sources."
                : "نحن بفخر نتتبع 100% من الماس الخام لدينا إلى المناجم والمصادر المعروفة."}
            </p>
          </div>
          <div className="text-center">
            <img src={payIcon} className="w-[35px] mx-auto my-4" alt="" />
            <h4 className="font-semibold my-2">
              {lang === "en" ? "Pay With Affirm" : "الدفع ب affirm"}
            </h4>
            <p className="font-light text-sm text-gray text-opacity-60">
              {lang === "en"
                ? "Shop now and pay in interest free installments."
                : "تسوق الآن وادفع بأقساط بدون فوائد."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
