import React from "react";
import s from './Messages.module.css'
import {MessagesType} from "../../../../redux/state";


type MessagesDataType = {
    messagesData: Array<MessagesType>
}

const Messages = (props: MessagesDataType) => {
    let messagesDataElements = props.messagesData.map(message =>
        <div key={message.id}>{message.message}</div>)
    return (
        <div className={s.messages}>
            {messagesDataElements}
        </div>
    )
}

export default Messages