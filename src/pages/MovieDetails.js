import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieById } from "../API";
import { BackLink } from "components/BackLink/BackLink";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { Loader } from "components/Loader/Loader";

export default function MovieDetails(){
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const backLinkHref = location?.state?.from ?? "/movies";
    
    useEffect(() => {
        (async () => {
        setMovie(await getMovieById(id));
        })();
    }, [id]);
        
    return (
    <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieInfo movie={movie} location={location}/>
        <Link to={backLinkHref}>Go back</Link>

        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </main>

  );
};
