import { Wrapper, ShortInfo, Image, LongInfoWrapper, LinkList, LinkItem } from "./MovieInfo.styled";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function MovieInfo({ movie }) {
    const { title, genres, release_date, vote_average, overview, poster_path} = movie;
    const poster = 'https://image.tmdb.org/t/p/w500' + poster_path ?? 'https://www.reelviews.net/resources/img/default_poster.jpg'; 
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
                    <Link to="cast">
                        Cast
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link to="reviews">
                        Review
                    </Link>
                </LinkItem>
            </LinkList>
        </LongInfoWrapper>
        </>
    );
}

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }),
};