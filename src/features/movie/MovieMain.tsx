import React from 'react'
import { useEffect, useState, useRef } from "react"
import MovieCard from './MovieCard'
import { API_KEY, BASE_MOVE_SEARCH_API_URL, BASE_MOVIE_API_URL, BASE_TV_API_URL } from '../../constants/globalVariable'
import MovieSearch from './MovieSearch'
import { useForm } from "react-hook-form";
import MovieList from './MovieList';
import { useLocation, useSearchParams } from "react-router-dom"
import { FormProvider } from '../../components/form';
import { MoviePayload } from '../../types/type';
import Pagination from '../../components/pages/Pagination'
import { useDispatch, useSelector } from "react-redux";
import { changeID, changeMovieType, changePage, MovieState, setFilter } from './movieSlice';
interface FilterPayload {
    presentOn: "TV" | "Theater",
    keyword: string

}
const defaultValueForm: FilterPayload = {
    presentOn: "Theater",
    keyword: ""
}
const initialValue: MoviePayload = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
}
function MovieMain() {
    const searchParams = useSearchParams();
    const location = useLocation();

    const methods = useForm({
        defaultValues: defaultValueForm,
    });
    const { handleSubmit } = methods;
    const dispatch = useDispatch();
    const { page, rawPayload, movieType, lastID } = useSelector((f: any) => f.films as MovieState);
    const handleChangePage = (page: string | number) => {
        dispatch(changePage(page));
    }
    const onSubmit = (data: FilterPayload) => {
        dispatch(setFilter(data.keyword));
    }
    useEffect(() => {
        const type = searchParams[0].get("type");
        if (movieType === type) return;
        dispatch(changeMovieType(type));
    })
    useEffect(() => {
        const paths = location.pathname.split("/");
        const id = parseInt(paths[paths.length - 1]);
        if (id && id !== lastID) {
            dispatch(changeID(id));
        }


    })

    return (
        <div >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <MovieSearch />
            </FormProvider>

            <MovieList />
            {

            }
            <Pagination currentPage={page} pageNum={!rawPayload || !rawPayload.results ? 0 : Math.round(rawPayload.total_pages / 20)} handleChangePage={handleChangePage} />

        </div >




    )
}

export default MovieMain