import React, { ReactElement } from 'react'
import { posterPathW200 } from '../../apis/theMovieDB';
import { IMovie } from './../../types/movie';
import './HorizontalList.scss';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

interface IProps {
    moviesList: IMovie[]
}

export interface State {
}

const HorizontalList: React.FunctionComponent<IProps> = (props: IProps): ReactElement => {



    const MenuItem = ({ id, backdrop_path, title }: { id: number, backdrop_path: string, title: string }) => {
        return (
            <Link to={`/movie/details/${id}`}>
                <div className={`movieItem menu-item ${true ? 'active' : ''}`}>
                    <img src={posterPathW200 + backdrop_path} alt="poster" />
                    <div className="details" >{title}</div>
                </div>
            </Link>
        );
    };

    const Menu = (moviesList: IMovie[]): any => {
        return moviesList?.map((res: IMovie) => {
            return <MenuItem key={res.id} {...res} />;
        });
    };

    const Arrow = ({ text, className }: { text: string, className: string }) => {
        return (
            <div className={className}> <Icon>{text}</Icon> </div>
        );
    };


    const { moviesList } = props;
    const ArrowLeft = Arrow({ text: 'chevron_left', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: 'chevron_right', className: 'arrow-next' });
    const menuItems = Menu(moviesList);


    return <>
        <ScrollMenu
            data={menuItems}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
        />
    </>
}

export default HorizontalList;

