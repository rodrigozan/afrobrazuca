"use client";

import React, { useState, useEffect } from 'react';

import Modal from '../utilities/Modal';
import MusicPlayer from '../utilities/MusicPlayer';

import styles from '../../../styles/modules/Musics.module.scss';

import img1 from '../../assets/img/waves.jpg'
import img2 from '../../assets/img/one-day-in-your-presence.jpg'

const Musics: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fadeType, setFadeType] = useState<'fade-in' | 'fade-out'>('fade-out');

  const openModal = () => {
    setIsModalOpen(true)
    setFadeType('fade-in');
    document.body.classList.add('modal-open');
  };
  const closeModal = () => {
    setFadeType('fade-out');
    setTimeout(() => {
      setIsModalOpen(false);
      document.body.classList.remove('modal-open');
    }, 500);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <section className={`${styles.Musics} p-4 bg-light`}>
      <h5 className='text-info'>Musics</h5>
      <div className="d-flex">
        <figure className={`${styles.music} col-6`}>
          <img src={img1.src} alt="Waves" />
          <figcaption className="d-flex align-items-end p-2 text-secondary" onClick={openModal}>Waves</figcaption>
          <Modal isOpen={isModalOpen} onClose={closeModal} fadeType={fadeType}>
            <MusicPlayer src="/audio/waves.mp3" />
          </Modal>
        </figure>
        <figure className={`${styles.music} col-6`}>
          <img src={img2.src} alt="One day in your presence" />
          <figcaption className="d-flex align-items-end p-2 text-secondary">One day in your presence</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Musics;
