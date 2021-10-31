import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/App.css"
import {BrowserRouter} from "react-router-dom";
import {profileDataType} from "./redux/state";
import SearchComponent from "./components/searchComponent/searchComponent";

const App = (props: profileDataType) => {

     return (
        <BrowserRouter>
        <div className="App">
            <HeaderComponent />
            <SearchComponent />
            <NavComponent />
            <BodyComponent state={props.state}/>
        </div>
        </BrowserRouter>
    );
}


export default App


