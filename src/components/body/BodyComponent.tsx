import React from "react";
import s from './BodyComponentn.module.css'
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {Route} from 'react-router-dom'
import DialogsPage from "./DialogsPage/DialogsPage";

const BodyComponent = () => {
    return (
        <div className={s.BodyComponent}>
            <Route component={DialogsPage} path='/dialogs'/>
            <Route component={NewsPage} path='/news'/>
            <Route component={ProfilePage} path='/profile'/>
            <Route component={SettingsPage} path='/settings'/>
        </div>
    )
}

export default BodyComponent