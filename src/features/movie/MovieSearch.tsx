import React from 'react'
import { useFormContext } from 'react-hook-form';
import { useLocation } from "react-router-dom"
import { FormProvider, FTextField } from '../../components/form';
import { MovieState } from './movieSlice';
import { useDispatch, useSelector } from "react-redux";
import { relative } from 'path';
function MovieSearch() {
    const dispatch = useDispatch();
    const { loading, movieType } = useSelector((f: any) => f.films as MovieState);
    console.log(`movie Type: ${movieType}`);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{ minHeight: 50, position: "relative" }}>

                <div id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${(movieType === "movie" || !movieType) ? "active" : ""}`} aria-current="page" href="/">Theater</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${movieType === "tv" ? "active" : ""}`} href="/?type=tv">TV Series</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${movieType === "trending" ? "active" : ""}`} href="/?type=trending">Trending</a>
                        </li>
                        {loading ? (<li className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </li>) : (<li></li>)}

                    </ul>
                    <div className="d-flex">
                        <FTextField name="keyword" className="form-control me-2" placeholder="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>


                </div>
            </div>
        </nav>


    )
}

export default MovieSearch