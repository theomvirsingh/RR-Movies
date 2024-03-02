import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full flex overflow-x-scroll mb-3 p-3">
      {data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[20%] bg-zinc-900 mr-5 mb-5">
          <img
            className="w-full object-cover"
            src={d.backdrop_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }` : noimage}
            alt=""
          />
          <div className="p-3 text-pretty text-white">
            <h1 className="text-xl font-semibold ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="">
              <i className="text-zinc-600 ri-calendar-event-line "></i>{" "}
              {(d.first_air_date && d.first_air_date.slice(0, 4)) ||
                (d.release_date && d.release_date.slice(0, 4)) ||
                "XXXX"}
            </p>
            <p className="">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-600"> more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCard;

// import React, { useState } from "react";

// const HorizontalCard = ({ data }) => {
//   return (
//     <div className="w-full flex overflow-x-scroll mb-3 p-3">
//       {data.map((d, i) => (
//         <div key={i} className="min-w-[20%] bg-zinc-900 mr-5 mb-5 relative">
//           <div className="hover-container">
//             <img
//               className="w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
//               src={`https://image.tmdb.org/t/p/original/${
//                 d.poster_path || d.profile_path
//               }`}
//               alt=""
//             />
//             <div
//               className="p-3 text-pretty text-white absolute top-0 left-0 w-full h-full  bg-opacity-50 opacity-0 transition duration-400 flex flex-col justify-center items-center"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//             >
//               <h1 className="text-xl font-semibold ">
//                 {d.name || d.title || d.original_name || d.original_title}
//               </h1>
//               <p className="">
//                 <i className="text-zinc-600 ri-calendar-event-line "></i>{" "}
//                 {(d.first_air_date && d.first_air_date.slice(0, 4)) ||
//                   (d.release_date && d.release_date.slice(0, 4)) ||
//                   "XXXX"}
//               </p>
//               <p className="">
//                 {d.overview.slice(0, 60)}...
//                 <span className="text-zinc-600"> more</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HorizontalCard;     