import { Link } from 'react-router-dom';
import style from './movieitem.module.scss';

interface MovieItemProps {
  id: number;
  title: string;
  year: number;
  image: string;
  rating: number;
  genres: string[];
}

const MovieItem: React.FC<MovieItemProps> = ({ title, year, image, id, rating, genres }) => {
  console.log(genres);
  return (
    <div className={style.movie}>
      <div className={style.movie__container}>
        <div className={style.movie__main}>
          <div className={style.info}>
            <div className={style.info__rating}>{rating}</div>
            <div className={style.info__genre}>{genres}</div>
            <Link to={`movie/${id}`} className={style.info__more}>
              More
            </Link>
          </div>
          <img className={style.image} src={image} alt="none" />
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
