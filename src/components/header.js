import React from 'react';
import {Link} from 'react-router-dom';
import '../css/header.scss';

const Header = () => {
    return(
        <header className="header">
            <h1><Link to="/">React Games <span role="img">🎮</span></Link></h1>
        </header>
    )
}

export default Header; 