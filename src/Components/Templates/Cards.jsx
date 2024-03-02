import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full h-full flex flex-wrap px-[6%] pt-[2%]  bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title }/details/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <div className="relative">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
                src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}` : noimage}
                alt=""
              />
              {c.vote_average ? (
                <div className="absolute right-[-10%] bottom-[-4%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center opacity-70 hover:opacity-100 ">
                {(c.vote_average).toFixed(1)}<img className="w-[2vh] h-[2vh]" src="src\assets\logos\star.png" alt="" />
              </div>
              ) : null}
          </div>
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
          {c.title || c.name || c.original_name || c.original_title}
          </h1>
          
        </Link>
      ))}
    </div>
  );
};

export default Cards; 
