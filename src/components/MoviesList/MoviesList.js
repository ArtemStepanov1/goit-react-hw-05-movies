import { MoviesGallery } from "./MoviesList.styled";
import { MoviesItem } from "../MoviesItem/MoviesItem"
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    return(
        <MoviesGallery>
            {movies.map((movie) => (
                <MoviesItem movie={movie} key={movie.id}/>
            ))} 
        </MoviesGallery>
    )
}

MoviesItem.propTypes = {
    movies: PropTypes.array,
}