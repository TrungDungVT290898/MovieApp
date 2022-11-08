import React from 'react'
import { useLocation } from 'react-router-dom'
import { string } from 'yup';
import { number } from 'yup/lib/locale';
import MovieDetail from '../features/movie/MovieDetail'

function DetailPage() {
    const location = useLocation();
    const arr = location.pathname.split("/");
    const id = arr.length > 0 ? (parseInt(arr[arr.length - 1])) : 0;
    console.log(`go to movie id:${id}`);
    return (
        <MovieDetail />
    )
}

export default DetailPage