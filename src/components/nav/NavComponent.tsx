import React from "react";
import s from './NavComponent.module.css'
import {NavLink} from "react-router-dom";

const NavComponent = () => {
    return (
        <div className={s.NavComponent}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/settings"}>Settings</NavLink>
        </div>
    )
}
export default NavComponent