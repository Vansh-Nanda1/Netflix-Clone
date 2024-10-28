import React from "react";
import langConstants from "./utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang) 
  return (
    <div>
      <div className="pt-[10%]  flex justify-center">
        <form className="bg-black px-2  grid grid-cols-12 w-1/2 rounded-sm ">
          <input
            type="text"
            className="px-4 py-1 m-4 col-span-9 rounded-sm outline-none"
            placeholder={langConstants[langKey].gptSearchPlaceholder}
          />
          <button className="col-span-3 m-4 bg-red-800 px-4 py-2 text-lg rounded-sm text-white">
            {langConstants[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
