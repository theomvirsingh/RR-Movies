import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 9%",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start pb-[4%] pl-[2%]"
    >
      <h1 className="w-[60%] text-5xl font-bold text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[45%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 150)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-zinc-600 ri-calendar-event-line "></i>{" "}
        {(data.release_date && data.release_date.slice(0, 4)) ||
          (data.first_air_date && data.first_air_date.slice(0, 4)) ||
          "XXXX"}
        <i className="text-zinc-600 ml-5 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className=" mt-2 bg-zinc-300 p-2 rounded-md text-zinc-600">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
