import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/App.css"
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <HeaderComponent />
            <NavComponent />
            <BodyComponent/>
        </div>
        </BrowserRouter>

    );
}


export default App


