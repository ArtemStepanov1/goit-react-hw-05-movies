import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "API";
import { CastItem } from "../../components/CastItem/CastItem";
import { Wrapper } from "./Cast.styled";

export default function Cast(){

    const { id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        (async () => {
            const credits = await getMovieCast(id);
            setCasts(credits.cast.slice(0, 20));
        })();
    }, [id])

    return (
        <Wrapper>
            {casts.map((cast) => (
                <CastItem 
                key={cast.credit_id}
                cast={cast}
                />
                ))}
        </Wrapper>
    );
  };