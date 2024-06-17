import React from 'react';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Artista Afrobrazuca</h1>
      <p>
        <a href="https://spotify.com" className="btn btn-primary m-2">Ouça no Spotify</a>
        <a href="https://apple.com/music" className="btn btn-secondary m-2">Ouça no Apple Music</a>
      </p>
    </header>
  );
};

export default Header;
