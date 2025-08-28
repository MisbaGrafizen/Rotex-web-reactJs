// import React from 'react'
// import productmain from "../../../public/images/home/pickyourCategory/image1.jpeg"
// import productmain1 from "../../../public/images/home/pickyourCategory/image2.jpeg"
// import productmain2 from "../../../public/images/home/pickyourCategory/image3.jpeg"
// import productmain3 from "../../../public/images/home/pickyourCategory/image4.jpeg"



// export default function FetureProduct() {
//     return (
//         <>
//             <section className=" w-[90%] mx-auto px-4 ">
//                 <h2 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-6">
//                     Pick Your Perfect Match
//                 </h2>

//                 <div className=" flex w-[100%] gap-[16px] justify-between h-[100%] ">
//                     {/* Epic Pro BLDC+ Ceiling Fan - Large Card */}
//                     <div className="  md11:w-[57%] 2xl:w-[53%]  shadow-xl min-w-[690px] md11:min-h-[500px]  h-[550px]  relative rounded-2xl overflow-hidden group cursor-pointer">
//                         <img
//                             src={productmain}
//                             alt="Epic Pro BLDC+ Ceiling Fan"
//                             className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
//                         />
//                         {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
//                         <div className="absolute bottom-[-1px] z-10  pt-[20px] min-w-[400px] w-[100%] rounded-t-[10px]  text-white">
//                             <h3 className="text-2xl font-[600] px-[20px] md:text-2xl text-[17px] mb-3">Epic Pro BLDC+ Ceiling Fan</h3>
//    <button className="bg-[#ffffff] text-[15px]  text-[#025da8] px-5 py-2 rounded-tr-[10px] font-[500] transition-colors duration-300">
//                                 Shop Now
//                             </button>
//                         </div>
//                         <div className="absolute inset-x-0 bottom-0 h-[310px] bg-gradient-to-t from-black/90 to-transparent" />
//                     </div>

//                     <div className='  grid grid-cols-2 w-[43%] gap-[17px]'>


//                         <div className="relative rounded-2xl shadow-xl overflow-hidden group cursor-pointer h-auto">
//                             <img
//                                 src={productmain1}
//                                 alt="Elio BLDC+ Ceiling Fan"
//                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                             />

//                             <div className="absolute bottom-[-1px] pt-[8px]   z-10 rounded-tr-[20px] w-[90%]  text-white">
//                                 <h3 className="text-[15px] font-[600]  px-[18px] mb-3">Elio BLDC+ Ceiling Fan</h3>
//                                  <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
//                                     Shop Now
//                                 </button>
//                             </div>
//                             <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
//                         </div>

//                         {/* Crista BLDC+ Ceiling Fan */}
//                         <div className="relative rounded-2xl shadow-xl overflow-hidden group cursor-pointer h-auto">
//                             <img
//                                 src={productmain2}
//                                 alt="Crista BLDC+ Ceiling Fan"
//                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                             />

//                                                       <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
//                                 <h3 className="text-[15px] font-[600] mb-3 px-[15px]">Crista BLDC+ Ceiling Fan</h3>
//                                    <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
//                                     Shop Now
//                                 </button>
//                             </div>
//                               <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
//                         </div>

//                         {/* Stealth Neo BLDC+ Ceiling Fan */}
//                         <div className="relative rounded-2xl overflow-hidden  shadow-xl group cursor-pointer  h-auto ">
//                             <img
//                                 src={productmain3}
//                                 alt="Stealth Neo BLDC+ Ceiling Fan"
//                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                             />

//                             <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
//                                 <h3 className="text-[15px] font-[600]  leading-[20px]  px-[15px]  mb-3">Stealth Neo BLDC+ Ceiling Fan</h3>
//                               <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
//                                     Shop Now
//                                 </button>
//                             </div>
//                               <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
//                         </div>

//                         {/* Albus Underlight Smart BLDC+ Ceiling Fan */}
//                         <div className="relative rounded-2xl overflow-hidden shadow-xl  group cursor-pointer h-auto">
//                             <img
//                                 src={productmain1}
//                                 alt="Albus Underlight Smart BLDC+ Ceiling Fan"
//                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                             />

//                               <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
//                                 <h3 className="text-[15px] font-[600]  leading-[20px]   px-[15px] mb-3">Albus Underlight Smart BLDC+ Ceiling Fan</h3>
//                                 <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
//                                     Shop Now
//                                 </button>
//                             </div>
//                               <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


import React, { useEffect, useState } from 'react'
import { ApiGet } from '../../helper/axios'

import productmain from "../../../public/images/home/pickyourCategory/image1.jpeg"
import productmain1 from "../../../public/images/home/pickyourCategory/image2.jpeg"
import productmain2 from "../../../public/images/home/pickyourCategory/image3.jpeg"
import productmain3 from "../../../public/images/home/pickyourCategory/image4.jpeg"

