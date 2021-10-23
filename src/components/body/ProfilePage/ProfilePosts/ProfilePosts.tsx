import React from "react";
import PostsElement from "./PostElement/PostsElement";

const ProfilePosts = () => {

    const postsData = [
        {id: 1, postMessage: 'Batman', likes: 15},
        {id: 1, postMessage: 'is', likes: 23},
        {id: 1, postMessage: 'COOL!', likes: 999},
    ]

    return (
        <div>
            <PostsElement message={postsData[0].postMessage} likes={postsData[0].likes}/>
            <PostsElement message={postsData[1].postMessage} likes={postsData[1].likes}/>
            <PostsElement message={postsData[2].postMessage} likes={postsData[2].likes}/>
        </div>
    )
}

export default ProfilePosts