// import useState next to FunctionComponent
import React from 'react';
import { MoviesListResponse } from '../../types';
import HorizontalList from '../HorizontalList/HorizontalList.component';
import './Collection.styles.scss';

interface IProps {
    title: string,
    moviesListResponse: MoviesListResponse
}
const Collection: React.FunctionComponent<IProps> = ({ title, moviesListResponse }) => {

    return <>
        <div className="moviesCollection">
            <h3 className="title">{title}</h3>
            <HorizontalList moviesList={moviesListResponse.results} />
        </div>
    </>
}

export default Collection;


