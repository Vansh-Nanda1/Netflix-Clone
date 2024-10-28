import React from "react";
const VideoBackground = () => {
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/vea9SdnRMyg?si=Sly4IjCcoVMbJL4P" + "?&autoplay=1&mute=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;




// import React from "react";
// import useMovieTrailer from "./Hooks/useMovieTrailer";
// import { useSelector } from "react-redux";

// const VideoBackground = ({movieId}) => {
//     const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//   useMovieTrailer(movieId);
//   return (
//     <div>
//       <iframe
//         className="w-screen aspect-video"
//         src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;
