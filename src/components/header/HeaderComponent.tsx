import React from "react";
import s from './HeaderComponent.module.css'


const HeaderComponent = () => {
    return (
        <div className={s.HeaderComponent}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contacts</a>
        </div>
    )
}

export default HeaderComponent