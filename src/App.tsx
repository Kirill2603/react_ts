import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import FooterComponent from "./components/footer/FooterComponent";
import Style from "./components/style.css"

const App = () => {
    return (
        <div>
            <HeaderComponent />
            <NavComponent />
            <BodyComponent/>
            <FooterComponent />
        </div>

    );
}


export default App


