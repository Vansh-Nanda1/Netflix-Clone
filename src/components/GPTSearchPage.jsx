import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import backgroundImg from "../assets/background-Img.jpg";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="w-full absolute -z-10">
        <img
          src={backgroundImg}
          alt="backgroundImg"
          className="h-screen sm:w-full  w-auto"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
