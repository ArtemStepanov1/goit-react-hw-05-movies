import { Link } from "react-router-dom";
import { 
    MoviePoster,
    MovieWrapper,
    MovieVote,
    TitleWrap,
    MovieTitle,
 } from "./MoviesItem.styled";
import PropTypes from 'prop-types';


export const MoviesItem = ({ movie, state }) => {
    const { id, title, poster_path, vote_average } = movie;
    const vote = vote_average ? vote_average.toFixed(1) : "0.0";
    const poster = poster_path
    ? 'https://image.tmdb.org/t/p/w500' + poster_path
    : 'https://dummyimage.com/216x361/000/fff&text=No+poster';

    return(
         <MovieWrapper>
            <Link to={`/movies/${id}`} state={state}>
                <MoviePoster src={poster} alt={title}/> 
                <MovieVote>{vote}</MovieVote>
                <TitleWrap>
                    <MovieTitle>{title}</MovieTitle>
                </TitleWrap>
            </Link>
        </MovieWrapper>
    )
}

MoviesItem.propTypes = {
    movie: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    })

};