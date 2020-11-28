
import { StoreState } from './../types/index';
import { connect } from 'react-redux';
import Header from './../components/Header/Header';

const mapStateToProps = (state: StoreState) => {
    const { header: { appName, navLinks } } = state;
    return {
        appName,
        navLinks
    }
}

export default connect(mapStateToProps, null)(Header);