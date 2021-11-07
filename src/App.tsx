import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/App.css"
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/state";
import SearchComponent from "./components/searchComponent/searchComponent";

const App = (props: StateType) => {
     return (
        <BrowserRouter>
        <div className="App">
            <HeaderComponent />
            <SearchComponent />
            <NavComponent navbarData={props.state.navbarData}/>
            <BodyComponent state={props.state} addPost={props.addPost}/>
        </div>
        </BrowserRouter>
    );
}


export default App


