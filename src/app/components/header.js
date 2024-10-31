import "../page.module.css";
import React from 'react';
import Image from "next/image";

export default function Header() {

  return (
    <header className="site-header js-site-header  js-fixed-nav" data-context="theme.nav" data-hover-hint="nav" data-hover-hint-placement="top-start">
        <nav className="nav-container" data-hover-hint="nav" data-hover-hint-placement="bottom-start">
      <div className="page-title">
        <a href="/home">home</a>
      </div>
      <div className="page-title">
        <a href="/about">about</a>
      </div>
                <div className="gallery-title"><a href="/work" className="active">work</a></div>
      <div className="link-title">
        <a href="https://shop.starsowing.com/">shop</a>
      </div>
        </nav>
        
        <div className="hamburger-click-area js-hamburger">
          <div className="hamburger">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
    </header>
  )
}