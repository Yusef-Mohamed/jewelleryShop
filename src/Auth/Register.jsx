import { useContext, useState } from "react";
import { AppContext, route } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const nav = useNavigate();
  const { setIsLoading, setUpdate } = useContext(AppContext);
  const handelSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${route}/api/v1/auth/signup`, {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
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
  };
  return (
    <div className="form">
      <form onSubmit={(e) => handelSubmit(e)}>
        <h1>Register</h1>
        <div>
          <label htmlFor="name">Name : *</label>
          <input
            type="text"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email : *</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password : *</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password : *</label>
          <input
            type="password"
            id="passwordConfirm"
            required
            pattern={password}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button>Register</button>
        <p>
          You <Link>Forget password</Link>
          ,Or <Link Link="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
