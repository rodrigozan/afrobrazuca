import React from 'react';

import styles from '../../styles/Musics.module.scss';

import img1 from '../assets/img/RodLofi-about.jpg'
import img2 from '../assets/img/RodLofi-header.jpg'

const Musics: React.FC = () => {
  return (
    <section className={`${styles.Musics} container p-4 bg-light`}>
      <h5 className='text-info'>Musics</h5>
      <div className='d-flex'>
        <figure className={`${styles.music} music1 col-6 p-5`}>
          <img src={img1.src} alt="Elephant at sunset" />
          <figcaption>An elephant at sunset</figcaption>
        </figure>
        <figure className={`${styles.music} music1 col-6 p-5`}>
          <img src={img2.src} alt="Elephant at sunset" />
          <figcaption>An elephant at sunset</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Musics;
