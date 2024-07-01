import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/components/MusicPlayer.module.scss';

import img1 from '../../assets/img/waves.jpg'

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles['song-loader']} ${styles['song-loader-anim']}`}></span>

      <div className={styles['music-cover']}>
        <img src={img1.src} alt="Waves by Rod Lofi" className={styles['cover-img']} />
      </div>

      <div className={`pt-4 pb-4 ${styles['album-controls']}`}>
        <img src={img1.src} alt="Waves by Rod Lofi"  className={styles['album-img']} />
        <div className={styles['album-info']}>
          <span className={`fs-4 ${styles['album-title']}`}>Waves</span>
          <span className={`fs-6 ${styles['song-title']}`}>Rod Lofi</span>
          <span className={styles['song-utility']}>
          <FontAwesomeIcon className='me-1' icon={fas.faHome} />
          <FontAwesomeIcon className='me-1' icon={fas.faRandom} />
          <FontAwesomeIcon icon={fas.faRetweet} />
          </span>
        </div>
      </div>

      {/* <div className={styles['music-controls']}>
        <span className={styles['seek-bar']}>
          <span className={styles['knot']}></span>
        </span>
        <span className={styles['song-buffer']}></span>
        <span className={styles['song-current-time']}>00:00</span>
        <span className={`${styles['play']} ${styles['is-animate']}`}>
          <i className="fa fa-play" aria-hidden="true"></i>
          <span className={styles['song-duration']}>00:00</span>
        </span>
      </div> */}

      <audio className='w-80' controls id="music-player" preload="auto">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>


      {/* <div className={styles.credit}>
        Inspired By
        <a target="_blank" href="https://dribbble.com/shots/2597693-Cassette-MiniPlayer">
          <img src="https://s5.postimg.cc/xkc92q4rr/Logo.png" alt="Dribbble Logo" className="d-logo" />
        </a>
      </div> */}

      {/* <div className={`${styles.credit}`} style={{ marginTop: '35px' }}>
        <a target="_blank" href="https://codefrog.co.in/">
          Download Source Code
          <img src="https://cdn-icons-png.flaticon.com/512/0/532.png" alt="Download" className="d-logo" />
        </a>
      </div> */}

      {/* <a id="btnDownload" href="https://www.codefrog.co.in/post/music-player-app/" target="_blank">
        <img src="https://newshost24.com/wp-content/uploads/2022/08/Movieswood-Telugu-2022-Tamil-Movies-Telugu-HD-Movies-Download.png" />
      </a> */}
    </div>
  );
};

export default MusicPlayer;
