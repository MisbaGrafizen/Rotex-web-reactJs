// import React, { useEffect, useRef, useState } from "react";
// import ecoad from "../../../public/images/home/mainProduct/eco-advance.jpg"
// import highSpeed from "../../../public/images/home/mainProduct/ecoHighspeed.jpg"
// import eco from "../../../public/images/home/mainProduct/phi.jpg"
// import ecowooden from "../../../public/images/home/mainProduct/ecowodden.jpg"
// import Triomodern from "../../../public/images/home/mainProduct/trioModerna.jpg" 
// import { useNavigate } from "react-router-dom";
// // amaze.jpg



// // demo data — replace with your Smart Fan products
// const products = [
//   {
//     id: 1,
//     badge: "New",
//     off: "25% OFF",
//     title: "Epic Pro BLDC+ Ceiling Fan",
//     subtitle: "PREMIUM COLLECTION",
//     price: 8999,
//     mrp: 11999,
//     img: ecoad,
//     bullets: [
//       "Energy Efficient BLDC Motor",
//       "Remote Control Operation",
//       "5 Star Energy Rating",
//       "Premium Finish & Design",
//     ],
//   },
//   {
//     id: 2,
//     badge: "New",
//     off: "30% OFF",
//     title: "Stealth Neo BLDC+ Ceiling Fan",
//     subtitle: "PREMIUM COLLECTION",
//     price: 6999,
//     mrp: 9999,
//     img: highSpeed,
//     bullets: [
//       "Silent Operation Technology",
//       "Smart Speed Control",
//       "Aerodynamic Blade Design",
//       "Anti-Dust Coating",
//     ],
//   },
//   {
//     id: 3,
//     badge: "New",
//     off: "20% OFF",
//     title: "Albus Underlight Smart BLDC+ Fan",
//     subtitle: "SMART COLLECTION",
//     price: 12799,
//     mrp: 15999,
//     img:eco,
//     bullets: [
//       "Integrated LED Lighting",
//       "WiFi & App Control",
//       "Voice Assistant Compatible",
//       "Mood Lighting Options",
//     ],
//   },
//   {
//     id: 4,
//     badge: "New",
//     off: "35% OFF",
//     title: "Elio BLDC+ Ceiling Fan",
//     subtitle: "MODERN COLLECTION",
//     price: 5199,
//     mrp: 7999,
//     img: ecowooden,
//     bullets: [
//       "Contemporary Design",
//       "High Air Delivery",
//       "Rust Resistant Coating",
//       "Easy Installation",
//     ],
//   },
//   {
//     id: 5,
//     badge: "New",
//     off: "28% OFF",
//     title: "Crista BLDC+ Ceiling Fan",
//     subtitle: "LUXURY COLLECTION",
//     price: 9359,
//     mrp: 12999,
//     img: Triomodern,
//     bullets: [
//       "Crystal Inspired Design",
//       "Premium Motor Performance",
//       "Decorative Appeal",
//       "Long Lasting Durability",
//     ],
//   },
// ];


// const tabs = [
//   "New In",
//   "Air Conditioner",
//   "Washing Machine",
//   "Refrigerator",
//   "LED Television",
// ];

// // export default function MainProduct() {
// //   const scrollerRef = useRef(null);
// //   const isDown = useRef(false);
// //   const startX = useRef(0);
// //   const scrollLeft = useRef(0);
// //   const [dragging, setDragging] = useState(false);

// //   const px = (n) => n.toLocaleString("en-IN");

// //   const scrollByAmount = (dir = 1) => {
// //     const el = scrollerRef.current;
// //     if (!el) return;
// //     const amount = Math.round(el.clientWidth * 0.85);
// //     el.scrollBy({ left: dir * amount, behavior: "smooth" });
// //   };

// //   const onMouseDown = (e) => {
// //     const el = scrollerRef.current;
// //     if (!el) return;
// //     isDown.current = true;
// //     setDragging(false);
// //     startX.current = e.pageX - el.offsetLeft;
// //     scrollLeft.current = el.scrollLeft;
// //   };

// //   const onMouseLeave = () => {
// //     isDown.current = false;
// //   };

