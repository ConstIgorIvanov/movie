import "./App.scss";
import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies/Movies";
import OneMovie from "./pages/OneMovie/OneMovie";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { useDispatch} from "react-redux";
import { getMovie } from "./features/movie/movieSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getMovie(1));
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
        <Movies />
        } />
        <Route path="movie/:id" element={<OneMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
