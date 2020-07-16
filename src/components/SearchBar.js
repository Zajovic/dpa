import React from 'react';

const SearchBar = () => {

    return (
        <div className="bp3-input-group .modifier search-bar_box">
            <span className="bp3-icon bp3-icon-search"></span>
            <input className="bp3-input" type="search" placeholder="Search input" dir="auto" />
        </div>
    )

}

export default SearchBar;