import { useContext, useState } from "react";
import { AppContext } from "../App";
import { countries } from "../countries";
import toast from "react-hot-toast";

const SelectCountries = ({ onChange, isOpen, setIsOpen }) => {
  const { lang } = useContext(AppContext);
  const [myValue, setValue] = useState("");
  if (isOpen)
    return (
      <div className="w-full h-full fixed bg-black top-0 right-0 z-[1000] flex items-center justify-center bg-opacity-80">
        <div className="bg-white overflow-auto container max-h-[80vh] p-4 rounded-xl">
          <h2 className="text-xl mb-4 font-semibold">
            {lang === "en" ? "Country" : "الدولة"}
          </h2>
          <div className="flex gap-4 items-center flex-wrap justify-center">
            {countries.map((country) => (
              <div
                key={country.en}
                className="option"
                onClick={() => {
                  setValue(country.en);
                }}
              >
                <input
                  className="myRadio"
                  type="radio"
                  name="btn"
                  value={country.en}
                />
                <div className="radioContainer">
                  <img src={country.image} alt="" />
                  {lang === "en" ? country.en : country.ar}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              if (myValue) {
                onChange(myValue);
                setIsOpen(false);
              } else {
                toast.error("You have to chose country");
              }
            }}
            className="w-full"
          >
            {lang === "en" ? "Select" : "اختر"}
          </button>
        </div>
      </div>
    );
  else return <></>;
};

export default SelectCountries;
