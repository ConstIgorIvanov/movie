import styles from "./header.module.scss";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setMovie} from '../../features/movie/movieSlice'
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container__inner}>
          <Link to="/" onClick={() => dispatch(setMovie({}))}>Movies</Link>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Header;
