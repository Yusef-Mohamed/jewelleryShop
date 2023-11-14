import { Navigate, Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Home from "./Pages/Home/Home";
import Login from "./Auth/Login";
import { createContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Register from "./Auth/Register";
import { Toaster } from "react-hot-toast";
import SubCategory from "./Pages/Category/SubCategory";
import Category from "./Pages/Category/Category";
import ForgotPassword from "./Auth/ForgotPassword";
import VerifyResetCode from "./Auth/VerifyResetCode";
import ResetPassword from "./Auth/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import ContactUs from "./Pages/customerserv/ContactUs";
import CustomerLayout from "./Pages/customerserv/CustomerLayout";
import Faqs from "./Pages/customerserv/Faqs";
import OrderFa from "./Pages/customerserv/OrderFa";
import Retrun from "./Pages/customerserv/Retrun";
import Payment from "./Pages/customerserv/Payment";
import Aboutus from "./Pages/Aboutus";
import Search from "./Pages/Search";
export const AppContext = createContext();
export const route = "https://api.thefirstbrand.shop";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [wishList, setWishList] = useState([]);
  const [update, setUpdate] = useState(0);
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      setLang("en");
    }
    if (localStorage.getItem("lang") === "en") {
      setLang("en");
      document.body.style.direction = "ltr";
    } else if (localStorage.getItem("lang") === "ar") {
      setLang("ar");
      document.body.style.direction = "rtl";
    }
  }, [localStorage.getItem("lang")]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        update,
        setUpdate,
        setLang,
        lang,
        cart,
        setCart,
        wishList,
        setWishList,
      }}
    >
      <Toaster />

      <div>
        {isLoading && (
          <div className="fixed w-full h-full bg-black bg-opacity-75 top-0 right-0 flex items-center justify-center z-[9999]">
            <div className="loader">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
          </div>
        )}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyResetCode" element={<VerifyResetCode />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category/:cateId" element={<Category />} />
          <Route path="/subCategory/:cateId" element={<SubCategory />} />
          <Route path="" element={<CustomerLayout />}>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/orderShipping" element={<OrderFa />} />
            <Route path="/return" element={<Retrun />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
