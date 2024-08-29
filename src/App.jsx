import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./widgets/Header/ui/header";
import Home from "./pages/Home/Home";
import Pokedex from './pages/Pokedex/Pokedex';
import VideoGamesApps from "./pages/VideoGamesApps/PlayPokemonEvents";
import Animation from './pages/Animation/Animation';
import News from './pages/News/News';
import TradingCardGame from './pages/TradingCardGame/TradingCardGame';
import PlayPokemonEvents from './pages/PlayPokemonEvents/PlayPokemonEvents';
import Register from './features/register/Register';
import cls from "./App.module.scss";
import s from '../src/App.module.scss'; // Если нужно

const App = () => {
    return (
        <div className={cls.App}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Pokedex" element={<Pokedex />} />
                    <Route path="/VideoGamesApps" element={<VideoGamesApps />} />
                    <Route path="/Animation" element={<Animation />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/TradingCardGame" element={<TradingCardGame />} />
                    <Route path="/PlayPokemonEvents" element={<PlayPokemonEvents />} />
                </Routes>
            </Router>
            {/*<Register />*/}
        </div>
    );
};

export default App;
