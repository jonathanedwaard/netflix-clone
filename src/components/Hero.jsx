import React, { useEffect, useState } from "react";
import request from "../Request";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute md:w-1/2 top-[30%] p-8">
        <h1 className="text-white text-5xl font-bold mb-4">{movie?.title}</h1>
        <p className="text-white mb-4">{movie?.overview}</p>
        <button className="bg-white text-black px-8 py-2 mr-8 font-bold hover:bg-transparent hover:text-white hover:border hover:border-white">
          Details
        </button>
        <button className="border border-white font-bold px-8 py-2 hover:bg-white hover:text-black">
          Watch Later
        </button>
      </div>
    </div>
  );
};

export default Hero;
