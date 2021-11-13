import React from "react";
import PostsElement from "./PostElement/PostsElement";
import {PostsType} from "../../../../redux/state";


type PostsDataType = {
  postsData: Array<PostsType>
};

const ProfilePosts = (props: PostsDataType) => {
  let postsDataElements = props.postsData.map((postMessage) => (
    <PostsElement message={postMessage.postMessage} likes={postMessage.likes} key={postMessage.id}/>
  ));
  return <div>{postsDataElements}</div>;
};

export default ProfilePosts;
