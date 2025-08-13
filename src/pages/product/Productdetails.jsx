// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import Header from "../../component/Header"
// import main from "../../../public/images/productDetails/main.jpg"
// import amaze1 from "../../../public/images/productDetails/amaze1.jpg"
// import amaze2 from "../../../public/images/productDetails/amaze2.jpg"
// import amaze3 from "../../../public/images/productDetails/amaze3.jpg"
// import amaze4 from "../../../public/images/productDetails/amaze4.jpg"
// import amaze5 from "../../../public/images/productDetails/amaze5.jpg"
import ProductSpecifications from "../../component/ProductDetails/Productspecifications"
import TechnicalDetails from "../../component/ProductDetails/Technicaldetails"







// export default function Productdetails() {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [selectedColor, setSelectedColor] = useState("blaze-brown")
//   const [selectedSize, setSelectedSize] = useState("1200mm")
//   const [quantity, setQuantity] = useState(1)
//   const [showImagePopup, setShowImagePopup] = useState(false)
//   const [popupImageIndex, setPopupImageIndex] = useState(0)


// const productImages = [
//     main, amaze1, amaze2, amaze3, amaze4, amaze5
//   ]


//   const colorVariants = [
//     { id: "blaze-brown", name: "Blaze Brown", color: "#4A3728", image: "/placeholder.svg?height=400&width=400" },
//     { id: "pearl-white", name: "Pearl White", color: "#F8F8FF", image: "/placeholder.svg?height=400&width=400" },
//     {
//       id: "metallic-silver",
//       name: "Metallic Silver",
//       color: "#C0C0C0",
//       image: "/placeholder.svg?height=400&width=400",
//     },
//     { id: "matte-black", name: "Matte Black", color: "#2C2C2C", image: "/placeholder.svg?height=400&width=400" },
//     { id: "champagne-gold", name: "Champagne Gold", color: "#D4AF37", image: "/placeholder.svg?height=400&width=400" },
//   ]

//   const sizeOptions = [
//     { id: "600mm", label: "600mm", price: 3299 },
//     { id: "900mm", label: "900mm", price: 3699 },
//     { id: "1200mm", label: "1200mm", price: 3999 },
//     { id: "1400mm", label: "1400mm", price: 4299 },
//   ]

//   const currentPrice = sizeOptions.find((size) => size.id === selectedSize)?.price || 3999
//   const originalPrice = Math.round(currentPrice * 1.61) // 38% discount
//   const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100)

//   const openImagePopup = (index) => {
//     setPopupImageIndex(index)
//     setShowImagePopup(true)
//   }

//   const nextImage = () => {
//     setPopupImageIndex((prev) => (prev + 1) % productImages.length)
//   }

//   const prevImage = () => {
//     setPopupImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
//   }

//   return (
//     <>
// <Header />
//     <div className="min-h-screen font-Poppins pt-[110px] ">
   



//       {/* Main Content */}
//       <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="relative bg-white rounded-2xl border shadow-lg overflow-hidden group">
//               <div className=" min-h-[400px] border h-[500px]">
//                 <img
//                   src={productImages[selectedImage] || "/placeholder.svg"}
//                   alt="Product main view"
//                   className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105"
            
//                 />
//               </div>
//               <div className="absolute top-4 right-4">
//                 {/* <button
         
//                   className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
//                 >
//                   <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
//                     />
//                   </svg>
//                 </button> */}
//               </div>
//             </div>

//             {/* Thumbnail Images */}
//             <div className="grid grid-cols-6 gap-2">
//               {productImages.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
//                     selectedImage === index
//                      ? "border-[#025da8bc] ring-2 ring-[#025da87a]"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <img
//                     src={image || "/placeholder.svg"}
//                     alt={`Product view ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-2">
//             {/* Product Title & Price */}
//             <div>
//               <div className="flex items-center space-x-2 ] ">
//                 <span className="bg-green-100 text-green-800  border border-[#0aae02] text-xs font-medium px-2.5 py-0.5 rounded-full">
//                   New Launch
//                 </span>
//                 <span className="bg-blue-100 text-blue-800 border  text-xs font-medium px-2.5 py-0.5 rounded-full">
//                   BLDC Motor
//                 </span>
//               </div>
//               <h1 className="text-3xl mt-[20px] font-[600] text-gray-900 mb-1">Renesa Halo Ceiling Fan</h1>
//               <p className="text-gray-600 text-[14px] mb-3">
//                 Atomberg Renesa Halo 1200 mm BLDC Ceiling Fan with Remote Control & LED Indicators
//               </p>

