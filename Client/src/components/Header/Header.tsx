import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderState } from './../../types/index';
import Logo from "../../assets/logo.png"

export interface Props extends HeaderState {
    children?: React.ReactNode,

}

export interface State {
}

class Header extends React.Component<Props, State> {


    render() {
        const { appName, navLinks } = this.props;
        console.log(this.props);
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item">   <img className="logo" src={Logo} />{appName}   </a>

                    {
                        navLinks?.map(({ id, title, path }) => (
                            <Link className="item" key={id} to={path}>{title}</Link>
                        ))
                    }



                </div>
            </div>
        )
    }
}

export default Header;
