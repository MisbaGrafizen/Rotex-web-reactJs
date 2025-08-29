// import React, { useEffect, useRef, useState } from "react";
// import ecoad from "../../../public/images/home/mainProduct/eco-advance.jpg"
// import highSpeed from "../../../public/images/home/mainProduct/ecoHighspeed.jpg"
// import eco from "../../../public/images/home/mainProduct/phi.jpg"
// import ecowooden from "../../../public/images/home/mainProduct/ecowodden.jpg"
// import Triomodern from "../../../public/images/home/mainProduct/trioModerna.jpg"
// import Header from "../../component/Header";
// import { useNavigate } from "react-router-dom";

// const products = [
//     {
//         id: 1,
//         badge: "New",
//         off: "25% OFF",
//         title: "Epic Pro BLDC+ Ceiling Fan",
//         subtitle: "PREMIUM COLLECTION",
//         price: 8999,
//         mrp: 11999,
//         img: ecoad,
//         bullets: [
//             "Energy Efficient BLDC Motor",
//             "Remote Control Operation",
//             "5 Star Energy Rating",
//             "Premium Finish & Design",
//         ],
//     },
//     {
//         id: 2,
//         badge: "New",
//         off: "30% OFF",
//         title: "Stealth Neo BLDC+ Ceiling Fan",
//         subtitle: "PREMIUM COLLECTION",
//         price: 6999,
//         mrp: 9999,
//         img: highSpeed,
//         bullets: [
//             "Silent Operation Technology",
//             "Smart Speed Control",
//             "Aerodynamic Blade Design",
//             "Anti-Dust Coating",
//         ],
//     },
//     {
//         id: 3,
//         badge: "New",
//         off: "20% OFF",
//         title: "Albus Underlight Smart BLDC+ Fan",
//         subtitle: "SMART COLLECTION",
//         price: 12799,
//         mrp: 15999,
//         img: eco,
//         bullets: [
//             "Integrated LED Lighting",
//             "WiFi & App Control",
//             "Voice Assistant Compatible",
//             "Mood Lighting Options",
//         ],
//     },
//     {
//         id: 4,
//         badge: "New",
//         off: "35% OFF",
//         title: "Elio BLDC+ Ceiling Fan",
//         subtitle: "MODERN COLLECTION",
//         price: 5199,
//         mrp: 7999,
//         img: ecowooden,
//         bullets: [
//             "Contemporary Design",
//             "High Air Delivery",
//             "Rust Resistant Coating",
//             "Easy Installation",
//         ],
//     },
//     {
//         id: 5,
//         badge: "New",
//         off: "28% OFF",
//         title: "Crista BLDC+ Ceiling Fan",
//         subtitle: "LUXURY COLLECTION",
//         price: 9359,
//         mrp: 12999,
//         img: Triomodern,
//         bullets: [
//             "Crystal Inspired Design",
//             "Premium Motor Performance",
//             "Decorative Appeal",
//             "Long Lasting Durability",
//         ],
//     },
// ];

// export default function AllProduct() {
//     const px = (n) => n.toLocaleString("en-IN");

// const navigate = useNavigate()
 
// const onCardClick =()=>{
//     navigate("/productdetails")
// }
//     return (
//         <>

//             <Header />

//             <section className=" pt-[120px] font-Poppins min-h-screen bg-[#f0f0f0] mx-auto">
//                 <div className=" w-[90%] mx-auto flex flex-col gap-[50px] px-4">
//                     <div className=" w-[100%]">


//                         <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>


//                         <div className="relative">


//                             <div className="overflow-hidden">
//                                 <div

//                                     className=" grid md11:grid-cols-5 2xl:grid-cols-5 scroll-smooth gap-[14px] snap-x snap-mandatory pb-4"


//                                 >


