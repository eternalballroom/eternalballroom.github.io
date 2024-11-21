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
                <a className="mastheadsig"></a>
                <div className="page">
                    <main className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>

                        <div className="pixelscontainer">
                            <div className="column">
                                <div className="slideviewport">
                                    <ImageGallery showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images1} />
                                    {/* showBullets={true} */}
                                </div>
                            </div>
                            <div className="column">
                                <div className="slideviewport">
                                    <ImageGallery showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={images2} />
                                </div>
                            </div>

                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
