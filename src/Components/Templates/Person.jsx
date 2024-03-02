import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import TopNav from "./TopNav";

import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import Cards from "./Cards";

const Person = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "RR MOVIES | person SHOWS "; 

  const Getperson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      
      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const refreshandler = async () => {
    if (person.length === 0) {
      Getperson();
    } else {
      setPage(1);
      setperson([]);
      Getperson();
    }
  };

  useEffect(() => {
    refreshandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-full h-full bg-[#1f1e24]">
      <div className="p-[3%] w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-zinc-200 mt-5 ri-arrow-left-line"
          ></i>{" "}
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav className="mx-auto" />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={Getperson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        {" "}
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Person;
