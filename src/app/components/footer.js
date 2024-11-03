import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";

export default function Footer() {

  return (

    <footer className={styles.footer}>
      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.font_smallgray}
        
      >
        {/* <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        /> */}
        ⓧ 2024 caretaker
      </a>
    </footer>
  );
}
