export type Props = {
    title?: string,
    children: JSX.Element
}
export interface IGenres {
    id: number,
    name?: string
}
export interface MovieJSONPayload {
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number,
    name: string,
    genres: IGenres[]

}
export interface MoviePayload {
    results: MovieJSONPayload[],
    total_pages: number,
    total_results: number,
    page: number
}
export type FormProviderProps = {
    children: any,
    onSubmit: any,
    methods: any
}
