import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profileReducer";


type addPostType = {
    newPostText: string
    dispatch: ({}: any) => void
}

const AddNewPost = (props: addPostType) => {

    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text: string | any = newPostElement.current?.value
        let action = updateNewPostActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            <input
                type="text"
                value={props.newPostText}
                onChange={onPostChange}
                ref={newPostElement}/>
            <button onClick={addPost}>Add new post</button>
        </div>
    )
}

export default AddNewPost