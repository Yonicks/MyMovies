import React from 'react'
import { posterPathW200 } from '../../apis/theMovieDB';
import { IMovie } from './../../types/movie';
import './HorizontalList.scss';

interface Props {
    moviesList: IMovie[]
}

export interface State {
}


class HorizontalList extends React.Component<Props, State> {

    render() {
        const { moviesList } = this.props;
        return (
            <div className="moviesList">
                {
                    moviesList?.map((res: IMovie) => {
                        return (
                            <div className="movieItem" key={res.id}>
                                <img src={posterPathW200 + res.backdrop_path} alt="poster" />
                                <div className="details" >{res.title}</div>
                            </div>
                        );

                    })
                }
            </div>
        )
    }
}

export default HorizontalList;