//                                     {products.map((p) => (
//                                         <a
//                                             href="/productdetails"
//                                             key={p.id}
//                                               onClick={onCardClick}
//                                             className="flex-none w-[240px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
//                              overflow-hidden  transition-shadow duration-300 snap-start"
//                                         >
//                                             <div className="relative">
//                                                 <img
//                                                     src={p.img}
//                                                     alt={p.title}
//                                                     className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
//                                                     draggable={false}
//                                                 />
//                                                 <div className="absolute top-4 right-4">
//                                                     <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
//                                                         {p.off}
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
//                                                 <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
//                                                     {p.title}
//                                                 </h3>

//                                                 <ul className="text-sm text-gray-600 mb-2">
//                                                     {p.bullets.slice(0, 4).map((b, i) => (
//                                                         <li key={i} className="flex items-start">
//                                                             <span className="text-[#025da8] mr-2">—</span>
//                                                             <span className="line-clamp-1 text-[12px]">{b}</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>

//                                                 <div className="flex items-center absolute bottom-[13px] justify-between">
//                                                     <div className="flex items-center space-x-2">
//                                                         <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
//                                                         <span className="text-[13px] text-gray-400 line-through">₹{px(p.mrp)}</span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className=" w-[100%]">


//                         <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>


//                         <div className="relative">


//                             <div className="overflow-hidden">
//                                 <div

//                                     className=" grid md11:grid-cols-5 2xl:grid-cols-5 scroll-smooth gap-[14px] snap-x snap-mandatory pb-4"


//                                 >


//                                     {products.map((p) => (
//                                         <a
//                                             href="#"
//                                             key={p.id}
//                                             //   onClick={onCardClick}
//                                             className="flex-none w-[240px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
//                              overflow-hidden  transition-shadow duration-300 snap-start"
//                                         >
//                                             <div className="relative">
//                                                 <img
//                                                     src={p.img}
//                                                     alt={p.title}
//                                                     className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
//                                                     draggable={false}
//                                                 />
//                                                 <div className="absolute top-4 right-4">
//                                                     <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
//                                                         {p.off}
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
//                                                 <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
//                                                     {p.title}
//                                                 </h3>

//                                                 <ul className="text-sm text-gray-600 mb-2">
//                                                     {p.bullets.slice(0, 4).map((b, i) => (
//                                                         <li key={i} className="flex items-start">
//                                                             <span className="text-[#025da8] mr-2">—</span>
//                                                             <span className="line-clamp-1 text-[12px]">{b}</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>

//                                                 <div className="flex items-center absolute bottom-[13px] justify-between">
//                                                     <div className="flex items-center space-x-2">
//                                                         <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
//                                                         <span className="text-[13px] text-gray-400 line-through">₹{px(p.mrp)}</span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }


import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";
import { ApiGet } from "../../helper/axios";
import Footer from "../../component/Footer";

