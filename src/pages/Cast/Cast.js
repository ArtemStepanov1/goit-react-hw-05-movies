import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "API";
import { CastItem } from "../../components/CastItem/CastItem";
import { Wrapper } from "./Cast.styled";

export const Cast = () => {

    const { id } = useParams();
    const [casts, setCasts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        (async () => {
            const credits = await getMovieCast(id);
            setCasts(credits.cast.slice(0, 20));
            setLoading(false);
        })();
    }, [id])

    return (
        <Wrapper>
            {loading && <h2>Loading...</h2>}
            {casts.map((cast) => (
                <CastItem 
                key={cast.credit_id}
                cast={cast}
                />
                ))}
        </Wrapper>
    );
  };