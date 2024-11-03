'use client'

import Image from "next/image";
import styles from "../page.module.css";
import React from 'react';
import Link from 'next/link';
//embla
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
//components
import Footer from "../components/footer";
import Slideshow from "../components/slideshow";
import Header from "../components/header";
//cursor
import Cursor from "../components/cursor";

//f
export default function Work() {

  const imagesMain1 = [
    { path: "/images/testimg.png", url: "/two" },
    { path: "/images/omori.gif", url: "/two" },
    { path: "/images/testimg.png", url: "/break" },
    { path: "/images/omori.gif", url: "/two" },
  ]

  const imagesMain2 = [
    { path: "/images/main_pixelnb.png", url: "/two" },
    { path: "/images/main_pixelnb.png", url: "/break" },
    { path: "/images/main_pixel.png", url: "/two" },
  ]


  return (
    <div>
      <Cursor />
      <Header bold="work"/>
      <link rel="icon" href="/images/chand.png" />
      <title>The Eternal Ballroom</title>
      <div className={styles.page}>
        <main className={styles.main}>

          <Slideshow images={imagesMain2} />
          <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>
          <ol>
            <li>
              Site <code>WORK PAGE</code>.
            </li>
            <li>#1</li>
          </ol>

          <ul>
            <li>
              <Link href="/" media="(prefers-color-scheme: light)">Home</Link>
            </li>
            <li>
              <Link href="/two">About Us</Link>
            </li>
          </ul>


          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
