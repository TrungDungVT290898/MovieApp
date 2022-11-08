import React, { useEffect, useState } from 'react'
import { BASE_URL_MOVIE_SEARCH_WITH_ID } from '../../constants/globalVariable'
import { MovieJSONPayload } from '../../types/type'
import { BASE_IMAGE_URL, API_KEY } from '../../constants/globalVariable'
import { MovieState } from './movieSlice'
import { useSelector } from "react-redux";

function MovieDetail() {
    const { listFilms } = useSelector((f: any) => f.films as MovieState);
    let imgURL = BASE_IMAGE_URL;
    if (listFilms) {
        if (listFilms.length > 0) {
            imgURL += listFilms[0].backdrop_path;
        }
    }

    return (
        <div className="card"  >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div>
                    <img src={imgURL} className="card-img-top" alt="image" style={{ width: 200 }} />

                </div>
                <div className="card-body"  >
                    <h5 className="card-title">{listFilms ? listFilms[0] ? listFilms[0].title : "" : ""}</h5>
                    <p className="card-text">{listFilms ? listFilms[0] ? listFilms[0].overview : "" : ""}</p>
                    <p className="card-text">Vote Average: {listFilms ? listFilms[0] ? listFilms[0].vote_average : "" : ""}</p>
                    <p className="card-text">Vote Count: {listFilms ? listFilms[0] ? listFilms[0].vote_count : "" : ""}</p>
                    <a href="#" className="btn btn-primary">WATCH</a>
                </div>
            </div>

        </div>
    )
}

export default MovieDetail