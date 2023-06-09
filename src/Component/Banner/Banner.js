import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";

function Banner(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    });
  }, []);
  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        {/* <h1 className="description">{movie ? movie.overview : ""}</h1>*/}
        <h1 className="description">
          {movie && isExpanded
            ? movie.overview
            : movie?.overview?.slice(0, 150)}
          {!isExpanded && (
            <span onClick={handleReadMoreClick} className="read-more">
              Read More
            </span>
          )}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
