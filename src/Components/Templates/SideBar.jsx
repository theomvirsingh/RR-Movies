import React from "react";
import { Link } from "react-router-dom";

function SideBar(){
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10">
            <div className="flex gap-2 items-center justify-center cursor-pointer">
                <img className="w-[70px] h-[70px]" src="https://static.thenounproject.com/png/780122-200.png" alt="" />
                <h1 className="text-white text-2xl font-bold">RR Movies</h1>
            </div>
            <nav className="flex flex-col text-zinc-400 text-xl">
                <h1 className="text-white font-semibold text-xl mt-5 mb-3">New Feeds</h1>
                <Link to="/trending" className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link to="/popular" className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-bard-fill"></i> Popular
                </Link>
                <Link to="/movie" className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-movie-2-fill"></i> Movies
                </Link>
                <Link to="/tv" className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-tv-fill"></i> TV Shows
                </Link>
                <Link to="/person" className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-user-search-fill"></i> People
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400 mt-2" />

            <nav className="flex flex-col text-zinc-400 text-xl">
                <h1 className="text-white font-semibold text-xl mt-8 mb-5">Website Information</h1>
                <Link className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-information-fill"></i> About
                </Link>
                <Link className = " hover:bg-zinc-300 hover:text-zinc-700 duration-200 rounded-lg p-3 ">
                <i className="ri-phone-fill"></i> Contact Us
                </Link>
            </nav>

        </div>       
    )
}

export default SideBar;