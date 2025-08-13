// // import React from 'react'
// // import offer1 from "../../../public/images/home/discover/offer1.jpeg"

// // export default function Discover() {
// //     return (
// //         <>

// //             <section className=' w-[90%] mx-auto'>


// //                 <section className=" mx-auto px-4 py-16">
// //                     <h2 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-6">Discover Rotex</h2>

// //                     {/* Brand Cards Grid */}
// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
// //                         {/* Havells Main Brand Card */}
// //                         <div className=" rounded-2xl  text-white relative overflow-hidden  min-h-[300px]">



// //                             <img
// //                                 src={offer1}
// //                                 alt="Havells Products"
// //                                 className="w-full h-full rounded-[20px]  overflow-hidden object-contain"
// //                             />

// //                         </div>

// //                         {/* Lloyd Brand Card */}
// //                         <div className=" rounded-2xl w-[500px]  text-white relative overflow-hidden ">
// //                             <img
// //                                 src={offer1}
// //                                 alt="Havells Products"
// //                                 className="w-full h-full object-"
// //                             />
// //                         </div>
// //                     </div>

// //                     {/* Bottom Row - Three Equal Cards */}
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                         {/* Havells Studio Card */}
// //                         <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-[300px]">
// //                             <div className="relative z-10">
// //                                 <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">HAVELLS</h3>
// //                                 <h4 className="text-lg md:text-xl font-light text-gray-700 mb-4">STUDIO</h4>
// //                                 <p className="text-base md:text-lg text-gray-600 italic">Feel Beyond</p>
// //                             </div>

// //                             {/* Decorative Products */}
// //                             <div className="absolute right-4 bottom-4 w-1/2 h-1/2">
// //                                 <img
// //                                     src="/placeholder.svg?height=150&width=200"
// //                                     alt="Havells Studio Products"
// //                                     className="w-full h-full object-contain"
// //                                 />
// //                             </div>
// //                         </div>

// //                         {/* Havells Crabtree Card */}
// //                         <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden min-h-[250px] md:min-h-[300px]">
// //                             <div className="relative z-10">
// //                                 <h3 className="text-xl md:text-2xl font-bold mb-2">HAVELLS</h3>
// //                                 <h4 className="text-lg md:text-xl font-light mb-4">Crabtree</h4>
// //                                 <p className="text-base md:text-lg italic">Har Pal Ke Liye Switch.</p>
// //                             </div>

// //                             {/* Switch Products */}
// //                             <div className="absolute right-4 bottom-4 w-1/2 h-1/2">
// //                                 <img
// //                                     src="/placeholder.svg?height=150&width=200"
// //                                     alt="Havells Crabtree Products"
// //                                     className="w-full h-full object-contain"
// //                                 />
// //                             </div>
// //                         </div>

// //                         {/* REO Card */}
// //                         <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-[300px]">
// //                             <div className="relative z-10">
// //                                 <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">REO</h3>
// //                                 <p className="text-sm md:text-base text-gray-800 font-semibold leading-tight">
// //                                     TRUST NAAM MEIN.
// //                                     <br />
// //                                     PERFECT KAAM MEIN.
// //                                 </p>
// //                             </div>

// //                             {/* REO Products */}
// //                             <div className="absolute right-4 bottom-4 w-1/2 h-1/2">
// //                                 <img
// //                                     src="/placeholder.svg?height=150&width=200"
// //                                     alt="REO Products"
// //                                     className="w-full h-full object-contain"
// //                                 />
// //                             </div>

// //                             {/* Trust Badge */}
// //                             <div className="absolute bottom-4 right-4">
// //                                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
// //                                     <span className="text-white text-xs font-bold">✓</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>
// //             </section>

// //         </>
// //     )
// // }


// import React from "react";

// // Replace these with your real images
// import offerMainRed from "../../../public/images/home/discover/offer1.jpeg";
// import offer1 from "../../../public/images/home/discover/offer2.jpeg";
// import offerStudio from "../../../public/images/home/discover/offer3.jpeg";
// import offerCrabtree from "../../../public/images/home/discover/demo.jpeg";
// import offerReo from "../../../public/images/home/discover/offer1.jpeg";

// export default function Discover() {
//   return (
//     <section className="w-[90%] mx-auto">
//       <div className="mx-auto px-4 ">
//         <h2 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-6">
//           Discover Rotex
//         </h2>
//         {/* Top row (2-up) */}
//         <div className="flex gap-4 mb-4">
//           {/* Left big card */}
//           <div className="relative overflow-hidden rounded-xl shadow-sm w-[68%]  h-[390px] ">
//             <img
//               src={offer1}
//               alt="Havells Products"
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy"
//               sizes="(min-width: 1024px) 50vw, 90vw"
//             />
//           </div>

//           {/* Right big card */}
//           <div className="relative overflow-hidden rounded-xl shadow-sm  h-[390px] w-[390px]">
//             <img
//               src={offerStudio}
//               alt="Lloyd Products"
//               className="absolute inset-0 h-full w-full object-"
//               loading="lazy"
            
