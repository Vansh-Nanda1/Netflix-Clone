import React, { useEffect } from "react";
import MovieCards from "./MovieCards";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-white  font-bold text-3xl py-3  ">{title} </h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-4 ">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.avatar_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;







// import React, { useEffect } from "react";
// import MovieCards from "./MovieCards";

// const MovieLists = ({ title, movies }) => {
//   return (
//     <div>
//       <div >{title}</div>
//       <div>
//         {/* <MovieCards posterPath={movies[0].poster_Path}/>   */}
//         {/* {movies.map((movie) => {
//           return (
//             <div key={movie.id}>
//               <MovieCards posterPath={movie.poster_Path} />
//             </div>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default MovieLists;