import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import request from "../Request";

const Home = () => {
  return (
    <>
      <Hero />
      <Row row="1" title="Now Playing" url={request.requestNowPlaying} />
      <Row row="2" title="Top Rated" url={request.requestTopRated} />
      <Row row="3" title="Upcoming" url={request.requestUpcoming} />
      <Row row="4" title="Trending" url={request.requestTrending} />
    </>
  );
};

export default Home;
