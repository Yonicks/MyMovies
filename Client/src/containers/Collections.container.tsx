import { connect } from 'react-redux';
import { StoreState } from './../types/index';
import { fetchTopRatedMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies } from './../actions/index';
import Collections from './../components/Collections/Collections.component';


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

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
