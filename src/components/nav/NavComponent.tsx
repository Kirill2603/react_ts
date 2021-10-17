import React from "react";
import s from  './NavComponent.module.css'

const NavComponent = () => {
    return (
        <div className={s.NavComponent}>
            <a href="">Profile</a>
            <a href="">Messages</a>
            <a href="">News</a>
            <a href="">Settings</a>

        </div>
    )
}
export default NavComponent