import { useState } from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import WhisList from "./WhisList";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const data = JSON.parse(localStorage.getItem("data"));
  const nav = useNavigate();
  const logout = function () {
    localStorage.clear();
    nav("/");
  };
  return (
    <>
      <header className="text-center text-[12px] bg-[#fdfbf6] p-[10px]">
        COMPLIMENTARY SHIPPING ON ALL ORDERS
      </header>
      <nav className="py-4 border-y z-10 border-y-slate-200 sticky top-0 bg-white">
        <div className="flex justify-between items-center   container mx-auto ">
          <div className="flex gap-2">
            <div className="hidden lg:block">JEWELRY</div>
            <div className="hidden lg:block">ACCESSORIES</div>
            <div className="hidden lg:block">SHOP BY</div>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className=" lg:hidden"
            >
              <FaBars size={30} />
            </button>
          </div>
          <div className="h-[30px]">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">CLIENT CARE</div>
            {token ? (
              <>
                <button
                  onClick={logout}
                  className="px-2 py-1 bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  hidden lg:block"
                >
                  Logout
                </button>
                <Link
                  to={"/profile"}
                  className="px-2 py-1 bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  hidden lg:block"
                >
                  profile
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="px-2 py-1 bg-[#e1e1e1] rounded-full text-lg text-gray  font-semibold  hidden lg:block"
              >
                Login
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
        } lg:hidden fixed z-50 w-full h-full top-0 right-0 transition-all`}
      >
        <div className="bg-white p-6 flex flex-col gap-4 min-w-[20% ]">
          <button
            className="block w-fit ml-auto"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <IoIosCloseCircleOutline size={30} />
          </button>
          <div className="text-xl">JEWELRY</div>
          <div className="text-xl">ACCESSORIES</div>
          <div className="text-xl">SHOP BY</div>
          <div className="text-xl">CLIENT CARE</div>
          <div className="text-xl">HERITAGE</div>
        </div>
        <div
          className={`bg-black w-full bg-opacity-50`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      </div>
    </>
  );
};

export default Header;