//               {/* Pricing */}
//               <div className="flex items-center space-x-4 mb-2">
//                 <span className="text-3xl font-[600] text-gray-900">₹{currentPrice.toLocaleString()}/-</span>
//                 <span className="text-xl font-[600] text-gray-500 line-through">₹{originalPrice.toLocaleString()}/-</span>
//                 <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//                   {discountPercent}% off
//                 </span>
//               </div>

//               {/* Rating & Reviews */}
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="ml-2 text-sm text-gray-600">4.8 (2,847 reviews)</span>
//                 </div>
//               </div>
//             </div>

//             {/* Color Selection */}
//             <div>
//               <h3 className="text-[18px] font-semibold text-gray-900 mb-">
//                 Color : <b className=" font-[500] text-[17px] ml-[8px]">{colorVariants.find((c) => c.id === selectedColor)?.name}</b> 
//               </h3>
//               <div className="flex space-x-2">
//                 {colorVariants.map((color) => (
//                   <button
//                     key={color.id}
//                     onClick={() => setSelectedColor(color.id)}
//                     className={`relative w-10 h-10 rounded-full border-2  transition-all ${
//                       selectedColor === color.id
//                         ? "border-[#025da8bc] ring-2 ring-[#025da87a]"
//                         : "border-gray-100 hover:border-gray-400"
//                     }`}
//                     style={{ backgroundColor: color.color }}
//                   >
//                     {selectedColor === color.id && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>

      

//             {/* Key Features */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900  mt-[20px] mb-4">Key Features</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                 <div className="flex items-center space-x-2">
                
//                 <i className="fa-solid text-[20px] text-[#025da8] fa-circle-check"></i>

//                   <span className=" text-[15px] font-[500] text-gray-700">Remote Control</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                  <i className="fa-solid text-[20px] text-[#025da8] fa-circle-check"></i>
//                   <span className=" text-[15px] font-[500] text-gray-700">Energy Efficient BLDC</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//            <i className="fa-solid text-[20px] text-[#025da8] fa-circle-check"></i>
//                   <span className=" text-[15px] font-[500] text-gray-700">LED Indicators</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//              <i className="fa-solid text-[20px] text-[#025da8] fa-circle-check"></i>
//                   <span className=" text-[15px] font-[500] text-gray-700">2 Year Warranty</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quantity & Add to Cart */}
//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <label className="text-lg font-semibold text-gray-900">Quantity:</label>
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-3 py-2 text-gray-600 hover:text-gray-800"
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-2 w-[40px] border-x border-gray-300">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-3 py-2 text-gray-600 hover:text-gray-800"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <button className="flex-1 bg-[#025da8] text-white py-2 px-8 rounded-lg font-semibold text-lg transition-colors">
//                   Add to Cart
//                 </button>
//                 <button className="px-2 py-2 border-2 border-[#025da8] text-[#025da8] rounded-lg hover:bg-red-50 transition-colors">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Trust Indicators */}
//             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">Free Shipping</p>
//                 <p className="text-xs text-gray-500">On orders above ₹999</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">Easy Returns</p>
//                 <p className="text-xs text-gray-500">30-day return policy</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">2+1 Warranty</p>
//                 <p className="text-xs text-gray-500">Extended protection</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Popup Modal */}
//       {showImagePopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-4xl max-h-full">
//             <button
//               onClick={() => setShowImagePopup(false)}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             <img
//               src={productImages[popupImageIndex] || "/placeholder.svg"}
//               alt="Product enlarged view"
//               className="max-w-full max-h-full object-contain"
//             />

//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
//               {popupImageIndex + 1} / {productImages.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>


