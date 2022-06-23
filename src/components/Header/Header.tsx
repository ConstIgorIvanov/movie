import { Link } from 'react-router-dom';

import Pagination from '../Pagination/Pagination';

import { setMovie } from '../../features/movie/movieSlice';
import { useAppDispatch } from '../../hooks';

import styles from './header.module.scss';
const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container__inner}>
          <Link
            to="/movie"
            onClick={() =>
              dispatch(
                setMovie({
                  id: 1,
                  title: 'test',
                  year: 1,
                  image: 'test',
                  rating: 2,
                  genres: ['test'],
                  large_cover_image: 'test',
                  description_full: 'test',
                  medium_cover_image: 'test',
                }),
              )
            }>
            Movies
          </Link>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Header;
