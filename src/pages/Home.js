import { useState, useEffect } from "react";
import { getTrend } from "../API";
import { MoviesList } from "../components/MoviesList/MoviesList"

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    (async () => {
      setMovies(await getTrend());
      setLoading(false);

    })();
  }, []);

  return (
      <main>
        <h1>Trending today</h1>
        {loading && <h2>Loading...</h2>}
        <MoviesList movies={movies}/>
      </main>
    );
  };