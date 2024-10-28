import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

  let originalname = "The Union ";
  let description = "A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.";

  return (
    <div>
      <VideoTitle title={originalname} overview={description} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;







//? ============================================================================================
// import React from "react";
// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";
// import { useSelector } from "react-redux";

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//     if(!movies) return
//   const mainMovie = movies[0];
//     const { originalname, description , id } = mainMovie;
//   return (
//     <div>
//       <VideoTitle title={originalname} overview={description} />
//       <VideoBackground movieId={id}/>
//     </div>
//   );
// };

// export default MainContainer;