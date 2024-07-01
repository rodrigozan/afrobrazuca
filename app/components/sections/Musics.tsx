"use client";

import React, { useState } from 'react';

import Modal from '../utilities/Modal';
import MusicPlayer from '../utilities/MusicPlayer';

import styles from '../../../styles/modules/Musics.module.scss';

import img1 from '../../assets/img/waves.jpg'
import img2 from '../../assets/img/one-day-in-your-presence.jpg'

const Musics: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={`${styles.Musics} p-4 bg-light`}>
      <h5 className='text-info'>Musics</h5>
      <div className="d-flex">
        <figure className={`${styles.music} music1 col-6`}>
          <img src={img1.src} alt="Waves" />
          <figcaption className="d-flex align-items-end" onClick={openModal}>Waves</figcaption>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <MusicPlayer src="../../assets/audio/waves.mp3" />
          </Modal>
        </figure>
        <figure className={`${styles.music} music1 col-6`}>
          <img src={img2.src} alt="One day in your presence" />
          <figcaption className="d-flex align-items-end">One day in your presence</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Musics;
