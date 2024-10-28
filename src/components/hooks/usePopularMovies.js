import { useEffect } from "react";
import { addPopularMovies } from "../utils/MovieSlice";
// import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://api.github.com/users";

    const getPopularMovies = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        dispatch(addPopularMovies(json));
      } catch (error) {
        console.error(error);
      }
    };
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
