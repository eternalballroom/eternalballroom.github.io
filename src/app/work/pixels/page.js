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
//f
export default function Work() {
    const images1 = [
        {
            original: "/images/pixel1.png",
            thumbnail: "/images/pixel1.png",
        },
        {
            original: "/images/pixel3.png",
            thumbnail: "/images/pixel3.png",
        },

        {
            original: "/images/pixel5.png",
            thumbnail: "/images/pixel5.png",
        },
    ]

    const images2 = [
        {
            original: "/images/pixel2.png",
            thumbnail: "/images/pixel2.png",
        },
        {
            original: "/images/pixel4.png",
            thumbnail: "/images/pixel4.png",
        },
        {
            original: "/images/pixel6.png",
            thumbnail: "/images/pixel6.png",
        },
    ]

    return (
        <div>
            <Cursor />
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
                    <main className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>
                        <div className="doublepage">
                            <div className="doublecontainer">
                                <div className="doubleslideviewport">
                                    <ImageGallery showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images1} />
                                    {/* showBullets={true} showNav*/}
                                </div>
                                <div className="doubleslideviewport">
                                    <ImageGallery showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images2} />
                                </div>
                            </div>
                        </div>


                        <div className="textboxcenter">
                        <div className="textbox">Commissioned pixel art banners for NameMC profiles. Artwork is split between 26 Minecraft skin heads, rendering a display as shown on this profile:&nbsp;
                            <a className="customlink" href="https://namemc.com/profile/Chu.5" target="_blank">Chu</a>
                        </div>
                        </div>


                        <div className={styles.push}></div>
                    </main>
                    
                    <Footer />
                </div>
            </div>
        </div>
    );
}
