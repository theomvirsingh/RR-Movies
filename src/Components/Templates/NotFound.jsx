import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () =>{
    const navigate = useNavigate();
    return (
        <div className="absolute top-0 left-0 w-screen h-screen  flex flex-col justify-center items-center bg-black ">
            <Link 
                onClick={()=> navigate(-1)}
                className="absolute hover:text-zinc-300 ri-close-fill text-3xl text-white right-[5%] top-[5%]"    
            >
            </Link>
            <div className="flex items-center justify-center flex-col">
                <img className="object cover" src="src\assets\logos\error_404.gif" alt="" />
                <p className="text-white text-6xl font-bold">NOT FOUND</p>
            </div>
        </div>
    )
}

export default NotFound;