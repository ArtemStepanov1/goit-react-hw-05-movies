import { MovieForm } from "../components/MovieForm/MovieForm";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieByName } from "../API"
import { MoviesList } from "../components/MoviesList/MoviesList";

export const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const userQuery = searchParams.get('query');

    useEffect(() => {
        if(query === ''){
            return;
        }
        (async () => {
            const res = await getMovieByName(query);
            setMovies(res.results);
            setSearchParams({ query: query });
        })();
    }, [query, setSearchParams]);

    useEffect(() => {
        if (userQuery === null) {
            setMovies(null);
            setQuery('');
            return;
        }

        setQuery(userQuery);
    }, [userQuery]);

    return (
        <main>
            <MovieForm handleSubmit={setQuery} movies={movies}/>
            {movies && <MoviesList movies={movies}/>}

        </main>
    )
}
