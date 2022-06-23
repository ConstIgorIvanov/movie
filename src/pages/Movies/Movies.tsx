import { useAppSelector } from '../../hooks';

import MovieItem from '../../components/MovieItem/MovieItem';
import Skelet from '../../components/Skelet/Skelet';

import style from './movies.module.scss';

const Movies: React.FC = () => {
  const movies = useAppSelector((state) => state.movie.movies);
  const fetch = useAppSelector((state) => state.movie.isFetching);

  if (fetch) {
    return (
      <div className={style.movie}>
        <div className={style.movie__container}>
          <div className={style.movie__container__inner}>
            {[...new Array(8)].map((_, index) => (
              <Skelet key={index} />
            ))}
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
              genres={movie.genres}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.medium_cover_image}></MovieItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
