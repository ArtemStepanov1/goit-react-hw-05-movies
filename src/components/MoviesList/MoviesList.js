import { MoviesGallery } from "./MoviesList.styled";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return(
        <MoviesGallery>
            {movies.map((movie) => (
                <MoviesItem movie={movie} key={movie.id} state={{from: location}}/>
            ))} 
        </MoviesGallery>
    )
}

MoviesItem.propTypes = {
    movies: PropTypes.array,
}