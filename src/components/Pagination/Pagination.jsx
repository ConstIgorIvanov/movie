import style from "./pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, setCurrentPage } from "../../features/movie/movieSlice";

import React from "react";
const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movie.page);

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
  
  return (
    <div>
      {prevCurrent <= 0 ? null : (
        <button onClick={() => prevAdd()} className={style.btn}>
          {prevCurrent}
        </button>
      )}
      <button
        onClick={() => dispatch(getMovie(page))}
        className={btn.join(" ")}
      >
        {page}
      </button>
      <button onClick={() => nextAdd()} className={style.btn}>
        {nextCurrent}
      </button>
    </div>
  );
};

export default Pagination;
