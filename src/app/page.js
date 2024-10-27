'use client'

import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Link from 'next/link';
//embla
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
//components
import Footer from "./components/footer";
import Slideshow from "./components/slideshow";

//f
export default function Home() {

  const imagesMain1 = [
    { path: "/images/testimg.png", url: "/two" },
    { path: "/images/omori.gif", url: "/two" },
    { path: "/images/testimg.png", url: "/break" },
    { path: "/images/omori.gif", url: "/two" },
  ]


  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Slideshow images={ imagesMain1 } />

        

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
            Site <code>dddddddd0</code>.
          </li>
          <li>#1</li>
        </ol>


        <ul>
          <li>
            <Link href="/">Home</Link>
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

        <hr></hr>
        <div></div>

      </main>
      <Footer />
    </div>
  );
}
