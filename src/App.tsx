import React from 'react';
import BodyComponent from "./components/body/bodyComponent";
import FooterComponent from "./components/footer/footerComponent";
import NavComponent from "./components/nav/navComponent";
import HeaderComponent from "./components/header/headerComponent";

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


