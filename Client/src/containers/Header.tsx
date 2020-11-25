
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

const mapDispatchToProps = () => {
    return {
        aaa: 2
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);