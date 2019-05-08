import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Link} from 'react-router-dom';

const GameListing = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Welcome to React Tools!</title>
                <meta name="description" content="Find cool tools developed with react." />
            </Helmet>
        
            <div className="wrapper">
                <ul className="game-listing">
                    <li>
                        <h2><Link to="/weather-app">Mind Game</Link></h2>
                        <p>Check how smart you are!</p>
                        <Link to="/mind-game" rel="nofollow"></Link>
                    </li>
                </ul>
            </div>
        </HelmetProvider>
    )
}

export default GameListing;