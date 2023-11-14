import { useContext, useEffect, useState } from "react";
import { AppContext, route } from "../../App";
import axios from "axios";
import ProfileProduct from "../../components/ProfileProduct";

const MyProducts = () => {
  const { lang } = useContext(AppContext);
  const [order, setOrder] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${route}/api/v1/orders`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setOrder(res.data.data);
      });
  }, []);

  return (
    <div className="bg-dark border rounded-xl p-4 border-slate-300 my-10">
      <h1 className="text-2xl mb-4 text-center font-semibold">
        {lang === "en" ? "My orders" : "طلباتي"}
      </h1>
      <div className="overflow-x-auto md:w-full md:max-w-full ">
        {order.map((order) => (
          <div
            key={order.id}
            className="my-2 border-slate-300 border rounded-xl"
          >
            {/* {order.shippingAddress ? (
              <div className="py-4">{order.shippingAddress.city}</div>
            ) : (
              <div className="py-4">Not Found</div>
            )} */}
            <h2 className="text-center text-2xl my-4 font-semibold">
              {lang === "en" ? "Order products" : "منتجات الطلب"}{" "}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {order?.cartItems?.map((e, ind) => (
                <ProfileProduct e={e} key={ind} />
              ))}
            </div>
            <div className="flex gap-8 justify-between text-xl font-semibold p-4">
              <div>
                {lang === "en" ? "Order total price" : "السعر الكلي للطلب"} :{" "}
                <span className="text-rose-500 font-bold">
                  {order.totalOrderPrice}$
                </span>
              </div>
              <div>
                {lang === "en" ? "Delivery" : "التوصيل"} :
                <span className="text-green-500 font-bold">
                  {order.isDelivered
                    ? lang === "en"
                      ? "Done"
                      : "تم التوصيل"
                    : lang === "en"
                    ? "On progress"
                    : "يتم الشحن الان"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
