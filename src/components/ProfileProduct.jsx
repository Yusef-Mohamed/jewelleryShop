import { useContext, useEffect, useState } from "react";
import { AppContext, route } from "../App";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";

const ProfileProduct = ({ e }) => {
  const [addingReview, setAddingReview] = useState(false);
  const { lang, setIsLoading, update, setUpdate } = useContext(AppContext);
  const [rating, setRating] = useState(1);
  const [myRating, setMyRating] = useState(1);
  const [edit, setEdit] = useState("");
  const myId = JSON.parse(localStorage.getItem("data"))?._id;
  useEffect(() => {
    axios
      .get(`${route}/api/v1/products/${e?.product?._id}/reviews?user=${myId}`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data[0]._id) {
          setEdit(res.data.data[0]._id);
          setRating(res.data.data[0].ratings);
          setMyRating(res.data.data[0].ratings);
        }
      });
  }, [update]);
  const token = localStorage.getItem("token");
  const handleRatingClick = (value) => {
    setRating(value);
  };
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <AiFillStar
        onClick={() => handleRatingClick(index + 1)}
        key={index}
        className={`text-4xl lg:text-5xl ${
          index + 1 <= rating ? "text-[gold]" : "text-slate-600"
        }`}
      />
    ));
  };

  let handel = async function () {
    setIsLoading(true);
    if (edit !== "") {
      await axios
        .put(
          `${route}/api/v1/reviews/${edit}`,
          {
            ratings: rating,
            product: e?.product?._id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Review has been updated");
            setUpdate((prev) => prev + 1);
            setAddingReview(false);
          }
        })
        .catch((err) => {
          if (err.error.statusCode === 403) {
            toast.error("Admin cannot add review");
          }
        });
    } else {
      await axios
        .post(
          `${route}/api/v1/reviews`,
          {
            ratings: rating,
            product: e?.product?._id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            toast.success("Review has been added");
            setAddingReview(false);
            setUpdate((prev) => prev + 1);
          }
        })
        .catch((err) => {
          if (err?.error?.statusCode === 403) {
            toast.error("Admin cannot add review");
          }
          if (err?.response?.status === 400) {
            toast.error("You already have a review ");
          }
        });
    }
    setIsLoading(false);
  };
  const deletee = function () {
    setIsLoading(true);

    axios
      .delete(`${route}/api/v1/reviews/${edit}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          toast.success("Review has been deleted");
          setUpdate((prev) => prev + 1);
          setEdit("");
          setRating(1);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {addingReview && (
        <div className="bg-black fixed w-full h-full top-0 right-0 bg-opacity-75 flex items-center justify-center  z-[20]">
          <div className="bg-white p-4 rounded-xl">
            <h2 className="text-lg text-center mb-6 font-semibold">
              {lang === "en" ? "Add Review" : "أضف تقييم"}
            </h2>
            <div className="flex gap-2 my-6">{renderStars()}</div>
            <div className="flex gap-4 items-center justify-center">
              <button
                onClick={handel}
                className="bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
              >
                {lang === "en" ? "Add Review" : "أضف تقييم"}
              </button>
              <button
                onClick={() => setAddingReview(false)}
                className=" bg-rose-500 text-white font-semibold rounded-lg px-4 py-2"
              >
                {lang === "en" ? "Close" : "اغلق"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        key={e._id}
        className="my-2 text-center border border-slate-300 p-2 m-2 rounded-lg"
      >
        {e.product === null && "this product deleted from our store"}
        {e.product !== null && (
          <>
            <img src={e.product?.imageCover} alt="" />
            <h6 className="my-1 line-clamp-1">
              {lang === "en" ? e.product.title_en : e.product.title_ar}
            </h6>
            <h6 className="text-sm">{e.price}$</h6>
            <h6 className="text-sm">
              <h6>
                {lang === "en" ? "Size" : "المقاس"} : {e.size}
              </h6>
              <h6>
                {lang === "en" ? "Color" : "اللون"} : {e.color}
              </h6>
            </h6>
            {edit && (
              <div className="mt-2 flex items-center justify-center gap-2">
                {[...Array(myRating)].map((_, index) => (
                  <BsStarFill color="gold" key={index} />
                ))}
                {[...Array(5 - myRating)].map((_, index) => (
                  <BsStarFill color="black" key={index} />
                ))}
                ({lang === "en" ? "my review" : "تقييمي"})
              </div>
            )}
            <div className="flex gap-4 items-center mt-4 justify-center">
              <button
                onClick={() => setAddingReview(true)}
                className="bg-green-500 text-white font-semibold rounded-lg px-2 py-1 text-sm"
              >
                {edit ? (
                  <>{lang === "en" ? "Edit my review" : "تعديل تقييمي"}</>
                ) : (
                  <>{lang === "en" ? "Add Review" : "أضف تقييم"}</>
                )}
              </button>
              {edit && (
                <button
                  onClick={deletee}
                  className="bg-rose-500 text-white font-semibold rounded-lg px-2 py-1 text-sm"
                >
                  {lang === "en" ? "Delete my review" : "امسح تقييمي"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileProduct;
