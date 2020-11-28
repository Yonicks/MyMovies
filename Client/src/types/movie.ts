export interface IMovie {
    vote_average: number,
    popularity: number,
    vote_count: number,
    release_date: Date
    title: string,
    adult: boolean,
    backdrop_path: string,
    id: number,
    overview: string,
    original_language: string,
    original_title: string,
    poster_path: string,
    genre_ids: number[],
    video: boolean

}


export interface IMovieDetails extends IMovie {
    genres: { id: number, name: string }[]
}