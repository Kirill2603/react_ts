const ADD_POST: string = 'ADD_POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type MessagesType = {
    id: number;
    message: string;
};
export type DialogsType = {
    id: number;
    name: string;
};
export type PostsType = {
    id: number;
    postMessage: string;
    likes: number;
};
export type FriendsType = {
    id: number;
    name: string
};
export type StateType = {
    dialogsPage: {
        messagesData: Array<MessagesType>;
        dialogsData: Array<DialogsType>;
        newMessageText: string
    },
    profilePage: {
        postsData: Array<PostsType>;
        newPostText: string
    },
    navbarData: {
        friendsList: Array<FriendsType>
    },
    //addPost: (newPostMessage: string)=> void
}

let store = {
    _state: {
        dialogsPage: {
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

        },
        profilePage: {
            postsData: [
                {id: 1, postMessage: "Samurai", likes: 15},
                {id: 2, postMessage: "Can do", likes: 99},
                {id: 3, postMessage: "Anything!", likes: 999},
            ],
            newPostText: ''
        },
        navbarData: {
            friendsList: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Ivan'},
            ]
        },
    },
    _callSubscriber(state: StateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer// Наблюдатель observer / publisher-subscriber
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 5,
                postMessage: action.message,
                likes: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.message
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        message: text
    }
}

export const updateNewPostActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
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

export default store

