import MovieItem from "../../components/MovieItem/MovieItem";
import style from "./movies.module.scss";
import React from "react";
import Skelet from "../../components/Skelet/Skelet";
import { useSelector } from "react-redux";

const Movies = () => {
  const movies = useSelector((state) => state.movie.movies);
  const fetch = useSelector((state) => state.movie.isFetching);
  if (fetch) {
    return (
      <div className={style.movie}>
        <div className={style.movie__container}>
          <div className={style.movie__container__inner}>
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
            <Skelet />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={style.movie}>
      <div className={style.movie__container}>
        <div className={style.movie__container__inner}>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              rating={movie.rating}
              genre={movie.genres}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.medium_cover_image}
            ></MovieItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
