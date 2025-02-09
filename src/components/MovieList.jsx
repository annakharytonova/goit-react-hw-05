const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((item) => {
        return console.log(item);
      })}
    </ul>
  );
};

export default MovieList;
