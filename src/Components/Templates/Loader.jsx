import React from "react";

const Loader = () =>{
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-black ">
            <img className="h-[50%] object cover" src="src\assets\logos\loader.gif" alt="" />
            <p className="text-white text-6xl font-bold">LOADING...</p>
        </div>
    )
}

export default Loader;