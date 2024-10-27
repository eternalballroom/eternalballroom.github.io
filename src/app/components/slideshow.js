/**
 * Does things
 * @param {String[]} img 
 * @returns jsx element XD
 */

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from "../page.module.css";
import Link from 'next/link';

export default function Slideshow({ images }) {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false, delay: 3000 })])
    
    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={`flex ${styles.embla__container} `}>
                {
                    images.map((img,i) =>
                        <div className={`basis-full md:basis-[55%] ${styles.embla__slide} ${styles.transform}` } key={img.path+i}>
                            <center><Link href={img.url}><img src={img.path} /></Link></center>
                        </div>
                    )
                }
            </div>
        </div>
    )
}