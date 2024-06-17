import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Musics from '../components/Musics';
import Contact from '../components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <About />
      <Musics />
      <Contact />
    </main>
  );
}
