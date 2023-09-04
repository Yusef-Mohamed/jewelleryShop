import MyProducts from "./MyProducts";
import EditPassword from "./EditPassword";
import EditData from "./EditData";
import { AppContext, route } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
const Profile = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const token = localStorage.getItem("token");
  const { setLoading } = useContext(AppContext);
  const nav = useNavigate();

  const onActive = async () => {
    setLoading(true);
    fetch(`${route}auth/sendVerifyCode`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.succes === "true") {
          nav("/active");
        }
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4 w-full">
      <div className="bg-dark border rounded-xl p-4 border-slate-300 ">
        <div className="relative w-[150px] h-[150px] skeleton border border-slate-300 mx-auto rounded-full flex justify-center items-center">
          <i className="text-6xl fa-solid fa-user"></i>
          <img
            src={data?.profileImg}
            onError={(e) => e.target.classList.add("opacity-0")}
            className={`absolute w-full h-full top-0 right-0 rounded-full ${
              data?.profileImg ? "" : "opacity-0"
            }`}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-center my-4 text-xl">{data.name}</h1>
          <h2 className="text-center text-lightGray text-sm">{data.country}</h2>
        </div>
        {/* {data?.emailVerified === false && (
          <div
            onClick={onActive}
            className="my-4 cursor-pointer w-1/2 mx-auto text-center bg-red text-re py-2 rounded-xl"
          >
            تفعيل بريدك الالكتروني
          </div>
        )} */}
        <div className="text-center my-4">{data.phone}</div>
        <div className="text-center my-4">{data.email}</div>
        <div className="flex flex-wrap justify-center gap-4">
          <EditPassword />
          <EditData />
        </div>
      </div>
      <MyProducts />
    </div>
  );
};

export default Profile;
