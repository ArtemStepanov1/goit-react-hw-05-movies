import { MovieForm } from "../components/MovieForm/MovieForm";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieByName } from "../API"
import { MoviesList } from "../components/MoviesList/MoviesList";

export default function Movies(){
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    useEffect(() => {
        if (!query) return;
        (async () => {
            const res = await getMovieByName(query);
            setMovies(res.results);
        })();
    }, [query]);

    const handleSearch = ( name ) => {
        setSearchParams(name !== "" ? { query: name } : {})
    }

    return (
        <main>
            <MovieForm onSearch={handleSearch} movies={movies}/>
            {movies && <MoviesList movies={movies}/>}

        </main>
    )
}