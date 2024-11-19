'use client'
import "../../pagemodule2.css";
import Image from "next/image";
import styles from "../../page.module.css";
import React from 'react';
import Link from 'next/link';

//components
import Footer from "../../components/footer";
import Slideshow from "../../components/slideshow";
import Header from "../../components/header";
//cursor
import Cursor from "../../components/cursor";

//f
export default function Work() {
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
                            <div>pixels page</div>


                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
