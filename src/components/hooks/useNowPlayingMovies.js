import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/MovieSlice";
// import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = 'https://api.github.com/users';    
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json()
        dispatch(addNowPlayingMovies(json));
      } catch (error) {
        console.error(error);
      }
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
