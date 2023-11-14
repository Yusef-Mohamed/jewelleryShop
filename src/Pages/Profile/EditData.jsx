import { useContext, useState } from "react";
import { AppContext, route } from "../../App";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SelectCountries from "../../components/SelectCountries";
const EditData = () => {
  const token = localStorage.getItem("token");
  const dataa = JSON.parse(localStorage.getItem("data"));
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoading, lang } = useContext(AppContext);
  const [name, setName] = useState(dataa.name);
  const [profileImg, setProfileImg] = useState(null);
  const [phone, setPhone] = useState(dataa?.phone);
  const [country, setCountry] = useState(dataa?.country);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImg(file);
    } else {
      setProfileImg(null);
    }
  };

  const handelSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    if (name) {
      formData.append("name", name);
    }
    if (country) {
      formData.append("country", country);
    }
    if (phone) {
      formData.append("phone", phone);
    }

    if (profileImg) {
      formData.append("profileImg", profileImg);
    }
    axios
      .put(`${route}/api/v1/users/changeMyData`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Done");
        if (res.data) {
          localStorage.setItem("data", JSON.stringify(res.data.data));
        }
        setIsOpen(false);
      })
      .catch((err) => {
        toast.error("Something went wrong");
        if (err?.response?.status === 400) {
          toast.error("invalid data");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed w-full h-full bg-[#000] bg-opacity-75 flex justify-center items-center top-0 right-0 z-[1000]">
          <div className="form">
            <form onSubmit={(e) => handelSubmit(e)} className="bg-white">
              <div
                onClick={() => setIsOpen(false)}
                className="w-fit ml-auto mb-5 cursor-pointer"
              >
                <AiFillCloseCircle size={30} />
              </div>
              <div>
                <label>{lang === "en" ? "Name" : "الاسم"}:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label>{lang === "en" ? "Phone number" : "رقم الهاتف"}:</label>

                <PhoneInput
                  country={"eg"}
                  className="w-full"
                  value={phone}
                  onChange={(e) => setPhone(e)}
                />
              </div>
              <div className="relative  w-full">
                <label>
                  {lang === "en" ? "Profile image" : "الصورة الشخصية"}:
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  placeholder="upload your image"
                />
              </div>
              <div>
                <label>{lang === "en" ? "Country" : "الدولة"} : *</label>
                <button
                  className="w-full"
                  type="button"
                  onClick={() => setIsCountryOpen(true)}
                  style={{ width: "100%" }}
                >
                  {country ? country : lang === "en" ? "Select" : "اختر"}
                </button>
                <SelectCountries
                  onChange={setCountry}
                  isOpen={isCountryOpen}
                  setIsOpen={setIsCountryOpen}
                />
              </div>
              <button type="submit">{lang === "en" ? "Edit" : "تعديل"}</button>
            </form>
          </div>
        </div>
      )}
      <div
        className="cursor-pointer whitespace-nowrap flex items-center justify-center min-w-[200px] h-[40px] bg-blue text-white gap-4 font-semibold rounded-2xl px-2"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-pen"></i>
        {lang === "en" ? "Edit Personal information" : "تعديل بياناتي الشخصية"}
      </div>
    </div>
  );
};

export default EditData;
