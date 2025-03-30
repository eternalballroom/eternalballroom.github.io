'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./composition.css";

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
                    <div className="mastheadtext">Composition</div>
                </a>

                <div className="pagesubwork">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>



                        <div className="mainsubwork">
                            <div className="paddingsubwork">


                                <div className="triowrap">
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Pretty Planetarium" src="/images/composition/prettyplanetarium.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Pretty Planetarium
                                        </div>
                                    </div>
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Arrow of God" src="/images/composition/arrowofgod.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Arrow of God
                                        </div>
                                    </div>
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Journey's End" src="/images/composition/journeysend.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Journey's End
                                        </div>
                                    </div>
                                </div>


                                <div className="triowrap">
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Choir of Cats" src="/images/composition/choirofcats.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Choir of Cats
                                        </div>
                                    </div>
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Interstellar" src="/images/composition/interstellar.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Interstellar
                                        </div>
                                    </div>
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="WRISTS" src="/images/composition/wrists.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        WRISTS
                                        </div>
                                    </div>
                                </div>


                                <div className="triowrap">
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Last Slice of Pizza" src="/images/composition/lastsliceofpizza.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        Last Slice of Pizza
                                        </div>
                                    </div>
                                    <div className="trio">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="A Town I Once Knew" src="/images/composition/atownionceknew.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                    src=""
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                        <div className="textboxsmall">                                      
                                        A Town I Once Knew
                                        </div>
                                    </div>
                                
                                </div>




                                <div className="textboxtoolswrap">
                                    <div className="textboxbottom">
                                        <div>
                                            Snippets of short drafted melodies
                                        </div>

                                        <div className="textboxtoolswrap">
                                            <div className="textboxtoolsimg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                </svg>
                                                <div className="textboxtoolstext">Beepbox</div>
                                            </div>
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