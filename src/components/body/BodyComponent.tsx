import React from "react";
import s from "./BodyComponentn.module.css";
import NewsPage from "./NewsPage/NewsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import { Route } from "react-router-dom";
import DialogsPage from "./DialogsPage/DialogsPage";

const BodyComponent = () => {
  return (
    <div className={s.BodyComponent}>
      <Route path="/dialogs" render={() => <DialogsPage />} />
      <Route path="/news" render={() => <NewsPage />} />
      <Route path="/profile" render={() => <ProfilePage />} />
      <Route path="/settings" render={() => <SettingsPage />} />
    </div>
  );
};

export default BodyComponent;
