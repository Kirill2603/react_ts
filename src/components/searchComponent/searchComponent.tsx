import React from "react";
import s from './searchComponent.module.css'


const SearchComponent = () => {
    return (
        <div className={s.Search}>
            <input/>
            <button>Search</button>
        </div>
    )
}

export default SearchComponent