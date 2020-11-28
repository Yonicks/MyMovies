// import useState next to FunctionComponent
import React, { useEffect } from 'react';
import Collection from './../Collection/Collection.component';
import { MoviesCollectionsState } from './../../types/index';
import './Collections.styles.scss';


interface Props {
    movies: MoviesCollectionsState;
    fetchTopRatedMovies: any;
    fetchNowPlayingMovies: any;
    fetchPopularMovies: any;
    fetchUpcomingMovies: any;
}


const Collections: React.FunctionComponent<Props> = (props) => {
    const { fetchTopRatedMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, movies } = props;
    const { top_rated, now_playing, popular, upcoming } = movies;


    useEffect(() => {
        fetchTopRatedMovies();
        fetchNowPlayingMovies();
        fetchPopularMovies();
        fetchUpcomingMovies();
    }, [])

    return <>
        <div className="collectionsArea">
            <Collection moviesListResponse={top_rated} title="Top Rated" />
            <Collection moviesListResponse={now_playing} title="Now Playing" />
            <Collection moviesListResponse={popular} title="Popular" />
            <Collection moviesListResponse={popular} title="Popular" />
            <Collection moviesListResponse={upcoming} title="Upcoming" />
        </div>
    </>
}

export default Collections;


