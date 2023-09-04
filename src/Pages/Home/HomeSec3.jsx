import shippingIcon from "../../assets/complimentary.svg";
import returnIcon from "../../assets/return.svg";
import dimIcon from "../../assets/dim.svg";
const HomeSec3 = () => {
  return (
    <div className="my-4 container items-center mx-auto flex flex-col sm:flex-row-reverse">
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/921483723-1654094614663.jpg?v=1654094617"
          alt=""
        />
      </div>
      <div className="w-full px-3 mx-3 sm:border-r sm:border-r-slate-300">
        <div className=" border-b border-b-slate-300 py-2">
          <img src={shippingIcon} className="w-12" alt="" />
          <h2 className="text-lg font-semibold ">
            Complimentary Shipping & Returns
          </h2>
          <p className=" ">
            We offer complimentary shipping & returns on all orders.
          </p>
        </div>
        <div className=" border-b border-b-slate-300 py-2">
          <img src={dimIcon} className="w-12" alt="" />
          <h2 className="text-lg font-semibold ">
            Jacob & Co. At Your Service
          </h2>
          <p className=" ">Our client care experts are always here to help.</p>
        </div>
        <div className=" border-b border-b-slate-300 py-2">
          <img src={returnIcon} className="w-12" alt="" />
          <h2 className="text-lg font-semibold ">Ethically Sourced</h2>
          <p className=" ">
            We proudly trace 100% of our rough diamonds to known mines and
            sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
