import { useContext, useEffect, useState } from "react";
import { AppContext, route } from "../../App";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

const MyAdresses = () => {
  const { lang, setIsLoading, setUpdate } = useContext(AppContext);
  const [addresses, setAddresses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const token = localStorage.getItem("token");
  const [refresh, setRefresh] = useState(0);
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
  }, [refresh]);
  const deletee = function (id) {
    setIsLoading(true);
    axios
      .delete(`${route}/api/v1/addresses/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {})
      .finally(() => {
        setIsLoading(false);
        setUpdate((prev) => prev + 1);

        setRefresh((prev) => prev + 1);
      });
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(
        `${route}/api/v1/addresses`,
        {
          alias: alias,
          details: details,
          phone: phone,
          city: city,
          postalCode: postalCode,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setRefresh((prev) => prev + 1);
        setUpdate((prev) => prev + 1);
        setPhone("");
        setCity("");
        setAlias("");
        setPostalCode("");
        setIsOpen(false);
      })
      .catch((err) => {
        err?.response?.data?.errors?.map((err) => {
          toast.error(err.msg);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="bg-dark border rounded-xl p-4 border-slate-300 my-10">
        <h1 className="text-2xl text-center font-semibold">
          {lang === "en" ? "Shipping information" : "بيانات التوصيل"}
        </h1>
        <div className="gap-4 grid md:grid-cols-2 sm:p-5 rounded-2xl border border-slate-300 my-8">
          {addresses?.map((add) => (
            <div
              key={add._id}
              className={`p-2 col-span-1 border border-slate-300 rounded-xl`}
            >
              <div className="flex gap-2 text-xl my-2">
                <span className=" font-semibold">
                  {lang === "en" ? "Title" : "العنوان"} :
                </span>
                <span>{add.alias}</span>
              </div>
              <div className="flex gap-2 text-xl my-2">
                <span className=" font-semibold">
                  {lang === "en" ? "Phone number" : "رقم الهاتف"} :
                </span>
                <span>{add.phone}</span>
              </div>
              <div className="flex gap-2 text-xl my-2">
                <span className=" font-semibold">
                  {lang === "en" ? "City" : "المدينة"} :
                </span>
                <span>{add.city}</span>
              </div>
              <div className="flex gap-2 text-xl my-2">
                <span className=" font-semibold">
                  {lang === "en" ? "Postal code" : "الرمز البريدي"} :
                </span>
                <span>{add.postalCode}</span>
              </div>
              <div className="flex gap-2 text-xl my-2">
                <span className=" font-semibold">
                  {lang === "en" ? "Details" : "التفاصيل"} :
                </span>
                <span>{add.details}</span>
              </div>
              <button
                className="py-3 font-semibold rounded-xl text-lg block w-1/2 mt-4 mb-2 text-center   bg-rose-500 text-white"
                onClick={() => deletee(add._id)}
              >
                {lang === "en" ? "Delete" : "مسح"}
              </button>
            </div>
          ))}
          {addresses.length === 0 && (
            <span className="text-dark block text-center text-xl">
              You have no Addresses{" "}
            </span>
          )}
        </div>
        <button
          className=" block w-[300px] hover:bg-blue border-slate-300 border transition-all hover:text-white py-3 text-xl font-semibold mx-auto rounded-xl"
          onClick={() => setIsOpen(true)}
        >
          {lang === "en" ? "Add Shipping information" : "اضف بيانات التوصيل"}
        </button>
      </div>
      {isOpen && (
        <div className="fixed w-full h-full bg-[#000] bg-opacity-75 flex justify-center items-center top-0 right-0 z-[1000]">
          <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="bg-white">
              <div
                onClick={() => setIsOpen(false)}
                className="w-fit ml-auto mb-5 cursor-pointer"
              >
                <AiFillCloseCircle size={30} />
              </div>
              <div>
                <label>{lang === "en" ? "Title" : "العنوان"} :</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setAlias(e.target.value)}
                  value={alias}
                />
              </div>
              <div>
                <label>{lang === "en" ? "Phone number" : "رقم الهاتف"} :</label>

                <PhoneInput
                  country={"eg"}
                  className="w-full"
                  value={phone}
                  onChange={(e) => setPhone(e)}
                />
              </div>
              <div>
                <label>{lang === "en" ? "City" : "المدينة"} :</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>
              <div>
                <label>
                  {lang === "en" ? "Postal Code" : "الرمز البريدي"} :
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                  value={postalCode}
                />
              </div>
              <div>
                <label>{lang === "en" ? "Details" : "التفاصيل"} :</label>
                <textarea
                  type="text"
                  required
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                ></textarea>
              </div>
              <button type="submit">{lang === "en" ? "Add" : "اضف"}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAdresses;
