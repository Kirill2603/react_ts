import React from "react";
import PostsElement from "./PostElement/PostsElement";
import { PostsType } from "./../ProfilePage";

export type ProfilePostsType = {
  data: PostsType[];
};

const ProfilePosts = (props: ProfilePostsType) => {
  let postsDataElements = props.data.map((postMessage) => (
    <PostsElement message={postMessage.postMessage} likes={postMessage.likes} />
  ));
  return <div>{postsDataElements}</div>;
};

export default ProfilePosts;
