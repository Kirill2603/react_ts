const ADD_POST: string = 'ADD_POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state: any, action: any) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                postMessage: action.message,
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

export default profileReducer