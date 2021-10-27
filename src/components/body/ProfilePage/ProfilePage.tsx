import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";

const postsData = [
  { id: 1, postMessage: "Batman", likes: 15 },
  { id: 1, postMessage: "is", likes: 99 },
  { id: 1, postMessage: "COOL!", likes: 999 },
];
export type PostsType = {
  id: number;
  postMessage: string;
  likes: number;
};

const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo />
      <AddNewPost />
      <ProfilePosts data={postsData} />
    </div>
  );
};

export default ProfilePage;
