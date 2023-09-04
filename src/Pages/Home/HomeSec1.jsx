const HomeSec1 = () => {
  return (
    <div className="container items-center mx-auto flex flex-col-reverse sm:flex-row">
      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold my-4">Our Heritage</h2>
        <p className="text-lg ">
          Jacob Arabo's novel and unique approach to jewelry making and design,
          one that is focused on creativity and innovation, has made Jacob & Co.
          a brand that is positioned to lead the way for generations to come.
        </p>
        <h2 className="text-2xl font-semibold my-4">
          Celebrating 40 years of Jacob
        </h2>
        <p className="text-lg">
          With his passion for unique designs and his talent for business, Jacob
          Arabo has designed iconic jewelry and watches for the world's biggest
          stars, cultural icons, royalty and presidents all around the globe.
        </p>
        <button className="bg-[#e1e1e1] px-12 rounded-full text-lg text-gray my-4 mx-3 font-semibold py-3">
          LEARN MORE
        </button>
      </div>
      <div className="w-full">
        <img
          src="https://jacobandco.shop/cdn/shop/t/2/assets/mask-group-902x-1646927739990.png?v=1646927745"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeSec1;
