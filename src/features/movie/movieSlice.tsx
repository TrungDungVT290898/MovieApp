import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieJSONPayload, MoviePayload } from "../../types/type";
import { API_KEY, BASE_MOVE_SEARCH_API_URL, BASE_MOVIE_API_URL, BASE_TV_API_URL, BASE_TV_SEARCH_API_URL, BASE_URL_MOVIE_SEARCH_WITH_ID, BASE_URL_TV_SEARCH_WITH_ID } from '../../constants/globalVariable'

export interface MovieState {
    listFilms?: MovieJSONPayload[],
    keyword: string,
    status: "idle" | "loading" | "failed",
    error: string | undefined,
    page: number,
    loading: boolean,
    rawPayload?: MoviePayload,
    movieType: "tv" | "movie",
    lastID: number,
    detailFilm?: MovieJSONPayload
}
interface IParameterGetFilms {
    movieType: string,
    keyword: string,
    page: number,
    id: number
}
const getFilms = async (movieType: string, keyword: string, page: number, id: number) => {
    let url = "";

    switch (movieType) {
        case "tv":
            if (id > 0) {
                url += BASE_URL_TV_SEARCH_WITH_ID + `${id}?`;
            }
            else {
                if (!keyword || keyword === "")
                    url += BASE_TV_API_URL;
                else {
                    url += BASE_TV_SEARCH_API_URL + `&query=${keyword}&`;
                }
                url += `&page=${page}&`
            }


            break;
        default:
            if (id > 0) {
                url += BASE_URL_MOVIE_SEARCH_WITH_ID + `${id}?`;
            }
            else {
                if (!keyword || keyword === "")
                    url += BASE_MOVIE_API_URL;
                else {
                    url += BASE_MOVE_SEARCH_API_URL + `&query=${keyword}&`;
                }
                url += `&page=${page}&`
            }

            break;
    }
    url += `${API_KEY}`;
    console.log(`url: ${url}`)
    try {
        const req = await fetch(url);
        const data = await req.json();
        console.log(data);
        return data;


    } catch (error) {
        console.log("error when fetch...")
        return null;
    }
}

const initialState: MovieState = { keyword: "", status: "idle", error: undefined, page: 1, loading: false, movieType: "movie", lastID: 0 };
export const getFilmsAsync = createAsyncThunk("/getFilms", async (para: IParameterGetFilms) => {
    return await getFilms(para.movieType, para.keyword, para.page, para.id);
});
export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.keyword = action.payload;
            state.detailFilm = undefined;
            state.lastID = 0;
            state.page = 1;
        },
        changePage: (state, action) => {
            if (action.payload === "prev") {
                state.page = state.page > 1 ? state.page = state.page - 1 : 1;
            }
            else if (action.payload === "next") {
                state.page = state.page < 1000 ? state.page = state.page + 1 : 1000;
            }
            else {
                state.page = action.payload as number;
            }
        },
        changeMovieType: (state, action) => {
            state.movieType = action.payload;
            state.detailFilm = undefined;
            state.lastID = 0;
            state.page = 1;
        },
        changeID: (state, action) => {
            state.lastID = action.payload;
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsAsync.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getFilmsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.rawPayload = action.payload;

                if (state.lastID <= 0)
                    state.listFilms = (state.rawPayload as MoviePayload).results;
                else
                    state.detailFilm = action.payload;


                state.loading = false;
            })
            .addCase(getFilmsAsync.rejected, (state, action) => {
                state.status = "failed";
                state.listFilms = [];
                state.rawPayload = undefined;
                state.error = action.error.message;
                state.loading = false;
            });
    },
});
export const { setFilter, changePage, changeMovieType, changeID } = filmsSlice.actions;
export default filmsSlice.reducer;
