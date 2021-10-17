import React from "react";
import s from './HeaderComponent.module.css'
import logo from './LogoImg/Batman-Logo.svg'


const HeaderComponent = () => {
    return (
        <div className={s.HeaderComponent}>
            <img src={logo} alt=""/>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contacts</a>
        </div>
    )
}

export default HeaderComponent