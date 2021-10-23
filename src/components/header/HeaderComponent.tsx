import React from "react";
import s from './HeaderComponent.module.css'
import logo from './LogoImg/Batman-Logo.svg'


const HeaderComponent = () => {
    return (
        <div className={s.HeaderComponent}>
            <img src={logo} alt=""/>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contacts</a>
            </div>
        </div>
    )
}

export default HeaderComponent