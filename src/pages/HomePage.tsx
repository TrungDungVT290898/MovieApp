import React from 'react'
import { useEffect, useState, useRef } from "react"
import MovieCard from '../features/movie/MovieCard'
import { API_KEY, BASE_MOVE_SEARCH_API_URL, BASE_MOVIE_API_URL, BASE_TV_API_URL } from '../constants/globalVariable'
import MovieSearch from '../features/movie/MovieSearch'
import { useForm } from "react-hook-form";
import MovieList from '../features/movie/MovieList';
import { useLocation, useSearchParams } from "react-router-dom"
import { FormProvider } from '../components/form';
import { MoviePayload } from '../types/type';
import Pagination from '../components/pages/Pagination'
import MovieMain from '../features/movie/MovieMain'
function HomePage() {

    return (
        <MovieMain />

    )
}

export default HomePage