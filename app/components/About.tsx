import React from 'react';

import MailList from './MailList';

import styles from '../../styles/About.module.scss';

import about from '../assets/img/RodLofi-about.jpg'

const About: React.FC = () => {
  return (
    <>
      <section className={`${styles.About} p-4 row`}>
        <div className='col-6'>
          <img src={about.src} alt="About Rod Lofi" />
        </div>
        <div className="col-6">
          <h5 className='text-info'>Rod Lofi</h5>
          <p>
            Rod Lofi is a talented artist and music producer specializing in lofi worship, blending lo-fi beats with relaxing and Christian melodies. His compositions are an invitation to tranquility and reflection, providing a unique sonic experience that uplifts the soul and calms the spirit. With an impressive ability to blend traditional lo-fi elements with spiritual nuances, Rod Lofi creates tracks that touch the heart and inspire devotion.
          </p>
          <p>
            His work is a true musical journey that celebrates faith and serenity, standing out in the contemporary Christian music scene. Each produced track is a work of art that combines the modernity of lo-fi with the depth of religious music, making Rod Lofi an indispensable name for genre lovers.
          </p>
        </div>
      </section>
      <MailList />
    </>
  );
};

export default About;
