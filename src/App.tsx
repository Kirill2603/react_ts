import React from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import NavComponent from "./components/nav/NavComponent";
import BodyComponent from "./components/body/BodyComponent";
import "./components/App.css"
import {ActionsType, StoreType} from "./redux/store";
import SearchComponent from "./components/searchComponent/searchComponent";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className="App">
            <HeaderComponent/>
            <SearchComponent />
            <NavComponent navbarData={state.navbarData}/>
            <BodyComponent
                state={state}
                dispatch={props.dispatch}/>
        </div>
    );
}


export default App


