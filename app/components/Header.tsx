import React from 'react';

import styles from '../../styles/Header.module.scss';

import spotify from '../assets/img/spotify-white.png'
import apple from '../assets/img/apple-music-white.png'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="mb-3">
        <h1 className='text-light'>Wave</h1>
        <span>New Release</span>
      </div>
      <p>
        <a href="https://open.spotify.com/intl-pt/artist/2vQYZkXsLPj0QALQaSINWr" className="btn btn-success m-2 text-white" target='_new'> <img src={spotify.src} /> List in Spotify</a>
        <a href="https://apple.com/music" className="btn btn-light m-2 text-white"><img src={apple.src} /> List in Apple Music</a>
      </p>
    </header>
  );
};

export default Header;
