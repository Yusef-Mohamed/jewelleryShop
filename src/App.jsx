import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Home from "./Pages/Home/Home";
import Login from "./Auth/Login";
import { createContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Register from "./Auth/Register";
import { Toaster } from "react-hot-toast";
import SubCategory from "./Pages/Category/SubCategory";
import Category from "./Pages/Category/Category";
import ForgotPassword from "./Auth/ForgotPassword";
import VerifyResetCode from "./Auth/VerifyResetCode";
import ResetPassword from "./Auth/ResetPassword";
import Profile from "./Pages/Profile/Profile";
export const AppContext = createContext();
export const route = "https://node-api-v1.onrender.com";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [wishList, setWishList] = useState([]);
  const [update, setUpdate] = useState(0);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        update,
        setUpdate,
        cart,
        setCart,
        wishList,
        setWishList,
      }}
    >
      <Toaster />

      <div>
        {isLoading && (
          <div className="fixed w-full h-full top-0 right-0 bg-[#000] z-[10000] bg-opacity-75 flex justify-center items-center">
            <div className="h-[30vh] w-full flex items-center justify-center">
              <FaSpinner className="animate-spin" color="white" size={60} />
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
          <Route
            path="/category/:cateId/:subCateId"
            element={<SubCategory />}
          />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
