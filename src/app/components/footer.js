import styles from "../page.module.css";
import React from 'react';
import Image from "next/image";
import Socials from './socials.js';

export default function Footer() {

  return (
    <div>
      <footer className={styles.footer}>

        <Socials />

      </footer>

    </div>
  );
}


{/* <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        /> 
        ⓧ &nbsp;2024 caretaker 
        
        
        <div className={styles.font_smallgray}>ⓧ &nbsp;2024 caretaker</div>
        */}