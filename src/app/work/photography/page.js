'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./photography.css";

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
            original: "/images/photography/p11.png",
            thumbnail: "/images/pixels/p11.png",
        },
        {
            original: "/images/photography/p12.png",
            thumbnail: "/images/photography/p12.png",
        },
        {
            original: "/images/photography/p13.png",
            thumbnail: "/images/photography/p13.png",
        },
    ]
    const images2 = [
        {
            original: "/images/photography/p21.png",
            thumbnail: "/images/pixels/p11.png",
        },
        {
            original: "/images/photography/p22.png",
            thumbnail: "/images/photography/p12.png",
        },
    ]
    const images3 = [
        {
            original: "/images/photography/p31.png",
            thumbnail: "/images/pixels/p11.png",
        },
        {
            original: "/images/photography/p32.png",
            thumbnail: "/images/photography/p12.png",
        },
    ]
const images4 = [
        {
            original: "/images/photography/p41.png",
            thumbnail: "/images/pixels/p41.png",
        },
        {
            original: "/images/photography/p42.png",
            thumbnail: "/images/photography/p42.png",
        },
        {
            original: "/images/photography/p43.png",
            thumbnail: "/images/photography/p43.png",
        },
    ]
    const images5 = [
        {
            original: "/images/photography/p51.png",
            thumbnail: "/images/pixels/p51.png",
        },
        {
            original: "/images/photography/p52.png",
            thumbnail: "/images/photography/p52.png",
        },
    ]
    const images6 = [
        {
            original: "/images/photography/p61.png",
            thumbnail: "/images/pixels/p61.png",
        },
        {
            original: "/images/photography/p62.mp4",
            thumbnail: "/images/photography/p62.mp4",
        },
    ]
const images7 = [
        {
            original: "/images/photography/p71.png",
            thumbnail: "/images/pixels/p71.png",
        },
        {
            original: "/images/photography/p72.png",
            thumbnail: "/images/photography/p72.png",
        },
        {
            original: "/images/photography/p73.png",
            thumbnail: "/images/photography/p73.png",
        },
    ]
    const images8 = [
        {
            original: "/images/photography/p81.png",
            thumbnail: "/images/pixels/p81.png",
        },
        {
            original: "/images/photography/p82.png",
            thumbnail: "/images/photography/p82.png",
        },
    ]
    const images9 = [
        {
            original: "/images/photography/p91.png",
            thumbnail: "/images/pixels/p91.png",
        },
        {
            original: "/images/photography/p92.png",
            thumbnail: "/images/photography/p92.png",
        },
    ]    
const images10 = [
        {
            original: "/images/photography/p101.png",
            thumbnail: "/images/pixels/p101.png",
        },
        {
            original: "/images/photography/p102.jpg",
            thumbnail: "/images/photography/p102.jpg",
        },
    ]
    const images11 = [
        {
            original: "/images/photography/p111.png",
            thumbnail: "/images/pixels/p111.png",
        },
        {
            original: "/images/photography/p112.png",
            thumbnail: "/images/photography/p112.png",
        },
    ]
    const images12 = [
        {
            original: "/images/photography/p121.png",
            thumbnail: "/images/pixels/p121.png",
        },
        {
            original: "/images/photography/p122.png",
            thumbnail: "/images/photography/p122.png",
        },
        {
            original: "/images/photography/p123.png",
            thumbnail: "/images/photography/p123.png",
        },
    ]    
    return (
        <div>

            <Header bold="work" />
            <link rel="icon" href="/images/chand.png" />
            <title>The Eternal Ballroom</title>
            <div className="mastheadcont">
                <a className="masthead">
                    <div className="mastheadtext">Photography</div>
                </a>

                <div className="pagesubwork">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>

                        <div className="mainsubwork">
                            <div className="paddingsubwork">
                                <div className="bannerviewport">
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images10} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images11} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images12} />
                                </div>
                                <div className="bannerviewport">
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images9} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images8} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images7} />
                                </div>
                                <div className="bannerviewport">
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images5} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images6} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images4} />
                                </div>
                                <div className="bannerviewport">
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images3} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images2} />
                                    <ImageGallery infinite={false} showBullets={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} autoPlay={false} slideInterval={3000} slideDuration={700} showNav={false} items={images1} />
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