// //   const onMouseUp = () => {
// //     isDown.current = false;
// //     setTimeout(() => setDragging(false), 0);
// //   };

// //   const onMouseMove = (e) => {
// //     const el = scrollerRef.current;
// //     if (!el || !isDown.current) return;
// //     e.preventDefault();
// //     setDragging(true);
// //     const x = e.pageX - el.offsetLeft;
// //     const walk = (x - startX.current) * 1.2; // drag speed
// //     el.scrollLeft = scrollLeft.current - walk;
// //   };

// //   // prevent click while dragging
// //   const onCardClick = (e) => {
// //     if (dragging) e.preventDefault();
// //   };

// //   return (
// //     <section className="  w-[90%] mx-auto">
// //       <div className="mx-auto px-4">
// //         <h2 className="text-3xl  font-[600] text-gray-800 mb-5">
// //           Smart Fan Highlights
// //         </h2>

// //         <div className="relative">
// //           <div className="overflow-hidden">
// //             <div
// //               ref={scrollerRef}
// //               className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-7
// //                          [scrollbar-width:none] [-ms-overflow-style:none]"
// //               onMouseDown={onMouseDown}
// //               onMouseLeave={onMouseLeave}
// //               onMouseUp={onMouseUp}
// //               onMouseMove={onMouseMove}
// //               onDragStart={(e) => e.preventDefault()}
// //             >
// //               {/* hide scrollbar (webkit) */}
// //               <style>{`
// //                 div::-webkit-scrollbar { display: none; }
// //               `}</style>

// //               {products.map((p) => (
// //                 <a
// //                   href="#"
// //                   key={p.id}
// //                   onClick={onCardClick}
// //                   className="flex-none w-[260px] relative  h-[400px] bg-white rounded-xl shadow-lg border border-gray-100
// //                              overflow-hidden hover:shadow-xl transition-shadow duration-300 snap-start"
// //                 >
// //                   <div className="relative">
// //                     <img
// //                       src={p.img}
// //                       alt={p.title}
// //                       className="w-full h-[200px] p-[10px] object-cover select-none pointer-events-none"
// //                       draggable={false}
// //                     />
// //                     <div className="absolute top-4 left-4">
// //                       {/* <span className="bg-green-500 text-white text-[12px] font-[500] px-3 py-1 rounded-full">
// //                         {p.badge}
// //                       </span> */}
// //                     </div>
// //                     <div className="absolute top-4 right-4">
// //                       <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
// //                         {p.off}
// //                       </span>
// //                     </div>
// //                   </div>

// //                   <div className="px-5  bg-[#fafafa] h-full pt-[18px]">
// //                     {/* <div className="text-center mb-3">
// //                       <div className="text-xs text-gray-500 font-medium mb-1">
// //                         {p.subtitle}
// //                       </div>
// //                       <div className="w-16 h-4 bg-red-600 mx-auto rounded-sm flex items-center justify-center">
// //                         <span className="text-white text-[10px] font-bold">★★★</span>
// //                       </div>
// //                     </div> */}

// //                     <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
// //                       {p.title}
// //                     </h3>

// //                     <ul className="text-sm text-gray-600  mb-2">
// //                       {p.bullets.slice(0, 4).map((b, i) => (
// //                         <li key={i} className="flex items-start">
// //                           <span className="text-[#025da8] mr-2">—</span>
// //                           <span className="line-clamp-1   leading-[px] text-[12px]">{b}</span>
// //                         </li>
// //                       ))}
// //                     </ul>

// //                     <div className="flex items-center absolute bottom-[13px] justify-between">
// //                       <div className="flex items-center space-x-2">
// //                         <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
// //                         <span className="text-[13px] text-gray-400  line-through">₹{px(p.mrp)}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* <button
// //             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3
// //                        shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 z-10"
// //             onClick={() => scrollByAmount(-1)}
// //             aria-label="Prev"
// //           >
// //             <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //             </svg>
// //           </button>

// //           <button
// //             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3
// //                        shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 z-10"
// //             onClick={() => scrollByAmount(1)}
// //             aria-label="Next"
// //           >
// //             <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //             </svg>
// //           </button> */}
// //         </div>

