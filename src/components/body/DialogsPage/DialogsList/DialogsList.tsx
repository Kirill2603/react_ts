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

    let dialogsElements = dialogsData
        .map(dialog => <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>)


    return (
        <div className={s.dialogsList}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList