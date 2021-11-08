import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {StateType} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType| any)=> {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

