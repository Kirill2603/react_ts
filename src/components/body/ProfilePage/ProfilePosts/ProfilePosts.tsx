import React from "react";
import PostsElement from "./PostElement/PostsElement";


const ProfilePosts = () => {
    return (
        <div>
            <PostsElement message='Hello' likes={12}/>
            <PostsElement message='Batman' likes={15}/>
            <PostsElement message='is' likes={23}/>
            <PostsElement message='COOL!' likes={999}/>
        </div>
    )
}

export default ProfilePosts