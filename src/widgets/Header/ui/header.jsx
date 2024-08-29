import React from 'react';
import {Link} from 'react-router-dom';
import cls from './header.module.scss';

const Header = () => {
    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <Link style={{}} to="/">Home</Link>
                <Link style={{}} to="/Pokedex">Pokedex</Link>
                <Link style={{}} to="/VideoGamesApps">VideoGames&Apps</Link>
                <Link style={{}} to="/Animation">Animation</Link>
                <Link style={{}} to="/News">News</Link>
                <Link style={{}} to="/PlayPokemonEvents">Play!PokemonEvents</Link>
                <Link style={{}} to="/TradingCardGame">TradingCardGame</Link>
            </nav>
        </header>
    );
};

export default Header;
