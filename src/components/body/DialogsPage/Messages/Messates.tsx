import React from "react";
import s from './Messages.module.css'

const Messages = () => {

    const messagesdata = [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Yo!!"},
        {id: 1, message: "Yo!!!"},
    ]

    return (
        <div className={s.messages}>
            <div>{messagesdata[0].message}</div>
            <div>{messagesdata[1].message}</div>
            <div>{messagesdata[2].message}</div>
            <div>{messagesdata[3].message}</div>
            <div>{messagesdata[4].message}</div>
        </div>
    )
}

export default Messages