import React from 'react';
import { Link } from 'react-router-dom';
import cls from './header.module.scss';

const Header = () => {
    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <Link className={`${cls.navLink} ${cls.home}`} to="/">Home</Link>
                <Link className={`${cls.navLink} ${cls.pokedex}`} to="/Pokedex">Pokedex</Link>
                <Link className={`${cls.navLink} ${cls.games}`} to="/VideoGamesApps">VideoGames&Apps</Link>
                <Link className={`${cls.navLink} ${cls.cards}`} to="/TradingCardGame">TradingCardGame</Link>
                <Link className={`${cls.navLink} ${cls.animation}`} to="/Animation">Animation</Link>
                <Link className={`${cls.navLink} ${cls.events}`} to="/PlayPokemonEvents">Play!PokemonEvents</Link>
                <Link className={`${cls.navLink} ${cls.news}`} to="/News">News</Link>


            </nav>
        </header>
    );
};

export default Header;
