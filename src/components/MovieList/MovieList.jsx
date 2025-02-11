import { NavLink } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending Movies</h2>
      <nav className={s.nav}>
        {movies.map((item) => {
          return (
            <NavLink key={item.id} className={s.link}>
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default MovieList;
