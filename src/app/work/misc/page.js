'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./misc.css";

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
    const images1 = [
        {
            original: "/images/misc/basilhouse1.png",
            thumbnail: "/images/misc/basilhouse1.png",
        },
        {
            original: "/images/misc/basilhouse2.png",
            thumbnail: "/images/misc/basilhouse2.png",
        }, {
            original: "/images/misc/basilhouse3.png",
            thumbnail: "/images/misc/basilhouse3.png",
        }, {
            original: "/images/misc/basilhouse4.png",
            thumbnail: "/images/misc/basilhouse4.png",
        }, {
            original: "/images/misc/basilhouse5.png",
            thumbnail: "/images/misc/basilhouse5.png",
        }
    ]


    return (
        <div>

            <Header bold="work" />
            <link rel="icon" href="/images/chand.png" />
            <title>The Eternal Ballroom</title>
            <div className="mastheadcont">
                <a className="masthead">
                    <div className="mastheadtext">Misc</div>
                </a>

                <div className="pagesubwork">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>



                        <div className="mainsubwork">
                            <div className="paddingsubwork">


                                <div className="left">
                                    <div className="videoviewport">
                                        <MediaPlayer playsInline title="White Space - Omori" src="/images/misc/whitespace.mp4">
                                            <MediaProvider>
                                                <Poster
                                                    className="vds-poster"
                                                // src="/images/illustration/lbsunset2.png"
                                                />
                                            </MediaProvider>
                                            <DefaultVideoLayout icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                3D rendition of White Space from Omori. This was my first blender project - I&apos;d intended on segueing into making natural landscapes, but never got around to it
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">Blender</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="left">

                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                A poem I wrote for one of the drawings featured on my illustration page.
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">Google Docs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="videoviewport">
                                        <iframe className="spotify" src="https://docs.google.com/document/d/e/2PACX-1vQDHDFPSru9lxNkBTwSpibgqITnajKfJ_rZxsFdgYqxZxUi1J-fas3EW9UiN7qW01t10VJAWGyJErSY/pub?embedded=true"></iframe>
                                    </div>
                                </div>





                                <div className="left">
                                    <div className="videoviewport">
                                    <LightboxW i={7} w={260} />
                                    </div>
                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                This site! I custom made it using NextJS/React. I had a friend help me with the setup and basics. The Github is <a className="customlink" href="https://github.com/eternalballroom/eternalballroom.github.io" target="_blank">here</a>, if you&apos;d like to explore for secrets
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">VSCode, Github</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                
                                <div className="left">

                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                Basil&apos;s dreamworld shoe house from Omori
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">Minecraft</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="videoviewport">
                                        <ImageGallery showNav={false} showBullets={true} showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images1} />
                                    </div>
                                </div>


                                <div className="left">
                                    <div className="videoviewport">
                                        <center><iframe className="spotify" src="https://open.spotify.com/embed/playlist/76sntswrh9XztMaAMYOHVB?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" width="100%" height="352" loading="lazy"></iframe></center>
                                    </div>
                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                One full bank page of liquid emeralds
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">Spotify</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="left">
                                    <div className="videoviewport">
                                        <LightboxW i={6} w={260} />
                                    </div>
                                    <div className="textboxtoolswrap">
                                        <div className="textboxsmall">
                                            <div>
                                                One full bank page of liquid emeralds
                                            </div>

                                            <div className="">
                                                <div className="textboxtoolsimg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                    </svg>
                                                    <div className="textboxtoolstext">Wynncraft</div>
                                                </div>
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
