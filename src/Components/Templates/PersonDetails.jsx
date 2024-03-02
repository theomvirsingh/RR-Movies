import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  asynloadperson,
  removeperson,
} from "../../GlobalStore/actions/personAction";
import Loader from "./Loader";
import noimage from "../../assets/noimage.jpg";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynloadperson(id));
    return () => {
      dispatch(removeperson());
      return () => {
        dispatch(removeperson());
      };
    };
  }, [id]);
  return info ? (
    <div className="px-[12%] w-screen h-[190vh] bg-zinc-900">
      <nav className="w-full h-[10vh] flex items-center justify-center gap-10 hover:text-white hover:shadow-xl  text-zinc-300 text-2xl font-semibold ">
        <Link
          onClick={() => navigate(-1)}
          className="absolute left-[10%] top-3 mt-5 ri-arrow-left-line"
        ></Link>{" "}
      </nav>

      <div className="w-full flex mt-8">
        <div className="w-[22%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-5 mb-5 border-none h-[2px] bg-zinc-500 " />
          <div className="text-2xl text-white flex gap-x-8">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className="text-2xl text-zinc-400 font-semibold my-3">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">Gender</h1>
          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">
            Place Of Birth
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">
            Alias Names{" "}
          </h1>
          <h1 className="text-zinc-400 text-justify">
            {info.detail.also_known_as.join("  |  ")}
          </h1>
        </div>

        <div className="w-[80%] ml-10 ">
          <h1 className="text-6xl text-zinc-400 font-black">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold my-1">
            Biography
          </h1>
          <h1 className="text-sm text-zinc-400 text-justify">
            {info.detail.biography}
          </h1>

          <h1 className="mt-2 text-lg text-zinc-400 font-semibold">
            Movies & TV Shows
          </h1>
          {/* Movie Card */}
          <div>
            <div className="w-full flex overflow-x-scroll mb-3 py-5 gap-x-1">
              {info.combinedCredits.cast.map((d, i) => (
                <Link
                  to={`/${d.media_type}/details/${d.id}`}
                  key={i}
                  className="min-w-[25%]  min-h-[30vh] bg-zinc-900 mr-5 mb-5"
                >
                  <img
                    className="w-full  h-full object-cover"
                    src={
                      d.poster_path
                        ? `https://image.tmdb.org/t/p/original/${d.poster_path}`
                        : noimage
                    }
                    alt=""
                  />
                  <h1 className="text-md text-zinc-400 my-2 font-semibold ">
                    {d.name || d.title || d.original_name || d.original_title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
