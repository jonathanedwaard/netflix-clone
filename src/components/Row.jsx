import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";

const Row = ({ title, url, row }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="p-8">
      <h1 className="text-white font-bold text-3xl py-4">{title} Movies</h1>
      <div className="flex items-center relative">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-red-600 text-white rounded-full -left-6 absolute text-3xl cursor-pointer opacity-80 hover:opacity-100 z-10"
        />
        <div
          id={"slider" + row}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide inline-block relative"
        >
          {movies.map(
            (item, id) =>
              item?.backdrop_path && (
                <div
                  className="inline-block relative w-60 cursor-pointer mr-2"
                  key={id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt="{item?.title}"
                    className=""
                  />
                  <div className=""></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80">
                    <h1 className="w-2/3 h-full m-auto text-white text-center flex justify-center items-center whitespace-normal">
                      {item?.title}
                    </h1>
                    {like ? (
                      <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                      <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                  </div>
                </div>
              )
          )}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-red-600 text-white rounded-full -right-6 absolute text-3xl cursor-pointer opacity-80 hover:opacity-100 z-10"
        />
      </div>
    </div>
  );
};

export default Row;
