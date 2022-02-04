import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrlfJpVxz0MDMknFE-dFJJw_KcmqNT_Ba0mMDyDONvrzgYPrRDTNtzoe88JqMs0qDUvY&usqp=CAU" alt="" />

            <div className={style.loginBlock}>
                {props.isAuth ? props.login
               : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;