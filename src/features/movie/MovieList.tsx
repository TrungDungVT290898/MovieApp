import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import { MoviePayload } from '../../types/type'
import { useDispatch, useSelector } from "react-redux";
import { MovieState } from './movieSlice';
import { getFilmsAsync } from './movieSlice';
function MovieList() {
    const { listFilms, keyword, page, movieType, error, lastID } = useSelector((f: any) => f.films as MovieState);
    const dispatch = useDispatch<any>();
    useEffect(() => {

        dispatch(getFilmsAsync({ movieType, keyword, page, id: lastID }));
    }, [keyword, page, movieType, lastID])
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", backgroundColor: "black" }}>
            {
                error ? (<div> {error}
                </div>) :
                    !listFilms ? (<div>No Results</div>) : listFilms ? listFilms.map(film => (
                        <MovieCard key={film.id} movie={film} />
                    )) : (<div>No Results</div>)
            }
        </div>
    )
}

export default MovieList