'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./illustration.css";

//components
import Footer from "../../components/footer";
import Slideshow from "../../components/slideshow";
import Header from "../../components/header";
//cursor
import Cursor from "../../components/cursor";
//slide
import ImageGallery from "react-image-gallery";
import LightboxW from "../../components/lightbox";
//vidplayer
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';


export default function Work() {
    return (
        <div>

            <Header bold="work" />
            <link rel="icon" href="/images/chand.png" />
            <title>The Eternal Ballroom</title>
            <div className="mastheadcont">
                <a className="masthead">
                    <div className="mastheadtext">Illustration</div>
                </a>

                <div className="pagesubwork">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>
                        <div className="mainsubwork">
                            <div className="paddingsubwork">
                                <LightboxW i={1} />
                                <div className="justifybetween">

                                    {/* <video width="720" height="720" controls >
                                        <source src="/images/illustration/sunsetvid.mp4" type="video/mp4" />
                                    </video> */}

                                    <div className="videoviewport">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Sprite Fight" src="/images/illustration/sunsetvid.mp4">
                                            <MediaProvider />
                                            <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                    <div className="textboxdisappear">
                                        <div>
                                            3240x1080px banners done for&nbsp;
                                            <a className="customlink" href="https://www.instagram.com/shirtpillowcase/" target="_blank">Instagram</a>
                                            &nbsp;split-screen posts. Each banner is split between three 1080x1080px images, with the center image being animated.
                                            {/* The original video files were unfortunately lost, leading to these being blurry after being downloaded from Instagram. */}
                                        </div>

                                        <div className="textboxtoolswrap">
                                            <div className="textboxtoolsimg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                </svg>
                                                <div className="textboxtoolstext">Paint Tool SAI, Adobe After Effects, Adobe Premiere Pro</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="videoviewport">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Sprite Fight" src="/images/illustration/purplevid.mp4">
                                            <MediaProvider />
                                            <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>


                                </div>
                                <div className="textboxreappear">


                                <div>
                                            3240x1080px banners done for&nbsp;
                                            <a className="customlink" href="https://www.instagram.com/shirtpillowcase/" target="_blank">Instagram </a>
                                            split-screen posts. Each banner is split between three 1080x1080px images, with the center image being animated.
                                            {/* The original video files were unfortunately lost, leading to these being blurry after being downloaded from Instagram. */}
                                        </div>

                                        <div className="textboxtoolswrap">
                                            <div className="textboxtoolsimg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                </svg>
                                                <div className="textboxtoolstext">Paint Tool SAI, After Effects, Premiere Pro</div>
                                            </div>
                                        </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}