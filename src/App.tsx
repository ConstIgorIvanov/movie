import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Movies from './pages/Movies/Movies';
import OneMovie from './pages/OneMovie/OneMovie';

import { getMovie } from './features/movie/movieSlice';
import { useAppDispatch } from './hooks';

import './scss/app.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(getMovie(1));

  return (
    <Routes>
      <Route path="/movie" element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="movie/:id" element={<OneMovie />} />
      </Route>
    </Routes>
  );
};

export default App;
