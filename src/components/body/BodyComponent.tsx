import React from "react";
import s from "./BodyComponentn.module.css";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {Route} from "react-router-dom";
import DialogsPage from "./DialogsPage/DialogsPage";
import {StateType} from "../../redux/state";


const BodyComponent = (props: StateType) => {
    return (
        <div className={s.BodyComponent}>
            <Route path="/dialogs" render={() => <DialogsPage
                dialogsData={props.state.dialogsPage.dialogsData}
                messagesData={props.state.dialogsPage.messagesData}/>}/>
            <Route path="/news" render={() => <NewsPage/>}/>
            <Route path="/profile" render={() => <ProfilePage
                addPost={props.addPost}
                postsData={props.state.profilePage.postsData}/>}/>
            <Route path="/settings" render={() => <SettingsPage/>}/>
        </div>
    );
};

export default BodyComponent;