// //         <div className="text-center mt-8">
// //           <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
// //             View All Smart Fans
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// export default function MainProduct() {
//   const scrollerRef = useRef(null);
//   const isDown = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);
//   const [dragging, setDragging] = useState(false);
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [atStart, setAtStart] = useState(true);
//   const [atEnd, setAtEnd] = useState(false);
// const navigate =useNavigate()

//   const px = (n) => n.toLocaleString("en-IN");

//   const updateEdges = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const { scrollLeft: sl, clientWidth, scrollWidth } = el;
//     setAtStart(sl <= 1);
//     setAtEnd(sl + clientWidth >= scrollWidth - 1);
//   };

//   useEffect(() => {
//     updateEdges(); // sets: left hidden, right visible (unless no overflow)
//     const el = scrollerRef.current;
//     if (!el) return;
//     el.addEventListener("scroll", updateEdges, { passive: true });
//     window.addEventListener("resize", updateEdges);
//     return () => {
//       el.removeEventListener("scroll", updateEdges);
//       window.removeEventListener("resize", updateEdges);
//     };
//   }, []);

//   const onMouseDown = (e) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     isDown.current = true;
//     setDragging(false);
//     startX.current = e.pageX - el.offsetLeft;
//     scrollLeft.current = el.scrollLeft;
//   };
//   const onMouseLeave = () => { isDown.current = false; };
//   const onMouseUp = () => { isDown.current = false; setTimeout(() => setDragging(false), 0); };
//   const onMouseMove = (e) => {
//     const el = scrollerRef.current;
//     if (!el || !isDown.current) return;
//     e.preventDefault();
//     setDragging(true);
//     const x = e.pageX - el.offsetLeft;
//     const walk = (x - startX.current) * 1.2;
//     el.scrollLeft = scrollLeft.current - walk;
//   };
//   const onCardClick = (e) => { if (dragging) e.preventDefault(); };


//   const handlenavigate =()=>{
//     navigate("/all-products")
//   }
//   return (
//     <section className="w-[90%] mx-auto">
//       <div className="mx-auto px-4">
//         <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>

//         <div className="mb-4 -mx-1">
//           <div className="flex gap-1 overflow-x-auto no-scrollbar px-1">
//             {tabs.map((t) => {
//               const active = t === activeTab;
//               return (
//                 <button
//                   key={t}
//                   onClick={() => setActiveTab(t)}
//                   className={[
//                     "shrink-0 rounded-[999px] mb-[2px] px-[10px] py-1 text-[12px] font-[500]  transition-all",
//                     "",
//                     active
//                       ? "bg-[#a0a0a057]  text-[#111] font-[500] ring-1 ring-black/5"
//                       : " text-[#727070]"
//                   ].join(" ")}
//                 >
//                   {t}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//         <div className="relative">
//           {/* edge fades */}
//           {!atStart && (
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-10 z-10
//                          bg-gradient-to-r from-[#f0f0f0] to-transparent"
//             />
//           )}
//           {!atEnd && (
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-10 z-10
//                          bg-gradient-to-l from-[#f0f0f0] to-transparent"
//             />
//           )}

//           <div className="overflow-hidden">
//             <div
//               ref={scrollerRef}
//               className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-7
//                          [scrollbar-width:none] [-ms-overflow-style:none]"
//               onMouseDown={onMouseDown}
//               onMouseLeave={onMouseLeave}
//               onMouseUp={onMouseUp}
//               onMouseMove={onMouseMove}
//               onDragStart={(e) => e.preventDefault()}
//             >
//               <style>{`div::-webkit-scrollbar{display:none}`}</style>

//               {products.map((p) => (
//                 <a
//                   href="#"
//                   key={p.id}
//                   onClick={onCardClick}
//                   className="flex-none w-[250px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
//                              overflow-hidden  transition-shadow duration-300 snap-start"
//                 >
//                   <div className="relative">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
//                       draggable={false}
//                     />
//                     <div className="absolute top-4 right-4">
//                       <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
//                         {p.off}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
//                     <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
//                       {p.title}
//                     </h3>

