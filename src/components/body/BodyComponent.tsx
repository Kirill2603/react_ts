import React from "react";
import s from "./BodyComponentn.module.css";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {Route} from "react-router-dom";
import DialogsPage from "./DialogsPage/DialogsPage";
import {profileDataType} from "../../App";

const BodyComponent = (props: profileDataType) => {
    return (
        <div className={s.BodyComponent}>
            <Route path="/dialogs" render={() => <DialogsPage dialogsData={props.profileData.dialogsData} messagesData={props.profileData.messagesData}/>}/>
            <Route path="/news" render={() => <NewsPage/>}/>
            <Route path="/profile" render={() => <ProfilePage postsData={props.profileData.postsData}/>}/>
            <Route path="/settings" render={() => <SettingsPage/>}/>
        </div>
    );
};

export default BodyComponent;
