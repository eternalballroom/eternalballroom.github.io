'use client'
import "../pagemodule2.css";
import "./work.css";
import Image from "next/image";
import styles from "../page.module.css";
import React from 'react';
import Link from 'next/link';

//components
import Footer from "../components/footer";
import Slideshow from "../components/slideshow";
import Header from "../components/header";
//cursor
import Cursor from "../components/cursor";

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
            <div className="container">



              {/* <a className="cover" href="/about">
            </a>
            <Image className="workone" src="/images/pixelart.png" width="400" height="300" alt=""></Image> */}

              <section className="project-covers">
                <a className="project-cover" href="/work/pixels">
                  <div className="cover-content-container">
                    <div className="cover-image-wrap">
                      <div className="cover-image">
                        <div className="cover cover-normal">
                          <Image className="cover__img" src="/images/pixelart.png" height="1500" width="1125" alt=""></Image>
                        </div>
                      </div>
                    </div>
                    <div className="details-wrap">
                      <div className="details">
                        <div className="details-inner">
                          <div className="title preserve-whitespace">pixels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="project-cover" href="/about">
                  <div className="cover-content-container">
                    <div className="cover-image-wrap">
                      <div className="cover-image">
                        <div className="cover cover-normal">
                          <Image className="cover__img" src="/images/cooking.png" height="1500" width="1125" alt=""></Image>
                        </div>
                      </div>
                    </div>
                    <div className="details-wrap">
                      <div className="details">
                        <div className="details-inner">
                          <div className="title preserve-whitespace">cooking</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="project-cover" href="/about">
                  <div className="cover-content-container">
                    <div className="cover-image-wrap">
                      <div className="cover-image">
                        <div className="cover cover-normal">
                          <Image className="cover__img" src="/images/pixelart.png" height="1500" width="1125" alt=""></Image>
                        </div>
                      </div>
                    </div>
                    <div className="details-wrap">
                      <div className="details">
                        <div className="details-inner">
                          <div className="title preserve-whitespace">pixels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="project-cover" href="/about">
                  <div className="cover-content-container">
                    <div className="cover-image-wrap">
                      <div className="cover-image">
                        <div className="cover cover-normal">
                          <Image className="cover__img" src="/images/pixelart.png" height="1500" width="1125" alt=""></Image>
                        </div>
                      </div>
                    </div>
                    <div className="details-wrap">
                      <div className="details">
                        <div className="details-inner">
                          <div className="title preserve-whitespace">pixels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>


              </section>
            </div>



          </main>
          <Footer />
        </div>
      </div>
    </div >
  );
}
