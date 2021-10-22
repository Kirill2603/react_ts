import React from "react";
import s from './PostElement.module.css'

type PropsMessage = {
    message: string
    likes: number
}
const PostsElement = (props: PropsMessage) => {
    return (
        <div className={s.PostElement}>
            <img src="https://synth.agency/wp-content/uploads/2017/01/Batman5.png" alt=""/>
            <div>{props.message}</div>
            <div>{props.likes} Likes</div>
        </div>
    )
}
export default PostsElement