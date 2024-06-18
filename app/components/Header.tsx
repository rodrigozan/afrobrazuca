import React from 'react';

import styles from '../../styles/Header.module.scss';

import spotify from '../assets/img/spotify-white.png'
import apple from '../assets/img/apple-music-white.png'

const Header: React.FC = () => {
  return (
    <header className={styles.header}> 
      <h1 className='text-white'>Rod Lofi</h1>
      <p>
        <a href="https://open.spotify.com/intl-pt/artist/2vQYZkXsLPj0QALQaSINWr" className="btn btn-success m-2 text-white" target='_new'> <img src={spotify.src} /> Ouça no Spotify</a>
        <a href="https://apple.com/music" className="btn btn-light m-2 text-white"><img src={apple.src} /> Ouça no Apple Music</a>
      </p>
    </header>
  );
};

export default Header;
