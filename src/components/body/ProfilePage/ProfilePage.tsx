import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";
import {PostsType} from "../../../index";

type PostsDataType = {
    postsData: Array<PostsType>
}

const ProfilePage = (props: PostsDataType) => {
  return (
    <div>
      <ProfileInfo />
      <AddNewPost />
      <ProfilePosts postsData={props.postsData} />
    </div>
  );
};

export default ProfilePage;
