
import { IMovie } from './movie';

export interface StoreState {
    enthusiasm: EnthusiasmState,
    header: HeaderState,
    movies: MoviesCollectionsState,
}
export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}
export interface HeaderState {
    appName?: string;
    navLinks?: NavLink[]
}

export interface NavLink {
    id: string;
    title: string;
    path: string;
    children?: NavLink[]
}

export interface MoviesCollectionsState {
    top_rated: MoviesListResponse;
    now_playing: MoviesListResponse;
    popular: MoviesListResponse;
    upcoming: MoviesListResponse;
}

export interface MoviesListResponse {
    page: number;
    total_pages: number;
    results: IMovie[];
    total_results: number;
}
