import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";
import {PostsType} from "../../../redux/state";
import s from './profilePage.module.css'

type PostsDataType = {
    postsData: Array<PostsType>
    addPost: (newPostMessage: string)=>void
}

const ProfilePage = (props: PostsDataType) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo />
            <AddNewPost addPost={props.addPost}/>
            <ProfilePosts postsData={props.postsData} />
        </div>
    );
};

export default ProfilePage;