//             />
//           </div>
//         </div>

//         {/* Bottom row (3-up) */}
//         <div className=" flex  gap-[16px] justify-center mx-auto">
//           {/* Studio */}
//                 <div className="relative overflow-hidden    rounded-xl w-[380px] h-[200px] shadow-sm ">
//             <img
//               src={offerMainRed}
//               alt="Havells Studio"
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy"
             
//             />
//           </div>
//           <div className="relative overflow-hidden    rounded-xl w-[380px] h-[200px] shadow-sm ">
//             <img
//               src={offerCrabtree}
//               alt="Havells Crabtree"
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy"

//             />
//           </div>

//           {/* REO */}
//             <div className="relative overflow-hidden   shadow-lg rounded-xl w-[380px] h-[200px] shadow-sm ">
//             <img
//               src={offer1}
//               alt="REO"
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy"
//               sizes="(min-width: 768px) 30vw, 90vw"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { ApiGet } from "../../helper/axios";

// (Optional) local fallbacks while API loads/fails
import offerMainRed from "../../../public/images/home/discover/offer1.jpeg";
import offer1 from "../../../public/images/home/discover/offer2.jpeg";
import offerStudio from "../../../public/images/home/discover/offer3.jpeg";
import offerCrabtree from "../../../public/images/home/discover/demo.jpeg";

function BannerCard({ src, alt, className = "" }) {
  const [ratio, setRatio] = useState(null); // e.g. 16/9

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-sm bg-[#f7f7f7] ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onLoad={(e) => {
          const img = e.currentTarget;
          // natural size → set CSS aspect-ratio
          if (img.naturalWidth && img.naturalHeight) {
            setRatio(img.naturalWidth / img.naturalHeight);
          }
        }}
      />
    </div>
  );
}

export default function Discover() {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // Expected response shape:
        // [{ image: "https://...", alt: "text", width: 1200, height: 800 }, ...]
        const res = await ApiGet("/banners");
        console.log('banner-res', res)  
        if (!mounted) return;
        const arr = Array.isArray(res?.blog) ? res.blog : [];

        // If your API includes width/height, we can pre-set ratio to avoid layout shift.
        const normalized = arr.map((b) => ({
          src: b.image || b.src,
          alt: b.alt || "Banner",
          ratio: b.width && b.height ? b.width / b.height : null,
        }));
        setBanners(normalized.length ? normalized : null);
      } catch {
        setBanners(null);
      }
    })();
    return () => (mounted = false);
  }, []);

  // Fallback set (keeps your original layout)
  const fallback = [
    { src: offer1, alt: "Discover 1" },
    { src: offerStudio, alt: "Discover 2" },
    { src: offerMainRed, alt: "Discover 3" },
    { src: offerCrabtree, alt: "Discover 4" },
    { src: offer1, alt: "Discover 5" },
  ];

  const data = banners ?? fallback;

  // We’ll map them into your original structure:
  // Top row: 2 items (left wide, right tall-ish)
  // Bottom row: 3 items
  // If API returns fewer than 5, we’ll fill with what we have.
  const topLeft = data[0];
  const topRight = data[1];
  const bottomA = data[2];
  const bottomB = data[3];
  const bottomC = data[4];
 

  return (
    <section className="w-[90%] mx-auto">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-6">
          Discover Rotex
        </h2>

        {/* Top row (2-up) */}
        <div className="flex gap-4 mb-4">
          {/* Left big card (flex-grow) */}
          {topLeft ? (
            <BannerCard
              src={topLeft.src}
              alt={topLeft.alt}
              className="w-[68%]"
            />
          ) : (
            <div className="w-[68%] rounded-xl bg-gray-100 h-[300px]" />
          )}

          {/* Right big card (fixed-ish width) */}
          {topRight ? (
            <BannerCard
              src={topRight.src}
              alt={topRight.alt}
              className="w-[390px]"
            />
          ) : (
            <div className="w-[390px] rounded-xl bg-gray-100 h-[300px]" />
          )}
        </div>

        {/* Bottom row (3-up) */}
        <div className="flex gap-[16px] justify-center mx-auto">
          {bottomA ? (
            <BannerCard
              src={bottomA.src}
              alt={bottomA.alt}
              className="w-[380px]"
            />
          ) : (
            <div className="w-[380px] rounded-xl bg-gray-100 h-[200px]" />
          )}
          {bottomB ? (
            <BannerCard
              src={bottomB.src}
              alt={bottomB.alt}
              className="w-[380px]"
            />
          ) : (
            <div className="w-[380px] rounded-xl bg-gray-100 h-[200px]" />
          )}
          {bottomC ? (
            <BannerCard
              src={bottomC.src}
              alt={bottomC.alt}
              className="w-[380px]"
            />
          ) : (
            <div className="w-[380px] rounded-xl bg-gray-100 h-[200px]" />
          )}
        </div>
      </div>
    </section>
  );
}
