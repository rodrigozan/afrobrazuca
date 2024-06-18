import React from 'react';
import About from './components/About';
import Musics from './components/Musics';
import Contact from './components/Contact';
import MailList from './components/MailList';

import './globals.css'
import styles from "./page.module.css";


export default function Home() {
  return (
    <main>
      <About />   
      <Musics />
      <Contact />
    </main>
  );
}
