const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageActionCreator = (message: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        message: message
    }
}

export default dialogsReducer