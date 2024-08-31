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
                    className={`${cls.navLink} ${cls.home} ${activeLink === '/' ? cls.active : ''}`}
                    to="/"
                    onClick={() => handleClick('/')}
                >
                    Home
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.pokedex} ${activeLink === '/Pokedex' ? cls.active : ''}`}
                    to="/Pokedex"
                    onClick={() => handleClick('/Pokedex')}
                >
                    Pokedex
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.games} ${activeLink === '/VideoGamesApps' ? cls.active : ''}`}
                    to="/VideoGamesApps"
                    onClick={() => handleClick('/PlayPokemonEvents')}
                >
                    Video Games & Apps
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.cards} ${activeLink === '/TradingCardGame' ? cls.active : ''}`}
                    to="/TradingCardGame"
                    onClick={() => handleClick('/TradingCardGame')}
                >
                    Trading Card Game
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.animation} ${activeLink === '/Animation' ? cls.active : ''}`}
                    to="/Animation"
                    onClick={() => handleClick('/Animation')}
                >
                    Animation
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.events} ${activeLink === '/PlayPokemonEvents' ? cls.active : ''}`}
                    to="/PlayPokemonEvents"
                    onClick={() => handleClick('/PlayPokemonEvents')}
                >
                    Play! Pokémon Events
                </Link>
                <Link
                    className={`${cls.navLink} ${cls.news} ${activeLink === '/News' ? cls.active : ''}`}
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
