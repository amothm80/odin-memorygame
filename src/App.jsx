import { useEffect, useState } from 'react';

import fetchImages from './api/API.jsx';
import MemoryGame from './controller/Game.jsx';
import Header from './view/Header.jsx';
import MainBody from './view/MainBody.jsx';
import './App.css';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [game, setGame] = useState(new MemoryGame());
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  useEffect(() => {
    fetchImages(setPhotos);
  }, []);
  useEffect(() => {
    let gameClone = Object.assign(
      Object.create(Object.getPrototypeOf(game)),
      game
    );

    gameClone.setPhotos(photos);
    setGame(gameClone);
  }, [photos]);

  return (
    <>
      <Header score={score} hiScore={hiScore} />
      <MainBody game={game} setScore={setScore} setHiScore={setHiScore} />
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </>
  );
}
