// import React, { useEffect, useRef, useState } from "react";
// import img1 from "../../../public/images/home/herosection/image1.jpg";
// import img2 from "../../../public/images/home/herosection/image2.jpeg";
// import img3 from "../../../public/images/home/herosection/image1.jpeg";

// const baseSlides = [img2, img3, img1];
// const slides = [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]];

// export default function Herosection() {
//   const [idx, setIdx] = useState(1);           // start at first REAL slide
//   const [anim, setAnim] = useState(true);      // control CSS transition
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const next = () => setIdx((i) => i + 1);
//   const prev = () => setIdx((i) => i - 1);

//   const start = () => {
//     stop();
//     timerRef.current = setInterval(() => setIdx((i) => i + 1), 2500);
//   };
//   const stop = () => timerRef.current && clearInterval(timerRef.current);

//   useEffect(() => {
//     if (baseSlides.length <= 1) return;
//     start();
//     return stop;
//   }, []);

//   useEffect(() => {
//     if (!anim) return;
//     if (idx === slides.length - 1) {
//       const t = setTimeout(() => {
//         setAnim(false);
//         setIdx(1);
//       }, 820);
//       return () => clearTimeout(t);
//     }
//     if (idx === 0) {
//       const t = setTimeout(() => {
//         setAnim(false);
//         setIdx(baseSlides.length);
//       }, 820);
//       return () => clearTimeout(t);
//     }
//   }, [idx, anim]);

//   useEffect(() => {
//     if (!anim) {
//       const t = setTimeout(() => setAnim(true), 20);
//       return () => clearTimeout(t);
//     }
//   }, [anim]);

//   const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
//   const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
//   const onTouchEnd = () => {
//     const delta = touchEndX.current - touchStartX.current;
//     if (Math.abs(delta) > 40) {
//       delta < 0 ? next() : prev();
//       start();
//     }
//   };

//   const goToDot = (real) => {
//     setAnim(true);
//     setIdx(real + 1); // shift by 1 because of head clone
//     start();
//   };

//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       onMouseEnter={stop}
//       onMouseLeave={start}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//       onTouchEnd={onTouchEnd}
//       aria-roledescription="carousel"
//     >
//       <div
//         className={`flex w-full ${anim ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]" : "transition-none"}`}
//         style={{ transform: `translateX(-${idx * 100}%)` }}
//       >
//         {slides.map((src, i) => (
//           <div key={i} className="w-full shrink-0 h-[46vh] sm:h-[56vh] md:h-[68vh] lg:h-[80vh]">
//             <img
//               src={src}
//               alt={`Slide ${i}`}
//               className="w-full h-full object-"
//               draggable={false}
//               loading={i === 1 ? "eager" : "lazy"}
//               sizes="100vw"
//             />
//           </div>
//         ))}
//       </div>

//       {baseSlides.length > 1 && (
//         <>
          

//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//             {baseSlides.map((_, real) => {
//               const active = (idx - 1 + baseSlides.length) % baseSlides.length === real;
//               return (
//                 <button
//                   key={real}
//                   onClick={() => goToDot(real)}
//                   aria-label={`Go to slide ${real + 1}`}
//                   className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"}`}
//                 />
//               );
//             })}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { ApiGet } from "../../helper/axios"; // adjust path

export default function Herosection() {
  const [slidesData, setSlidesData] = useState([]); // [last, ...base, first]
  const [idx, setIdx] = useState(1);        // start at first REAL slide
  const [anim, setAnim] = useState(true);   // control CSS transition
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIdx((i) => i + 1), 2500);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);

  useEffect(() => {
    fetchSlides();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSlides = async () => {
    try {
      const res = await ApiGet("/hero-section");
      // Expecting res.data to be an array like [{image: '...'}, ...] or ['...','...']
      const base = (res?.data || [])
        .map(s => (typeof s === "string" ? { image: s } : s))
        .filter(s => !!s?.image);

      if (base.length === 0) return;

      // Build loopable array with head & tail clones
      const loopable = [base[base.length - 1], ...base, base[0]];
      setSlidesData(loopable);
      setIdx(1); // ensure we start at first real slide
      if (base.length > 1) start();
    } catch (error) {
      console.error("Failed to fetch hero section slides", error);
    }
  };

  // Handle seamless loop jumps
  useEffect(() => {
    if (!anim || slidesData.length < 3) return;

    const lastIndex = slidesData.length - 1;     // tail clone index
    const lastRealIndex = slidesData.length - 2; // last REAL slide index inside loopable

    if (idx === lastIndex) {
      // moved to tail clone -> jump to first REAL
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(1);
      }, 820);
      return () => clearTimeout(t);
    }

    if (idx === 0) {
      // moved to head clone -> jump to last REAL
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(lastRealIndex);
      }, 820);
      return () => clearTimeout(t);
    }
  }, [idx, anim, slidesData]);

  // Re-enable animation right after instant jump
  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 20);
      return () => clearTimeout(t);
    }
  }, [anim]);

  const next = () => setIdx((i) => i + 1);
  const prev = () => setIdx((i) => i - 1);

  // Touch swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      start();
    }
  };

  // Dots use only REAL slides count
  const baseLen = Math.max(slidesData.length - 2, 0); // exclude 2 clones

  const goToDot = (realIndex) => {
    setAnim(true);
    setIdx(realIndex + 1); // +1 to account for head clone
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
        {slidesData.map((slide, i) => (
          <div key={i} className="w-full shrink-0 h-[46vh] sm:h-[56vh] md:h-[68vh] lg:h-[80vh]">
            <img
              src={slide?.image}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
              draggable={false}
              loading={i === 1 ? "eager" : "lazy"}
              sizes="100vw"
            />
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
                className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
