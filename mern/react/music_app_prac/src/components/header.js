import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';


function Header() {
    return (
        <header>
            <Link to="/">music</Link>
        </header>
    )
}

export default Header;

