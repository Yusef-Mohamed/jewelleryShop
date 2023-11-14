import { useContext, useState } from "react";
import { AppContext, route } from "../../App";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

const EditPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoading, lang } = useContext(AppContext);
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const token = localStorage.getItem("token");
  const handelSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("currentPassword", current);
    formData.append("password", password);
    formData.append("passwordConfirm", confirm);
    axios
      .put(`${route}/api/v1/users/changeMyPassword`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,

          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("Done");
        if (res.data) {
          localStorage.setItem("data", JSON.stringify(res.data.data));
          localStorage.setItem("token", res.data.token);
        }
        setIsOpen(false);
      })
      .catch((err) => {
        if (err?.response?.status === 400) {
          toast.error("invalid current password");
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
                <label htmlFor="currentPassword">
                  {lang === "en" ? "Current Password" : "كلمة المرور الحالية"} :
                </label>
                <input
                  type="password"
                  required
                  id="currentPassword"
                  onChange={(e) => setCurrent(e.target.value)}
                  placeholder="Current Password"
                />
              </div>
              <div>
                <label htmlFor="newPassword">
                  {lang === "en" ? "New Password" : "كلمة المرور الجديدة"} :
                </label>
                <input
                  type="password"
                  required
                  id="newPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">
                  {lang === "en" ? "Confirm Password" : "تاكيد كلمة المرور"} :
                </label>
                <input
                  type="password"
                  required
                  id="confirmPassword"
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>

              <button type="submit">
                {" "}
                {lang === "en" ? "Update" : "تحديث  "}
              </button>
            </form>
          </div>
        </div>
      )}
      <div
        className="cursor-pointer flex items-center justify-center w-[200px] h-[40px] bg-blue text-white gap-4 font-semibold rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        {lang === "en" ? "Edit Password" : "تعديل كملة المرور"}
      </div>
    </div>
  );
};

export default EditPassword;
