import React from "react";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import s from './DialogsPage.module.css'

export type MessagesType={
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    messagesDate: Array<MessagesType>
    dialogsData: Array<DialogsType>
}

const dialogsPageData = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Yo!!"},
        {id: 1, message: "Yo!!!"},
    ],
    dialogsData: [
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Joker'},
        {id: 3, name: 'Robin'},
        {id: 4, name: 'Riddler'},
        {id: 4, name: 'Harley'},
    ]
}
const DialogsPage = () => {


    return (
        <div className={s.dialogsPage}>
            <DialogsList data={dialogsPageData.dialogsData}/>
            <Messages data={dialogsPageData.messagesData}/>
        </div>
    )
}

export default DialogsPage