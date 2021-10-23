import React from "react";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messates";
import s from './DialogsPage.module.css'

const DialogsPage = () => {
    return (
        <div className={s.dialogsPage}>
            <DialogsList />
            <Messages />
        </div>
    )
}

export default DialogsPage