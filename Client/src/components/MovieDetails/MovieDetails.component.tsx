import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovieDetails } from './../../actions/index';
import { RouteParams, StoreState } from './../../types/index';
import { IMovieDetails } from './../../types/movie';
import { posterPathW200 } from '../../apis/theMovieDB';

interface IProps {
    fetchMovieDetails: any,
    movieDetails: IMovieDetails;
}

export interface State {
}

const MovieDetails: React.FunctionComponent<RouteComponentProps<RouteParams> & IProps> = (props: RouteComponentProps<RouteParams> & IProps): ReactElement => {
    const currentMovieId = props.match.params.id;
    let { movieDetails }: { movieDetails: IMovieDetails } = props;
    const {
        title,
        backdrop_path,
        overview,
        vote_average,
        adult,
        original_language,
        release_date,
    } = movieDetails;

    useEffect(() => {
        getMovieDetails(currentMovieId);
        return () => {
            movieDetails = {} as IMovieDetails;
        }
    }, [])

    const getMovieDetails = async (id: string) => {
        const { fetchMovieDetails } = props;
        fetchMovieDetails(id);
    }

    return <>
        <div className="movieDetailsArea">
            <h2>{title}</h2>
            <h3>Score: {vote_average}</h3>
            <img src={posterPathW200 + backdrop_path} alt="poster" />
            <p>{overview}</p>

            <div className="extraDetails">
                <p>adult: {adult}</p>
                <p>original_language: {original_language}</p>
                <p>release_date: {release_date}</p>
            </div>
        </div>
    </>

}


const mapStateToProps = (state: StoreState) => {
    const { movies: { movieDetails } } = state;
    return { movieDetails }
};




export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
