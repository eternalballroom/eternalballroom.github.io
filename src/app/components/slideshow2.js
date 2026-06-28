"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import "./slideshow2.css";

export default function Slideshow({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
    },
    [Autoplay({ stopOnInteraction: false, delay: 5000 })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, i) => {
            const isCurrent = i === selectedIndex;

            const card = (
              <div className="embla__card">
                <img
                  src={img.path}
                  alt={img.alt ?? ""}
                  className="embla__slide__img"
                />

                <div className="embla__shade" />

                <div className="embla__text">
                  <h5>{img.title}</h5>
                  <p>{img.description}</p>
                </div>
              </div>
            );

            return (
              <div
                className="embla__slide"
                data-current={isCurrent}
                key={`${img.path}-${i}`}
              >
                {img.url ? (
                  <Link href={img.url} className="embla__slide__link">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}