import React from "react";
import s from './BodyComponentn.module.css'
import MessagesPage from "./MessagesPage/MessagesPage";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {Route} from 'react-router-dom'

const BodyComponent = () => {
    return (
        <div className={s.BodyComponent}>
            <Route component={MessagesPage} path='/messages'/>
            <Route component={NewsPage} path='/news'/>
            <Route component={ProfilePage} path='/profile'/>
            <Route component={SettingsPage} path='/settings'/>
        </div>
    )
}

export default BodyComponent