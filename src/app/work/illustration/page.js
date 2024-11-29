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

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
//vidplayer
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { Poster } from '@vidstack/react';




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

                                <div className="bannerviewport">
                                    <Image className="videoviewport1" src="/images/illustration/lbsunset1.png" height="1080" width="1080" alt=""></Image>

                                    <div className="videoviewport1">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Goodbye to a World - Porter Robinson" src="/images/illustration/sunsetvid.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src="/images/illustration/lbsunset2.png"

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>

                                    <Image className="videoviewport1" src="/images/illustration/lbsunset3.png" height="1080" width="1080" alt=""></Image>

                                </div>
                                <div className="bannerviewport">
                                    <Image className="videoviewport1" src="/images/illustration/lbpurple1.png" height="1080" width="1080" alt=""></Image>

                                    <div className="videoviewport1">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Touch - Daft Punk" src="/images/illustration/purplevid.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src="/images/illustration/lbpurple2.png"

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>

                                    <Image className="videoviewport1" src="/images/illustration/lbpurple3.png" height="1080" width="1080" alt=""></Image>

                                </div>
                                <div className="textboxtoolswrap">
                                    <div className="textboxsmall">
                                        <div>
                                            3240 x 1080px banners done for&nbsp;
                                            <a className="customlink" href="https://www.instagram.com/shirtpillowcase/" target="_blank">Instagram </a>
                                            split-screen posts. Each banner is split between three 1080 x 1080px images, with the center image being animated.
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

                                <div className="bannerviewportmobile">


                                    <div className="videoviewport2">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="If It Is You - Jung Seung Hwan" src="/images/illustration/omorialbum1.mp4" >
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src="/images/illustration/omorialbum1thumb.png"

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                    <div className="videoviewport2">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Summer Rain - Sam Kim" src="/images/illustration/omorialbum2.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout thumbnails="" icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>


                                    <div className="videoviewport2">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="drugs - Eden" src="/images/illustration/emoguy.mp4" >
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                    <div className="videoviewport2">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Intro - Barnes Blvd." src="/images/illustration/emogirl.mp4" >
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""

                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>

                                </div>
                                <div className="textboxtoolswrap">
                                    <div className="textboxsmall">
                                        <div>
                                            Drawings that I animated for Instagram. The first two are album covers, while the latter two are part of a bigger split-screen.
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

                                <div className="textboxspaceabovebelow">An assortment of random illustrations I&apos;ve done over the years, ordered roughly from newest to oldest (2016).
                                </div>
                                <LightboxW i={3} w={260} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}




{/* <video className="bannerimageviewport" width="720" height="720" controls >
                                        <source src="/images/illustration/sunsetvid.mp4" type="video/mp4" />
                                    </video> 
                                    
                                    <div className="videoviewport">
                                        <MediaPlayer playsInline aspectRatio="1/1" title="Touch - Daft Punk" src="/images/illustration/purplevid.mp4">
                                            <MediaProvider />
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                     */}