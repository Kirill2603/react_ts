import React from "react";
import s from './Messages.module.css'
import {MessagesType, } from "../../../../redux/state";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/dialogsReducer";


type MessagesDataType = {
    messagesData: Array<MessagesType>
    newMessageText: string
    dispatch: ({}: any) => void
}

const Messages = (props: MessagesDataType) => {
    let messagesDataElements = props.messagesData.map(message =>
        <div key={message.id}>{message.message}</div>)
    const newMessageData = props.newMessageText
    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onNewMassageChange = (event: any) => {
        let message = event.target.value
        props.dispatch(updateNewMessageActionCreator(message))
    }

    return (
        <div className={s.messages}>
            {messagesDataElements}
            <input
                value={newMessageData}
                onChange={onNewMassageChange}
                placeholder='Enter message'/>
            <button onClick={onSendMessageClick}>Send</button>
        </div>
    )
}

export default Messages