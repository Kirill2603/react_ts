import React from "react";
import s from  './NavComponent.module.css'

const NavComponent = () => {
    return (
        <div className={s.NavComponent}>
            <a href="/profile">Profile</a>
            <a href="/messages">Messages</a>
            <a href="/news">News</a>
            <a href="/settings">Settings</a>
        </div>
    )
}
export default NavComponent