import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import "./Header.css";

const Header = () =>{
    return (
        <div> 
            <header>
                <h1> <HighlightIcon /> Keeper</h1>
            </header>
        </div>
    );
}

export default Header;