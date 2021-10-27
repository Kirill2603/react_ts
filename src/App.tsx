import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/App.css"
import {BrowserRouter} from "react-router-dom";
import {DialogsType, MessagesType, PostsType} from "./index";

export type profileDataType = {
    profileData: {
        messagesData: Array<MessagesType>;
        dialogsData: Array<DialogsType>;
        postsData: Array<PostsType>;
    }
}

const App = (props: profileDataType) => {
     return (
        <BrowserRouter>
        <div className="App">
            <HeaderComponent />
            <NavComponent />
            <BodyComponent profileData={props.profileData}/>
        </div>
        </BrowserRouter>

    );
}


export default App


