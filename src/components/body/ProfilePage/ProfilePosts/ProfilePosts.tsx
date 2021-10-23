import React from "react";
import PostsElement from "./PostElement/PostsElement";

const ProfilePosts = () => {

    const postsData = [
        {id: 1, postMessage: 'Batman', likes: 15},
        {id: 1, postMessage: 'is', likes: 23},
        {id: 1, postMessage: 'COOL!', likes: 999},
    ]

    let postsDataElements = postsData
        .map(postMessage => <PostsElement message={postMessage.postMessage} likes={postMessage.likes}/>)
    return (
        <div>
            {postsDataElements}
        </div>
    )
}

export default ProfilePosts