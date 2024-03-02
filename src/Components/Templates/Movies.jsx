import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import TopNav from "./TopNav";
import Dropdown from "./DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import Cards from "./Cards";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [duration, setDuration] = useState("day");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "RR MOVIES | MOVIES "; 

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const refreshandler = async () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-full h-full bg-[#1f1e24]">
      <div className="p-[3%] w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-zinc-200 mt-5 ri-arrow-left-line"
          ></i>{" "}
          Movies
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav className="mx-auto" />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>    
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        {" "}
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
