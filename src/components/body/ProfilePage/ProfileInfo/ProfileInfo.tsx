import React from "react";
import s from './ProfileInfo.module.css'
import samuraiImg from './../../../../images/samurai-warrior_157713-74.jpg'
const ProfileInfo = () => {
    return (
        <div className={s.ProfileInfo}>
            <img src={samuraiImg} alt=""/>
            <div>Hello Samurai!</div>
        </div>
    )
}

export default ProfileInfo