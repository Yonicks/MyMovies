import Axios from "axios";
export const apiKey = 'c9ffdc92dbfa449f7b879407a16b7eca'
export const posterPathW200 = 'https://image.tmdb.org/t/p/w200/';
export const posterPathW500 = 'https://image.tmdb.org/t/p/w500/';

const theMovieDB = Axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`
})

export default theMovieDB;