import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {addPost, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (props: StateType | any)=> {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <App state={props} addPost={addPost}/>
        </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