//                     <ul className="text-sm text-gray-600 mb-2">
//                       {p.bullets.slice(0, 4).map((b, i) => (
//                         <li key={i} className="flex items-start">
//                           <span className="text-[#025da8] mr-2">—</span>
//                           <span className="line-clamp-1 text-[12px]">{b}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="flex items-center absolute bottom-[13px] justify-between">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
//                         <span className="text-[13px] text-gray-400 line-through">₹{px(p.mrp)}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <button className="bg-[#025da8] hover:bg-[#025da8] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300" onClick={handlenavigate}>
//             View All Smart Fans
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiGet } from "../../helper/axios";

import ecoad from "../../../public/images/home/mainProduct/eco-advance.jpg";
import highSpeed from "../../../public/images/home/mainProduct/ecoHighspeed.jpg";
import eco from "../../../public/images/home/mainProduct/phi.jpg";
import ecowooden from "../../../public/images/home/mainProduct/ecowodden.jpg";
import Triomodern from "../../../public/images/home/mainProduct/trioModerna.jpg";

const fallbackProducts = [
  {
    id: 1,
    badge: "New",
    off: "25% OFF",
    title: "Epic Pro BLDC+ Ceiling Fan",
    subtitle: "PREMIUM COLLECTION",
    price: 8999,
    mrp: 11999,
    img: ecoad,
    bullets: [
      "Energy Efficient BLDC Motor",
      "Remote Control Operation",
      "5 Star Energy Rating",
      "Premium Finish & Design",
    ],
  },
  {
    id: 2,
    badge: "New",
    off: "30% OFF",
    title: "Stealth Neo BLDC+ Ceiling Fan",
    subtitle: "PREMIUM COLLECTION",
    price: 6999,
    mrp: 9999,
    img: highSpeed,
    bullets: [
      "Silent Operation Technology",
      "Smart Speed Control",
      "Aerodynamic Blade Design",
      "Anti-Dust Coating",
    ],
  },
  {
    id: 3,
    badge: "New",
    off: "20% OFF",
    title: "Albus Underlight Smart BLDC+ Fan",
    subtitle: "SMART COLLECTION",
    price: 12799,
    mrp: 15999,
    img: eco,
    bullets: [
      "Integrated LED Lighting",
      "WiFi & App Control",
      "Voice Assistant Compatible",
      "Mood Lighting Options",
    ],
  },
  {
    id: 4,
    badge: "New",
    off: "35% OFF",
    title: "Elio BLDC+ Ceiling Fan",
    subtitle: "MODERN COLLECTION",
    price: 5199,
    mrp: 7999,
    img: ecowooden,
    bullets: [
      "Contemporary Design",
      "High Air Delivery",
      "Rust Resistant Coating",
      "Easy Installation",
    ],
  },
  {
    id: 5,
    badge: "New",
    off: "28% OFF",
    title: "Crista BLDC+ Ceiling Fan",
    subtitle: "LUXURY COLLECTION",
    price: 9359,
    mrp: 12999,
    img: Triomodern,
    bullets: [
      "Crystal Inspired Design",
      "Premium Motor Performance",
      "Decorative Appeal",
      "Long Lasting Durability",
    ],
  },
];

const tabs = [
  "All",
  "Designer Fans",
  "Wooden Fans",
  "Industrial Fans",
  "Afforadable Fans",
  "Fans for Small Space",
];

