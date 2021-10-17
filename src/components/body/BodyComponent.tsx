import React from "react";
import s from './BodyComponentn.module.css'
import MessagesPage from "./MessagesPage/MessagesPage";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";

const BodyComponent = () => {
    return (
        <div className={s.BodyComponent}>
            {/*<MessagesPage />*/}
            {/*<NewsPage />*/}
            <ProfilePage />
            {/*<SettingsPage />*/}
        </div>
    )
}

export default BodyComponent