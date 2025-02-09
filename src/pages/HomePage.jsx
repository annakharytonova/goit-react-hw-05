import MovieList from "../components/MovieList";
import { fetchTrendingMovies } from "../services/api";
// import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
