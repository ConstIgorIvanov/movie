import style from './skelet.module.scss';

const Skelet: React.FC = () => {
  return (
    <div>
      <div className={style.movie}>
        <div className={style.movie__container}>
          <div className={style.movie__main}>
            <img
              src="https://yts.mx/assets/images/movies/c_h_o_m_p_s_1979/medium-cover.jpg"
              alt="none"
            />
          </div>
          <div className={style.movie__subtitle}>
            <div className={style.movie__subtitle__title}>Title</div>
            <div className={style.movie__subtitle__year}>Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skelet;
