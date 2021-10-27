import React from "react";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import s from "./DialogsPage.module.css";
import {DialogsType, MessagesType} from "../../../index";

type DialogsPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

const DialogsPage = (props: DialogsPageType) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsList dialogsData={props.dialogsData}/>
            <Messages messagesData={props.messagesData}/>
        </div>
    );
};

export default DialogsPage;
