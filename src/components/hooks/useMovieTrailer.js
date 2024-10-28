import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/Constants";

    function useMovieTrailer(movieId) {
        let dispatch = useDispatch();
        useEffect(() => {
            try {
                
                    // const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en=-US", API_OPTIONS);
                    // const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en=-US", API_OPTIONS);
                const getMoviesVideos = async () => {
                    const data = await fetch("x", API_OPTIONS);
                    const resp = await data.json();
                    const filterdata = resp.filter((video) => {
                        return video.type === "Trailer";
                    });

                    const trailer = filterdata.length ? filterdata[0] : resp[0];
                    dispatch(addTrailerVideo(trailer))
                };
                getMoviesVideos();
            } catch (error) {
                console.log(error.message);
            }
        }, []);

    }

    export default useMovieTrailer;
