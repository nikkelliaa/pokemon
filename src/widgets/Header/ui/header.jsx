import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cls from './header.module.scss';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <Link
                    className={`${cls.navLink} ${activeLink === '/' ? cls.active : ''}`}
                    to="/"
                    onClick={() => handleClick('/')}
                >
                    Home
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/Pokedex' ? cls.active : ''}`}
                    to="/Pokedex"
                    onClick={() => handleClick('/Pokedex')}
                >
                    Pokedex
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/VideoGamesApps' ? cls.active : ''}`}
                    to="/VideoGamesApps"
                    onClick={() => handleClick('/VideoGamesApps')}
                >
                    VideoGames&Apps
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/TradingCardGame' ? cls.active : ''}`}
                    to="/TradingCardGame"
                    onClick={() => handleClick('/TradingCardGame')}
                >
                    TradingCardGame
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/Animation' ? cls.active : ''}`}
                    to="/Animation"
                    onClick={() => handleClick('/Animation')}
                >
                    Animation
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/PlayPokemonEvents' ? cls.active : ''}`}
                    to="/PlayPokemonEvents"
                    onClick={() => handleClick('/PlayPokemonEvents')}
                >
                    Play!PokemonEvents
                </Link>
                <Link
                    className={`${cls.navLink} ${activeLink === '/News' ? cls.active : ''}`}
                    to="/News"
                    onClick={() => handleClick('/News')}
                >
                    News
                </Link>
            </nav>
        </header>
    );
};

export default Header;
