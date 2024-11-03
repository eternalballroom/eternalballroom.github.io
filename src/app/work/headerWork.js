import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {

  

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
        >
          home
        </Link>
        <a
          href="/work"
          rel="noopener noreferrer"
          className={`${styles.changeFontBold} ${styles.colorchange}`}
        >
          work
        </a>
        <a
          href="about"
          /* target="_blank" */
          rel="noopener noreferrer"
          className={styles.colorchange}
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