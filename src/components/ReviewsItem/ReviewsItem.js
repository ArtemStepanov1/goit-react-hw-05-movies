import { GiCharacter } from "react-icons/gi";
import {
    ReviewInfo,
    ReviewDate
} from "./ReviewsItem.styled";

export const ReviewsItem = ({review}) => {
    const {author, updated_at, created_at, content} = review;
    const date = (updated_at ?? created_at).slice(0, 10);
    return(
        <li>
            <ReviewInfo>
                <h4><GiCharacter/> {author}</h4>
                <ReviewDate>{date}</ReviewDate>
            </ReviewInfo>
            <p>{content}</p>
        </li>
    )
}