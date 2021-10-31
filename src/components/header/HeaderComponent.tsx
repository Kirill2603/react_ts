import React from "react";
import s from './HeaderComponent.module.css'
import logo from './../../images/samurai_logo.png'

const HeaderComponent = () => {
    return (
        <div className={s.HeaderComponent}>
            <div className={s.logo}>
                <img src={logo} alt=""/>
                <h1>Kon'nichiwa</h1>
            </div>
                <div>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contacts</a>
                    <button>Login</button>
                </div>
        </div>
    )
}

export default HeaderComponent