export default function MainProduct() {
  const scrollerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const px = (n) => Number(n ?? 0).toLocaleString("en-IN");

  // Normalize API product -> UI product shape (keeps your design intact)
  // maps your product response -> UI card shape
  const normalizeProduct = (p) => {
    // pick the cheapest variant (by price) for card image/price/off
    const variants = Array.isArray(p?.productImages) ? p.productImages : [];
    const cheapest =
      variants.length
        ? [...variants].sort((a, b) => (a.price ?? 0) - (b.price ?? 0))[0]
        : null;

    const price = cheapest?.price ?? p?.price ?? 0;
    const mrp = cheapest?.mrp ?? p?.maxPrice ?? price;

    let off = "";
    if (mrp && price && mrp > price) {
      const pct = Math.round(((mrp - price) / mrp) * 100);
      off = `${pct}% OFF`;
    }

    // first image of the chosen variant
    const img =
      cheapest?.images?.[0] ||
      p?.productImages?.[0]?.images?.[0] ||
      "";

    return {
      id: p?._id?.$oid || p?._id || Math.random().toString(36).slice(2),
      badge: "New",
      off,
      title: p?.title || "Product",
      subtitle: p?.subTitle || "",
      price,
      mrp,
      img,
      bullets: Array.isArray(p?.description) && p.description.length
        ? p.description.slice(0, 4)
        : ["Premium quality", "High performance", "Energy efficient", "Durable"],
      // optionally pass more for details page usage:
      // slug: p?.slug,
    };
  };


  useEffect(() => {
    (async () => {
      try {
        // 🔁 Replace with your actual endpoint & params if needed
        const res = await ApiGet("/products");
        console.log('res-product', res)
        const arr = Array.isArray(res?.data?.products) ? res.data?.products : res?.data?.products || [];
        setProducts(arr.map(normalizeProduct));
      } catch (e) {
        console.error("Fetch products failed:", e);
      }
    })();
  }, []);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft: sl, clientWidth, scrollWidth } = el;
    setAtStart(sl <= 1);
    setAtEnd(sl + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const onMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    setDragging(false);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };
  const onMouseLeave = () => { isDown.current = false; };
  const onMouseUp = () => { isDown.current = false; setTimeout(() => setDragging(false), 0); };
  const onMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;
    e.preventDefault();
    setDragging(true);
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    el.scrollLeft = scrollLeft.current - walk;
  };
  const onCardClick = (product) => {
    if (!product) return;
    console.log('product', product)

    const dest = product?.title
      ? `/product-details/${product.title}`
      : product?._id
        ? `/product-details/${product._id}`
        : null;

    if (dest) {
      navigate(dest, {
        state: {
          id: product._id,
          title: product.title
        }
      });
    }
  };

  const handlenavigate = () => {
    navigate("/all-products");
  };

  console.log('products', products)

  return (
    <section className="w-[90%] mx-auto">
      <div className="mx-auto md11:px-4">
        <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>

        <div className="mb-4 -mx-1">
          <div className="flex gap-1 no-scrollbar px-1">
            {tabs.map((t) => {
              const active = t === activeTab;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={[
                    "shrink-0 rounded-[999px] mb-[2px] px-[10px] min- py-1 text-[12px] font-[500]  transition-all",
                    "",
                    active
                      ? "bg-[#a0a0a057]  text-[#111] font-[500] ring-1 ring-black/5"
                      : " text-[#727070]"
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          {!atStart && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-3  sm:w-10 z-10
                         bg-gradient-to-r from-[#f0f0f0] to-transparent"
            />
          )}
          {!atEnd && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-3 sm:w-10 z-10
                         bg-gradient-to-l from-[#f0f0f0] to-transparent"
            />
          )}

          <div className="overflow-hidden">
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-7
                         [scrollbar-width:none] [-ms-overflow-style:none]"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onDragStart={(e) => e.preventDefault()}
            >
              <style>{`div::-webkit-scrollbar{display:none}`}</style>

              {products.map((p) => (
                <a
                  href="#"
                  key={p.id}
                  onClick={(e) => {
                    e.preventDefault();
                    onCardClick(p);
                  }}
                  className="flex-none w-[250px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
                             overflow-hidden  transition-shadow duration-300 snap-start"
                >
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute top-4 right-4">
                      {p.off ? (
                        <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
                          {p.off}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
                    <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
                      {p.title}
                    </h3>

                    <ul className="text-sm text-gray-600 mb-2">
                      {(p.bullets || []).slice(0, 4).map((b, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#025da8] mr-2">—</span>
                          <span className="line-clamp-1 text-[12px]">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center absolute bottom-[13px] justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-[18px] font-[600] text-gray-800">
                          ₹{px(p.price)}
                        </span>
                        {p.mrp ? (
                          <span className="text-[13px] text-gray-400 line-through">
                            ₹{px(p.mrp)}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-[#025da8] hover:bg-[#025da8] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            onClick={handlenavigate}
          >
            View All Smart Fans
          </button>
        </div>
      </div>
    </section>
  );
}
