import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import AddNewPost from "./AddNewPost/AddNewPost";
import {PostsType} from "../../../redux/state";
import s from './profilePage.module.css'

type PostsDataType = {
    postsData: Array<PostsType>
    newPostText: string
    dispatch: ({}:any) => void
}

const ProfilePage = (props: PostsDataType) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo />
            <AddNewPost newPostText={props.newPostText}
                        dispatch={props.dispatch}/>
            <ProfilePosts postsData={props.postsData} />
        </div>
    );
};

export default ProfilePage;
