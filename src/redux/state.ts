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
        { id: 1, name: "Batman" },
        { id: 2, name: "Joker" },
        { id: 3, name: "Robin" },
        { id: 4, name: "Riddler" },
        { id: 4, name: "Harley" },
    ],
    postsData: [
        { id: 1, postMessage: "Batman", likes: 15 },
        { id: 1, postMessage: "is", likes: 99 },
        { id: 1, postMessage: "COOL!", likes: 999 },
    ]
};

export default state