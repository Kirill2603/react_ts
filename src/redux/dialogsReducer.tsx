const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE: string = 'SEND_MESSAGE'

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type UpdateNewMessageActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    message: string
}

let initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!!"},
    ],
    dialogsData: [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"},
        {id: 4, name: "User 4"},
        {id: 5, name: "User 5"},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: any) => {
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