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
    const fd2 = [
        {
            original: "/images/cooking/fd21.jpg",
            thumbnail: "/images/cooking/fd21.jpg",
        },
        {
            original: "/images/cooking/fd22.jpg",
            thumbnail: "/images/cooking/fd22.jpg",
        },
        {
            original: "/images/cooking/fd23.jpg",
            thumbnail: "/images/cooking/fd23.jpg",
        },

    ]
    const fd3 = [
        {
            original: "/images/cooking/fd31.jpg",
            thumbnail: "/images/cooking/fd31.jpg",
        },
        {
            original: "/images/cooking/fd32.jpg",
            thumbnail: "/images/cooking/fd32.jpg",
        },

    ]
    const fd4 = [
        {
            original: "/images/cooking/fd41.jpg",
            thumbnail: "/images/cooking/fd41.jpg",
        },
        {
            original: "/images/cooking/fd42.jpg",
            thumbnail: "/images/cooking/fd42.jpg",
        },
        {
            original: "/images/cooking/fd43.jpg",
            thumbnail: "/images/cooking/fd43.jpg",
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
                    <div className="mastheadtext">Cooking</div>
                </a>

                <div className="pagesubwork">
                    <div className={styles.main}>
                        <div className={`${styles.separator} ${styles.font_semibold}`}>𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒</div>

                        <div className="mainsubwork">
                            <div className="paddingsubwork">


                                <div className="doublecontainerfirst">
                                    <div className="slideshowviewport">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd1} />
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
                                                Dessert
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textbox">
                                            Sugar cookie crumble with strawberries and grenadine syrup
                                        </div>
                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Drink
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textbox">
                                            Melon cream soda
                                        </div>
                                    </div>
                                </div>


                                <div className="doublecontainer">
                                    <div className="slideshowviewportrightmob">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd2} />
                                    </div>

                                    <div className="textboxviewport">
                                        <div className="bigfattitleright">
                                            fine dining 2
                                        </div>
                                        <div className="textboxtitleright">
                                            My second attempt, for an anniversary:
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Appetizer
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://www.instagram.com/p/C9aNNr_PRnX/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textboxright">
                                            Sourdough bruschetta & ricotta toast, topped with fresh basil
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Entree
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://www.instagram.com/p/C-f0KW7NkrJ/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textboxright">
                                            Creamy garlic pasta with baby shrimp
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Dessert
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textboxright">
                                            Yellow sweet rice chicks with carrot beaks and black pepper eyes
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Drink
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textboxright">
                                            Strawberry syrup & sparkling water
                                        </div>
                                    </div>
                                    <div className="slideshowviewportrightpc">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd2} />
                                    </div>
                                </div>


                                <div className="doublecontainer">
                                    <div className="slideshowviewport">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd3} />
                                    </div>
                                    <div className="textboxviewport">
                                        <div className="bigfattitle">
                                            fine dining 3
                                        </div>

                                        <div className="textboxtitle">
                                            Third, for friendsgiving:
                                        </div>



                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Appetizer
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://playswellwithbutter.com/spicy-ahi-tuna-tostadas/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Spicy ahi tuna tostadas on an avocado base, garnished with cilantro and spring onion
                                        </div>
                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Entree
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://eaters-manifesto.com/2018/09/16/pork-belly-and-caviar/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Pork belly and caviar, served with a side of mashed potatoes and smoked trout cream
                                        </div>

                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Dessert
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textbox">
                                            Ghirardellis lol
                                        </div>

                                        <Embel2 />
                                        <div className="textboxwrap">
                                            <div className="textboxunderline">
                                                Drink
                                            </div>
                                            <div className="textbox">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://www.instagram.com/p/DCXLcFQSLhX/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textbox">
                                            Gin & tonic snowglobe cocktail with rosemary garnish
                                        </div>
                                    </div>

                                </div>

                                <div className="videowrap">
                                    <div className="videoviewport">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="Snowglobe" src="/images/cooking/fd3v.mp4">
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

                                <div className="doublecontainer">
                                    <div className="slideshowviewportrightmob">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd4} />
                                    </div>

                                    <div className="textboxviewport">
                                        <div className="bigfattitleright">
                                            fine dining 4
                                        </div>
                                        <div className="textboxtitleright">
                                            For friendschristmas:
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Appetizer
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://iambaker.net/chili-cheese-nachos/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textboxright">
                                            Loaded chili cheese nachos
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Entree
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://www.youtube.com/watch?v=Cyskqnp1j64" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textboxright">
                                            Beef wellington & mashed potato, served with a red wine demi-glace
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Dessert
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <a className="recipe" href="https://preppykitchen.com/mini-apple-pies/" target="_blank">
                                                [Recipe]
                                            </a>
                                        </div>
                                        <div className="textboxright">
                                            Mini apple pies w/ vanilla ice cream
                                        </div>
                                        <div className="embelviewportright">
                                            <Embel2 />
                                        </div>
                                        <div className="textboxwrapright">
                                            <div className="textboxunderline">
                                                Drink
                                            </div>
                                            <div className="textboxright">
                                                &nbsp;-&nbsp;
                                            </div>
                                            <div className="recipe" >
                                                No recipe
                                            </div>
                                        </div>
                                        <div className="textboxright">
                                            Asahi / eggnog & cinnamon / banana Milkis cocktail
                                        </div>
                                    </div>
                                    <div className="slideshowviewportrightpc">
                                        <ImageGallery showThumbnails={true} showBullets={true} showNav={false} showPlayButton={false} showFullscreenButton={true} autoPlay={false} slideInterval={4500} slideDuration={700} items={fd4} />
                                    </div>
                                </div>

                                <div className="videowrapLeft">
                                    <div className="videoviewport">
                                        <MediaPlayer playsInline aspectRatio="9/16" title="xmas" src="/images/cooking/fd4v.mov">
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



                                <div className="textboxspaceabovebelow">Other assorted cookeries:
                                </div>
                                <LightboxW i={4} w={260} />

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