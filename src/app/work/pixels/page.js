'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./pixels.css";

//components
import Footer from "../../components/footer";
import Slideshow from "../../components/slideshow";
import Header from "../../components/header";
//cursor
import Cursor from "../../components/cursor";
//slide
import ImageGallery from "react-image-gallery";

import LightboxW from "../../components/lightbox";


export default function Work() {
    const images1 = [
        {
            original: "/images/pixels/pixel1.png",
            thumbnail: "/images/pixels/pixel1.png",
        },
        {
            original: "/images/pixels/pixel3.png",
            thumbnail: "/images/pixels/pixel3.png",
        },
        {
            original: "/images/pixels/pixel5.png",
            thumbnail: "/images/pixels/pixel5.png",
        },
        {
            original: "/images/pixels/pixel11.png",
            thumbnail: "/images/pixels/pixel11.png",
        },
        {
            original: "/images/pixels/pixel7.png",
            thumbnail: "/images/pixels/pixel7.png",
        },
        {
            original: "/images/pixels/pixel9.png",
            thumbnail: "/images/pixels/pixel9.png",
        },
    ]

    const images2 = [
        {
            original: "/images/pixels/pixel2.png",
            thumbnail: "/images/pixels/pixel2.png",
        },
        {
            original: "/images/pixels/pixel4.png",
            thumbnail: "/images/pixels/pixel4.png",
        },
        {
            original: "/images/pixels/pixel6.png",
            thumbnail: "/images/pixels/pixel6.png",
        },
        {
            original: "/images/pixels/pixel10.png",
            thumbnail: "/images/pixels/pixel10.png",
        },
        {
            original: "/images/pixels/pixel8.png",
            thumbnail: "/images/pixels/pixel8.png",
        },

    ]

    const images3 = [
        {
            original: "/images/pixels/kitchenchaos4.png",
            thumbnail: "/images/pixels/kitchenchaos4.png",
        },
        {
            original: "/images/pixels/kitchenchaos3.png",
            thumbnail: "/images/pixels/kitchenchaos3.png",
        },
    ]

    const images4 = [
        {
            original: "/images/pixels/kitchenchaos2.png",
            thumbnail: "/images/pixels/kitchenchaos2.png",
        },
        {
            original: "/images/pixels/kitchenchaos1.png",
            thumbnail: "/images/pixels/kitchenchaos1.png",
        },
    ]


    return (
        <div>

            <Header bold="work" />
            <link rel="icon" href="/images/chand.png" />
            <title>The Eternal Ballroom</title>


            <div className="mastheadcont">
                <a className="masthead">
                    <div className="mastheadtext">
                        Pixels
                    </div>
                </a>
                <div className="page">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>
                        <div className="mainpix">
                            <div className="page90">


                                <div className="doublepage">
                                    <div className="doublecontainer">
                                        <div className="doubleslideviewport">
                                            <ImageGallery showNav={false} showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images1} />
                                            {/* showBullets={true} showNav isRTL={true} */}
                                        </div>
                                        <div className="doubleslideviewport">
                                            <ImageGallery showNav={false} showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images2} />
                                        </div>
                                    </div>
                                </div>


                                <div className="textboxcenter">
                                    <div className="textbox">Commissioned pixel art banners for NameMC profiles. Artwork is split between 26 Minecraft skin heads, rendering a display as shown on this profile:&nbsp;
                                        <a className="customlink" href="https://namemc.com/profile/Chu.5" target="_blank">Chu</a>
                                    </div>
                                    <div className="textboxtoolswrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                        </svg>
                                        <div className="textboxtoolstext">Asperite, Paint Tool SAI</div>
                                    </div>
                                </div>

                                <div className="doublepage">
                                    <div className="doublecontainer">
                                        <div className="doubleslideviewport">
                                            <div className="kitchenchaosviewport1">
                                                {/* <img src="/images/pixels/kitchenchaos2.png" width="2000" height="1080" alt="" /> */}
                                                <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={true} items={images4} />
                                                {/* showBullets={true} showNav*/}
                                            </div>
                                        </div>
                                        <div className="doubleslideviewport">
                                            <div className="kitchenchaosviewport2">
                                                <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={true} items={images3} />
                                                <div className="textboxleft">
                                                    <div className="textboxleft2">Pixel art done for a 48-hour UCSD game jam. The food and some background assets were taken from asset packs, and the knife/picnic basket are references to OMORI. The game, though unfinished, can be played&nbsp;
                                                        <a className="customlink" href="https://argro.itch.io/game-jam-fall-22-ucsd-kitchen-chaos" target="_blank">here</a>.
                                                    </div>
                                                    <div className="textboxtoolswrap">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hammer" viewBox="0 -3 20 20">
                                                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                                                        </svg>
                                                        <div className="textboxtoolstext">Asperite, Paint Tool SAI</div>
                                                    </div>
                                                </div>


                                            </div>



                                        </div>
                                    </div>
                                </div>

                                <div className="textboxspaceabovebelow">A collection of miscellaneous pixel arts and more NameMCs

                                </div>

                              
                                    <LightboxW i={0} w={150}/>
                                
                            </div>
                        </div>
                    </div>


                    <Footer />
                </div>
            </div>
        </div>
    );
}
