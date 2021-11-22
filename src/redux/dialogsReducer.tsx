const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE: string = 'SEND_MESSAGE'

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type UpdateNewMessageActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    message: string
}

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = ():SendMessageActionType => {
    return {
        type: "SEND_MESSAGE"
    }
}

export const updateNewMessageActionCreator = (message: string):UpdateNewMessageActionType => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        message: message,
    }
}

export default dialogsReducer