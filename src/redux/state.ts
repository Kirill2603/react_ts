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
export type profileDataType = {
    state: {
        messagesData: Array<MessagesType>;
        dialogsData: Array<DialogsType>;
        postsData: Array<PostsType>;
    }
}

const state = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 1, message: "How are you" },
        { id: 1, message: "Yo!" },
        { id: 1, message: "Yo!!" },
        { id: 1, message: "Yo!!!" },
    ],
    dialogsData: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
        { id: 5, name: "User 5" },
    ],
    postsData: [
        { id: 1, postMessage: "Samurai", likes: 15 },
        { id: 1, postMessage: "Can do", likes: 99 },
        { id: 1, postMessage: "Anything!", likes: 999 },
    ]
};

export default state