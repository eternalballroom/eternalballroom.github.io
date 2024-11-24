import styles from "../page.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import '../globals.css';
import Socials from './socials.js';
//mobile header -------

import { useClickAway } from "react-use";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from 'hamburger-react'




export default function Header({ bold }) {
  //1 = main, 2 = work, 3 =         {`${styles.changeFontBold} ${styles.colorchange}`}
  useEffect(() => {
    const element = document.getElementById(bold);
    element.className = `${styles.changeFontBold} `;
  }, []);

  const [isOpen, setOpen] = useState(false)
  // --
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));


  return (
    <header>

      <nav className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link
            href="/">
            <Image
              src="/images/chand.png"
              alt="C"
              width={35}
              height={35}
            />
          </Link>

        </div>

        <div className={styles.header}>
          {/* <div className="separator font_semibold">ANNOUNCEMENTS</div> */}


          <Link
            href="/"
            rel="noopener noreferrer"
            className={styles.colorchange}
            id="home"
          >
            Home
          </Link>
          <a
            href="/about"
            /* target="_blank" */
            rel="noopener noreferrer"
            className={styles.colorchange}
            id="about"
          >
            {/* <Image
            ariaHidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
            About
          </a>
          <a
            href="/work"
            rel="noopener noreferrer"
            className={styles.colorchange}
            id="work"
          >
            Work
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
              viewBox="-9 -3 35 24"
            >
              <path d="M10.4 7.4 16.9 0h-1.5L9.7 6.4 5.2 0H0l6.8 9.7L0 17.4h1.5l5.9-6.8 4.7 6.8h5.2l-6.9-10ZM8.3 9.8l-.7-1-5.5-7.6h2.4l4.4 6.2.7 1 5.7 8h-2.4L8.3 9.8Z" />
            </svg>
          </a>
          <a
            href="https://github.com/eternalballroom"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colorchange}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle" viewBox="-7 -7 30 30">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
            </svg>
          </a>


        </div>
        <div className={styles.headerHamburger}>


          <div className={styles.colorchange}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
          </div>
          <AnimatePresence>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="tw-fixed tw-left-0 tw-shadow-2xl tw-right-0 tw-top-[58px] tw-p-4 tw-pt-0 tw-pb-1 tw-bg-mygray tw-border-b tw-border-b-mylightgray ">
                <ul className="tw-grid tw-gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: 0.0,
                    }} className="tw-w-full tw-p-[0.08rem] tw-rounded-xl tw-bg-gradient-to-tr tw-from-neutral-800 tw-via-neutral-950 tw-to-neutral-700 ">
                    <Link

                      className={`${styles.colorchange}
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-pr-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/"
                    >

                      <span className="tw-flex tw-gap-1 ">Home</span>

                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.headerimggray} width="23" height="23" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                    </Link>
                  </motion.li>



                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: 0.1,
                    }} className="tw-w-full tw-p-[0.08rem] tw-rounded-xl tw-bg-gradient-to-tr tw-from-neutral-800 tw-via-neutral-950 tw-to-neutral-700 ">
                    <Link
                      /* onClick={() => setOpen((prev) => !prev)} */
                      className={`${styles.colorchange}
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-pr-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/about"
                    >
                      <span className="tw-flex tw-gap-1">About</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.headerimggray} width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
                    </Link>
                  </motion.li>



                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: 0.2,
                    }} className="tw-w-full tw-p-[0.08rem] tw-rounded-xl tw-bg-gradient-to-tr tw-from-neutral-800 tw-via-neutral-950 tw-to-neutral-700 ">
                    <Link

                      className={`${styles.colorchange}
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-pr-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/work"
                    >
                      <span className="tw-flex tw-gap-1">Work</span>

                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.headerimggray} width="22" height="22" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
                    </Link>

                  </motion.li>
                </ul>
                {/* START OF SOCIALS */}
                <motion.ul
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    delay: 0.3,
                  }} className={"tw-flex tw-justify-between tw-w-full tw-pt-1 tw-bg-mygray"}>
                  <a className={"tw-ml-20"} />

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
                      viewBox="-9 -3 35 24"
                    >
                      <path d="M10.4 7.4 16.9 0h-1.5L9.7 6.4 5.2 0H0l6.8 9.7L0 17.4h1.5l5.9-6.8 4.7 6.8h5.2l-6.9-10ZM8.3 9.8l-.7-1-5.5-7.6h2.4l4.4 6.2.7 1 5.7 8h-2.4L8.3 9.8Z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/eternalballroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.colorchange}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle" viewBox="-7 -7 30 30">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>
                  </a>


                  <a className={"tw-ml-20"} />
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>



      </nav>


    </header>
  )
}