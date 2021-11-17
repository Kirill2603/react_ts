import React from "react";
import s from "./BodyComponentn.module.css";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {Route} from "react-router-dom";
import DialogsPage from "./DialogsPage/DialogsPage";
import {StateType} from "../../redux/store";

type PropsType = {
    state: StateType,
    dispatch: ({}:any) => void
}

const BodyComponent = (props: PropsType) => {
    return (
        <div className={s.BodyComponent}>
            <Route path="/dialogs" render={() => <DialogsPage
                newMessageText={props.state.dialogsPage.newMessageText}
                dialogsData={props.state.dialogsPage.dialogsData}
                dispatch={props.dispatch}
                messagesData={props.state.dialogsPage.messagesData}/>}/>
            <Route path="/news" render={() => <NewsPage/>}/>
            <Route path="/profile" render={() => <ProfilePage
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText}
                postsData={props.state.profilePage.postsData}/>}/>
            <Route path="/settings" render={() => <SettingsPage/>}/>
        </div>
    );
};

export default BodyComponent;
