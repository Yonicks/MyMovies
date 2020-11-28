// import useState next to FunctionComponent
import React, { useEffect } from 'react';
import Collection from './../Collection/Collection.component';
import { MoviesCollectionsState } from './../../types/index';


interface Props {
    movies: MoviesCollectionsState;
    fetchTopRatedMovies: any;
    fetchNowPlayingMovies: any;
    fetchPopularMovies: any;
    fetchUpcomingMovies: any;
}


const Collections: React.FunctionComponent<Props> = (props) => {
    const { fetchTopRatedMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, movies } = props;



    useEffect(() => {
        fetchTopRatedMovies();
        fetchNowPlayingMovies();
        fetchPopularMovies();
        fetchUpcomingMovies();
    }, [])

    return <>
        <div className="collectionsArea">
            <Collection moviesListResponse={movies.top_rated} title="Top Rated" />
            <Collection moviesListResponse={movies.now_playing} title="Now Playing" />
            <Collection moviesListResponse={movies.popular} title="Popular" />
            <Collection moviesListResponse={movies.upcoming} title="Upcoming" />
        </div>
    </>
}

export default Collections;


