import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AppContext, route } from "../App";
import { toast } from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { setIsLoading, lang } = useContext(AppContext);

  const nav = useNavigate();
  let handel = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${route}/api/v1/auth/forgotPassword`, {
        email: email,
      })
      .then(() => {
        nav("/verifyResetCode");
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="form">
      <form onSubmit={handel}>
        <h1>{lang === "en" ? "Forgot Password" : "نسيت كلمة المرور"}</h1>
        <div>
          <label htmlFor="email">
            {lang === "en" ? "Email" : "البريد الالكتروني"} : *
          </label>
          <input
            type="email"
            min={4}
            placeholder="Example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button>{lang === "en" ? "Submit" : "ارسال"}</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
