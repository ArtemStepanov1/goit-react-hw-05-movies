import { GiCharacter } from "react-icons/gi";
import { FaTheaterMasks } from "react-icons/fa";
import {
    CastCard,
    CastImg,
    CastInfoWrap,
} from "./CastItem.styled";

export const CastItem = ({cast}) => {
    const {profile_path, original_name, character} = cast;
    const poster = profile_path
        ? 'https://image.tmdb.org/t/p/w300' + profile_path
        : 'https://www.reelviews.net/resources/img/default_poster.jpg';
    return(
        <CastCard>
            <CastImg 
                src={poster} 
                alt={original_name}
                />
            <CastInfoWrap>
                <h4><GiCharacter /> {original_name}</h4>
                <h4><FaTheaterMasks /> {character}</h4>
            </CastInfoWrap>
        </CastCard>
    )
}