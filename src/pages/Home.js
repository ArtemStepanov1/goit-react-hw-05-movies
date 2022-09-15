import { useState, useEffect } from "react";
import { getTrend } from "../API";
import { MoviesList } from "../components/MoviesList/MoviesList"

export default function Home(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setMovies(await getTrend());
    })();
  }, []);

  return (
      <main>
        <h1>Trending today</h1>
        <MoviesList movies={movies}/>
      </main>
    );
  };