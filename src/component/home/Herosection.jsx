import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../public/images/home/herosection/image1.jpg";
import img2 from "../../../public/images/home/herosection/image2.jpeg";
import img3 from "../../../public/images/home/herosection/image1.jpeg";

const baseSlides = [img2, img3, img1];
const slides = [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]];

export default function Herosection() {
  const [idx, setIdx] = useState(1);           // start at first REAL slide
  const [anim, setAnim] = useState(true);      // control CSS transition
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setIdx((i) => i + 1);
  const prev = () => setIdx((i) => i - 1);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIdx((i) => i + 1), 2500);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);

  useEffect(() => {
    if (baseSlides.length <= 1) return;
    start();
    return stop;
  }, []);

  useEffect(() => {
    if (!anim) return;
    if (idx === slides.length - 1) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(1);
      }, 820);
      return () => clearTimeout(t);
    }
    if (idx === 0) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(baseSlides.length);
      }, 820);
      return () => clearTimeout(t);
    }
  }, [idx, anim]);

  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 20);
      return () => clearTimeout(t);
    }
  }, [anim]);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      start();
    }
  };

  const goToDot = (real) => {
    setAnim(true);
    setIdx(real + 1); // shift by 1 because of head clone
    start();
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className={`flex w-full ${anim ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]" : "transition-none"}`}
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full shrink-0 h-[46vh] sm:h-[56vh] md:h-[68vh] lg:h-[80vh]">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-"
              draggable={false}
              loading={i === 1 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {baseSlides.length > 1 && (
        <>
          

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {baseSlides.map((_, real) => {
              const active = (idx - 1 + baseSlides.length) % baseSlides.length === real;
              return (
                <button
                  key={real}
                  onClick={() => goToDot(real)}
                  aria-label={`Go to slide ${real + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"}`}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
