import React from "react";


type addPostType = {
    addPost: (newPostMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const AddNewPost = (props: addPostType) => {


    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            props.updateNewPostText('')
        }
    }

    let onPostChange = () => {
        let newText: string | any= newPostElement.current?.value
        console.log(newText)
        props.updateNewPostText(newText)
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