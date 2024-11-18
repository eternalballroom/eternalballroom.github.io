import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";

export default function Footer() {

  return (

    <footer className={styles.footer}>
      <div
        className={styles.font_smallgray}
        
      >
        {/* <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        /> */}
        ⓧ &nbsp;2024 caretaker
      </div>
    </footer>
  );
}
