import React from "react";
import s from "./PostElement.module.css";
import userImg from './../../../../../images/userImg.png'
type PropsMessage = {
  message: string;
  likes: number;
};
const PostsElement = (props: PropsMessage) => {
  return (
    <div className={s.PostElement}>
      <img
        src={userImg}
        alt=""
      />
      <div>{props.message}</div>
      <div>{props.likes} Likes</div>
    </div>
  );
};
export default PostsElement;
