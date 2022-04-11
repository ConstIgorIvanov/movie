import style from "./onemovie.module.scss";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useParams } from "react-router-dom";
import { setComments, setCurrentMovie } from "../../features/movie/movieSlice";
const OneMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const movie = useSelector((state) => state.movie.currentMovie);
  const comments = useSelector((state) => state.movie.currentMovie.comments);

  React.useEffect(() => {
    dispatch(setCurrentMovie(id));
  }, []);

  const addComments = () => {
    if (inputRef.current.value !== "") {
      dispatch(setComments(inputRef.current.value));
      inputRef.current.value = " ";
    }
  };

  return (
    <div className={style.movie}>
      <div className={style.movie__container}>
        <div className={style.movie__container__inner}>
          <div className={style.movie__container__image}>
            <img
              src={movie.large_cover_image}
              className={style.movie__image}
              alt="Постер"
            ></img>
            <span className={style.movie__rating}>
              {movie.rating || "rating"}
            </span>
          </div>

          <div className={style.movie__container__content}>
            <div className={style.movie__container__title}>
              {movie.title || "Title"}
            </div>
            <div className={style.movie__container__year}>
              {movie.year || "Year"}
            </div>
            <div className={style.movie__container__tags}>
              {movie.genres || "Genres"}
            </div>
            <div className={style.movie__container__synopsis}>Synopsis</div>
            <div className={style.movie__container__descriprion}>
              {movie.description_full || "Description"}
            </div>
            <div className={style.movie__container__comments}>Comments</div>
            <div className={style.movie__container__comments_text}>
              {comments?.map((i) => (
                <div>{i}</div>
              ))}
            </div>
            <div className={style.form}>
              <input type="text" ref={inputRef}></input>
              <button onClick={() => addComments()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
