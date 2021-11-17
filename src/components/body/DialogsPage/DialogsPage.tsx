import React from "react";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import s from "./DialogsPage.module.css";
import {DialogsType, MessagesType} from "../../../redux/store";


type DialogsPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessageText: string
    dispatch: ({}: any) => void
}

const DialogsPage = (props: DialogsPageType) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsList dialogsData={props.dialogsData}/>
            <Messages
                messagesData={props.messagesData}
                newMessageText={props.newMessageText}
                dispatch={props.dispatch}/>

        </div>
    );
};

export default DialogsPage;
