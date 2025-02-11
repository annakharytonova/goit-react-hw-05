import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../services/api";
// import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchTrendingMovies();
      if (response.results) {
        setMovies(response.results); // Переконайся, що передаєш саме масив
      } else {
        console.error("Unexpected API response:", response);
      }
      // setMovies(data);
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
