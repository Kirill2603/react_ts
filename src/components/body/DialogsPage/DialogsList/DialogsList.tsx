import React from "react";
import s from './DialogsList.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../DialogsPage";

type DialogListPropsType = {
    data: DialogsType[]
}

const DialogsList = (props: DialogListPropsType) => {
    debugger


    let dialogsElements = props.data.map(dialog => <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>)


    return (
        <div className={s.dialogsList}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList