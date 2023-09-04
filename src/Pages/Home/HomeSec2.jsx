const HomeSec2 = () => {
  return (
    <div className="my-4 container items-center mx-auto flex flex-col-reverse sm:flex-row-reverse">
      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold my-4">La Maison</h2>
        <p className="text-lg">
          Discover our jewelry first hand in one of our boutiques. We will be
          more than happy to assist you with your inquiries at any one of our
          flagships.
        </p>
        <button className="bg-[#e1e1e1] px-12 rounded-full text-lg text-gray my-4 mx-3 font-semibold py-3">
          LEARN MORE
        </button>
      </div>
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/jacobandcocom_404511098-1648153373201.jpeg?v=1648153376"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeSec2;
