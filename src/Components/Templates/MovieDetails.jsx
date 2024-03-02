import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  asynloadmovie,
  removemovie,
} from "../../GlobalStore/actions/movieAction";
import Loader from "./Loader";
import HorizontalCard from "./HorizontalCard";

const MovieDetails = () => {
    const {pathname} = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynloadmovie(id));
    return () => {
      dispatch(removemovie());
      return () => {
        dispatch(removemovie());
      };
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen min-h-[170vh] mb-[5%] h-auto  px-[10%] pt-4 "
    >
      {/* PART 1 : Navigation */}
      <nav className="w-full h-[10vh] flex items-center justify-center gap-10 hover:text-white hover:shadow-xl  text-zinc-300 text-2xl font-semibold ">
        <Link
          onClick={() => navigate(-1)}
          className="absolute left-[10%] top-3 mt-5 ri-arrow-left-line"
        ></Link>{" "}
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/* PART 2 : Poster */}
      <div className="w-full pt-3 flex ">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[60vh] object-cover "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""/>

        <div className="content ml-10 text-white">
            <h1 className="text-5xl text-white font-black">
            {info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-200 px-2 pb-10">
                ({info.detail.release_date.split("-")[0]})
            </small>
            </h1>

            <div className="flex text-white items-center gap-x-2 mt-[2%]">
                <div className="flex gap-2 items-center">
                    {/* <h1 className="text-lg font-semibold ">Rating : </h1> */}
                    <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center opacity-100">
                        {(info.detail.vote_average).toFixed(1)}
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    {/* <h1 className="text-lg font-semibold ">Runtime : </h1> */}
                    <h1>| {info.detail.runtime} m</h1>
                </div>
                <div className="flex gap-2 items-center">
                    {/* <h1 className="text-lg font-semibold ">Genre</h1> */}
                    <h1> | {info.detail.genres.map((g) => g.name).join(", ")}</h1>
                </div>
            </div>
            <h1 className="text-xl mt-2 font-semibold italic text-zinc-300">"{info.detail.tagline}"</h1>
            <h1 className="text-2xl my-1">Overview</h1>
            <p className="text-sm">{info.detail.overview}</p>
            <h1 className="text-2xl my-1">Languages Available</h1>
            <p className="text-sm mb-5">{(info.translations).join(", ")}</p>

            <Link to={`${pathname}/trailer`} className="bg-zinc-300 p-3 rounded-xl text-zinc-600 ">
                <i className="text-xl ri-play-fill mr-[0.5px] mt-auto"></i>Play Trailer
            </Link>

        </div>
      </div> 

      {/* PART 3 : Platforms */}
      <div className="w-[50%] mt-5">
        <div className="mt-3">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-5 items-center text-white text-lg font-semibold">
              <h1>Stream on Platform</h1>
              {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i} title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""/>
              ))}
            </div>
          )}
        </div>

        <div className="mt-3">
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-5 items-center text-white text-lg font-semibold">
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map((w, i) => (
              <img
                key={i} title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""/>
              ))}
            </div>
          )}
        </div>

        <div className="mt-3">
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-5 items-center text-white text-lg font-semibold">
              <h1>Available to Buy</h1>
              {info.watchproviders.buy.map((w, i) => (
              <img
                key={i} title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""/>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PART 4 : Recommendations*/}
      <hr className="my-3 border-none h-[1.5px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
                Recommendations
      </h1>
      <HorizontalCard data = {info.recommendations.length > 0
                                ? info.recommendations : info.similar} />
      
      <Outlet/>

    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
