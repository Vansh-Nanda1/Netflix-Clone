import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt.showGptSearch);
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
