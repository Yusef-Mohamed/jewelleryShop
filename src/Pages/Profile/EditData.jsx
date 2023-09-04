import { useContext, useState } from "react";
import { AppContext, route } from "../../App";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

const EditData = () => {
  const token = localStorage.getItem("token");
  const dataa = JSON.parse(localStorage.getItem("data"));
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const [name, setName] = useState(dataa.name);
  const [profileImg, setProfileImg] = useState(null);
  const [phone, setPhone] = useState(dataa?.phone);

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
                <label>Name :</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label>Phone number :</label>
                <input
                  type="text"
                  required
                  minLength={10}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div className="relative  w-full">
                <label>Profile image :</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  placeholder="upload your image"
                />
              </div>

              <button type="submit">Edit</button>
            </form>
          </div>
        </div>
      )}
      <div
        className="cursor-pointer whitespace-nowrap flex items-center justify-center min-w-[200px] h-[40px] bg-blue text-white gap-4 font-semibold rounded-2xl px-2"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-pen"></i>
        Personal information
      </div>
    </div>
  );
};

export default EditData;
