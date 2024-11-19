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
      
          <Image
            src="/images/chand.png"
            alt="C"
            width={35}
            height={35}
          />
          
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              size="50%"
              fill="currentColor"
              viewBox="-7 -7.5 40 40"
            >
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
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
                className="tw-fixed tw-left-0 tw-shadow-2xl tw-right-0 tw-top-[4.25rem] tw-p-4 tw-pt-0 tw-pb-2 tw-bg-mygray tw-border-b tw-border-b-mylightgray ">
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
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/"
                    >
                      
                      <span className="tw-flex tw-gap-1 ">Home</span>
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
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/about"
                    >
                      <span className="tw-flex tw-gap-1">About</span>
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
                        ${"tw-flex tw-items-center tw-justify-between tw-w-full tw-p-2 tw-pl-5 tw-rounded-xl tw-bg-mygray"}`
                      }
                      href="/work"
                    >
                      <span className="tw-flex tw-gap-1">Work</span>


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
                    }} className={"tw-flex tw-justify-between tw-w-full tw-pt-2 tw-bg-mygray"}>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      size="50%"
                      fill="currentColor"
                      viewBox="-7 -7.5 40 40"
                    >
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
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