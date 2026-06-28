import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from "../page.module.css";
import Link from 'next/link';

import React, { useRef } from 'react'

export default function Slideshow2({ images }) {

  
    const progressNode = useRef(null)
    
    

    return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? '' : ' embla__progress--hidden'
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        
      </div>
    </div>
  )
}
