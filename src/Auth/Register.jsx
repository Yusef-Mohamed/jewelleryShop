import { useContext, useState } from "react";
import { AppContext, route } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import SelectCountries from "../components/SelectCountries";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [country, setCountry] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const nav = useNavigate();
  const { setIsLoading, setUpdate, lang } = useContext(AppContext);
  const handelSubmit = function (e) {
    e.preventDefault();
    if (country) {
      setIsLoading(true);
      axios
        .post(`${route}/api/v1/auth/signup`, {
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          country: country,
        })
        .then((res) => {
          if (res.data.data) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("data", JSON.stringify(res.data.data));
            setUpdate((prev) => prev + 1);
            nav("/");
          }
        })
        .catch((err) => {
          if (err?.response?.data?.errors) {
            err.response.data.errors.map((e) => toast.error(e.msg));
          } else {
            toast.error("Something went wrong");
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      toast.error("You have to chose country");
    }
  };
  return (
    <div className="form my-12">
      <form onSubmit={(e) => handelSubmit(e)}>
        <h1>{lang === "en" ? "Register" : "تسجيل حساب"}</h1>
        <div>
          <label htmlFor="name">{lang === "en" ? "Name" : "الاسم"} : *</label>
          <input
            type="text"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            {lang === "en" ? "Email" : "البريد الالكتروني"} : *
          </label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            {lang === "en" ? "Password" : "كلمة المرور"} : *
          </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">
            {lang === "en" ? "Password Confirm" : "تاكيد كلمة المرور"} : *
          </label>
          <input
            type="password"
            id="passwordConfirm"
            required
            pattern={password}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
        <button>{lang === "en" ? "Register" : "تسجيل حساب"} </button>
        <p className="text-center font-semibold">
          <Link to="/login">{lang === "en" ? "Login" : "تسجيل الدخول"}</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
