import React from "react";
import s from './navAdditions.module.css'
import alfredImg from './../navImg/Alfred_batman_tas.png'
import robinImg from  './../navImg/robin.jpg'
import catWomanImg from './../navImg/catwoman.jpg'
import riddlerImg from './../navImg/riddler.jpg'
import jokerImg from './../navImg/joker.jpg'
import harleyImg from './../navImg/harley.jpg'

const NavAdditions = () => {
    return (
        <div className={s.NavAdditions}>
            <h3>Friends</h3>
            <div className={s.elements}>
                <div className={s.item}>
                    <img src={alfredImg} alt=""/>
                    <a>Alfred</a>
                </div>
                <div className={s.item}>
                    <img src={robinImg} alt=""/>
                    <a>Robin</a>
                </div>
                <div className={s.item}>
                    <img src={catWomanImg} alt=""/>
                    <a>Cat</a>
                </div>
            </div>
            <h3>Foes</h3>
            <div className={s.elements}>
                <div className={s.item}>
                    <img src={riddlerImg} alt=""/>
                    <a>Riddler</a>
                </div>
                <div className={s.item}>
                    <img src={jokerImg} alt=""/>
                    <a>Joker</a>
                </div>
                <div className={s.item}>
                    <img src={harleyImg} alt=""/>
                    <a>Harley</a>
                </div>
            </div>
        </div>
    )
}

export default NavAdditions