//         </>
//   )
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../component/Header";
import { ApiGet } from "../../helper/axios";

export default function Productdetails() {
  // -------- router inputs (either via route param or navigation state) -------
  const { id: idOrSlugParam } = useParams(); // supports /product-details/:idOrSlug
  const location = useLocation();
  const idFromState = location?.state?.id ?? null;
  const nameFromState = location?.state?.name ?? "";

  const idOrSlug = idFromState || idOrSlugParam;

  // ----------------------------- local state ---------------------------------
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColorKey, setSelectedColorKey] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);

  // ----------------------------- fetch product --------------------------------
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);

        // Try common endpoints; keep first that returns an object with _id or title
        async function tryGet(url) {
          try {
            const res = await ApiGet(url);
            const data = res?.data?.data || res?.data?.product || res?.data;
            if (data && (data._id || data.title)) return data;
          } catch {}
          return null;
        }

        if (!idOrSlug) {
          setProduct(null);
          return;
        }

        const candidates = [
          `/products/${idOrSlug}`,
          `/product/${idOrSlug}`,
          `/product-details/${idOrSlug}`,
        ];

        let found = null;
        for (const path of candidates) {
          found = await tryGet(path);
          if (found) break;
        }

        if (mounted) {
          setProduct(found);
          // preselect first color variant if present
          const firstVariantKey =
            found?.productImages?.[0]?.color ?? null;
          setSelectedColorKey(firstVariantKey);
          setSelectedImage(0);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [idOrSlug]);

  // ----------------------------- helpers -------------------------------------
  const px = (n) =>
    typeof n === "number" ? n.toLocaleString("en-IN") : n ?? "";

  const variants = useMemo(() => {
    // Normalize variants from product.productImages
    const list = Array.isArray(product?.productImages)
      ? product.productImages
      : [];
    // Create safe keys for colors (hex or name); also carry price/mrp per variant
    return list.map((v, idx) => ({
      key: v.color ?? `variant_${idx}`,
      label: v.color ?? `Variant ${idx + 1}`,
      images: Array.isArray(v.images) ? v.images : [],
      price: v.price,
      mrp: v.mrp,
    }));
  }, [product]);

  const activeVariant = useMemo(() => {
    if (!variants.length) return null;
    const byKey = variants.find((v) => v.key === selectedColorKey);
    return byKey || variants[0];
  }, [variants, selectedColorKey]);

  // Fallback images if variant has none
  const productImagesFlat = useMemo(() => {
    // flatten all variant images if needed
    const imgs =
      variants.flatMap((v) => (Array.isArray(v.images) ? v.images : [])) || [];
    return imgs;
  }, [variants]);

  // The gallery shows ONLY the selected color’s images;
  // if none, fall back to all images, else an empty array.
  const galleryImages = useMemo(() => {
    if (activeVariant?.images?.length) return activeVariant.images;
    if (productImagesFlat.length) return productImagesFlat;
    return [];
  }, [activeVariant, productImagesFlat]);

  // Price: prefer active variant’s price/mrp, then product-level price/maxPrice
  const { price, mrp } = useMemo(() => {
    const p =
      activeVariant?.price ?? product?.price ?? undefined;
    const m =
      activeVariant?.mrp ?? product?.maxPrice ?? undefined;
    return { price: p, mrp: m };
  }, [activeVariant, product]);

  const discountPercent = useMemo(() => {
    if (!(Number(mrp) > 0 && Number(price) > 0 && Number(mrp) > Number(price)))
      return 0;
    return Math.round(((Number(mrp) - Number(price)) / Number(mrp)) * 100);
  }, [price, mrp]);

  // ----------------------------- image popup ---------------------------------
  const openImagePopup = (index) => {
    setPopupImageIndex(index);
    setShowImagePopup(true);
  };
  const nextImage = () =>
    setPopupImageIndex((i) => (i + 1) % Math.max(galleryImages.length, 1));
  const prevImage = () =>
    setPopupImageIndex((i) => (i - 1 + Math.max(galleryImages.length, 1)) % Math.max(galleryImages.length, 1));

  // ----------------------------- UI ------------------------------------------
  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen font-Poppins pt-[110px] grid place-items-center">
          <div className="text-neutral-600">Loading product…</div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen font-Poppins pt-[110px] grid place-items-center">
          <div className="text-neutral-600">Product not found.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen font-Poppins pt-[110px]">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ---------------------- Image Gallery ---------------------- */}
            <div className="space-y-4">
              <div className="relative bg-white rounded-2xl border shadow-lg overflow-hidden group">
                <div className="min-h-[400px] h-[500px]">
                  <img
                    src={galleryImages[selectedImage] || "/placeholder.svg"}
                    alt={product?.title || "Product"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openImagePopup(selectedImage)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-[#025da8bc] ring-2 ring-[#025da87a]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    title={`Image ${index + 1}`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* ---------------------- Product Details ---------------------- */}
            <div className="space-y-2">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 border border-[#0aae02] text-xs font-medium px-2.5 py-0.5 rounded-full">
                    New Launch
                  </span>
                  {product?.specifications?.length ? (
                    <span className="bg-blue-100 text-blue-800 border text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {product.specifications?.[0]?.power || "BLDC"}
                    </span>
                  ) : null}
                </div>

                <h1 className="text-3xl mt-[20px] font-[600] text-gray-900 mb-1">
                  {product?.title || nameFromState || "Product"}
                </h1>

                {!!product?.subTitle && (
                  <p className="text-gray-600 text-[14px] mb-3">
                    {product.subTitle}
                  </p>
                )}

                <div className="flex items-center space-x-4 mb-2">
                  {price !== undefined && (
                    <span className="text-3xl font-[600] text-gray-900">
                      ₹{px(Number(price))}/-
                    </span>
                  )}
                  {mrp !== undefined && (
                    <span className="text-xl font-[600] text-gray-500 line-through">
                      ₹{px(Number(mrp))}/-
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {discountPercent}% off
                    </span>
                  )}
                </div>

                {/* simple static rating look */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">4.8 (2,847 reviews)</span>
                  </div>
                </div>
              </div>
              {/* ---------------------- Color Selection ---------------------- */}
              {!!variants.length && (
                <div>
                  <h3 className="text-[18px] font-semibold text-gray-900">
                    Color:
                    <b className="font-[500] text-[17px] ml-[8px]">
                      {
                        (variants.find((v) => v.key === selectedColorKey)?.label) ||
                        variants[0].label
                      }
                    </b>
                  </h3>
                  <div className="flex space-x-2 mt-2">
                    {variants.map((v) => (
                      <button
                        key={v.key}
                        onClick={() => {
                          setSelectedColorKey(v.key);   // choose color
                          setSelectedImage(0);          // start from first image of this color
                        }}
                        className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColorKey === v.key
                            ? "border-[#025da8bc] ring-2 ring-[#025da87a]"
                            : "border-gray-100 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: v.key }}
                        title={v.label}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ---------------------- Key Features ---------------------- */}
              {!!product?.description?.length && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-[20px] mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.description.slice(0, 4).map((line, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <i className="fa-solid text-[20px] text-[#025da8] fa-circle-check" />
                        <span className="text-[15px] font-[500] text-gray-700">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ---------------------- Quantity & CTA ---------------------- */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-lg font-semibold text-gray-900">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}

                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 w-[40px] border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-[#025da8] text-white py-2 px-8 rounded-lg font-semibold text-lg transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-2 py-2 border-2 border-[#025da8] text-[#025da8] rounded-lg hover:bg-red-50 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* ---------------------- Trust Indicators ---------------------- */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders above ₹999</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">2+1 Warranty</p>
                  <p className="text-xs text-gray-500">Extended protection</p>
                </div>
              </div>
            </div>
          </div>


          <ProductSpecifications />
          <TechnicalDetails />
        </div>

        {/* ---------------------- Image Popup Modal ---------------------- */}
        {showImagePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setShowImagePopup(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <img
                src={productImages[popupImageIndex] || "/placeholder.svg"}
                alt="Product enlarged view"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {popupImageIndex + 1} / {productImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
