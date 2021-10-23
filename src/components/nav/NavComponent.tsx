import React from "react";
import s from './NavComponent.module.css'
import {NavLink} from "react-router-dom";

const NavComponent = () => {
    return (
        <div className={s.NavComponent}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
    )
}
export default NavComponent