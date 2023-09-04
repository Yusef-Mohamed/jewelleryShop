import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AppContext, route } from "../App";
import { toast } from "react-hot-toast";

function VerifyResetCode() {
  const [code, setCode] = useState("");
  const { setIsLoading } = useContext(AppContext);

  const nav = useNavigate();
  let handel = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${route}/api/v1/auth/verifyResetCode`, {
        resetCode: code.trim(),
      })
      .then(() => {
        nav("/resetPassword");
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="form">
      <form onSubmit={handel}>
        <h1>Verify Reset Code</h1>
        <div>
          <label>Code :</label>
          <input
            type="text"
            min={6}
            placeholder="666666"
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button>
          <>Submit</>
        </button>
      </form>
    </div>
  );
}

export default VerifyResetCode;
