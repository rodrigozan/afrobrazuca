import React from 'react';
import About from './components/sections/About';
import Musics from './components/sections/Musics';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

import './globals.css'
import styles from "./page.module.css";


export default function Home() {
  return (
    <main>
      <About />   
      {/* <Musics /> */}
      <Contact />
      <Footer />
    </main>
  );
}
