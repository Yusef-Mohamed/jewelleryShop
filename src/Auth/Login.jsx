import { useContext, useState } from "react";
import { AppContext, route } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoading, setUpdate } = useContext(AppContext);
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${route}/api/v1/auth/login`, {
        email: email,
        password: password,
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
        } else if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handelSubmit(e)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button>Login</button>
        <p>
          You <Link to="/forgotPassword">Forget password</Link>
          ,Or <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
