import React from "react";
import s from './navAdditions.module.css'
import userImg from './../../../images/userImg.png'

const NavAdditions = () => {
    return (
        <div className={s.NavAdditions}>
            <h3>Friends</h3>
            <div className={s.elements}>
                <div className={s.item}>
                    <a href=""><img src={userImg} alt=""/></a>
                    <a>User 1</a>
                </div>
                <div className={s.item}>
                    <a href=""><img src={userImg} alt=""/></a>
                    <a>User 2</a>
                </div>
                <div className={s.item}>
                    <a href=""><img src={userImg} alt=""/></a>
                    <a>User 3</a>
                </div>
            </div>
        </div>
    )
}

export default NavAdditions