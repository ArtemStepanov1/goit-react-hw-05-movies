import { Wrapper, ShortInfo, Image, LongInfoWrapper, LinkList, LinkItem } from "./MovieInfo.styled";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function MovieInfo({ movie, location }) {
    const { title, genres, release_date, vote_average, overview, poster_path} = movie;
    const poster = poster_path
    ? 'https://image.tmdb.org/t/p/w500' + poster_path
    : 'https://dummyimage.com/216x361/000/fff&text=No+poster'; 
    const vote = ((vote_average/10)*100).toFixed(0);
    const date = release_date?.slice(0, 4) ?? "";
    const genresArr = genres?.map(genre => genre.name).join(', ') ?? "";
    
    return (
        <>
        <Wrapper>
            <div>
                <Image  src={poster} alt={title} />
            </div>
            <ShortInfo>
                <h2>{title} {date}</h2>
                <p>User Score: {vote}%</p>
                <h4>Overview: </h4>
                <p>{overview}</p>
                <h4 >Genres: </h4>
                <p >{genresArr}</p>
            </ShortInfo>
        </Wrapper>
        <LongInfoWrapper>
            <h3>Additional information:</h3>
            <LinkList>
                <LinkItem>
                    <Link to="cast" state={{from:location?.state?.from}}>
                        Cast
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link to="reviews" state={{from:location?.state?.from}}>
                        Review
                    </Link>
                </LinkItem>
            </LinkList>
        </LongInfoWrapper>
        </>
    );
}

MovieInfo.propTypes = {
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
};