export default function FetureProduct() {
  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true
      ; (async () => {
        try {
          // TODO: change to your real endpoint
          const res = await ApiGet('/categories')
          const arr = Array.isArray(res?.data) ? res.data : []

          // normalize to { image, title }
          const normalized = arr.map((it, i) => ({
            image: it?.image || it?.banner || it?.img || '',
            title: it?.title || it?.name || `Category ${i + 1}`,
          }))

          if (mounted) setItems(normalized)
        } catch (e) {
          console.error('Fetch featured categories failed:', e)
          if (mounted) setItems([])
        }
      })()
    return () => { mounted = false }
  }, [])

  // fallback to your original visuals without changing layout
  const fallback = [
    { image: productmain, title: "Epic Pro BLDC+ Ceiling Fan" },
    { image: productmain1, title: "Elio BLDC+ Ceiling Fan" },
    { image: productmain2, title: "Crista BLDC+ Ceiling Fan" },
    { image: productmain3, title: "Stealth Neo BLDC+ Ceiling Fan" },
    { image: productmain1, title: "Albus Underlight Smart BLDC+ Ceiling Fan" },
  ]

  const data = (items?.length ? items : fallback).slice(0, 5)

  const big = data[0] || fallback[0]
  const small1 = data[1] || fallback[1]
  const small2 = data[2] || fallback[2]
  const small3 = data[3] || fallback[3]
  const small4 = data[4] || fallback[4]

  return (
    <>
      <section className=" w-[90%] mx-auto md11:px-4 ">
        <h2 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-6">
          Pick Your Perfect Match
        </h2>

        <div className=" flex flex-col md11:flex-row w-[100%] gap-[16px] justify-between h-[100%] ">
          {/* Epic Pro BLDC+ Ceiling Fan - Large Card */}
          <div className="  md11:w-[57%] 2xl:w-[53%]  shadow-xl md11:min-w-[690px] md11:min-h-[550px] 2xl:min-h-[700px]  h-[400px]  relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={big.image}
              alt={big.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute bottom-[-1px] z-10  pt-[20px] min-w-[400px] w-[100%] rounded-t-[10px]  text-white">
              <h3 className="text-2xl font-[600] px-[20px] md:text-2xl text-[17px] mb-3">
                {big.title}
              </h3>
              <button className="bg-[#ffffff] text-[15px]  text-[#025da8] px-5 py-2 rounded-tr-[10px] font-[500] transition-colors duration-300">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[310px] bg-gradient-to-t from-black/90 to-transparent" />
          </div>

          <div className='  flex  overflow-x-auto md11:overflow-hidden md11:grid grid-cols-2 w-[100%] md11:w-[43%] gap-[17px]'>

            <div className="relative rounded-2xl shadow-xl md11:w-[100%] w-[280px] md77:w-[320px]  flex-shrink-0 overflow-hidden group cursor-pointer h-auto">
              <img
                src={small1.image}
                alt={small1.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-[-1px] pt-[8px]   z-10 rounded-tr-[20px] w-[90%]  text-white">
                <h3 className="text-[15px] font-[600]  px-[18px] mb-3">
                  {small1.title}
                </h3>
                <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
            </div>

            {/* Crista BLDC+ Ceiling Fan */}
             <div className="relative rounded-2xl shadow-xl md11:w-[100%] w-[280px] md77:w-[320px]  flex-shrink-0 overflow-hidden group cursor-pointer h-auto">
              <img
                src={small2.image}
                alt={small2.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
                <h3 className="text-[15px] font-[600] mb-3 px-[15px]">
                  {small2.title}
                </h3>
                <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
            </div>

            {/* Stealth Neo BLDC+ Ceiling Fan */}
      <div className="relative rounded-2xl shadow-xl md11:w-[100%] w-[280px] md77:w-[320px]  flex-shrink-0 overflow-hidden group cursor-pointer h-auto">
              <img
                src={small3.image}
                alt={small3.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
                <h3 className="text-[15px] font-[600]  leading-[20px]  px-[15px]  mb-3">
                  {small3.title}
                </h3>
                <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
            </div>

            {/* Albus Underlight Smart BLDC+ Ceiling Fan */}
      <div className="relative rounded-2xl shadow-xl md11:w-[100%] w-[280px] md77:w-[320px]  flex-shrink-0 overflow-hidden group cursor-pointer h-auto">
              <img
                src={small4.image}
                alt={small4.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-[-1px] pt-[8px]  z-10 rounded-tr-[20px] w-[90%]  text-white">
                <h3 className="text-[15px] font-[600]  leading-[20px]   px-[15px] mb-3">
                  {small4.title}
                </h3>
                <button className="bg-[#ffffff] text-[14px]  text-[#025da8] px-4 py-2 rounded-tr-[15px] font-[500] transition-colors duration-300">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/90 to-transparent" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
