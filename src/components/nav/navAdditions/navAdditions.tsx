import React from "react";
import s from './navAdditions.module.css'
import userImg from './../../../images/userImg.png'
import {FriendsType} from "../../../redux/state";

type NavDataType = {
    friendsList: Array<FriendsType>
}

const NavAdditions = (props: NavDataType)  => {
    let friendItem = props.friendsList.map(item =>
        <div className={s.item}>
        <img src={userImg} alt=""/>
        <div>{item.name}</div>
    </div>)
    return (
        <div className={s.NavAdditions}>
            <h3>Friends</h3>
            <div className={s.items}>{friendItem}</div>
        </div>
    )
}

export default NavAdditions