import { useAppDispatch, useAppSelector } from '../../hooks';

import { getMovie, setCurrentPage } from '../../features/movie/movieSlice';

import style from './pagination.module.scss';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.movie.page);
  const currentMovie = useAppSelector((state) => state.movie.currentMovie);
  const prevCurrent = page - 1;
  const nextCurrent = page + 1;
  const btn = [style.btn];
  btn.push(style.active);

  const prevAdd = () => {
    dispatch(setCurrentPage(prevCurrent));
    dispatch(getMovie(prevCurrent));
  };
  const nextAdd = () => {
    dispatch(setCurrentPage(nextCurrent));
    dispatch(getMovie(nextCurrent));
  };
  if (currentMovie.id !== 1) {
    return <div> {'=)'} </div>;
  }
  return (
    <div>
      {prevCurrent <= 0 ? null : (
        <button onClick={() => prevAdd()} className={style.btn}>
          {'<'}
        </button>
      )}
      <button onClick={() => dispatch(getMovie(page))} className={btn.join(' ')}>
        <div>{page}</div>
      </button>
      <button onClick={() => nextAdd()} className={style.btn}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
