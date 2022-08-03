import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import logo from '../../assets/img/Binance-Icon-Logo.wine.svg'

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.header_wrapper}>
                <img src={logo} alt="" />

                <div className={style.welcome}>Welcome to <span>Social Network</span> </div>

                <div className={style.loginBlock}>
                    {props.isAuth
                        ? <div className={style.loginHeader}> <span>Stepan</span>   <button onClick={props.logoutThunkCreator}>Logout</button></div>
                        : <NavLink to={'/login'} >Login</NavLink>}
                </div>
            </div>

        </header>
    )
}

export default Header;