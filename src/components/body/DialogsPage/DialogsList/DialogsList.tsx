import React from "react";
import s from './DialogsList.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../../redux/store";


type dialogsDataType = {
    dialogsData: Array<DialogsType>
}

const DialogsList = (props: dialogsDataType) => {

    let dialogsElements = props.dialogsData.map(dialog =>
        <NavLink
        to={`/dialogs/${dialog.id}`}
        key={dialog.id}>{dialog.name}
        </NavLink>)

    return (
        <div className={s.dialogsList}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList