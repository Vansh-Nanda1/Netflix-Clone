import React, { useEffect } from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const moviesData = useSelector((store) => store?.movies);
  if (!moviesData) return <div>Loading...</div>;



  return (
    moviesData && (
      <div className=" bg-black ">
        <div className="mt-[-300px] pl-6 relative z-44">
        <MovieLists title={"Trending this Week"} movies={moviesData.nowPlayingMovies} />
        <MovieLists title={"Popular"} movies={moviesData.recentpopularMovies} />
        <MovieLists title={"Now Playing"} movies={moviesData.nowPlayingMovies} />
        <MovieLists title={"Trending"} movies={moviesData.nowPlayingMovies} />
        <MovieLists title={"Fantasy"} movies={moviesData.nowPlayingMovies} />
        <MovieLists title={"Comedy"} movies={moviesData.nowPlayingMovies} />
        <MovieLists title={"Romance"} movies={moviesData.nowPlayingMovies} />

      </div>
      </div>
    )
  );
};

export default SecondaryContainer;
