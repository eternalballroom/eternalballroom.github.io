'use client'

import './globals.css'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
//components
import Footer from "./components/footer";
import Slideshow from "./components/slideshow";
import Header from "./components/header";
//cursor
import Cursor from "./components/cursor";
//hamburger
//oneko
import Oneko from "./components/oneko.js";

//f
export default function Home() {

  const imagesMain1 = [
    { path: "/images/testimg.png", url: "/two" },
    { path: "/images/omori.gif", url: "/two" },
    { path: "/images/testimg.png", url: "/break" },
    { path: "/images/omori.gif", url: "/two" },
  ]

  const imagesMain2 = [
    { path: "/images/main_pixelnb.png", url: "/work/pixels" },
    { path: "/images/main_pixelnb.png", url: "/work/pixels" },
    { path: "/images/main_pixel.png", url: "/work/pixels" },
  ]

  return (
    <div>

      <Header bold="home" />
      <link rel="icon" href="/images/chand.png" />
      <title>The Eternal Ballroom</title>


      <div className={styles.page}>
        <Slideshow images={imagesMain2} />

        <main className={styles.main}>

          <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>

          <div className={styles.main2}>


            {/* <center><Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          /></center> */}

            <div className={styles.textboxcenter}>
              
                <div className={styles.textboxbig}>
                  Welcome,
                </div>
                <div className={styles.textbox}>
                  to caretaker&apos;s portfolio.
                </div>
                <br />
              <div className={styles.textbox}>
                This site is custom built using NextJS/React and houses all of my creative endeavours.
              </div>
              <div className={styles.textbox}>
                It&apos;s tested for mobile but looks best on desktop.
              </div>
              <br />
              <div className={styles.textbox}>
                Currently under construction as of <code>3/29/25</code>
              </div>
            </div>



            <div className={styles.buttons}>
              <a
                className={styles.secondary}
                href="/about"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                href="/work"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Work
              </a>
              {/* <a
                href="/work"
                rel="noopener noreferrer"
                className={styles.tert}
              >
                Work
              </a> */}
            </div>



          </div>
        </main>
        <div className={styles.fixedfooter}>
        <Footer />
        </div>
      </div>
    </div>
  );
}
