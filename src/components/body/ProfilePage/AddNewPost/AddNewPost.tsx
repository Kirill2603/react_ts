import React from "react";

type addPostType = {
    addPost: (newPostMessage: string)=>void
}

const AddNewPost = (props: addPostType) => {

    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            console.log(newPostElement.current.value)
        }
    }

    return (
        <div>
            <input type="text" ref={newPostElement}/>
            <button onClick={addPost}>Add new post</button>
        </div>
    )
}

export default AddNewPost