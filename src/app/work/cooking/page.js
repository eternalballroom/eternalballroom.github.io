'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';
import "./cooking.css";
import Embel from "/public/images/embellishment.svg";

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
//embel


{/* <ImageGallery showNav={false} showFullscreenButton={false} autoPlay={true} slideInterval={4500} slideDuration={700} items={fd1} /> */ }

export default function Cooking() {

    const fd1 = [
        {
            original: "/images/cooking/fd11.jpg",
            thumbnail: "/images/cooking/fd11.jpg",
        },
        {
            original: "/images/cooking/fd12.jpg",
            thumbnail: "/images/cooking/fd12.jpg",
        },
        {
            original: "/images/cooking/fd13.jpg",
            thumbnail: "/images/cooking/fd13.jpg",
        },
        
    ]
    const Embel2 = () => (
        <div className="embelviewport">
            
            <Embel className="gold" />
        </div>
    )


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
                                <div className="doublecontainer">
                                    <div className="slideshowviewport">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={true} showFullscreenButton={false} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd1} />
                                    </div>
                                    <div className="textboxviewport">
                                    <div className="bigfattitle">
fine dining 1
                                    </div>

                                        <div className="textboxtitle">
                                            My first attempt at cooking with a focus on presentation. In order of pictures:
                                        </div>
                                     


                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Appetizer
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://www.four-magazine.com/recipes/ribbons-of-tuna-avocado-spicy-radish-and-ginger-marinade/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Maguro tuna ribbons atop an avocado base, topped with minced shallot and thai chili, served in a champagne vinegar marinade
                                        </div>
                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Entree
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://cookniche.com/Recipe.aspx?name=PhilClark&IDservice=1188" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Lamb rack and risotto, served with a green herb puree
                                        </div>

                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Entree
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://cookniche.com/Recipe.aspx?name=PhilClark&IDservice=1188" target="_blank">
                                                No recipe
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Sugar cookie crumble with strawberries and grenadine syrup
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