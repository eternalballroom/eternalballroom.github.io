'use client'

import "../pagemodule2.css";
import "./about.css";
import Image from "next/image";
import styles from "../page.module.css";
import React from "react";
import dynamic from "next/dynamic";

// components
import Footer from "../components/footer";
import Header from "../components/header";
import Oneko from "../components/oneko.js";

import FloatingSparklesNoSSR from "../components/FloatingSparklesNoSSR";

export default function Work() {
    return (
        <div className="about-page-shell">
            <div className="about-content-layer">
                <Oneko />
                <Header bold="work" />

                <link rel="icon" href="/images/chand.png" />
                <title>The Eternal Ballroom</title>

                <div className="mastheadcont">
                    <a className="masthead">
                        <div className="mastheadtext">
                            About
                        </div>
                    </a>

                    <div className="page">
                        <div className="sparkle-background" aria-hidden="true">
                            <FloatingSparklesNoSSR />
                        </div>

                        <main className={styles.main}>
                            <div className={`${styles.separator} ${styles.font_semibold}`}>
                                𝕿𝖍𝖊 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕭𝖆𝖑𝖑𝖗𝖔𝖔𝖒
                            </div>

                            <div className="aboutcontainer">
                                <center>
                                    <div className="imageviewport">
                                        <Image
                                            src="/images/sig.png"
                                            alt="Signature"
                                            width={550}
                                            height={38}
                                        />
                                    </div>
                                </center>

                                <div className="abouttextcontainer">
                                    <div className="stars">✧ &nbsp;✧&nbsp;&nbsp;✧</div>
                                    <div className="text">
                                        caretaker is a korean-taiwanese illustrator based
                                    </div>
                                    <div className="text">
                                        in california, who enjoys creating works to inspire others.
                                    </div>
                                    <div className="stars">✧ &nbsp;✧&nbsp;&nbsp;✧</div>
                                    <div className="text">
                                        he studies chemistry at ucsc by day and drinks milkis by night. and sometimes likes to make things.
                                    </div>
                                    <div className="stars">✧ &nbsp;✧&nbsp;&nbsp;✧</div>
                                    <div className="handwriting">다람쥐도토리뺏기!?</div>

                                    {/* fantasy is his favorite genre, reggaeton is favorite genre, and 805s his favorite drink. */}
                                </div>

                                <center>
                                    <iframe
                                        className="spotify"
                                        src="https://open.spotify.com/embed/track/0AN91FSgGw0nmOVcpD9q7l?utm_source=generator"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    />
                                </center>

                                {/* 
                <center>
                  <iframe
                    className="spotify"
                    src="https://open.spotify.com/embed/track/6I5OUXptquppKljwsBsICx?utm_source=generator"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </center> 
                */}
                            </div>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}