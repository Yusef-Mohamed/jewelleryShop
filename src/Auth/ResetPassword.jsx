import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AppContext, route } from "../App";
import { toast } from "react-hot-toast";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoading } = useContext(AppContext);

  const nav = useNavigate();
  let handel = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .put(`${route}/api/v1/auth/resetPassword`, {
        email: email,
        newPassword: password,
      })
      .then(() => {
        toast.success("Password has been updated");
        nav("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="form">
      <form onSubmit={handel}>
        <h1>Reset Password</h1>
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

        <button>Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;
