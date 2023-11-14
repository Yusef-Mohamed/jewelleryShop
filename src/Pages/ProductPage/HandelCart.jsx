import axios from "axios";
import { AppContext, route } from "../../App";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";

const HandelCart = ({ product, productInCart }) => {
  const { lang, setUpdate, setIsLoading } = useContext(AppContext);
  const [size, setSize] = useState("");
  const [sizeType, setSizeType] = useState("");
  const [color, setColor] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (product?.sizes?.length !== 0) {
      setSizeType("stander");
    }
  }, [product]);
  const addToCart = function (e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        `${route}/api/v1/cart`,
        {
          productId: product._id,
          quantity: 1,
          size: size,
          color: color,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Product in you cart now");
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        if (err.response.status == 500 || err.response.status == 401) {
          toast.error("You must login before add items to wish list");
          localStorage.removeItem("token");
          localStorage.removeItem("data");
        }
      })
      .finally(() => setIsLoading(false));
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
        if (err.response.status == 500 || err.response.status == 401) {
          toast.error("You must login before add items to wish list");
          localStorage.removeItem("token");
          localStorage.removeItem("data");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      {productInCart ? (
        <button
          onClick={removeFromCart}
          className="block w-[300px] py-[12px] text-white text-[19px] uppercase bg-rose-500 text-center"
        >
          {lang === "en" ? "Remove item from cart" : "مسح المنتج من السلة"}
        </button>
      ) : (
        <form onSubmit={(e) => addToCart(e)}>
          {(product?.size_EU?.length !== 0 ||
            product?.size_UK?.length !== 0 ||
            product?.sizes?.length !== 0 ||
            product?.size_US?.length !== 0 ||
            product?.size_Japan?.length !== 0 ||
            product?.size_ChinaTops?.length !== 0 ||
            product?.size_ChinaButtoms?.length !== 0 ||
            product?.size_Mexico?.length !== 0 ||
            product?.size_korea?.length !== 0 ||
            product?.size_Brazil?.length !== 0 ||
            product?.size_CM?.length !== 0 ||
            product?.size_In?.length !== 0) && (
            <div className="flex gap-3 my-2 items-center">
              <label htmlFor="">
                {lang === "en" ? "Sizes type" : "نوع المقاسات"}:
              </label>
              <select
                onChange={(e) => setSizeType(e.target.value)}
                required
                className="border border-slate-300 px-4 py-1"
              >
                <option value="" disabled selected>
                  {lang === "en" ? "Sizes" : "المقاسات"}
                </option>
                {product?.sizes?.length !== 0 && (
                  <option value="stander" selected={sizeType === "stander"}>
                    stander
                  </option>
                )}
                {product?.size_france?.length !== 0 && (
                  <option value="france">france</option>
                )}
                {product?.size_italy?.length !== 0 && (
                  <option value="italy">italy</option>
                )}
                {product?.size_EU?.length !== 0 && (
                  <option value="eu">EU</option>
                )}
                {product?.size_UK?.length !== 0 && (
                  <option value="uk">UK</option>
                )}
                {product?.size_US?.length !== 0 && (
                  <option value="us">US</option>
                )}
                {product?.size_Japan?.length !== 0 && (
                  <option value="japan">Japan</option>
                )}
                {product?.size_ChinaTops?.length !== 0 && (
                  <option value="ChinaTops">ChinaTops</option>
                )}
                {product?.size_ChinaButtoms?.length !== 0 && (
                  <option value="ChinaButtoms">ChinaButtoms</option>
                )}
                {product?.size_korea?.length !== 0 && (
                  <option value="korea">Korea</option>
                )}
                {product?.size_Mexico?.length !== 0 && (
                  <option value="mexico">Mexico</option>
                )}
                {product?.size_Brazil?.length !== 0 && (
                  <option value="brazil">Brazil</option>
                )}
                {product?.size_CM?.length !== 0 && (
                  <option value="cm">CM</option>
                )}
                {product?.size_In?.length !== 0 && (
                  <option value="in">IN</option>
                )}
              </select>
            </div>
          )}
          {sizeType !== "" && (
            <div className="flex gap-3 my-2 items-center">
              <label htmlFor="">{lang === "en" ? "Sizes" : "المقاسات"}:</label>
              <select
                onChange={(e) => setSize(e.target.value)}
                required
                className="border border-slate-300 px-4 py-1"
              >
                <option value="" disabled selected>
                  {lang === "en" ? "Sizes" : "المقاسات"}
                </option>
                {sizeType === "stander" &&
                  product?.sizes?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "eu" &&
                  product?.size_EU?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "france" &&
                  product?.size_france?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "italy" &&
                  product?.size_italy?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "uk" &&
                  product?.size_UK?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "us" &&
                  product?.size_US?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "japan" &&
                  product?.size_Japan?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "ChinaTops" &&
                  product?.size_ChinaTops?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "ChinaButtoms" &&
                  product?.size_ChinaButtoms?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "korea" &&
                  product?.size_korea?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
                {sizeType === "mexico" &&
                  product?.size_Mexico?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}

                {sizeType === "brazil" &&
                  product?.size_Brazil?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}

                {sizeType === "cm" &&
                  product?.size_CM?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}

                {sizeType === "in" &&
                  product?.size_In?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {product?.sizes?.colors !== 0 && (
            <div className="flex gap-3  items-center">
              <label htmlFor="">{lang === "en" ? "Colors" : "الوان"}:</label>
              <select
                onChange={(e) => setColor(e.target.value)}
                required
                className="border border-slate-300 px-4 py-1"
              >
                <option value="" disabled selected>
                  {lang === "en" ? "Colors" : "الوان"}
                </option>
                {product?.colors?.map((e) => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button className="block w-[300px] py-[12px] text-[19px] text-gray my-4 border border-[#d9d9d9] uppercase text-center hover:text-white hover:bg-blue transition-all">
            {lang === "en" ? "add to cart" : "اضف الي السلة"}
          </button>
        </form>
      )}
    </div>
  );
};

export default HandelCart;
