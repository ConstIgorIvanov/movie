import React from 'react';
import { useParams } from 'react-router-dom';

import { CurrentMovie, setComments, setCurrentMovie } from '../../features/movie/movieSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';

import style from './onemovie.module.scss';

type comments = {
  id: number;
  comment: string[];
  date: string;
  time: string;
};
type localStorage = {
  filmId: number;
  comments: comments;
};

const OneMovie: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>('');

  const movie = useAppSelector((state) => state.movie.currentMovie);
  const [localComments, setLocalComments] = React.useState<comments[]>([]);

  React.useEffect(() => {
    dispatch(setCurrentMovie(Number(id)));
    const localStorageRef: localStorage[] = JSON.parse(localStorage.getItem('comment') || '[]');
    if (localStorageRef) {
      const com = localStorageRef.filter((item) => item.filmId === Number(id));
      com.forEach((item: localStorage) => setLocalComments((prev) => [...prev, item.comments]));
    }
  }, []);

  const addComments = () => {
    const newComment: comments = {
      id: localComments.length + 1,
      comment: [value],
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    if (value) {
      dispatch(setComments(value));
      setLocalComments((prev) => [...prev, newComment]);
      setTimeout(() => {
        setValue('');
      }, 100);
    }
  };

  if (!movie) return <div>Loading</div>;

  return (
    <div className={style.movie}>
      <div className={style.movie__container}>
        <div className={style.movie__container__inner}>
          <div className={style.movie__container__image}>
            <img src={movie.large_cover_image} className={style.movie__image} alt="Постер"></img>
            <span className={style.movie__rating}>{movie.rating || 'rating'}</span>
          </div>

          <div className={style.movie__container__content}>
            <div className={style.movie__container__title}>{movie.title || 'Title'}</div>
            <div className={style.movie__container__year}>{movie.year || 'Year'}</div>
            <div className={style.movie__container__tags}>{movie.genre || 'Genres'}</div>
            <div className={style.movie__container__synopsis}>Synopsis</div>
            <div className={style.movie__container__descriprion}>
              {movie.description_full || 'Description'}
            </div>
            <div className={style.movie__container__comments}>Comments</div>
            <div className={style.movie__container__comments_text}>
              {localComments.map((i) => (
                <div key={i.id} className={style.comment}>
                  <div className={style.comment__item}>{i.comment}</div>
                  <div className={style.comment__item}>{i.date}</div>
                  <div className={style.comment__item}>{i.time}</div>
                </div>
              ))}
            </div>
            <div className={style.form}>
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
              <button onClick={() => addComments()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
