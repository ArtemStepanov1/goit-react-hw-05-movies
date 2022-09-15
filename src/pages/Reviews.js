  import { useParams } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { getMovieReviews } from "API";
  import { ReviewsItem } from "../components/ReviewsItem/ReviewsItem";
  
  export const Reviews = () => {

    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res = await getMovieReviews(id);
            setReviews(res.results);
            setLoading(false);
        })();
    }, [id])

    return (
    <>
    {loading && <h2>Loading...</h2>}
    {reviews && <ul>
            {reviews.map((review) => (
                < ReviewsItem
                    key={review.id}
                    review={review}
                />
                ))}
        </ul>}
    {!loading && <h3>We don't have any reviews yet.</h3>}
    </>
    );
};