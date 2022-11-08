import React from 'react'
import { useFormContext } from 'react-hook-form';
import { useLocation } from "react-router-dom"
import { FormProvider, FTextField } from '../../components/form';
import { MovieState } from './movieSlice';
import { useDispatch, useSelector } from "react-redux";
function MovieSearch() {
    const dispatch = useDispatch();
    const { loading } = useSelector((f: any) => f.films as MovieState);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ minHeight: 50 }}>
            <div className="container-fluid" style={{ minHeight: 50 }}>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Theater</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/?type=tv">TV Series</a>
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