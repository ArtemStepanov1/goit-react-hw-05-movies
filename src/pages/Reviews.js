  import { useParams } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { getMovieReviews } from "API";
  import { ReviewsItem } from "../components/ReviewsItem/ReviewsItem";
  
  export default function Reviews(){

    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getMovieReviews(id);
            setReviews(res.results);
        })();
    }, [id])

    return (
    <>
    {reviews ? <ul>
            {reviews.map((review) => (
                < ReviewsItem
                    key={review.id}
                    review={review}
                />
                ))}
        </ul>
    : <h3>We don't have any reviews yet.</h3>}
    </>
    );
};