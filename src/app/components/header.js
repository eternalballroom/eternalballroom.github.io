import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header({ bold }) {
  //1 = main, 2 = work, 3 =         {`${styles.changeFontBold} ${styles.colorchange}`}
  useEffect(() => {
    const element = document.getElementById(bold);
    element.className = `${styles.changeFontBold} `;
  }, []);

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
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
          
        </div>

        <div className={`${styles.headerSpacing}`}>

          <a></a>

        </div>

        <div className={`${styles.headerRight}`}>
          <a
            href="https://www.instagram.com/danielisfaraway/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colorchange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 30 24"
            >
              <g>
                <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                          c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                          c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                          c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                          c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                          c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                          c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                          c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                          c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z"></path>
                <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                          c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z"></path>
                <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z"></path>
              </g>
            </svg>
          </a>

          <a
            href="https://twitter.com/blockgamechu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colorchange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="-8 -3 35 24"
            >
              <path d="M10.4 7.4 16.9 0h-1.5L9.7 6.4 5.2 0H0l6.8 9.7L0 17.4h1.5l5.9-6.8 4.7 6.8h5.2l-6.9-10ZM8.3 9.8l-.7-1-5.5-7.6h2.4l4.4 6.2.7 1 5.7 8h-2.4L8.3 9.8Z" />
            </svg>
          </a>

          

        </div>
      </div>


    </header>
  )
}