import React, { useEffect, useRef, useState } from "react";

import coolDesktop from '../../../public/images/home/herosection/image1.jpg';
import coolTablet from '../../../public/images/home/herosection/Cool ka smart choice Rotex Fan Tablet.jpg';
import coolMobile from '../../../public/images/home/herosection/Cool ka smart choice Rotex Fan Mobile.jpg';

import bldcDesktop from '../../../public/images/home/herosection/BLDC Power. laptop.jpg';
import bldcTablet from '../../../public/images/home/herosection/BLDC Power. Tablet.jpg';
import bldcMobile from '../../../public/images/home/herosection/BLDC Power. Mobile.jpg';

import feelDesktop from '../../../public/images/home/herosection/FEEL THE laptop.jpg';
import feelTablet from '../../../public/images/home/herosection/FEEL THE Tablet.jpg';
import feelMobile from '../../../public/images/home/herosection/FEEL THE Mobile.jpg';

const baseSlides = [
  {
    mobile: coolMobile,
    tablet: coolTablet,
    desktop: coolDesktop,
  },
  {
    mobile: bldcMobile,
    tablet: bldcTablet,
    desktop: bldcDesktop,
  },
  {
    mobile: feelMobile,
    tablet: feelTablet,
    desktop: feelDesktop,
  },
];


export default function Herosection() {
  const [slidesData, setSlidesData] = useState([]);
  const [idx, setIdx] = useState(1);
  const [anim, setAnim] = useState(true);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const loopable = [
      baseSlides[baseSlides.length - 1],
      ...baseSlides,
      baseSlides[0],
    ];
    setSlidesData(loopable);
    setIdx(1);
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIdx((i) => i + 1), 2500);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!anim || slidesData.length < 3) return;

    const lastIndex = slidesData.length - 1;
    const lastRealIndex = slidesData.length - 2;

    if (idx === lastIndex) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(1);
      }, 820);
      return () => clearTimeout(t);
    }

    if (idx === 0) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(lastRealIndex);
      }, 820);
      return () => clearTimeout(t);
    }
  }, [idx, anim, slidesData]);

  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 20);
      return () => clearTimeout(t);
    }
  }, [anim]);

  const next = () => setIdx((i) => i + 1);
  const prev = () => setIdx((i) => i - 1);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      start();
    }
  };

  const baseLen = baseSlides.length;

  const goToDot = (realIndex) => {
    setAnim(true);
    setIdx(realIndex + 1);
    start();
  };

  return (
    <section
      className="relative w-full x] overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className={`flex w-full ${
          anim
            ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            : "transition-none"
        }`}
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {slidesData.map((slide, i) => (
          <div
            key={i}
            className="w-full shrink-0 h-[320px] md:h-[500px] lg:h-[80vh]"
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={slide.desktop || slide.image}
              />
              <source
                media="(min-width: 768px)"
                srcSet={slide.tablet || slide.image}
              />
              <img
                src={slide.mobile || slide.image}
                alt={`Slide ${i}`}
                className="w-full h-full object-left object-cover object-top"
                draggable={false}
                loading={i === 1 ? "eager" : "lazy"}
              />
            </picture>
          </div>
        ))}
      </div>

      {baseLen > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: baseLen }).map((_, real) => {
            const active = (idx - 1 + baseLen) % baseLen === real;
            return (
              <button
                key={real}
                onClick={() => goToDot(real)}
                aria-label={`Go to slide ${real + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"
                }`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
