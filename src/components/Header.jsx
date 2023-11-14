import { useContext, useState } from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import WhisList from "./WhisList";
import { AppContext } from "../App";
import { FiSearch } from "react-icons/fi";
import CategorySideBar from "./CategorySideBar";
import CategorySideCard from "./CategorySideCard";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [keyword, setKeyword] = useState("");
  const { setLang, lang } = useContext(AppContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const onSearch = function (e) {
    e.preventDefault();
    setSearchOpen(false);
    nav(`/search?keyword=${keyword}`);
  };
  const nav = useNavigate();
  const logout = function () {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    nav("/");
  };
  return (
    <>
      <header className="text-center text-[12px] bg-[#fdfbf6] p-[10px]">
        COMPLIMENTARY SHIPPING ON ALL ORDERS
      </header>

      <nav className="py-4 border-y z-10 border-y-slate-200 sticky top-0 bg-white">
        <div className="flex justify-between items-center container mx-auto ">
          <CategorySideBar setIsOpen={setIsOpen} />

          {/* <div className=" lg:hidden gap-2 bg-gray rounded-xl text-white pb-1 p-2 cursor-pointer"> */}
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className=" lg:hidden"
          >
            <FaBars size={25} />
          </button>
          {/* </div> */}
          <div className="h-[30px] md:h-[30px] mx-4 lg:h-[40px]">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (lang === "en") {
                  localStorage.setItem("lang", "ar");
                  setLang("ar");
                } else if (lang === "ar") {
                  localStorage.setItem("lang", "en");
                  setLang("en");
                }
              }}
              className="px-2 py-1 bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  hidden lg:block"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => {
                setSearchOpen((prev) => !prev);
              }}
              className="px-2 w-10 justify-center items-center flex h-10 py-1 bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  hidden lg:block"
            >
              <FiSearch />
            </button>
            {token ? (
              <>
                <button
                  onClick={logout}
                  className="px-2 hidden lg:block py-1 bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
                >
                  {lang === "en" ? "Logout" : "تسجيل الخروج"}
                </button>
                <Link
                  to={"/profile"}
                  className="px-2 py-1 text-center hidden lg:block bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
                >
                  {lang === "en" ? "Profile" : "ملفي الشخصي"}
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="px-2 py-1 hidden lg:block bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
              >
                {lang === "en" ? "Login" : "تسجيل الدخول"}
              </Link>
            )}
            <Cart />
            <WhisList />
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden  fixed z-50 w-full h-full top-0 right-0 transition-all`}
      >
        <div className="bg-white overflow-y-auto w-full p-6 flex flex-col gap-4 ">
          <div className="flex items-center justify-between">
            <div className="h-6">
              <Logo />
            </div>
            <button
              className="block w-fit ml-auto"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <IoIosCloseCircleOutline size={30} />
            </button>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              setSearchOpen(true);
            }}
            className="px-2 flex items-center justify-center py-1 bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
          >
            <FiSearch />
          </button>

          {token ? (
            <>
              <Link
                to={"/profile"}
                className="px-2 py-1 text-center bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
              >
                {lang === "en" ? "Profile" : "ملفي الشخصي"}
              </Link>
              <button
                onClick={logout}
                className="px-2 py-1 bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
              >
                {lang === "en" ? "Logout" : "تسجيل الخروج"}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-2 py-1 bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
            >
              {lang === "en" ? "Login" : "تسجيل الدخول"}
            </Link>
          )}
          <button
            onClick={() => {
              if (lang === "en") {
                localStorage.setItem("lang", "ar");
                setLang("ar");
              } else if (lang === "ar") {
                localStorage.setItem("lang", "en");
                setLang("en");
              }
            }}
            className="px-2 py-1 bg-[#e1e1e1] rounded-full text-sm text-gray  font-semibold  "
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <CategorySideCard setIsOpen={setIsOpen} type="men" />
          <CategorySideCard setIsOpen={setIsOpen} type="women" />
        </div>
        <div
          className={`bg-black w-[40%] bg-opacity-50 `}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      </div>
      {searchOpen && (
        <div style={{ direction: "ltr" }} className="container mx-auto py-2">
          <form onSubmit={(e) => onSearch(e)} className="flex items-center">
            <input
              required
              onChange={(e) => setKeyword(e.target.value)}
              autoFocus
              type="text"
              className=" w-full items-center justify-center flex px-4 border h-8 border-slate-300 rounded-l-xl"
            />
            <button className="text-white rounded-r-xl  px-4 py-1 bg-blue items-center justify-center h-8 flex">
              <FiSearch />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;
