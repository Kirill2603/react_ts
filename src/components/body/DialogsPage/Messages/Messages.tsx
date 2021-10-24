import React from "react";
import s from './Messages.module.css'
import {MessagesType} from "../DialogsPage";

type MessagesListPropsType = {
    data: Array<MessagesType>
}

const Messages = (props: MessagesListPropsType) => {
debugger
    let messagesDataElements = props.data.map(message => <div>{message.message}</div>)

    return (
        <div className={s.messages}>
            {messagesDataElements}
        </div>
    )
}

export default Messages