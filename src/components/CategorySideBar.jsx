import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CategorySideCard from "./CategorySideCard";
import { AppContext } from "../App";
import { LiaShoppingBagSolid } from "react-icons/lia";

const CategorySideBar = () => {
  const { lang } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:block relative bg-blue text-white rounded-lg text-lg  p-2 px-4  ">
        <button
          className="hidden lg:flex items-center justify-center gap-4"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <FaBars size={20} />
          {lang === "en" ? "Shop by Category" : "تسوق حسب الفئة"}
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          }  fixed  w-full z-10 h-full top-0 right-0 transition-all`}
        >
          <div
            className={`bg-black w-full bg-opacity-50`}
            onClick={() => {
              setIsOpen(false);
            }}
          ></div>
          <div className="bg-white p-6 overflow-y-auto overflow-x-hidden   h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <LiaShoppingBagSolid size={30} />
                  <h2 className="whitespace-nowrap font-semibold">
                    {lang === "en" ? "Shopping cart" : "سلة المشتريات"}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <IoIosCloseCircleOutline size={30} />
                </button>
              </div>
              <div>
                <CategorySideCard setIsOpen={setIsOpen} type="men" />
                <CategorySideCard setIsOpen={setIsOpen} type="women" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySideBar;
