import { Link } from "react-router-dom";
import style from "./movieitem.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentMovie } from "../../features/movie/movieSlice";
const MovieItem = ({ title, year, image, id, rating, genre }) => {
const dispatch = useDispatch()
  return (
    <div className={style.movie}>
      <div className={style.movie__container}>
        <div className={style.movie__main}>
          <div className={style.info}>
            <div className={style.info__rating}>{rating}</div>
            <div className={style.info__genre}>{genre}</div>
            <Link
              to={`movie/${id}`}
              className={style.info__more}
            >
              More
            </Link>
          </div>
          <img src={image} alt="none" />
        </div>
        <div className={style.movie__subtitle}>
          <div className={style.movie__subtitle__title}>{title}</div>
          <div className={style.movie__subtitle__year}>{year}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
