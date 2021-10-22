import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";

const ProfilePage = () => {
    return (
        <div>
            <ProfileInfo />
            <AddNewPost />
            <ProfilePosts />
        </div>
    )
}

export default ProfilePage