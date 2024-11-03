import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import {useEffect} from 'react';

export default function Header({ bold }) {
  //1 = main, 2 = work, 3 =         {`${styles.changeFontBold} ${styles.colorchange}`}
  useEffect(() => {
    const element = document.getElementById(bold);
    element.className = `${styles.changeFontBold}`;
  }, []);

  return (
    <header className={styles.header} >
      {/* <div className="separator font_semibold">ANNOUNCEMENTS</div> */}
      <Image
        src="/images/chand.png"
        alt="C"
        width={35}
        height={35}
      />
      <Link
        href="/"
        rel="noopener noreferrer"
        className={styles.colorchange}
        id="home"
      >
        home
      </Link>
      <a
        href="/work"
        rel="noopener noreferrer"
        className={styles.colorchange}
        id="work"
      >
        work
      </a>
      <a
        href="/about"
        /* target="_blank" */
        rel="noopener noreferrer"
        className={styles.colorchange}
        id="about"
      >
        {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
        about
      </a>


    </header>
  )
}