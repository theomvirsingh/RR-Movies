import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    return ytvideo ? (
        <div className="bg-[rgba(0,0,0,0.8)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link 
                onClick={()=> navigate(-1)}
                className="absolute hover:text-zinc-300 ri-close-fill text-3xl text-white right-[5%] top-[5%]"    
            >
            </Link>

            <ReactPlayer 
                controls
                height={500}
                width={1000}
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`}    
            />
        </div>
    ) : (
        <NotFound />
      );
};

export default Trailer;