export default function AllProduct() {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState([]);
  const [categoryProductsMap, setCategoryProductsMap] = useState({});
  const [loading, setLoading] = useState(true);

  const px = (n) =>
    typeof n === "number" ? n.toLocaleString("en-IN") : n ?? "";

  // ---------- API helpers ----------
  async function fetchCategories() {
    // Try common shapes: {data:[...]}, {categories:[...]}, or raw array
    const res = await ApiGet("/categories");
    const data =
      res?.data?.data ||
      res?.data?.categories ||
      (Array.isArray(res?.data) ? res.data : []);
    return Array.isArray(data) ? data : [];
  }

  async function fetchProductsByCategoryId(categoryId) {
    // Try common shapes: {products:[...]}, or raw array
    const res = await ApiGet(`/product-by-category/${categoryId}`);
    const list =
      res?.data?.products ||
      (Array.isArray(res?.data) ? res.data : []);
    return Array.isArray(list) ? list : [];
  }

  // ---------- Effects ----------
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const cats = await fetchCategories();
        setCategoryList(cats);

        // sequential (keeps your earlier “loop & set map” logic)
        const map = {};
        for (const cat of cats) {
          const items = await fetchProductsByCategoryId(cat._id);
          map[cat._id] = items;
          // progressive fill
          setCategoryProductsMap((prev) => ({ ...prev, [cat._id]: items }));
        }
      } catch (e) {
        console.error("AllProduct load error:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // ---------- UI helpers ----------
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

  const getPrimaryImage = (p) => {
    const group =
      Array.isArray(p?.productImages) && p.productImages.length
        ? p.productImages[0]
        : null;
    return group?.images?.[0] || p.thumbnail || p.image || "";
  };

  const getPrices = (p) => {
    const group =
      Array.isArray(p?.productImages) && p.productImages.length
        ? p.productImages[0]
        : null;
    const price = group?.price ?? p.price ?? undefined;
    const mrp = group?.mrp ?? p.maxPrice ?? undefined;
    return { price, mrp };
  };

  const getDiscountPct = (price, mrp) => {
    if (!(Number(mrp) > 0 && Number(price) > 0 && Number(mrp) > Number(price)))
      return 0;
    return Math.round(((Number(mrp) - Number(price)) / Number(mrp)) * 100);
  };

  return (
    <>
      <Header />

      <section className="pt-[120px] font-Poppins min-h-screen bg-[#f0f0f0] mx-auto">
        <div className="md11:w-[90%] mx-auto flex flex-col gap-[50px] px-4">
          {loading && (
            <div className="py-16 text-center text-neutral-600">
              Loading products…
            </div>
          )}

          {!loading && (!categoryList?.length ? (
            <div className="py-16 text-center text-neutral-600">
              No categories to show.
            </div>
          ) : (
            categoryList.map((section) => {
              const products = categoryProductsMap[section._id] || [];

              return (
                <div key={section._id} className="w-[100%]">
                  {/* Category Title */}
                  <h2 className="text-3xl font-[600] text-gray-800 mb-5">
                    {section?.name || section?.title || "Category"}
                  </h2>

                  <div className="relative">
                    <div className=" overflow-x-auto md77:overflow-hidden">
                      <div className="  flex  md77:grid md77:grid-cols-3 md11:grid-cols-5 2xl:grid-cols-5 scroll-smooth gap-[14px] snap-x snap-mandatory pb-4">
                        {products.length === 0 ? (
                          <div className="col-span-full py-6 text-neutral-500">
                            No products found in this category.
                          </div>
                        ) : (
                          products.map((p) => {
                            const img = getPrimaryImage(p);
                            const { price, mrp } = getPrices(p);
                            const offPct = getDiscountPct(price, mrp);
                            const bullets = Array.isArray(p.description)
                              ? p.description.slice(0, 4)
                              : [];

                            return (
                              <a
                                key={p._id || p.slug}
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onCardClick(p);
                                }}
                                className="flex-none w-[240px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 snap-start"
                              >
                                <div className="relative">
                                  <img
                                    src={img}
                                    alt={p.title || "Product"}
                                    className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
                                    draggable={false}
                                  />
                                  {offPct > 0 && (
                                    <div className="absolute top-4 right-4">
                                      <span className="bg-[#025da8] text-white text-[10px] font-[500] px-2 py-1 rounded-full">
                                        {offPct}% OFF
                                      </span>
                                    </div>
                                  )}
                                     {/* <div className="absolute  top-4 right-2">
                                      <span className="bg-[#fd0800] border-[#f00] border-[1.3px]  text-white text-[10px] font-[500] px-4 py-1  rounded-[7px]">
                                   Sale
                                      </span>
                                    </div> */}
                                </div>

                                <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
                                  <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
                                    {p.title}
                                  </h3>

                                  <ul className="text-sm text-gray-600 mb-2">
                                    {bullets.map((b, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-[#025da8] mr-2">—</span>
                                        <span className="line-clamp-1 text-[12px]">
                                          {b}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="flex items-center absolute bottom-[13px] justify-between">
                                    <div className="flex items-center space-x-2">
                                      {price !== undefined && (
                                        <span className="text-[18px] font-[600] text-gray-800">
                                          ₹{px(Number(price))}
                                        </span>
                                      )}
                                      {mrp !== undefined && (
                                        <span className="text-[13px] text-gray-400 line-through">
                                          ₹{px(Number(mrp))}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
