import React from "react";
import s from './Messages.module.css'

const Messages = () => {

    const messagesData = [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Yo!!"},
        {id: 1, message: "Yo!!!"},
    ]

    let messagesDataElements = messagesData
        .map(message => <div>{message.message}</div>)

    return (
        <div className={s.messages}>
            {messagesDataElements}
        </div>
    )
}

export default Messages