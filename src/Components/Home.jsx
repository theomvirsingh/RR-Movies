import React, { useEffect, useState } from "react";
import SideBar from "./Templates/SideBar";
import TopNav from "./Templates/TopNav";
import axios from "../utils/axios";
import Header from "./Templates/Header";
import HorizontalCard from "./Templates/HorizontalCard";
import Dropdown from "./Templates/DropDown";
import Loader from "./Templates/Loader";

function Home() {
  document.title = "RR MOVIES | HOME ";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallPaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      // const randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setTrending(data.results);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallPaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideBar />
      <div className="w-[80%] h-full overflow-hidden overflow-x-hidden overflow-y-auto">
        <TopNav />
        <Header data={wallpaper} />

        <div className="p-5 flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-zinc-500 ">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
