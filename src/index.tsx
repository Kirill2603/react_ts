import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

let _callSubscriber = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


_callSubscriber()
store.subscribe(_callSubscriber)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
