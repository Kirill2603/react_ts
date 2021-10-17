import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/style.css"


const App = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <NavComponent />
            <BodyComponent/>
        </div>

    );
}


export default App


