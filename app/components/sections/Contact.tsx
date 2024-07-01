import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/modules/Contact.module.scss'

const Contact: React.FC = () => {
  return (
    <section className={`section ${styles.Contact} p-4 bg-secondary d-flex align-items-end justify-content-center text-white fs-2`}>
      <div className={`content`}>
        <p>Me in web</p>
        <div className="socialMedia d-flex align-items-center">
          <a href="mailto:rodlofi@gmail.com" className='text-white w-25 me-2'>
            <FontAwesomeIcon icon={fas.faEnvelope} />
          </a>
          <a href="https://open.spotify.com/intl-pt/artist/2vQYZkXsLPj0QALQaSINWr" className="text-white w-25 me-2">
            <FontAwesomeIcon icon={fab.faSpotify} /></a>
            <a href="https://www.youtube.com/@rodlofi" className="text-white w-25 me-2">
            <FontAwesomeIcon icon={fab.faYoutube} /></a>
            <a href="https://www.instagram.com/rodlofi" className="text-white w-25 me-2">
            <FontAwesomeIcon icon={fab.faInstagram} /></a>
            <a href="https://www.tiktok.com/@rod.lofi" className="text-white w-25">
            <FontAwesomeIcon icon={fab.faTiktok} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
