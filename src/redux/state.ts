import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store

