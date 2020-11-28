import { connect } from 'react-redux';
import HorizontalList from './../components/HorizontalList/HorizontalList.component';
import { StoreState } from './../types/index';
import { fetchTopRatedMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies } from './../actions/index';


const mapStateToProps = (state: StoreState) => {
    const { movies } = state;
    return {
        movies
    }
}

const mapDispatchToProps = {
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchPopularMovies,
    fetchUpcomingMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalList);
