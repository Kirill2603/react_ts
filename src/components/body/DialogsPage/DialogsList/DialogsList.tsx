import React from "react";
import s from './DialogsList.module.css'
import {NavLink} from "react-router-dom";

const DialogsList = () => {

    let dialogsData = [
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Joker'},
        {id: 3, name: 'Robin'},
        {id: 4, name: 'Riddler'},
        {id: 4, name: 'Harley'},
    ]

    return (
        <div className={s.dialogsList}>
            <NavLink to={`/dialogs/${dialogsData[0].id}`}>{dialogsData[0].name}</NavLink>
            <NavLink to={`/dialogs/${dialogsData[1].id}`}>{dialogsData[1].name}</NavLink>
            <NavLink to={`/dialogs/${dialogsData[2].id}`}>{dialogsData[2].name}</NavLink>
            <NavLink to={`/dialogs/${dialogsData[3].id}`}>{dialogsData[3].name}</NavLink>
            <NavLink to={`/dialogs/${dialogsData[4].id}`}>{dialogsData[4].name}</NavLink>
        </div>
    )
}

export default DialogsList