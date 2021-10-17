import React from "react";
import s from './PostElement.module.css'
const PostsElement = () => {
    return (
        <div className={s.PostElement}>
            <img src="https://synth.agency/wp-content/uploads/2017/01/Batman5.png" alt=""/>
            <div>Message</div>
            <div>Likes</div>
        </div>
    )
}
export default PostsElement