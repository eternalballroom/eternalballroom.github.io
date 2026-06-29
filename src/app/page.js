'use client'

import './globals.css'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
//components
import Footer from "./components/footer";
import Slideshow from "./components/slideshow";
import Slideshow2 from "./components/slideshow2";
import Header from "./components/header";
import LightboxW from "./components/lightbox";
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

    { path: "/images/main_pixel.png", url: "/work/pixels" },
    { path: "/images/main_cooking.png", url: "/work/cooking" },
  ]

  const imagesMain3 = [
    {
      path: "/images/main/main1.png",
      url: "/work/illustration",
      title: "Her Love, for It Was Like a Plum",
      description: "Clip Studio Paint, Photoshop"
    },
    {
      path: "/images/main/main11.gif",
      url: "/work/performance",
      title: "At Our Parting",
      description: "Piano, Cello"
    },
    
    {
      path: "/images/main/main10.gif",
      url: "/work/cooking",
      title: "Beef Wellington",
      description: "Tenderloin steak wrapped in mushroom duxelles, prosciutto, and puff pastry"
    },
    {
      path: "/images/main/main2.gif",
      url: "/work/illustration",
      title: "Goodbye to a World",
      description: "Paint Tool SAI, After Effects"
    },
    {
      path: "/images/main/main3.png",
      url: "/work/pixels",
      title: "D.Va",
      description: "Paint Tool SAI"
    },
    {
      path: "/images/main/main4.png",
      url: "/work/cooking",
      title: "Salmon Sashimi Pumpkins",
      description: "Sushi rice wrapped in raw salmon, with a green pepper stem"
    },
    {
      path: "/images/main/main5.png",
      url: "/work/illustration",
      title: "BGIII",
      description: "Clip Studio Paint"
    },
    {
      path: "/images/main/main6.png",
      url: "/work/pixels",
      title: "Nayu",
      description: "Paint Tool SAI"
    },
    {
      path: "/images/main/main13.png",
      url: "/work/photography",
      title: "Osaka Castle",
      description: "."
    },
    {
      path: "/images/main/main7.png",
      url: "/work/pixels",
      title: "Chu",
      description: "Paint Tool SAI"
    },
    {
      path: "/images/main/main12.gif",
      url: "/work/composition",
      title: "pretty planetarium",
      description: "Beepbox"
    },
    {
      path: "/images/main/main8.png",
      url: "/work/cooking",
      title: "Ricotta Sourdough Bruschetta",
      description: "Toasted sourdough topped with ricotta, diced tomato bruschetta, fresh basil, and balsamic glaze"
    },
    {
      path: "/images/main/main9.gif",
      url: "/work/illustration",
      title: "OMORI",
      description: "Paint Tool SAI, Premiere Pro"
    },
    
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
                Currently under construction as of <code>6/27/26</code>
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
<br></br>
            <Slideshow2 images={imagesMain3} />

          </div>

        </main>

        {/* <div className={styles.fixedfooter}> */}
        <Footer />
        {/* </div> */}
      </div>
    </div>
  );
}
