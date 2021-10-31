import React from "react";
import s from './NavComponent.module.css'
import {NavLink} from "react-router-dom";
import NavAdditions from "./navAdditions/navAdditions";
import {FriendsType} from "../../redux/state";

type NavbarDataType = {
    navbarData:{
        friendsList: Array<FriendsType>
    }
}

const NavComponent = (props: NavbarDataType) => {
    return (
        <div className={s.NavComponent}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>

            <NavAdditions friendsList={props.navbarData.friendsList}/>
        </div>
    )
}
export default NavComponent