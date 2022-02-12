import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import Header from "./Header";
import { connect } from "react-redux";
import { authMeThunkCreator } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunkCreator();
    }

    render() {
        return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, { authMeThunkCreator })(HeaderContainer);