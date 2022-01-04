import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import style from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Message</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/setting" className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
      </div>
      <div className={style.friends}>
        Friends
        {/* <Friends state = {props.state.sideBar}/> */}
      </div>
    </nav>
  )
}

export default Navbar