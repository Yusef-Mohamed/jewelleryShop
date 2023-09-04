import { useEffect, useState } from "react";
import { route } from "../../App";

const MyProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    setIsLoading(true);
    fetch(`${route}store/products/MyProducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setProducts(data.data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="bg-dark border rounded-xl p-4 border-slate-300 my-10">
      <h1 className="text-2xl text-gold bg-lightGold w-fit px-5 py-3 pb-4 rounded-2xl">
        مشترياتي
      </h1>
      <div className=" sm:p-5 rounded-2xl border border-slate-300 my-8">
        {products.map((item) => (
          <div
            key={item._id}
            className="border-b  border-b-sla3border-slate-300 p-4 flex justify-center items-center flex-col gap-4 sm:flex-row sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imageCover}
                className="w-[60px]"
                alt=""
                style={{ aspectRatio: "6/4" }}
              />
              <h2>{item?.title}</h2>
            </div>
            <a
              href={item.pdf}
              download={item.title}
              className="flex items-center "
            >
              <div className="px-2 gap-2 flex justify-center items-center rounded-full bg-lightGold text-gold cursor-pointer mr-5 h-8">
                <i className="fa-solid fa-download"></i>
                تحميل
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
