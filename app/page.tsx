import React from 'react';
import About from './components/About';
import Musics from './components/Musics';
import Contact from './components/Contact';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container">
      <About />
      <Musics />
      <Contact />
    </main>
  );
}
