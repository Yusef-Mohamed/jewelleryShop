import CategoriesSlider from "./CategoriesSlider";
import HomeSec1 from "./HomeSec1";
import HomeSec2 from "./HomeSec2";
import HomeSec3 from "./HomeSec3";
import SubCategoriesSlider from "./SubCategoriesSlider";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://jacobandco.shop/cdn/shop/t/2/assets/91944185-32zoom-safety-pin-necklace-1alight-beige-1-1646254686848.jpg?v=1646254688')",
          backgroundPosition: "center bottom",
        }}
        className="min-h-[70vh]  bg-cover bg-no-repeat flex items-center justify-end  w-full"
      >
        <div className="container mx-auto w-full ">
          <div className="w-fit ml-auto px-8">
            <h1 className="text-2xl">Jewelry For Every Day</h1>
            <p className="my-3 text-gray text-opacity-70">
              Brilliant design and unparalleled craftsmanship.
              <br /> Signature styles made to be daring.
            </p>
          </div>
        </div>
      </div>
      <CategoriesSlider />
      <SubCategoriesSlider />
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
    </>
  );
};

export default Home;
