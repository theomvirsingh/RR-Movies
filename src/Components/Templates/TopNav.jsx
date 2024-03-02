import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '../../assets/noimage.jpg'; // Adjust the path as needed
function TopNav(){

    const [query,setQuery] = useState("");
    const [searches,setSearches] = useState([])
    const GetSearch = async () => {
        try{
            const {data} =await axios.get(`/search/multi?query=${query}`)
            setSearches(data.results);
        }
        catch(e){
            console.log("Error: ",e)
        }
    }
    useEffect(() =>{
        GetSearch();
    },[query])

    return (
        <div className="w-full h-[10vh] relative flex justify-start items-center ml-[10%] ">
            <i className="text-zinc-400 text-3xl ri-search-2-line"></i>
            <input
            onChange={(e)=>setQuery(e.target.value)}
            value={query} 
            className="w-[70%] text-zinc-200 mx-8 p-5 text-xl outline-none border-none bg-transparent" type="text" 
            placeholder="Search" />
            {query.length > 0 && (<i onClick={()=>setQuery("")} className="text-zinc-400 text-3xl ri-close-line"></i>)}

            <div className="z-[1000] absolute w-[70%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded ml-[8%]">
                {searches.map((s,i)=>(
                    <Link to={`/${s.media_type}/details/${s.id}`} key={i} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-4 flex justify-start items-center border-b-2 border-zinc-100">
                        <img className="w-[8vw] h-[20vh] object-cover rounded-md mr-5 shadow-2xl" 
                        src={
                            s.poster_path || s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.backdrop_path || s.profile_path}` : noimage
                        } alt="" />
                        <span>{s.name || s.title || s.original_name || s.original_title}</span>
                    </Link>
                ))}                
            </div>
        </div>
    )
}

export default TopNav;