const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT'
const ADD_POST: string = 'ADD_POST'

export type AddPostActionType = {
    type: 'ADD_POST'
}
export type UpdateNewPostActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    text: string
}

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                postMessage: state.newPostText,
                likes: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD_POST"
    }
}

export const updateNewPostActionCreator = (newText: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        text: newText
    }
}

export default profileReducer