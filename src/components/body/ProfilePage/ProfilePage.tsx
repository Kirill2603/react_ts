import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";

const ProfilePage = () => {
    return (
        <div>
            <ProfileInfo />
            <ProfilePosts />
            <AddNewPost />
        </div>
    )
}

export default ProfilePage